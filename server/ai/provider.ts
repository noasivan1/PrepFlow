/**
 * The one seam between PrepFlow and language-model vendors. Features
 * (`questions.ts`, `evaluate.ts`) build a prompt and parse the reply; a
 * provider only turns a prompt into text. Which provider runs is decided here
 * from the environment, so swapping vendors never touches routes or UI.
 *
 * Keys are read server-side only: GEMINI_API_KEY, ANTHROPIC_API_KEY.
 * PREPFLOW_AI=stub answers with canned text (development, tests);
 * PREPFLOW_AI=fail throws, to exercise error handling.
 */

export interface CompletionRequest {
  system: string
  prompt: string
  maxTokens: number
  /** Ask the model for a JSON document (the parser still validates it). */
  json?: boolean
}

export interface TextProvider {
  /** Short id for logs and the UI ("gemini", "anthropic", "stub"). */
  name: string
  model: string
  complete(request: CompletionRequest): Promise<string>
}

export type ProviderName = 'gemini' | 'anthropic'

export class AiNotConfiguredError extends Error {
  constructor() {
    super('No AI provider is configured (set GEMINI_API_KEY or ANTHROPIC_API_KEY)')
  }
}

export function isConfigured(name: ProviderName): boolean {
  return name === 'gemini' ? Boolean(process.env.GEMINI_API_KEY) : Boolean(process.env.ANTHROPIC_API_KEY)
}

/** Pulls the first JSON object or array out of a model reply, tolerating prose or code fences around it. */
export function extractJson(text: string, kind: 'object' | 'array'): unknown {
  const open = kind === 'array' ? '[' : '{'
  const close = kind === 'array' ? ']' : '}'
  const start = text.indexOf(open)
  const end = text.lastIndexOf(close)
  if (start < 0 || end <= start) throw new Error(`The model did not return a JSON ${kind}`)
  return JSON.parse(text.slice(start, end + 1)) as unknown
}
