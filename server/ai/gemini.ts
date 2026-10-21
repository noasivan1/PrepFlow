import type { CompletionRequest, TextProvider } from './provider.ts'

const DEFAULT_MODEL = 'gemini-3.8-flash'
/** Tried in order when the configured model is overloaded (503) or rate limited (429). */
const FALLBACK_MODELS = ['gemini-3.7-flash', 'gemini-3.5-flash']
const RETRYABLE_STATUSES = new Set([429, 503])
const RETRY_DELAY_MS = 1500

class GeminiHttpError extends Error {
  readonly status: number

  constructor(status: number, body: string) {
    super(`Gemini API ${status}: ${body.slice(0, 500)}`)
    this.status = status
  }
}

/** Gemini Developer API (generateContent). The key travels in a header, never in the URL or the client. */
export function geminiProvider(apiKey: string): TextProvider {
  const model = process.env.GEMINI_MODEL ?? DEFAULT_MODEL
  const candidates = [model, ...FALLBACK_MODELS.filter((name) => name !== model)]

  async function generate(target: string, { system, prompt, maxTokens, json }: CompletionRequest): Promise<string> {
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
      signal: AbortSignal.timeout(90_000),
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
     * Google answers 503 "high demand" for short spells on a single model. The configured
     * model gets one retry after a short pause; after that the fallbacks are tried in order.
     * Any other failure (bad key, blocked prompt, unknown model) is reported immediately.
     */
    async complete(request: CompletionRequest): Promise<string> {
      let lastError: unknown
      for (const [index, target] of candidates.entries()) {
        const tries = index === 0 ? 2 : 1
        for (let attempt = 0; attempt < tries; attempt += 1) {
          try {
            return await generate(target, request)
          } catch (error) {
            if (!(error instanceof GeminiHttpError) || !RETRYABLE_STATUSES.has(error.status)) throw error
            lastError = error
            console.warn(`Gemini ${target} answered ${error.status}; ${attempt + 1 < tries ? 'retrying' : 'trying the next model'}`)
            if (attempt + 1 < tries) await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS))
          }
        }
      }
      throw lastError
    },
  }
}
