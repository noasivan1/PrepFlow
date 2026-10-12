import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import {
  ArrowLeft,
  BookMarked,
  Brain,
  Building2,
  CalendarDays,
  Clock,
  Code2,
  Eye,
  Flag,
  PartyPopper,
  Play,
  Repeat,
  RotateCcw,
  Shuffle,
  SlidersHorizontal,
  Sparkles,
  Timer,
  Trophy,
  UserRound,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { AiSuggestions } from '../components/AiSuggestions'
import { AnswerText } from '../components/AnswerText'
import { CodeSolutions } from '../components/CodeSolutions'
import { CompanyAvatar } from '../components/CompanyAvatar'
import { FlashcardModal } from '../components/FlashcardModal'
import { LastRatingBadge } from '../components/LastRatingBadge'
import { NotesEditor } from '../components/NotesEditor'
import { PageHeader } from '../components/PageHeader'
import { ProblemStatement } from '../components/ProblemStatement'
import { ConfidenceValue } from '../components/QuestionCard'
import { Badge } from '../components/ui/Badge'
import { Button, LinkButton } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { Field, Select } from '../components/ui/Field'
import { ProgressBar } from '../components/ui/ProgressBar'
import { GENERAL_PLAN_IDS, MAIN_PLAN_IDS, buildPracticeQueue, isPracticePlanId, predictQuestions, type Prediction } from '../data/practice'
import { getCompanies, getCompany, getRole, getTopicMap } from '../data/queries'
import { daysUntil, targetFocusTopics } from '../data/requirements'
import { useTranslation } from '../i18n/useTranslation'
import { cn, describeDays, formatDate, textDirection } from '../lib/utils'
import { DEFAULT_PRACTICE_PREFS, useUserData } from '../state/user-data-context'
import { usePracticeContext, type PracticeContext } from '../state/usePracticeContext'
import {
  LANGUAGE_TOPIC_IDS,
  PRACTICE_EMPHASES,
  PRACTICE_RATINGS,
  type FlashcardDraft,
  type LanguageTopicId,
  type LocalizedText,
  type PracticePlanId,
  type PracticePreferences,
  type PracticeQueue,
  type PracticeRating,
  type Question,
  type Role,
  type TargetInterview,
  type Topic,
} from '../types'

const planIcons: Record<PracticePlanId, LucideIcon> = {
  quick: Zap,
  standard: Clock,
  full: Trophy,
  review: Flag,
  predicted: Sparkles,
  general: Shuffle,
  coding: Code2,
  theory: Brain,
}

const planTints: Record<PracticePlanId, string> = {
  quick: 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300',
  standard: 'bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300',
  full: 'bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300',
  review: 'bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300',
  predicted: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300',
  general: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  coding: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300',
  theory: 'bg-teal-50 text-teal-600 dark:bg-teal-500/15 dark:text-teal-300',
}

const ratingTone: Record<PracticeRating, string> = {
  again: 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300',
  hard: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300',
  okay: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300',
  easy: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300',
}

const ratingHover: Record<PracticeRating, string> = {
  again: 'hover:bg-rose-100 dark:hover:bg-rose-500/20',
  hard: 'hover:bg-amber-100 dark:hover:bg-amber-500/20',
  okay: 'hover:bg-sky-100 dark:hover:bg-sky-500/20',
  easy: 'hover:bg-emerald-100 dark:hover:bg-emerald-500/20',
}

const chipBase =
  'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
const chipActive =
  'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500/60 dark:bg-brand-500/15 dark:text-brand-300'
const chipIdle =
  'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'

function formatElapsed(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function isDefaultPrefs(prefs: PracticePreferences): boolean {
  return prefs.languages.length === 0 && prefs.emphasis === 'balanced' && prefs.companyId === null
}

type Translate = ReturnType<typeof useTranslation>['t']
type Localize = ReturnType<typeof useTranslation>['localize']

/** "Tailored to: Python · Coding · NVIDIA", or null when nothing is set. */
function describePrefs(
  prefs: PracticePreferences,
  topics: Map<Topic['id'], Topic>,
  companyName: LocalizedText | null,
  localize: Localize,
  t: Translate,
): string | null {
  if (isDefaultPrefs(prefs)) return null
  const languages = prefs.languages
    .map((id) => topics.get(id))
    .filter((topic): topic is Topic => Boolean(topic))
    .map((topic) => localize(topic.name))
  const parts = [
    languages.length > 0 ? languages.join(', ') : t('prefs.anyLanguage'),
    prefs.emphasis !== 'balanced' ? t(`emphasis.${prefs.emphasis}`) : null,
    companyName ? localize(companyName) : null,
  ].filter((part): part is string => part !== null)
  return t('prefs.summary', { summary: parts.join(' · ') })
}

/** Builds a session from the practice context; the session freezes it on mount. */
function buildFromContext(context: PracticeContext, planId: PracticePlanId, seed: number): PracticeQueue {
  return buildPracticeQueue({
    roleId: context.roleId,
    planId,
    seed,
    prefs: context.prefs,
    interviews: context.interviews,
    latestRatings: context.latestRatings,
    boostTopicIds: context.boostTopicIds,
  })
}

// ---------- Next interview ----------

interface NextInterviewCardProps {
  target: TargetInterview | null
  /** An upcoming interview whose date passed recently, shown when nothing else is coming up. */
  pastTarget: TargetInterview | null
  topics: Map<Topic['id'], Topic>
}

function NextInterviewCard({ target, pastTarget, topics }: NextInterviewCardProps) {
  const { t, localize, language } = useTranslation()

  if (!target && pastTarget) {
    const pastCompany = pastTarget.companyId ? getCompany(pastTarget.companyId) : undefined
    return (
      <Card className="flex flex-col gap-4 border-amber-200 bg-amber-50/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:border-amber-500/30 dark:bg-amber-500/10">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
            <CalendarDays aria-hidden className="size-5" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('target.passedTitle')}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {t('target.passedHint', {
                company: pastCompany ? localize(pastCompany.name) : pastTarget.position || t('target.otherCompany'),
                when: describeDays(daysUntil(pastTarget.date), t),
              })}
            </p>
          </div>
        </div>
        <LinkButton to={`/interviews?log=${pastTarget.id}`} className="w-full sm:w-auto">
          {t('target.logIt')}
        </LinkButton>
      </Card>
    )
  }

  if (!target) {
    return (
      <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <CalendarDays aria-hidden className="size-5" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('target.next')}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('target.noneYetPractice')}</p>
          </div>
        </div>
        <LinkButton to="/interviews?add=target" variant="secondary" className="w-full sm:w-auto">
          <CalendarDays aria-hidden className="size-4" />
          {t('target.add')}
        </LinkButton>
      </Card>
    )
  }

  const company = target.companyId ? getCompany(target.companyId) : undefined
  const role = getRole(target.roleId)
  const focus = targetFocusTopics(target)
  const days = daysUntil(target.date)

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          {company ? (
            <CompanyAvatar company={company} />
          ) : (
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <Building2 aria-hidden className="size-5" />
            </div>
          )}
          <div className="min-w-0">
            <p className="text-[11px] font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('target.next')}</p>
            <h2 className="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">
              {company ? localize(company.name) : target.position || t('target.otherCompany')}
              {role && <span className="font-normal text-slate-500 dark:text-slate-400"> · {localize(role.name)}</span>}
            </h2>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300">
              <CalendarDays aria-hidden className="size-4 text-slate-400" />
              {formatDate(target.date, language)}
              <span className="font-medium text-brand-600 dark:text-brand-400">· {describeDays(days, t)}</span>
            </p>
            {target.position && company && (
              <p dir="auto" className="mt-0.5 text-sm text-slate-500 rtl:text-right dark:text-slate-400">
                {target.position}
              </p>
            )}
          </div>
        </div>
        <LinkButton to="/interviews" variant="secondary" size="sm" className="w-full sm:w-auto">
          {t('target.manage')}
        </LinkButton>
      </div>

      {focus.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {focus.map((id) => {
            const topic = topics.get(id)
            return topic ? (
              <Badge key={id} tone={topic.color}>
                {localize(topic.name)}
              </Badge>
            ) : null
          })}
        </div>
      )}
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t('target.tailored')}</p>
    </Card>
  )
}

