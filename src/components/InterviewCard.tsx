import { CalendarDays, ChevronRight, MessageSquare } from 'lucide-react'
import type { BadgeTone, Interview, InterviewStatus } from '../types'
import { getCompany, getRole } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { formatDate } from '../lib/utils'
import { CompanyAvatar } from './CompanyAvatar'
import { Badge } from './ui/Badge'
import { CardLink } from './ui/Card'

const statusTone: Record<InterviewStatus, BadgeTone> = {
  scheduled: 'sky',
  awaiting: 'amber',
  passed: 'emerald',
  rejected: 'rose',
}

/** Coloured pill showing where the process stands (scheduled / awaiting / passed / rejected). */
export function InterviewStatusBadge({ status }: { status: InterviewStatus }) {
  const { t } = useTranslation()
  return (
    <Badge tone={statusTone[status]} dot title={t('interview.status')}>
      {t(`status.${status}`)}
    </Badge>
  )
}

/**
 * Marks the built-in interviews. Demo data says "Sample"; an interview built from
 * questions the user reported says "Reported by you", so it is never mistaken for an invention.
 */
export function SampleBadge({ reported }: { reported?: boolean }) {
  const { t } = useTranslation()
  if (reported) {
    return (
      <Badge tone="emerald" title={t('interview.reportedHint')}>
        {t('interview.reported')}
      </Badge>
    )
  }
  return (
    <Badge tone="slate" title={t('interview.sampleHint')}>
      {t('interview.sample')}
    </Badge>
  )
}

export function InterviewCard({ interview }: { interview: Interview }) {
  const { t, localize, plural, language } = useTranslation()
  const company = getCompany(interview.companyId)
  const role = getRole(interview.roleId)
  const count = interview.questionIds.length

  return (
    <CardLink to={`/interviews/${interview.id}`} className="flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {company && <CompanyAvatar company={company} />}
          <div className="min-w-0">
            <h3 className="truncate font-semibold text-slate-900 dark:text-slate-100">
              {company ? localize(company.name) : interview.companyId}
            </h3>
            <p dir="auto" className="truncate text-sm text-slate-500 rtl:text-right dark:text-slate-400">
              {localize(interview.position)}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <InterviewStatusBadge status={interview.status} />
          {interview.sample && <SampleBadge reported={interview.reported} />}
        </div>
      </div>

      {/* Labelled fields instead of bare badges, so each value is self-explanatory. */}
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-xs text-slate-500 dark:text-slate-400">{t('interview.role')}</dt>
          <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">
            {role ? localize(role.name) : interview.roleId}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500 dark:text-slate-400">{t('interview.stage')}</dt>
          <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">{t(`stage.${interview.stage}`)}</dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <CalendarDays aria-hidden className="size-4" />
            {formatDate(interview.date, language)}
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <MessageSquare aria-hidden className="size-4" />
            {count === 0 ? t('common.noQuestionsYet') : plural(count, 'common.question', 'common.questions')}
          </span>
        </div>
        <ChevronRight aria-hidden className="size-4 shrink-0 text-slate-300 rtl:-scale-x-100 dark:text-slate-600" />
      </div>
    </CardLink>
  )
}
