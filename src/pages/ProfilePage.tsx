import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import {
  BookOpen,
  Brain,
  CheckCircle2,
  Flame,
  Layers,
  LogOut,
  MonitorSmartphone,
  NotebookPen,
  Sparkles,
  Target,
  XCircle,
} from 'lucide-react'
import { ApiError, api } from '../api/client'
import { Button, LinkButton } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Field, Input } from '../components/ui/Field'
import { PasswordInput } from '../components/ui/PasswordInput'
import { getRole } from '../data/queries'
import { computeProfileStats, type DayActivity } from '../data/profile-stats'
import type { TranslationKey } from '../i18n/translations'
import { useTranslation } from '../i18n/useTranslation'
import { cn, firstName, formatDate } from '../lib/utils'
import { useAuth } from '../state/auth-context'
import { useSettings } from '../state/settings-context'
import { useUserData } from '../state/user-data-context'
import type { User } from '../types'

type Status = { kind: 'ok' | 'error'; key: TranslationKey } | null

function StatusLine({ status }: { status: Status }) {
  const { t } = useTranslation()
  if (!status) return null
  return (
    <p
      role={status.kind === 'error' ? 'alert' : 'status'}
      className={cn(
        'text-sm',
        status.kind === 'ok' ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400',
      )}
    >
      {t(status.key)}
    </p>
  )
}

function Section({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <Card className="p-5 sm:p-6">
      <h2 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      {hint && <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{hint}</p>}
      <div className="mt-4">{children}</div>
    </Card>
  )
}

function StatTile({ icon, tint, value, label }: { icon: ReactNode; tint: string; value: ReactNode; label: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3.5 dark:border-slate-800">
      <div className={cn('flex size-8 items-center justify-center rounded-lg', tint)}>{icon}</div>
      <p className="mt-2.5 text-2xl font-bold tracking-tight text-slate-900 tabular-nums dark:text-slate-100">{value}</p>
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  )
}