// ---------- Questionnaire ----------

interface PreferencesCardProps {
  /** The effective preferences: the user's own choices with the next interview filling the gaps. */
  prefs: PracticePreferences
  /** What the user set explicitly; "Reset" appears when it is not the default. */
  saved: PracticePreferences
  fromTarget: PracticeContext['fromTarget']
  topics: Map<Topic['id'], Topic>
  onChange: (prefs: PracticePreferences) => void
}

function PreferencesCard({ prefs, saved, fromTarget, topics, onChange }: PreferencesCardProps) {
  const { t, localize } = useTranslation()
  const companies = useMemo(
    () => [...getCompanies()].sort((a, b) => localize(a.name).localeCompare(localize(b.name))),
    [localize],
  )

  const toggleLanguage = (id: LanguageTopicId) => {
    const languages = prefs.languages.includes(id)
      ? prefs.languages.filter((language) => language !== id)
      : [...prefs.languages, id]
    onChange({ ...prefs, languages })
  }

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
          <SlidersHorizontal aria-hidden className="size-4" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('prefs.title')}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('prefs.subtitle')}</p>
        </div>
        {!isDefaultPrefs(saved) && (
          <Button variant="ghost" size="sm" onClick={() => onChange(DEFAULT_PRACTICE_PREFS)}>
            {t('prefs.reset')}
          </Button>
        )}
      </div>
      {(fromTarget.languages || fromTarget.company) && (
        <p className="mt-3 rounded-xl bg-brand-50 px-3 py-2 text-xs text-brand-800 dark:bg-brand-500/10 dark:text-brand-200">
          {t('prefs.fromTarget')}
        </p>
      )}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <fieldset>
          <legend className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('prefs.languages')}</legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {LANGUAGE_TOPIC_IDS.map((id) => {
              const active = prefs.languages.includes(id)
              const topic = topics.get(id)
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleLanguage(id)}
                  className={cn(chipBase, active ? chipActive : chipIdle)}
                >
                  {topic ? localize(topic.name) : id}
                </button>
              )
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('prefs.emphasis')}</legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {PRACTICE_EMPHASES.map((emphasis) => {
              const active = prefs.emphasis === emphasis
              return (
                <button
                  key={emphasis}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onChange({ ...prefs, emphasis })}
                  className={cn(chipBase, active ? chipActive : chipIdle)}
                >
                  {t(`emphasis.${emphasis}`)}
                </button>
              )
            })}
          </div>
        </fieldset>

        <Field label={t('prefs.company')} htmlFor="prefs-company">
          <Select
            id="prefs-company"
            value={prefs.companyId ?? ''}
            onChange={(event) => onChange({ ...prefs, companyId: event.target.value || null })}
          >
            <option value="">{t('prefs.noCompany')}</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {localize(company.name)}
              </option>
            ))}
          </Select>
        </Field>
      </div>
    </Card>
  )
}

