import { useEffect, useState, useMemo } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import {
  BookMarked,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Flame,
  Languages,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Moon,
  ShieldCheck,
  Sun,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { askAssistant, type AssistantMessage } from '../assistant/assistant'
import { AssistantPanel } from '../components/AssistantPanel'
import { getRole } from '../data/queries'
import { computeStreak } from '../data/summary'
import type { TranslationKey } from '../i18n/translations'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import { useAuth } from '../state/auth-context'
import { useCatalog } from '../state/catalog-context'
import { useSettings } from '../state/settings-context'
import { useUserData } from '../state/user-data-context'

interface NavItem {
  to: string
  labelKey: TranslationKey
  /** Shorter label for the mobile bottom bar. */
  shortLabelKey?: TranslationKey
  icon: LucideIcon
  end?: boolean
  /** Shown in the mobile bottom bar (five slots). */
  mobile: boolean
}

const navItems: NavItem[] = [
  { to: '/', labelKey: 'nav.dashboard', icon: LayoutDashboard, end: true, mobile: true },
  { to: '/companies', labelKey: 'nav.companies', icon: Building2, mobile: false },
  { to: '/interviews', labelKey: 'nav.interviews', icon: Briefcase, mobile: true },
  { to: '/questions', labelKey: 'nav.questions', shortLabelKey: 'nav.questionsShort', icon: BookOpen, mobile: true },
  { to: '/practice', labelKey: 'nav.practice', icon: Brain, mobile: true },
  { to: '/study', labelKey: 'nav.study', icon: BookMarked, mobile: true },
]

const toggleButton =
  'inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'

function Logo() {
  const { t } = useTranslation()
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm shadow-brand-600/30">
        <Zap aria-hidden className="size-5" />
      </div>
      <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">{t('app.name')}</span>
    </div>
  )
}

/** Sun / moon button. The actual switching happens in SettingsProvider. */
function ThemeToggle() {
  const { theme, toggleTheme } = useSettings()
  const { t } = useTranslation()
  const label = theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')
  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label} className={toggleButton}>
      {theme === 'dark' ? <Sun aria-hidden className="size-4.5" /> : <Moon aria-hidden className="size-4.5" />}
    </button>
  )
}

/** Shows the name of the *other* language, so the label tells you what you get. */
function LanguageToggle() {
  const { toggleLanguage } = useSettings()
  const { t } = useTranslation()
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t('language.switch')}
      title={t('language.switch')}
      className={toggleButton}
    >
      <Languages aria-hidden className="size-4.5" />
      <span>{t('language.other')}</span>
    </button>
  )
}

function LogoutButton({ compact = false }: { compact?: boolean }) {
  const { logout } = useAuth()
  const { t } = useTranslation()
  return (
    <button type="button" onClick={() => void logout()} aria-label={t('auth.logout')} title={t('auth.logout')} className={toggleButton}>
      <LogOut aria-hidden className="size-4.5 rtl:-scale-x-100" />
      {!compact && <span>{t('auth.logout')}</span>}
    </button>
  )
}

/** Current role in the sidebar, links to the role picker. */
function RoleChip() {
  const { roleId } = useUserData()
  const { t, localize } = useTranslation()
  const role = roleId ? getRole(roleId) : undefined
  return (
    <Link
      to="/start"
      className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-slate-700"
    >
      <p className="text-[11px] font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">
        {t('role.preparingFor')}
      </p>
      <div className="mt-0.5 flex items-center justify-between gap-2">
        <span className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
          {role ? localize(role.name) : t('role.choose')}
        </span>
        <span className="shrink-0 text-xs font-medium text-brand-600 dark:text-brand-400">{t('role.change')}</span>
      </div>
    </Link>
  )
}

function StreakCard({ days }: { days: number }) {
  const { t } = useTranslation()
  return (
    <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-3.5 dark:border-amber-500/20 dark:bg-amber-500/10">
      <div className="flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
        <Flame aria-hidden className="size-4 text-amber-500" />
        {t('streak.days', { count: days })}
      </div>
      <p className="mt-1 text-xs text-amber-700/80 dark:text-amber-200/70">{t('streak.hint')}</p>
    </div>
  )
}

