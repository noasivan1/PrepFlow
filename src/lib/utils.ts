import type { Language } from '../types'

/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

const MONTHS: Record<Language, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  he: [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ],
}

/** Formats an ISO date (`YYYY-MM-DD`) as `3 Sep 2026` or `3 בספטמבר 2026`. */
export function formatDate(iso: string, language: Language): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (!year || !month || !day) return iso
  const monthName = MONTHS[language][month - 1]
  return language === 'he' ? `${day} ב${monthName} ${year}` : `${day} ${monthName} ${year}`
}

/** Today's date as an ISO date string in local time. */
export function todayIso(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

export type GreetingKey = 'dashboard.morning' | 'dashboard.afternoon' | 'dashboard.evening'

export function getGreetingKey(date = new Date()): GreetingKey {
  const hour = date.getHours()
  if (hour < 12) return 'dashboard.morning'
  if (hour < 18) return 'dashboard.afternoon'
  return 'dashboard.evening'
}

/** "Check Point" -> "CP", "NVIDIA" -> "N", "אלביט מערכות" -> "אמ" */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}

type RelativeDayKey = 'target.today' | 'target.tomorrow' | 'target.yesterday' | 'target.inDays' | 'target.daysAgo'

/** "in 5 days" / "tomorrow" / "today" / "yesterday" / "3 days ago", from a day difference. */
export function describeDays(
  days: number,
  t: (key: RelativeDayKey, params?: Record<string, string | number>) => string,
): string {
  if (days === 0) return t('target.today')
  if (days === 1) return t('target.tomorrow')
  if (days === -1) return t('target.yesterday')
  if (days > 1) return t('target.inDays', { count: days })
  return t('target.daysAgo', { count: -days })
}

export type TextDirection = 'auto' | 'rtl' | 'ltr'

/**
 * Direction for content text. Seed content exists in both languages, so the UI
 * language decides (a Hebrew answer that opens with "O(log n)" must still be
 * laid out right-to-left). Text the user typed exists in one language only,
 * so the browser detects it.
 */
export function textDirection(userTyped: boolean | undefined, language: Language): TextDirection {
  if (userTyped) return 'auto'
  return language === 'he' ? 'rtl' : 'ltr'
}