// ---------- Prediction ----------

interface PredictionCardProps {
  prediction: Prediction
  /** Human-readable "role · company" the prediction is based on. */
  context: string
  topics: Map<Topic['id'], Topic>
  onStart: () => void
}

function PredictionCard({ prediction, context, topics, onStart }: PredictionCardProps) {
  const { t, localize, language } = useTranslation()

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
            <Sparkles aria-hidden className="size-4" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('predicted.title')}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {context ? t('predicted.subtitle', { context }) : t('predicted.needContext')}
            </p>
          </div>
        </div>
        {prediction.questions.length > 0 && (
          <Button variant="secondary" onClick={onStart} className="w-full sm:w-auto">
            <Play aria-hidden className="size-4 fill-current" />
            {t('predicted.practice')}
          </Button>
        )}
      </div>

      <p className="mt-4 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs leading-relaxed text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
        {t('predicted.legend')}
      </p>

      {prediction.questions.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('predicted.empty')}</p>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-[3fr_2fr]">
          <ol className="min-w-0 divide-y divide-slate-100 dark:divide-slate-800">
            {prediction.questions.map(({ question, match }, index) => {
              const topic = topics.get(question.topicId)
              return (
                <li key={question.id} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {index + 1}
                  </span>
                  <Link
                    to={`/questions/${question.id}`}
                    dir={textDirection(question.custom, language)}
                    className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800 hover:text-brand-600 rtl:text-right dark:text-slate-200 dark:hover:text-brand-400"
                  >
                    {localize(question.text)}
                  </Link>
                  {topic && (
                    <Badge tone={topic.color} className="max-sm:hidden">
                      {localize(topic.name)}
                    </Badge>
                  )}
                  <Badge tone={match === 'high' ? 'emerald' : 'amber'} dot className="shrink-0">
                    {t(`predicted.match.${match}`)}
                  </Badge>
                </li>
              )
            })}
          </ol>

          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t('predicted.strengthen')}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('predicted.strengthenHint')}</p>
            <ul className="mt-3 space-y-2.5">
              {prediction.strengthen.map(({ topic, confidence }) => (
                <li key={topic.id} className="flex items-center justify-between gap-3">
                  <Badge tone={topic.color}>{localize(topic.name)}</Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <ConfidenceValue level={confidence} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  )
}

// ---------- Session picker ----------

interface PlanCardProps {
  queue: PracticeQueue
  role: Role | undefined
  topics: Map<Topic['id'], Topic>
  onStart: () => void
}

function PlanCard({ queue, role, topics, onStart }: PlanCardProps) {
  const { t, localize, plural } = useTranslation()
  const { plan, questions } = queue
  const Icon = planIcons[plan.id]
  const codingCount = questions.filter((question) => question.type === 'coding').length
  const openCount = questions.length - codingCount

  return (
    <Card className="flex flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className={cn('flex size-11 items-center justify-center rounded-xl', planTints[plan.id])}>
          <Icon aria-hidden className="size-5" />
        </div>
        <Badge>{t('practice.upTo', { count: plan.minutes })}</Badge>
      </div>

      <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{t(`plan.${plan.id}.name`)}</h2>
      <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {t(`plan.${plan.id}.description`)}
      </p>

      <dl className="mt-4 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <Code2 aria-hidden className="size-4 text-slate-400" />
          <dd>{t('practice.composition', { open: openCount, coding: codingCount })}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Timer aria-hidden className="size-4 text-slate-400" />
          <dd>{t('dashboard.minutes', { count: queue.estimatedMinutes })}</dd>
        </div>
      </dl>

      {role && plan.id !== 'review' && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {role.focusTopicIds.slice(0, 3).map((topicId) => {
            const topic = topics.get(topicId)
            return topic ? (
              <Badge key={topicId} tone={topic.color}>
                {localize(topic.name)}
              </Badge>
            ) : null
          })}
        </div>
      )}

      {queue.filledFromOtherRoles > 0 && (
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          {plural(queue.filledFromOtherRoles, 'practice.filledOne', 'practice.filled')}
        </p>
      )}

      <div className="mt-auto pt-5">
        <Button onClick={onStart} className="w-full" disabled={questions.length === 0}>
          <Play aria-hidden className="size-4 fill-current" />
          {t('practice.start')}
        </Button>
      </div>
    </Card>
  )
}

