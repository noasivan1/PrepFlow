import { useCallback, useMemo } from 'react'
import type { LocalizedText } from '../types'
import { useSettings } from '../state/settings-context'
import { translations, type TranslationKey } from './translations'

type Params = Record<string, string | number>

/** Replaces {name} placeholders with the given values. */
function interpolate(template: string, params?: Params): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  )
}

/**
 * The one hook components use for text.
 *
 *   const { t, localize } = useTranslation()
 *   t('nav.dashboard')                    -> "Dashboard" / "דשבורד"
 *   t('common.questions', { count: 6 })   -> "6 questions" / "6 שאלות"
 *   localize(topic.name)                  -> the name in the current language
 */
export function useTranslation() {
  const { language } = useSettings()
  const dictionary = translations[language]

  const t = useCallback(
    (key: TranslationKey, params?: Params) => interpolate(dictionary[key], params),
    [dictionary],
  )

  const localize = useCallback((text: LocalizedText) => text[language], [language])

  /** Picks the singular or plural key based on the count. */
  const plural = useCallback(
    (count: number, one: TranslationKey, many: TranslationKey) =>
      count === 1 ? interpolate(dictionary[one]) : interpolate(dictionary[many], { count }),
    [dictionary],
  )

  return useMemo(
    () => ({ t, localize, plural, language, isRtl: language === 'he' }),
    [t, localize, plural, language],
  )
}
