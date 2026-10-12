import { useMemo, type ReactNode } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Clock,
  Flag,
  Flame,
  Layers,
  MessageSquare,
  Play,
  Repeat,
  Target,
  UserRound,
} from 'lucide-react'
import { LastRatingBadge } from '../components/LastRatingBadge'
import { LinkButton } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { buildPracticeQueue } from '../data/practice'
import { getCompany, getQuestionsByIds, getRole, getTopicMap } from '../data/queries'
import { daysUntil } from '../data/requirements'
import { computeDashboardSummary } from '../data/summary'
import { useTranslation } from '../i18n/useTranslation'
import { cn, describeDays, formatDate, getGreetingKey, textDirection } from '../lib/utils'
import { usePracticeContext } from '../state/usePracticeContext'
import { useUserData } from '../state/user-data-context'

interface StatCardProps {
  icon: ReactNode
  tint: string
  value: number
  label: string
  to: string
}

function StatCard({ icon, tint, value, label, to }: StatCardProps) {
  return (
    <Link
      to={to}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
    >
      <div className={cn('flex size-9 items-center justify-center rounded-xl', tint)}>{icon}</div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">{value}</p>
      <p className="text-xs font-medium text-slate-500 sm:text-sm dark:text-slate-400">{label}</p>
    </Link>
  )
}

interface SectionHeadingProps {
  icon: ReactNode
  tint: string
  title: string
  subtitle: string
}

function SectionHeading({ icon, tint, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={cn('flex size-9 shrink-0 items-center justify-center rounded-xl', tint)}>{icon}</div>
      <div>
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
  )
}

const inlineLink =
  'inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300'