function PracticePicker({ onPick }: { onPick: (planId: PracticePlanId, seed: number) => void }) {
  const { t, localize } = useTranslation()
  const { practicePrefs, setPracticePrefs, flaggedIds, pastTargets } = useUserData()
  const context = usePracticeContext()
  // A fresh draw on every visit; starting a plan carries this seed, so the session is exactly the one previewed.
  const [seed] = useState(() => Math.floor(Math.random() * 2 ** 31))
  const role = context.roleId ? getRole(context.roleId) : undefined
  // An interview that passed in the last two weeks is worth logging while it is fresh.
  const recentPast = pastTargets.find((target) => daysUntil(target.date) >= -14) ?? null
  const company = context.prefs.companyId ? getCompany(context.prefs.companyId) : undefined
  const topics = useMemo(() => getTopicMap(), [])

  // The review plan only shows up once something has been flagged.
  const planIds = useMemo<PracticePlanId[]>(
    () => (flaggedIds.length > 0 ? [...MAIN_PLAN_IDS, 'review'] : MAIN_PLAN_IDS),
    [flaggedIds.length],
  )
  const queues = useMemo(() => planIds.map((planId) => buildFromContext(context, planId, seed)), [planIds, context, seed])
  const generalQueues = useMemo(() => GENERAL_PLAN_IDS.map((planId) => buildFromContext(context, planId, seed)), [context, seed])
  const prediction = useMemo(
    () =>
      predictQuestions({
        roleId: context.roleId,
        prefs: context.prefs,
        interviews: context.interviews,
        latestRatings: context.latestRatings,
        boostTopicIds: context.boostTopicIds,
      }),
    [context],
  )
  const predictionContext = [role ? localize(role.name) : null, company ? localize(company.name) : null]
    .filter((part): part is string => Boolean(part))
    .join(' · ')

  // One line that says how the sessions are tailored, shown only when something is set.
  const summary = describePrefs(context.prefs, topics, company?.name ?? null, localize, t)

  const description = context.nextTarget
    ? t('practice.pickSubtitleTarget', { target: predictionContext || formatDate(context.nextTarget.date, 'en') })
    : role
      ? t('practice.pickSubtitle', { role: localize(role.name) })
      : t('practice.pickSubtitleNoRole')

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('practice.title')}
        description={description}
        action={
          <LinkButton to="/start" variant="secondary" className="w-full sm:w-auto">
            <UserRound aria-hidden className="size-4 text-brand-600 dark:text-brand-400" />
            {role ? localize(role.name) : t('role.choose')}
          </LinkButton>
        }
      />

      <NextInterviewCard target={context.nextTarget} pastTarget={recentPast} topics={topics} />

      <PreferencesCard
        prefs={context.prefs}
        saved={practicePrefs}
        fromTarget={context.fromTarget}
        topics={topics}
        onChange={setPracticePrefs}
      />

      {summary && <p className="text-sm font-medium text-brand-700 dark:text-brand-300">{summary}</p>}

      <PredictionCard
        prediction={prediction}
        context={predictionContext}
        topics={topics}
        onStart={() => onPick('predicted', seed)}
      />

      <AiSuggestions context={context} />

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t('practice.sessionsTitle')}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {t('practice.sessionsHint')}
          {queues[0] && <> {t('practice.poolSize', { count: queues[0].poolSize })}</>}
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {queues.map((queue) => (
            <PlanCard key={queue.plan.id} queue={queue} role={role} topics={topics} onStart={() => onPick(queue.plan.id, seed)} />
          ))}
        </div>
      </section>

      {/* Not tied to the interview: the whole bank, for breadth or a LeetCode drill. */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t('practice.generalTitle')}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('practice.generalHint')}</p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {generalQueues.map((queue) => (
            <PlanCard key={queue.plan.id} queue={queue} role={role} topics={topics} onStart={() => onPick(queue.plan.id, seed)} />
          ))}
        </div>
      </section>
    </div>
  )
}

