import type { CompletionRequest, TextProvider } from './provider.ts'

/** Anthropic Messages API. */
export function anthropicProvider(apiKey: string): TextProvider {
  const model = process.env.PREPFLOW_AI_MODEL ?? 'claude-sonnet-5'
  return {
    name: 'anthropic',
    model,
    async complete({ system, prompt, maxTokens }: CompletionRequest): Promise<string> {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({
          model,
          max_tokens: maxTokens,
          system,
          messages: [{ role: 'user', content: prompt }],
        }),
        signal: AbortSignal.timeout(90_000),
      })
      if (!response.ok) throw new Error(`Anthropic API ${response.status}: ${(await response.text()).slice(0, 500)}`)
      const data = (await response.json()) as { content?: Array<{ type: string; text?: string }> }
      return (data.content ?? [])
        .filter((block) => block.type === 'text')
        .map((block) => block.text ?? '')
        .join('')
    },
  }
}