/** Who is signed in, with sign-out. */
function AccountCard() {
  const { user } = useAuth()
  const { t } = useTranslation()
  if (!user) return null
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 p-3 dark:border-slate-800">
      <div className="min-w-0">
        <p className="text-[11px] font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('auth.signedInAs')}</p>
        <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{user.name}</p>
      </div>
      <LogoutButton compact />
    </div>
  )
}

export function AppLayout() {
  const { pathname } = useLocation()
  const { t, language } = useTranslation()
  const { user } = useAuth()
  const { roleId, latestRatings, ratings } = useUserData()
  const { interviews } = useCatalog()
  const streakDays = useMemo(() => computeStreak(ratings), [ratings])

  // Assistant state lives here so the conversation survives navigation.
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [assistantMessages, setAssistantMessages] = useState<AssistantMessage[]>([])

  const sendToAssistant = (text: string) => {
    const reply = askAssistant(text, { uiLanguage: language, roleId, interviews, latestRatings })
    setAssistantMessages((previous) => [
      ...previous,
      { id: crypto.randomUUID(), from: 'user', text },
      { id: crypto.randomUUID(), from: 'assistant', text: reply.text, links: reply.links },
    ])
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
      isActive
        ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
    )

  return (
    <div className="min-h-dvh">
      {/* Desktop sidebar. start-0 / border-e follow the text direction, so in Hebrew it sits on the right. */}
      <aside className="fixed inset-y-0 start-0 hidden w-64 flex-col overflow-y-auto border-e border-slate-200 bg-white px-4 py-6 md:flex dark:border-slate-800 dark:bg-slate-900">
        <div className="px-2">
          <Logo />
        </div>

        <div className="mt-6">
          <RoleChip />
        </div>

        <nav aria-label="Main" className="mt-6 flex flex-col gap-1">
          {navItems.map(({ to, labelKey, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={navLinkClass}>
              <Icon aria-hidden className="size-5" />
              {t(labelKey)}
            </NavLink>
          ))}
          {user?.role === 'admin' && (
            <NavLink to="/admin" className={navLinkClass}>
              <ShieldCheck aria-hidden className="size-5" />
              {t('nav.admin')}
            </NavLink>
          )}
        </nav>

        <div className="mt-auto space-y-3 pt-6">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <StreakCard days={streakDays} />
          <AccountCard />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-900/90">
        <Logo />
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
          <LogoutButton compact />
        </div>
      </header>

      <main className="md:ps-64">
        <div className="mx-auto w-full max-w-5xl px-4 pt-6 pb-28 sm:px-6 md:pt-10 md:pb-16 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* Assistant: floating button + panel, above the mobile bottom nav */}
      <button
        type="button"
        onClick={() => setAssistantOpen((open) => !open)}
        aria-label={assistantOpen ? t('assistant.close') : t('assistant.open')}
        aria-expanded={assistantOpen}
        className="fixed bottom-20 end-4 z-40 flex size-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700 md:bottom-6 md:end-6"
      >
        {assistantOpen ? <X aria-hidden className="size-5" /> : <MessageCircle aria-hidden className="size-5" />}
      </button>
      <AssistantPanel
        open={assistantOpen}
        onClose={() => setAssistantOpen(false)}
        messages={assistantMessages}
        onSend={sendToAssistant}
      />

      {/* Mobile bottom navigation: five slots; Companies is reachable from the dashboard and interviews */}
      <nav
        aria-label="Main"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-900/95"
      >
        <div className="grid grid-cols-5">
          {navItems
            .filter((item) => item.mobile)
            .map(({ to, labelKey, shortLabelKey, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    'flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors',
                    isActive
                      ? 'text-brand-600 dark:text-brand-300'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={cn(
                        'rounded-lg px-3 py-1 transition-colors',
                        isActive && 'bg-brand-50 dark:bg-brand-500/15',
                      )}
                    >
                      <Icon aria-hidden className="size-5" />
                    </span>
                    {t(shortLabelKey ?? labelKey)}
                  </>
                )}
              </NavLink>
            ))}
        </div>
      </nav>
    </div>
  )
}
