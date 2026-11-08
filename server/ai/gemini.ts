import { AiBusyError, type CompletionRequest, type TextProvider } from './provider.ts'

const DEFAULT_MODEL = 'gemini-3.8-flash'
/** Tried in order, best first, when a model is overloaded (503), rate limited (429) or silent. */
const FALLBACK_MODELS = ['gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-3.5-flash-lite']
const RETRYABLE_STATUSES = new Set([429, 503])
const RETRY_DELAY_MS = 1500
/** A same-model retry only pays off after a quick refusal; a slow one means the model is struggling. */
const QUICK_FAILURE_MS = 5_000
/**
 * Budget for one completion, all model attempts included. Vercel stops the function at 60 s
 * (vercel.json), and the route still has to read and write the database around the call.
 */
const TOTAL_BUDGET_MS = 50_000
/** With less time than this left, another attempt cannot finish. */
const MIN_ATTEMPT_MS = 3_000
/** Pause before going over all the models again; demand spikes often pass within seconds. */
const ROUND_DELAY_MS = 4_000
/** A model that failed is tried last for this long, so the next calls go straight to one that answers. */
const COOLDOWN_MS = 5 * 60_000

/** Shared by every provider instance of this process (one warm serverless instance, or the local server). */
const unavailableUntil = new Map<string, number>()

class GeminiHttpError extends Error {
  readonly status: number

  constructor(status: number, body: string) {
    super(`Gemini API ${status}: ${body.slice(0, 500)}`)
    this.status = status
  }
}

/**
 * How long one model gets to answer: about 20 s for grading an answer (3000 tokens) and 40 s
 * for generating questions (8000 tokens), never more than the time left in the budget.
 */
function attemptTimeout(maxTokens: number, remaining: number): number {
  return Math.min(8_000 + maxTokens * 4, 40_000, remaining)
}

function isTimeout(error: unknown): boolean {
  const name = (error as { name?: unknown } | null)?.name
  return name === 'TimeoutError' || name === 'AbortError'
}

/** Overloaded, rate limited or silent: worth trying another model. Anything else (bad key, blocked prompt, unknown model) is final. */
function isTransient(error: unknown): boolean {
  return (error instanceof GeminiHttpError && RETRYABLE_STATUSES.has(error.status)) || isTimeout(error)
}

const seconds = (ms: number) => `${(ms / 1000).toFixed(1)} s`
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** Gemini Developer API (generateContent). The key travels in a header, never in the URL or the client. */
export function geminiProvider(apiKey: string): TextProvider {
  const model = process.env.GEMINI_MODEL ?? DEFAULT_MODEL
  const candidates = [model, ...FALLBACK_MODELS.filter((name) => name !== model)]

  async function generate(target: string, { system, prompt, maxTokens, json }: CompletionRequest, timeoutMs: number): Promise<string> {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${target}:generateContent`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: maxTokens,
          ...(json ? { responseMimeType: 'application/json' } : {}),
        },
      }),
      signal: AbortSignal.timeout(timeoutMs),
    })
    if (!response.ok) throw new GeminiHttpError(response.status, await response.text())
    const data = (await response.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> }; finishReason?: string }>
      promptFeedback?: { blockReason?: string }
    }
    if (data.promptFeedback?.blockReason) throw new Error(`Gemini blocked the prompt: ${data.promptFeedback.blockReason}`)
    const text = (data.candidates?.[0]?.content?.parts ?? []).map((part) => part.text ?? '').join('')
    if (!text.trim()) throw new Error('Gemini returned an empty reply')
    return text
  }

  return {
    name: 'gemini',
    model,
    /**
     * Google answers 503 "high demand" for spells on one model or several, and sometimes a model
     * never answers. Each attempt gets a short timeout; the configured model gets one retry after
     * a quick refusal; then the fallbacks are tried in order. If every model refused, the whole
     * round repeats after a short pause, as long as the budget allows. Models that failed go to
     * the back of the line for a while, so the following calls start with one that answered.
     */
    async complete(request: CompletionRequest): Promise<string> {
      const deadline = Date.now() + TOTAL_BUDGET_MS
      const timeLeft = () => deadline - Date.now()
      const cooled = (name: string) => (unavailableUntil.get(name) ?? 0) > Date.now()
      const order = [...candidates].sort((a, b) => Number(cooled(a)) - Number(cooled(b)))
      let lastError: unknown

      for (let round = 0; timeLeft() >= MIN_ATTEMPT_MS; round += 1) {
        if (round > 0) {
          if (timeLeft() < ROUND_DELAY_MS + MIN_ATTEMPT_MS) break
          console.warn(`Gemini: every model refused; waiting ${ROUND_DELAY_MS / 1000} s before another round`)
          await delay(ROUND_DELAY_MS)
        }
        for (const target of order) {
          for (let attempt = 0; attempt < 2 && timeLeft() >= MIN_ATTEMPT_MS; attempt += 1) {
            const started = Date.now()
            try {
              const text = await generate(target, request, attemptTimeout(request.maxTokens, timeLeft()))
              unavailableUntil.delete(target)
              return text
            } catch (error) {
              if (!isTransient(error)) throw error
              lastError = error
              const elapsed = Date.now() - started
              const reason = isTimeout(error)
                ? `gave no answer in ${seconds(elapsed)}`
                : `answered ${(error as GeminiHttpError).status} after ${seconds(elapsed)}`
              // Only the configured model gets a second try, and only after a quick refusal in the first round.
              if (round === 0 && attempt === 0 && target === model && !isTimeout(error) && elapsed < QUICK_FAILURE_MS) {
                console.warn(`Gemini ${target} ${reason}; retrying`)
                await delay(RETRY_DELAY_MS)
                continue
              }
              unavailableUntil.set(target, Date.now() + COOLDOWN_MS)
              console.warn(`Gemini ${target} ${reason}; trying the next model`)
              break
            }
          }
        }
      }
      console.warn(`Gemini: giving up after ${seconds(TOTAL_BUDGET_MS - timeLeft())}; failed models are tried last for ${COOLDOWN_MS / 60_000} min`)
      throw new AiBusyError(lastError)
    },
  }
}
