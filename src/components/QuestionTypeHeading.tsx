import { Bug, Code2, Lightbulb, Network } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import type { QuestionType } from '../types'

const ICONS: Record<QuestionType, LucideIcon> = {
  coding: Code2,
  conceptual: Lightbulb,
  'system-design': Network,
  troubleshooting: Bug,
}

const TONES: Record<QuestionType, string> = {
  coding: 'text-indigo-600 dark:text-indigo-300',
  conceptual: 'text-slate-500 dark:text-slate-400',
  'system-design': 'text-sky-600 dark:text-sky-300',
  troubleshooting: 'text-amber-600 dark:text-amber-300',
}

/**
 * The line above a question's title that says what kind of question it is,
 * so a coding question reads as one before the first word of the statement.
 */
export function QuestionTypeHeading({ type, className }: { type: QuestionType; className?: string }) {
  const { t } = useTranslation()
  const Icon = ICONS[type]
  return (
    <p className={cn('flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-semibold', TONES[type], className)}>
      <span className="inline-flex items-center gap-1.5">
        <Icon aria-hidden className="size-4" />
        {t(`typeHeading.${type}`)}
      </span>
      {type === 'coding' && <span className="font-normal text-slate-500 dark:text-slate-400">{t('typeHeading.codingSub')}</span>}
    </p>
  )
}
