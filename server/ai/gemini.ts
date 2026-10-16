import type { CompletionRequest, TextProvider } from './provider.ts'

/** Gemini Developer API (generateContent). The key travels in a header, never in the URL or the client. */
export function geminiProvider(apiKey: string): TextProvider {
  const model = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash'
  return {
    name: 'gemini',
    model,
    async complete({ system, prompt, maxTokens, json }: CompletionRequest): Promise<string> {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
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
      if (!response.ok) throw new Error(`Gemini API ${response.status}: ${(await response.text()).slice(0, 500)}`)
      const data = (await response.json()) as {
        candidates?: Array<{ content?: { parts?: Array<{ text?: string }> }; finishReason?: string }>
        promptFeedback?: { blockReason?: string }
      }
      if (data.promptFeedback?.blockReason) throw new Error(`Gemini blocked the prompt: ${data.promptFeedback.blockReason}`)
      const text = (data.candidates?.[0]?.content?.parts ?? []).map((part) => part.text ?? '').join('')
      if (!text.trim()) throw new Error('Gemini returned an empty reply')
      return text
    },
  }
}
