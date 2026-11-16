import { useSyncExternalStore } from 'react'

/**
 * How code boxes look on this device: wrapped or scrolling lines, and the font
 * size. One shared setting, so zooming one box zooms them all, and it survives
 * reloads. On a phone, wrapping is the default: long lines otherwise need
 * sideways scrolling inside a narrow box.
 */
export interface CodeView {
  wrap: boolean
  fontSize: number
}

export const CODE_FONT_MIN = 10
export const CODE_FONT_MAX = 20
const STORAGE_KEY = 'prepflow.codeView'

function defaults(): CodeView {
  const narrow = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 640px)').matches
  return { wrap: Boolean(narrow), fontSize: narrow ? 12 : 13 }
}

function read(): CodeView {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') as Partial<CodeView> | null
    if (stored && typeof stored === 'object') {
      const base = defaults()
      return {
        wrap: typeof stored.wrap === 'boolean' ? stored.wrap : base.wrap,
        fontSize:
          typeof stored.fontSize === 'number' ? Math.min(CODE_FONT_MAX, Math.max(CODE_FONT_MIN, stored.fontSize)) : base.fontSize,
      }
    }
  } catch {
    // Private mode or a broken value: fall back to the defaults.
  }
  return defaults()
}

let current: CodeView | null = null
const listeners = new Set<() => void>()

function snapshot(): CodeView {
  current ??= read()
  return current
}

export function setCodeView(change: Partial<CodeView>) {
  const next = { ...snapshot(), ...change }
  next.fontSize = Math.min(CODE_FONT_MAX, Math.max(CODE_FONT_MIN, next.fontSize))
  current = next
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Not stored; still applies until the page reloads.
  }
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useCodeView(): CodeView {
  return useSyncExternalStore(subscribe, snapshot, snapshot)
}