export function DashboardPage() {
  const { t, localize, plural, language } = useTranslation()
  const { roleId, flaggedIds, ratings, pastTargets } = useUserData()
  const context = usePracticeContext()
  const summary = useMemo(
    () =>
      computeDashboardSummary({
        interviews: context.interviews,
        ratings,
        latestRatings: context.latestRatings,
        roleId: context.roleId,
      }),
    [context, ratings],
  )
  const topics = useMemo(() => getTopicMap(), [])
  const role = roleId ? getRole(roleId) : undefined
  const nextTarget = context.nextTarget
  const targetCompany = nextTarget?.companyId ? getCompany(nextTarget.companyId) : undefined
  // With nothing upcoming, an interview that just passed gets a nudge to log what was asked.
  const recentPast = nextTarget ? null : (pastTargets.find((target) => daysUntil(target.date) >= -14) ?? null)
  const recentPastCompany = recentPast?.companyId ? getCompany(recentPast.companyId) : undefined

  // The dashboard card is the "quick warm-up" session for the next interview (or the chosen role).
  const quick = useMemo(
    () =>
      buildPracticeQueue({
        roleId: context.roleId,
        planId: 'quick',
        prefs: context.prefs,
        interviews: context.interviews,
        latestRatings: context.latestRatings,
        boostTopicIds: context.boostTopicIds,
      }),
    [context],
  )
  const reviewCount = quick.questions.length
  const reviewMinutes = quick.estimatedMinutes

  // Questions the user flagged as "didn't know" or "hard", most recent first.
  const flaggedQuestions = useMemo(() => getQuestionsByIds([...flaggedIds].reverse()).slice(0, 5), [flaggedIds])

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
            {t(getGreetingKey())} 👋
          </h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">{t('dashboard.ready')}</p>
          <Link
            to="/start"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700"
          >
            <UserRound aria-hidden className="size-4 text-brand-600 dark:text-brand-400" />
            <span>
              {t('role.preparingFor')}: <span className="font-semibold">{role ? localize(role.name) : t('role.choose')}</span>
            </span>
            <span className="text-xs font-medium text-brand-600 dark:text-brand-400">{t('role.change')}</span>
          </Link>
          {nextTarget && (
            <Link
              to="/interviews"
              className="mt-2 ms-0 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800 transition-colors hover:border-emerald-300 sm:ms-2 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
            >
              <CalendarDays aria-hidden className="size-4" />
              <span>
                {t('target.next')}:{' '}
                <span className="font-semibold">
                  {targetCompany ? localize(targetCompany.name) : nextTarget.position || t('target.otherCompany')}
                </span>{' '}
                · {formatDate(nextTarget.date, language)} · {describeDays(daysUntil(nextTarget.date), t)}
              </span>
            </Link>
          )}
          {recentPast && (
            <Link
              to={`/interviews?log=${recentPast.id}`}
              className="mt-2 ms-0 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm text-amber-800 transition-colors hover:border-amber-300 sm:ms-2 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300"
            >
              <CalendarDays aria-hidden className="size-4" />
              <span>
                {t('target.passedChip', {
                  company: recentPastCompany ? localize(recentPastCompany.name) : recentPast.position || t('target.otherCompany'),
                })}
              </span>
              <span className="text-xs font-medium">{t('target.logIt')}</span>
            </Link>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
          <Flame aria-hidden className="size-4 text-amber-500" />
          {t('streak.days', { count: summary.streakDays })}
        </span>
      </section>

      {/* Today's review */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 via-brand-600 to-violet-600 p-6 text-white shadow-lg shadow-brand-600/20 sm:p-8">
        <div aria-hidden className="absolute -end-12 -top-12 size-48 rounded-full bg-white/10" />
        <div aria-hidden className="absolute end-24 -bottom-20 size-44 rounded-full bg-white/5" />

        <div className="relative">
          <p className="text-xs font-semibold tracking-wider text-white/75 uppercase">{t('dashboard.todaysReview')}</p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <p className="text-4xl font-bold tracking-tight sm:text-5xl">
              {reviewCount}{' '}
              <span className="text-xl font-medium text-white/90 sm:text-2xl">{t('dashboard.questionsUnit')}</span>
            </p>
            <p className="inline-flex items-center gap-1.5 text-white/85">
              <Clock aria-hidden className="size-4" />
              {t('dashboard.minutes', { count: reviewMinutes })}
            </p>
          </div>
          <p className="mt-3 max-w-md text-sm text-white/80">{t('dashboard.reviewHint')}</p>
          <LinkButton to="/practice?plan=quick" variant="white" size="lg" className="mt-6 w-full sm:w-auto">
            <Play aria-hidden className="size-4 fill-current" />
            {t('dashboard.startPractice')}
          </LinkButton>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-3 sm:gap-4">
        <StatCard
          icon={<Briefcase aria-hidden className="size-4" />}
          tint="bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300"
          value={summary.totals.interviews}
          label={t('dashboard.interviews')}
          to="/interviews"
        />
        <StatCard
          icon={<MessageSquare aria-hidden className="size-4" />}
          tint="bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300"
          value={summary.totals.questions}
          label={t('dashboard.questions')}
          to="/questions"
        />
        <StatCard
          icon={<Layers aria-hidden className="size-4" />}
          tint="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
          value={summary.totals.topics}
          label={t('dashboard.topics')}
          to="/questions"
        />
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Needs review: flagged by the user during practice */}
        <Card className="flex flex-col p-5 sm:p-6">
          <SectionHeading
            icon={<Flag aria-hidden className="size-4" />}
            tint="bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300"
            title={t('review.title')}
            subtitle={t('review.subtitle')}
          />
          {flaggedQuestions.length > 0 ? (
            <>
              <ul className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
                {flaggedQuestions.map((question) => (
                  <li key={question.id} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                    <Link
                      to={`/questions/${question.id}`}
                      dir={textDirection(question.custom, language)}
                      className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800 hover:text-brand-600 rtl:text-right dark:text-slate-200 dark:hover:text-brand-400"
                    >
                      {localize(question.text)}
                    </Link>
                    <LastRatingBadge questionId={question.id} />
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {plural(flaggedIds.length, 'review.countOne', 'review.count')}
                </span>
                <LinkButton to="/practice?plan=review" size="sm">
                  <Play aria-hidden className="size-3.5 fill-current" />
                  {t('plan.review.name')}
                </LinkButton>
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t('review.empty')}</p>
          )}
        </Card>

        {/* Needs attention: weakest topics */}
        <Card className="p-5 sm:p-6">
          <SectionHeading
            icon={<Target aria-hidden className="size-4" />}
            tint="bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300"
            title={t('dashboard.needsAttention')}
            subtitle={t('dashboard.needsAttentionHint')}
          />
          {summary.needsAttention.length === 0 ? (
            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t('dashboard.needsAttentionEmpty')}</p>
          ) : (
          <ul className="mt-5 space-y-4">
            {summary.needsAttention.map((item) => {
              const topic = topics.get(item.topicId)
              return (
                <li key={item.topicId}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {topic ? localize(topic.name) : item.topicId}
                    </span>
                    <span className="font-semibold text-slate-600 tabular-nums dark:text-slate-300">{item.mastery}%</span>
                  </div>
                  <ProgressBar value={item.mastery} tone="auto" className="mt-2" label={item.topicId} />
                </li>
              )
            })}
          </ul>
          )}
          <Link to="/practice" className={cn(inlineLink, 'mt-5')}>
            {t('dashboard.practiceThese')}
            <ArrowRight aria-hidden className="size-4 rtl:-scale-x-100" />
          </Link>
        </Card>
      </section>

      {/* Frequently asked */}
      <Card className="p-5 sm:p-6">
        <SectionHeading
          icon={<Repeat aria-hidden className="size-4" />}
          tint="bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300"
          title={t('dashboard.frequentlyAsked')}
          subtitle={t('dashboard.frequentlyAskedHint')}
        />
        <ol className="mt-5 grid grid-cols-1 gap-x-8 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 dark:divide-slate-800">
          {summary.frequentlyAsked.map((item, index) => (
            <li key={item.questionId} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 sm:py-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {index + 1}
              </span>
              <Link
                to={`/questions/${item.questionId}`}
                className="flex-1 truncate text-sm font-medium text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400"
              >
                {localize(item.label)}
              </Link>
              <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
                {t('dashboard.askedTimesShort', { count: item.timesAsked })}
              </span>
            </li>
          ))}
        </ol>
        <Link to="/questions" className={cn(inlineLink, 'mt-5')}>
          {t('dashboard.browseBank')}
          <ArrowRight aria-hidden className="size-4 rtl:-scale-x-100" />
        </Link>
      </Card>
    </div>
  )
}
