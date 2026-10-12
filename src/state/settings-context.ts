import { createContext, useContext } from 'react'
import type { Language, Theme } from '../types'

/** Device preferences: how the app looks on this browser. Account data lives in UserDataProvider. */
export interface SettingsContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

export const SettingsContext = createContext<SettingsContextValue | null>(null)

export function useSettings(): SettingsContextValue {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used inside <SettingsProvider>')
  }
  return context
}
