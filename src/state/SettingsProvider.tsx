import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Language, Theme } from '../types'
import { SettingsContext, type SettingsContextValue } from './settings-context'

/*
 * Keys used in localStorage. index.html reads the same keys before React
 * loads, so the first paint already has the right theme and direction.
 */
const THEME_KEY = 'prepflow-theme'
const LANGUAGE_KEY = 'prepflow-language'

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* Private mode or blocked storage: the choice simply is not remembered. */
  }
}

/** Saved choice first, otherwise follow the operating system. */
function initialTheme(): Theme {
  const saved = readStorage(THEME_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Saved choice first, otherwise Hebrew for Hebrew browsers, English for the rest. */
function initialLanguage(): Language {
  const saved = readStorage(LANGUAGE_KEY)
  if (saved === 'he' || saved === 'en') return saved
  return navigator.language.startsWith('he') ? 'he' : 'en'
}

/** Theme and language: remembered per device and applied to <html>. */
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [language, setLanguage] = useState<Language>(initialLanguage)

  // Theme: add or remove the "dark" class on <html>. Tailwind's dark: classes react to it.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    writeStorage(THEME_KEY, theme)
  }, [theme])

  // Language: set lang + dir on <html>. dir="rtl" flips the whole layout.
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr'
    writeStorage(LANGUAGE_KEY, language)
  }, [language])

  const value = useMemo<SettingsContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'he' ? 'en' : 'he')),
    }),
    [theme, language],
  )

  return <SettingsContext value={value}>{children}</SettingsContext>
}
