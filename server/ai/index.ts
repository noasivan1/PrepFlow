import { anthropicProvider } from './anthropic.ts'
import { geminiProvider } from './gemini.ts'
import { AiNotConfiguredError, isConfigured, type ProviderName, type TextProvider } from './provider.ts'
import { stubProvider } from './stub.ts'

export { AiNotConfiguredError } from './provider.ts'
export { evaluateAnswer, type EvaluateInput } from './evaluate.ts'
export { generateQuestions, type GenerateInput } from './questions.ts'

/**
 * Picks the provider for a feature: the preferred vendor when its key is set,
 * otherwise any other configured vendor, otherwise "not configured".
 * `PREPFLOW_AI=stub|fail` short-circuits everything for development and tests.
 */
export function getProvider(prefer: ProviderName): TextProvider {
  const mode = process.env.PREPFLOW_AI
  if (mode === 'stub' || mode === 'fail') return stubProvider(mode)
  const order: ProviderName[] = prefer === 'gemini' ? ['gemini', 'anthropic'] : ['anthropic', 'gemini']
  for (const name of order) {
    if (!isConfigured(name)) continue
    return name === 'gemini' ? geminiProvider(process.env.GEMINI_API_KEY ?? '') : anthropicProvider(process.env.ANTHROPIC_API_KEY ?? '')
  }
  throw new AiNotConfiguredError()
}
