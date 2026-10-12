import { Code2, Repeat } from 'lucide-react'
import type { Confidence, Difficulty, Question, Topic } from '../types'
import { ratedConfidence } from '../data/practice'
import { useTranslation } from '../i18n/useTranslation'
import { cn, textDirection } from '../lib/utils'
import { useUserData } from '../state/user-data-context'
import { LastRatingBadge } from './LastRatingBadge'
import { Badge } from './ui/Badge'
import { CardLink } from './ui/Card'

const difficultyDot: Record<Difficulty, string> = {
  easy: 'bg-emerald-500',
  medium: 'bg-amber-500',
  hard: 'bg-rose-500',
}

const confidenceMeter: Record<Confidence, { bars: number; color: string }> = {
  low: { bars: 1, color: 'bg-rose-500' },
  medium: { bars: 2, color: 'bg-amber-500' },
  high: { bars: 3, color: 'bg-emerald-500' },
}

const barHeights = ['h-1.5', 'h-2.5', 'h-3.5']

/** Three little signal bars, filled according to confidence. */
export function ConfidenceMeter({ level }: { level: Confidence }) {
  const { bars, color } = confidenceMeter[level]
  return (
    <span aria-hidden className="inline-flex items-end gap-0.5">
      {barHeights.map((height, index) => (
        <span
          key={height}
          className={cn('w-1 rounded-sm', height, index < bars ? color : 'bg-slate-200 dark:bg-slate-700')}
        />
      ))}
    </span>
  )
}

/** "Confidence: Low" from the user's latest rating, or "Not practised yet" when there is none. */
export function ConfidenceValue({ level }: { level: Confidence | null }) {
  const { t } = useTranslation()
  if (!level) return <span className="text-slate-400 dark:text-slate-500">{t('confidence.unrated')}</span>
  return (
    <>
      <ConfidenceMeter level={level} />
      {t(`confidence.${level}`)}
    </>
  )
}

interface QuestionCardProps {
  question: Question
  topic?: Topic
  className?: string
}

export function QuestionCard({ question, topic, className }: QuestionCardProps) {
  const { t, localize, language } = useTranslation()
  const { latestRatings } = useUserData()
  const askedLabel =
    question.timesAsked === 1 ? t('common.askedOnce') : t('common.askedTimes', { count: question.timesAsked })

  return (
    <CardLink to={`/questions/${question.id}`} className={cn('block p-4 sm:p-5', className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {topic && <Badge tone={topic.color}>{localize(topic.name)}</Badge>}
          <Badge>{t(`type.${question.type}`)}</Badge>
          {question.custom && <Badge tone="violet">{t('question.mine')}</Badge>}
          {question.generated && <Badge tone="sky">{t('ai.badge')}</Badge>}
          {question.codeSolutions && question.codeSolutions.length > 0 && (
            <Badge tone="indigo">
              <Code2 aria-hidden className="size-3" />
              {question.codeSolutions.length}
            </Badge>
          )}
          <LastRatingBadge questionId={question.id} />
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <Repeat aria-hidden className="size-3.5" />
          {askedLabel}
        </span>
      </div>

      {/* Seed content follows the UI language; text the user typed is detected by the browser. */}
      <p dir={textDirection(question.custom, language)} className="mt-3 font-medium leading-snug text-slate-900 rtl:text-right dark:text-slate-100">
        {localize(question.text)}
      </p>

      <dl className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <dt>{t('question.difficulty')}</dt>
          <dd className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
            <span aria-hidden className={cn('size-1.5 rounded-full', difficultyDot[question.difficulty])} />
            {t(`difficulty.${question.difficulty}`)}
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt>{t('question.confidence')}</dt>
          <dd className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
            <ConfidenceValue level={ratedConfidence(question, latestRatings)} />
          </dd>
        </div>
      </dl>
    </CardLink>
  )
}
