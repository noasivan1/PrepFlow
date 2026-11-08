import { useState } from 'react'
import { BarChart3, MessagesSquare, ShieldCheck, Users, type LucideIcon } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { EmptyState } from '../../components/ui/EmptyState'
import type { TranslationKey } from '../../i18n/translations'
import { useTranslation } from '../../i18n/useTranslation'
import { cn } from '../../lib/utils'
import { useAuth } from '../../state/auth-context'
import { AdminInterviewsTab } from './AdminInterviewsTab'
import { AdminStatsTab } from './AdminStatsTab'
import { AdminUsersTab } from './AdminUsersTab'

type Tab = 'users' | 'interviews' | 'stats'

const TABS: Array<{ id: Tab; labelKey: TranslationKey; icon: LucideIcon }> = [
  { id: 'users', labelKey: 'admin.tabUsers', icon: Users },
  { id: 'interviews', labelKey: 'admin.tabInterviews', icon: MessagesSquare },
  { id: 'stats', labelKey: 'admin.tabStats', icon: BarChart3 },
]

const tabBase =
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
const tabActive =
  'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500/60 dark:bg-brand-500/15 dark:text-brand-300'
const tabIdle =
  'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'

/**
 * Admin only (the first account that registered, plus anyone an admin promotes).
 * Three views: every account with management actions, every interview anyone logged, and usage statistics.
 */
export function AdminPage() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [tab, setTab] = useState<Tab>('users')

  if (user?.role !== 'admin') {
    return (
      <div className="mx-auto max-w-2xl">
        <EmptyState icon={<ShieldCheck aria-hidden className="size-6" />} title={t('admin.title')} description={t('admin.forbidden')} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <PageHeader title={t('admin.title')} description={t('admin.subtitle')} />

      <div role="tablist" aria-label={t('admin.title')} className="flex flex-wrap gap-1.5">
        {TABS.map(({ id, labelKey, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            type="button"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(tabBase, tab === id ? tabActive : tabIdle)}
          >
            <Icon aria-hidden className="size-4" />
            {t(labelKey)}
          </button>
        ))}
      </div>

      {tab === 'users' && <AdminUsersTab />}
      {tab === 'interviews' && <AdminInterviewsTab />}
      {tab === 'stats' && <AdminStatsTab />}
    </div>
  )
}