// ---------- Running session ----------

interface PracticeSessionProps {
  planId: PracticePlanId
  seed: number
  onExit: () => void
  /** Same plan, new draw. */
  onNewSet: () => void
}

function PracticeSession({ planId, seed, onExit, onNewSet }: PracticeSessionProps) {
  const { t, localize, language } = useTranslation()
  const { addRating, addCard, notes } = useUserData()
  const context = usePracticeContext()

  // Built once per mount: ratings given during the session must not reorder it.
  const [queue] = useState<PracticeQueue>(() => buildFromContext(context, planId, seed))
  const topics = useMemo(() => getTopicMap(), [])
  const { questions, plan } = queue

  const [index, setIndex] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)
  const [ratings, setRatings] = useState<PracticeRating[]>([])
  const [elapsed, setElapsed] = useState(0)
  const [cardOpen, setCardOpen] = useState(false)

  const total = questions.length
  const current: Question | undefined = questions[index]
  const isRunning = index < total

  // Simple stopwatch that stops when the session is complete.
  useEffect(() => {
    if (!isRunning) return
    const id = window.setInterval(() => setElapsed((seconds) => seconds + 1), 1000)
    return () => window.clearInterval(id)
  }, [isRunning])

  const rate = (rating: PracticeRating) => {
    const question = questions[index]
    if (question) addRating(question.id, rating) // persisted: feeds "needs review" and future ordering
    setRatings((previous) => [...previous, rating])
    setIsRevealed(false)
    setIndex((previous) => previous + 1)
  }

  const restart = () => {
    setIndex(0)
    setIsRevealed(false)
    setRatings([])
    setElapsed(0)
  }

  const exitButton = (
    <button
      type="button"
      onClick={onExit}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
    >
      <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
      {t('practice.exit')}
    </button>
  )

  if (total === 0) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        {exitButton}
        <EmptyState
          icon={<Brain aria-hidden className="size-6" />}
          title={t('practice.emptyTitle')}
          description={t('practice.emptyHint')}
          action={<LinkButton to="/interviews">{t('interviews.add')}</LinkButton>}
        />
      </div>
    )
  }

  if (!current) {
    return (
      <div className="mx-auto max-w-2xl">
        <Card className="p-8 text-center sm:p-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            <PartyPopper aria-hidden className="size-8" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
            {t('practice.complete')}
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{t('practice.completeHint', { count: total })}</p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500 tabular-nums dark:text-slate-400">
            <Timer aria-hidden className="size-4" />
            {formatElapsed(elapsed)}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PRACTICE_RATINGS.map((rating) => (
              <div key={rating} className={cn('rounded-xl border px-3 py-3', ratingTone[rating])}>
                <dd className="text-2xl font-bold tabular-nums">{ratings.filter((r) => r === rating).length}</dd>
                <dt className="text-xs font-medium">{t(`rating.${rating}`)}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
            <LinkButton to="/" variant="secondary">
              {t('practice.backToDashboard')}
            </LinkButton>
            <Button variant="secondary" onClick={onExit}>
              {t('practice.chooseAnother')}
            </Button>
            <Button onClick={restart}>
              <RotateCcw aria-hidden className="size-4" />
              {t('practice.again')}
            </Button>
            <Button variant="secondary" onClick={onNewSet}>
              <Shuffle aria-hidden className="size-4" />
              {t('practice.newSet')}
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  const topic = topics.get(current.topicId)
  const progress = (index / total) * 100
  const isCoding = current.type === 'coding'
  const title = localize(current.text)
  const askedLabel =
    current.timesAsked === 1 ? t('common.askedOnce') : t('common.askedTimes', { count: current.timesAsked })

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        {exitButton}
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
              {t(`plan.${plan.id}.name`)}
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {t('practice.progress', { current: index + 1, total })}
            </p>
          </div>
          <div className="text-end">
            <p className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 tabular-nums dark:text-slate-300">
              <Timer aria-hidden className="size-4 text-slate-400" />
              {formatElapsed(elapsed)}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {t('dashboard.minutes', { count: queue.estimatedMinutes })}
            </p>
          </div>
        </div>
        <ProgressBar value={progress} className="mt-3" label={t('practice.progressLabel')} />
      </div>

      <Card className="p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-1.5">
          {topic && <Badge tone={topic.color}>{localize(topic.name)}</Badge>}
          <Badge tone={isCoding ? 'indigo' : 'slate'}>{t(`type.${current.type}`)}</Badge>
          <LastRatingBadge questionId={current.id} />
          <span className="ms-auto inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Repeat aria-hidden className="size-3.5" />
            {askedLabel}
          </span>
        </div>

        {/* Long titles step down one size so they read as a title, not a wall of text. */}
        <h2
          dir={textDirection(current.custom, language)}
          className={cn(
            'mt-5 leading-tight font-semibold tracking-tight text-slate-900 rtl:text-right dark:text-slate-100',
            title.length > 80 ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl',
          )}
        >
          {title}
        </h2>

        {current.details && (
          <div className="mt-5">
            <ProblemStatement details={current.details} />
          </div>
        )}

        {isRevealed ? (
          <div className="mt-6 animate-fade-in">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t('question.answer')}
            </p>
            {current.answer ? (
              <AnswerText
                text={localize(current.answer)}
                dir={textDirection(current.custom, language)}
                className="mt-2 rounded-xl border border-slate-100 bg-slate-50 p-4 text-[15px] leading-relaxed text-slate-700 sm:p-5 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
              />
            ) : (
              <p className="mt-2 rounded-xl border border-slate-100 bg-slate-50 p-4 text-[15px] text-slate-500 sm:p-5 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
                {t('question.noAnswer')}
              </p>
            )}

            {current.codeSolutions && current.codeSolutions.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                  {t('question.solutions')}
                </p>
                <div className="mt-2">
                  <CodeSolutions snippets={current.codeSolutions} preferred={queue.preferredLanguage} />
                </div>
              </div>
            )}

            {current.codeExamples && current.codeExamples.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                  {t('question.examples')}
                </p>
                <div className="mt-2">
                  <CodeSolutions snippets={current.codeExamples} preferred={queue.preferredLanguage} />
                </div>
              </div>
            )}

            <div className="mt-5">
              <NotesEditor questionId={current.id} compact />
              <div className="mt-2 flex justify-end">
                <Button variant="ghost" size="sm" onClick={() => setCardOpen(true)}>
                  <BookMarked aria-hidden className="size-4" />
                  {t('study.addFromQuestion')}
                </Button>
              </div>
            </div>

            <p className="mt-6 text-sm font-medium text-slate-700 dark:text-slate-300">{t('practice.howWell')}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {PRACTICE_RATINGS.map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => rate(rating)}
                  className={cn(
                    'rounded-xl border px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
                    ratingTone[rating],
                    ratingHover[rating],
                  )}
                >
                  {t(`rating.${rating}`)}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => setIsRevealed(true)}>
              <Eye aria-hidden className="size-4" />
              {t('practice.reveal')}
            </Button>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              {isCoding ? t('practice.codingHint') : t('practice.hint')}
            </p>
          </div>
        )}
      </Card>

      <FlashcardModal
        open={cardOpen}
        onClose={() => setCardOpen(false)}
        initial={{
          kind: isCoding ? 'mistake' : 'remember',
          front: title,
          back: notes[current.id] ?? '',
          questionId: current.id,
        }}
        onSave={async (draft: FlashcardDraft) => {
          await addCard(draft)
        }}
      />
    </div>
  )
}

// ---------- Page ----------

const newSeed = () => Math.floor(Math.random() * 2 ** 31)

export function PracticePage() {
  const { roleId, nextTarget } = useUserData()
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('plan')
  const planId = isPracticePlanId(requested) ? requested : null
  // Deep links (the dashboard's "Start practice") arrive without a seed: draw one for this visit.
  const [fallbackSeed] = useState(newSeed)
  const seedParam = Number(searchParams.get('seed'))
  const seed = Number.isInteger(seedParam) && seedParam > 0 ? seedParam : fallbackSeed

  if (!planId) {
    return <PracticePicker onPick={(id, pickedSeed) => setSearchParams({ plan: id, seed: String(pickedSeed) })} />
  }

  // The key remounts the session with a fresh queue whenever the role, target, plan or seed changes.
  return (
    <PracticeSession
      key={`${nextTarget?.id ?? roleId ?? 'all'}-${planId}-${seed}`}
      planId={planId}
      seed={seed}
      onExit={() => setSearchParams({})}
      onNewSet={() => setSearchParams({ plan: planId, seed: String(newSeed()) })}
    />
  )
}