/** Seven small bars, one per day, today last. */
function WeekChart({ days }: { days: DayActivity[] }) {
  const { language } = useTranslation()
  const max = Math.max(1, ...days.map((day) => day.count))
  const weekday = new Intl.DateTimeFormat(language === 'he' ? 'he-IL' : 'en-US', { weekday: 'short' })
  return (
    <div className="grid grid-cols-7 items-end gap-2" dir="ltr">
      {days.map((day, index) => {
        const [year, month, date] = day.date.split('-').map(Number)
        const isToday = index === days.length - 1
        return (
          <div key={day.date} className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-medium text-slate-500 tabular-nums dark:text-slate-400">{day.count || ''}</span>
            <div className="flex h-20 w-full items-end justify-center">
              <div
                className={cn(
                  'w-full max-w-8 rounded-md',
                  day.count ? (isToday ? 'bg-brand-600' : 'bg-brand-400 dark:bg-brand-500') : 'bg-slate-100 dark:bg-slate-800',
                )}
                style={{ height: day.count ? `${Math.max(12, (day.count / max) * 100)}%` : '6px' }}
              />
            </div>
            <span className={cn('text-[11px]', isToday ? 'font-semibold text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400')}>
              {weekday.format(new Date(year, month - 1, date))}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function ActivitySection() {
  const { t } = useTranslation()
  const { ratings, latestRatings, attemptSummaries, cards, notes, userQuestions, userInterviews } = useUserData()
  const stats = useMemo(
    () => computeProfileStats(ratings, latestRatings, Object.values(attemptSummaries)),
    [ratings, latestRatings, attemptSummaries],
  )
  const counters: Array<{ icon: ReactNode; label: string; value: number; to: string }> = [
    { icon: <Layers aria-hidden className="size-4" />, label: t('profile.cards'), value: cards.length, to: '/study' },
    { icon: <NotebookPen aria-hidden className="size-4" />, label: t('profile.notes'), value: Object.keys(notes).length, to: '/questions' },
    { icon: <BookOpen aria-hidden className="size-4" />, label: t('profile.myQuestions'), value: userQuestions.length, to: '/questions' },
    { icon: <Target aria-hidden className="size-4" />, label: t('profile.loggedInterviews'), value: userInterviews.length, to: '/interviews' },
  ]

  return (
    <Section title={t('profile.activity')} hint={t('profile.activityHint')}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile
          icon={<Brain aria-hidden className="size-4" />}
          tint="bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300"
          value={stats.practisedQuestions}
          label={t('profile.practised')}
        />
        <StatTile
          icon={<CheckCircle2 aria-hidden className="size-4" />}
          tint="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
          value={stats.knew}
          label={t('profile.knew')}
        />
        <StatTile
          icon={<XCircle aria-hidden className="size-4" />}
          tint="bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300"
          value={stats.didNotKnow}
          label={t('profile.didNotKnow')}
        />
        <StatTile
          icon={<Flame aria-hidden className="size-4" />}
          tint="bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300"
          value={stats.streak}
          label={t('profile.streak')}
        />
      </div>

      {stats.didNotKnow > 0 && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-rose-50/70 px-3.5 py-2.5 text-sm text-rose-800 dark:bg-rose-500/10 dark:text-rose-200">
          <span>{t('profile.reviewHint', { count: stats.didNotKnow })}</span>
          <Link to="/practice?plan=review" className="font-medium underline-offset-2 hover:underline">
            {t('profile.reviewFlagged')}
          </Link>
        </div>
      )}

      <div className="mt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('profile.lastWeek')}</h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">{t('profile.weekTotal', { count: stats.weekTotal })}</span>
        </div>
        <div className="mt-3">
          <WeekChart days={stats.lastWeek} />
        </div>
        <ul className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-400">
          <li>{t('profile.activeDays', { count: stats.activeDaysThisMonth })}</li>
          <li>{t('profile.bestStreak', { count: stats.bestStreak })}</li>
          <li>{t('profile.totalAnswers', { count: stats.totalAnswers })}</li>
          {stats.averageScore !== null && (
            <li className="inline-flex items-center gap-1.5">
              <Sparkles aria-hidden className="size-3.5 text-brand-500" />
              {t('profile.checks', { count: stats.checkedAnswers, score: stats.averageScore })}
            </li>
          )}
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {counters.map((counter) => (
          <Link
            key={counter.label}
            to={counter.to}
            className="flex items-center gap-2.5 rounded-xl border border-slate-200 px-3 py-2.5 text-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
          >
            <span className="text-slate-400">{counter.icon}</span>
            <span className="min-w-0 flex-1 truncate text-slate-600 dark:text-slate-400">{counter.label}</span>
            <span className="font-semibold text-slate-900 tabular-nums dark:text-slate-100">{counter.value}</span>
          </Link>
        ))}
      </div>
    </Section>
  )
}

function DetailsSection({ user }: { user: User }) {
  const { t } = useTranslation()
  const { updateUser } = useAuth()
  const [name, setName] = useState(user.name)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<Status>(null)

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBusy(true)
    setStatus(null)
    try {
      const data = await api.put<{ user: User }>('/api/me/profile', { name })
      updateUser(data.user)
      setStatus({ kind: 'ok', key: 'profile.saved' })
    } catch (error) {
      setStatus({
        kind: 'error',
        key: error instanceof ApiError && error.code === 'invalid_name' ? 'auth.error.invalid_name' : 'profile.error.generic',
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <Section title={t('profile.details')}>
      <form onSubmit={save} className="space-y-4">
        <Field label={t('profile.name')} htmlFor="profile-name" hint={t('profile.nameHint')}>
          <Input id="profile-name" value={name} maxLength={80} autoComplete="name" onChange={(event) => setName(event.target.value)} />
        </Field>
        <Field label={t('auth.email')} htmlFor="profile-email" hint={t('profile.emailHint')}>
          <Input id="profile-email" value={user.email} readOnly dir="ltr" className="bg-slate-50 text-slate-500 dark:bg-slate-800/60" />
        </Field>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={busy || !name.trim() || name.trim() === user.name}>
            {t('profile.save')}
          </Button>
          <StatusLine status={status} />
        </div>
      </form>
    </Section>
  )
}

function SecuritySection() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [again, setAgain] = useState('')
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<Status>(null)
  const [sessions, setSessions] = useState<number | null>(null)
  const [sessionsStatus, setSessionsStatus] = useState<Status>(null)

  const loadSessions = () => {
    api
      .get<{ activeSessions: number }>('/api/me/account')
      .then((data) => setSessions(data.activeSessions))
      .catch(() => setSessions(null))
  }
  useEffect(loadSessions, [])

  const changePassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(null)
    if (next.length < 8) return setStatus({ kind: 'error', key: 'auth.error.weak_password' })
    if (next !== again) return setStatus({ kind: 'error', key: 'profile.error.mismatch' })
    setBusy(true)
    try {
      await api.post('/api/me/password', { currentPassword: current, newPassword: next })
      setCurrent('')
      setNext('')
      setAgain('')
      setStatus({ kind: 'ok', key: 'profile.passwordChanged' })
      loadSessions()
    } catch (error) {
      const code = error instanceof ApiError ? error.code : ''
      setStatus({
        kind: 'error',
        key: code === 'wrong_password' ? 'profile.error.wrong_password' : code === 'weak_password' ? 'auth.error.weak_password' : 'profile.error.generic',
      })
    } finally {
      setBusy(false)
    }
  }

  const signOutOthers = async () => {
    setSessionsStatus(null)
    try {
      await api.post('/api/me/sessions/sign-out-others')
      setSessionsStatus({ kind: 'ok', key: 'profile.signedOutOthers' })
      loadSessions()
    } catch {
      setSessionsStatus({ kind: 'error', key: 'profile.error.generic' })
    }
  }

  return (
    <Section title={t('profile.security')}>
      <form onSubmit={changePassword} className="space-y-4">
        {/* Lets password managers tie the new password to the account. */}
        <input type="text" name="username" autoComplete="username" hidden readOnly />
        <Field label={t('profile.currentPassword')} htmlFor="current-password">
          <PasswordInput id="current-password" value={current} autoComplete="current-password" required onChange={(event) => setCurrent(event.target.value)} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t('profile.newPassword')} htmlFor="new-password" hint={t('auth.passwordHint')}>
            <PasswordInput id="new-password" value={next} autoComplete="new-password" required onChange={(event) => setNext(event.target.value)} />
          </Field>
          <Field label={t('profile.confirmPassword')} htmlFor="confirm-password">
            <PasswordInput id="confirm-password" value={again} autoComplete="new-password" required onChange={(event) => setAgain(event.target.value)} />
          </Field>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={busy || !current || !next || !again}>
            {t('profile.changePassword')}
          </Button>
          <StatusLine status={status} />
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">{t('profile.forgotHint')}</p>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <MonitorSmartphone aria-hidden className="size-5 text-slate-400" />
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{t('profile.devices')}</p>
            {sessions !== null && <p className="text-xs text-slate-500 dark:text-slate-400">{t('profile.devicesCount', { count: sessions })}</p>}
          </div>
        </div>
        <Button variant="secondary" size="sm" onClick={() => void signOutOthers()} disabled={sessions !== null && sessions <= 1}>
          {t('profile.signOutOthers')}
        </Button>
      </div>
      <div className="mt-2">
        <StatusLine status={sessionsStatus} />
      </div>
    </Section>
  )
}

function PreferencesSection() {
  const { t, localize } = useTranslation()
  const { theme, setTheme, language, setLanguage } = useSettings()
  const { roleId } = useUserData()
  const role = roleId ? getRole(roleId) : undefined

  const choice = (active: boolean) =>
    cn(
      'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
      active
        ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-slate-100'
        : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
    )
  const row = 'flex flex-wrap items-center justify-between gap-3 py-3'

  return (
    <Section title={t('profile.preferences')}>
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        <div className={row}>
          <span className="text-sm text-slate-700 dark:text-slate-300">{t('role.preparingFor')}</span>
          <Link to="/start" className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">
            {role ? localize(role.name) : t('role.choose')} · {t('role.change')}
          </Link>
        </div>
        <div className={row}>
          <span className="text-sm text-slate-700 dark:text-slate-300">{t('profile.language')}</span>
          <div className="flex gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <button type="button" className={choice(language === 'he')} aria-pressed={language === 'he'} onClick={() => setLanguage('he')}>
              עברית
            </button>
            <button type="button" className={choice(language === 'en')} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>
              English
            </button>
          </div>
        </div>
        <div className={row}>
          <span className="text-sm text-slate-700 dark:text-slate-300">{t('profile.theme')}</span>
          <div className="flex gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <button type="button" className={choice(theme === 'light')} aria-pressed={theme === 'light'} onClick={() => setTheme('light')}>
              {t('profile.themeLight')}
            </button>
            <button type="button" className={choice(theme === 'dark')} aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}>
              {t('profile.themeDark')}
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

/** The account: who you are, how practice is going, and the usual account settings. */
export function ProfilePage() {
  const { t, language } = useTranslation()
  const { user, logout } = useAuth()
  if (!user) return null
  const shown = firstName(user.name, user.email)

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <section className="flex flex-wrap items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold text-white shadow-sm shadow-brand-600/30">
          {shown.charAt(0).toUpperCase() || '?'}
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{user.name || shown}</h1>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">
            <span dir="ltr">{user.email}</span>
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {t('profile.memberSince', { date: formatDate(user.createdAt.slice(0, 10), language) })}
          </p>
        </div>
      </section>

      <ActivitySection />
      <DetailsSection user={user} />
      <SecuritySection />
      <PreferencesSection />

      {/* Sign-out sits at the start: the floating assistant button covers the end corner on a phone. */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button variant="secondary" onClick={() => void logout()}>
          <LogOut aria-hidden className="size-4 rtl:-scale-x-100" />
          {t('auth.logout')}
        </Button>
        {user.role === 'admin' && (
          <LinkButton to="/admin" variant="ghost" size="sm">
            {t('nav.admin')}
          </LinkButton>
        )}
      </div>
    </div>
  )
}
