import type { BadgeTone, Company } from '../types'
import { useTranslation } from '../i18n/useTranslation'
import { cn, initials } from '../lib/utils'

const tones: Record<BadgeTone, string> = {
  slate: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
  pink: 'bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300',
}

interface CompanyAvatarProps {
  company: Company
  size?: 'md' | 'lg'
}

/** Coloured square with the company's initials, in the current language. */
export function CompanyAvatar({ company, size = 'md' }: CompanyAvatarProps) {
  const { localize } = useTranslation()
  return (
    <div
      aria-hidden
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl font-semibold',
        size === 'lg' ? 'size-14 text-lg' : 'size-11 text-sm',
        tones[company.color],
      )}
    >
      {initials(localize(company.name))}
    </div>
  )
}
