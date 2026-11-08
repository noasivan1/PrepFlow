import { useEffect, useState, type ReactNode } from 'react'
import { api } from '../../api/client'
import { Card } from '../../components/ui/Card'
import type { TranslationKey } from '../../i18n/translations'
import { useTranslation } from '../../i18n/useTranslation'
import { QuestionTitle } from './QuestionTitle'
import type { AdminStats } from './types'

function Stat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <Card className="p-4">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight text-slate-900 dark:text-slate-100">{value}</p>
    </Card>
  )
}

function QuestionList({ title, hint, children }: { title: string; hint: string; children: ReactNode }) {
  return (
    <Card className="p-5">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>
      <div className="mt-4">{children}</div>
    </Card>
  )
}

/** How the site is used: totals, the last week, and the questions people struggle with. */
export function AdminStatsTab() {
  const { t } = useTranslation()
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    api
      .get<AdminStats>('/api/admin/stats')
      .then(setStats)
      .catch(() => setError(true))
  }, [])

  if (error) return <p className="text-sm text-rose-600 dark:text-rose-300">{t('auth.error.generic')}</p>
  if (!stats) return <p className="text-sm text-slate-500 dark:text-slate-400">…</p>

  const totals: Array<{ key: keyof AdminStats['totals']; labelKey: TranslationKey }> = [
    { key: 'users', labelKey: 'admin.statUsers' },
    { key: 'interviews', labelKey: 'admin.statInterviews' },
    { key: 'ratings', labelKey: 'admin.statRatings' },
    { key: 'attempts', labelKey: 'admin.statAttempts' },
    { key: 'cards', labelKey: 'admin.statCards' },
    { key: 'notes', labelKey: 'admin.statNotes' },
  ]

  const empty = <p className="text-sm text-slate-500 dark:text-slate-400">{t('admin.notEnoughData')}</p>
  const row = 'flex flex-wrap items-center justify-between gap-2 py-2 text-sm'

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('admin.totals')}</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {totals.map((item) => (
            <Stat key={item.key} label={t(item.labelKey)} value={stats.totals[item.key]} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('admin.lastWeek')}</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label={t('admin.statActiveUsers')} value={stats.lastWeek.activeUsers} />
          <Stat label={t('admin.statRatings')} value={stats.lastWeek.ratings} />
          <Stat label={t('admin.statAttempts')} value={stats.lastWeek.attempts} />
          <Stat label={t('admin.averageScore')} value={stats.averageScore === null ? '–' : `${stats.averageScore}%`} />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <QuestionList title={t('admin.hardestQuestions')} hint={t('admin.hardestHint')}>
          {stats.hardestQuestions.length === 0
            ? empty
            : stats.hardestQuestions.map((item) => (
                <div key={item.questionId} className={row}>
                  <span className="min-w-0 flex-1 text-slate-800 dark:text-slate-200">
                    <QuestionTitle id={item.questionId} />
                  </span>
                  <span className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
                    {t('admin.struggleLine', { struggled: item.struggled, total: item.ratings, users: item.users })}
                  </span>
                </div>
              ))}
        </QuestionList>

        <QuestionList title={t('admin.lowestScores')} hint={t('admin.lowestHint')}>
          {stats.lowestScores.length === 0
            ? empty
            : stats.lowestScores.map((item) => (
                <div key={item.questionId} className={row}>
                  <span className="min-w-0 flex-1 text-slate-800 dark:text-slate-200">
                    <QuestionTitle id={item.questionId} />
                  </span>
                  <span className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
                    {t('admin.scoreLine', { attempts: item.attempts, score: item.averageScore })}
                  </span>
                </div>
              ))}
        </QuestionList>

        <QuestionList title={t('admin.mostPractised')} hint={t('admin.mostPractisedHint')}>
          {stats.mostPractised.length === 0
            ? empty
            : stats.mostPractised.map((item) => (
                <div key={item.questionId} className={row}>
                  <span className="min-w-0 flex-1 text-slate-800 dark:text-slate-200">
                    <QuestionTitle id={item.questionId} />
                  </span>
                  <span className="text-xs text-slate-500 tabular-nums dark:text-slate-400">
                    {t('admin.struggleLine', { struggled: item.struggled, total: item.ratings, users: item.users })}
                  </span>
                </div>
              ))}
        </QuestionList>
      </div>
    </div>
  )
}
