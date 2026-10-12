import { useEffect, useState } from 'react'
import { ShieldCheck, Users } from 'lucide-react'
import { api } from '../api/client'
import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { getCompany, getRole } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { formatDate } from '../lib/utils'
import { useAuth } from '../state/auth-context'
import type { AccountData, User } from '../types'

interface AdminUser extends User {
  counts: { notes: number; ratings: number; cards: number; targets: number; interviews: number; questions: number }
}

type AdminAccount = AccountData & { user: User }

/** Admin only: every account and what it has saved. Read-only for now. */
export function AdminPage() {
  const { t, localize, language } = useTranslation()
  const { user } = useAuth()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [selected, setSelected] = useState<AdminAccount | null>(null)
  const [error, setError] = useState(false)

  const isAdmin = user?.role === 'admin'

  useEffect(() => {
    if (!isAdmin) return
    api
      .get<{ users: AdminUser[] }>('/api/admin/users')
      .then((data) => setUsers(data.users))
      .catch(() => setError(true))
  }, [isAdmin])

  const view = async (id: string) => {
    try {
      setSelected(await api.get<AdminAccount>(`/api/admin/users/${id}`))
    } catch {
      setError(true)
    }
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-2xl">
        <EmptyState icon={<ShieldCheck aria-hidden className="size-6" />} title={t('admin.title')} description={t('admin.forbidden')} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <PageHeader title={t('admin.title')} description={t('admin.subtitle')} />

      {error && <p className="text-sm text-rose-600 dark:text-rose-300">{t('auth.error.generic')}</p>}

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[40rem] text-sm">
          <thead className="bg-slate-50 text-start text-xs font-semibold tracking-wider text-slate-500 uppercase dark:bg-slate-800/60 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 text-start">{t('admin.user')}</th>
              <th className="px-4 py-3 text-start">{t('admin.role')}</th>
              <th className="px-4 py-3 text-start">{t('admin.joined')}</th>
              <th className="px-4 py-3 text-center">{t('admin.notes')}</th>
              <th className="px-4 py-3 text-center">{t('admin.ratings')}</th>
              <th className="px-4 py-3 text-center">{t('admin.cards')}</th>
              <th className="px-4 py-3 text-center">{t('admin.targets')}</th>
              <th className="px-4 py-3 text-center">{t('admin.interviews')}</th>
              <th className="px-4 py-3 text-center">{t('admin.questions')}</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {users.map((entry) => (
              <tr key={entry.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-900 dark:text-slate-100">{entry.name}</p>
                  <p dir="ltr" className="text-xs text-slate-500 rtl:text-right dark:text-slate-400">
                    {entry.email}
                  </p>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={entry.role === 'admin' ? 'violet' : 'slate'}>
                    {entry.role === 'admin' ? t('admin.roleAdmin') : t('admin.roleUser')}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{formatDate(entry.createdAt.slice(0, 10), language)}</td>
                <td className="px-4 py-3 text-center tabular-nums">{entry.counts.notes}</td>
                <td className="px-4 py-3 text-center tabular-nums">{entry.counts.ratings}</td>
                <td className="px-4 py-3 text-center tabular-nums">{entry.counts.cards}</td>
                <td className="px-4 py-3 text-center tabular-nums">{entry.counts.targets}</td>
                <td className="px-4 py-3 text-center tabular-nums">{entry.counts.interviews}</td>
                <td className="px-4 py-3 text-center tabular-nums">{entry.counts.questions ?? 0}</td>
                <td className="px-4 py-3 text-end">
                  <Button variant="secondary" size="sm" onClick={() => void view(entry.id)}>
                    {t('admin.view')}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {selected && (
        <Card className="p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
              <Users aria-hidden className="size-4" />
            </div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('admin.details', { name: selected.user.name })}</h2>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('admin.settings')}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {t('interview.role')}:{' '}
                {selected.settings.roleId ? localize(getRole(selected.settings.roleId)?.name ?? { en: '', he: '' }) : '–'}
              </p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                {t('prefs.languages')}: {selected.settings.practicePrefs.languages.join(', ') || '–'}
              </p>

              <h3 className="mt-5 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('target.upcoming')}</h3>
              {selected.targets.length > 0 ? (
                <ul className="mt-2 space-y-2 text-sm">
                  {selected.targets.map((target) => (
                    <li key={target.id} className="text-slate-700 dark:text-slate-300">
                      {target.companyId ? localize(getCompany(target.companyId)?.name ?? { en: '', he: '' }) : t('target.otherCompany')} ·{' '}
                      {localize(getRole(target.roleId)?.name ?? { en: '', he: '' })} · {formatDate(target.date, language)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('admin.noTargets')}</p>
              )}
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('admin.interviews')}</h3>
              {selected.interviews.length > 0 ? (
                <ul className="mt-2 space-y-2 text-sm">
                  {selected.interviews.map((interview) => (
                    <li key={interview.id} className="text-slate-700 dark:text-slate-300">
                      {localize(getCompany(interview.companyId)?.name ?? { en: interview.companyId, he: interview.companyId })} ·{' '}
                      {localize(interview.position)} · {formatDate(interview.date, language)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('admin.noInterviews')}</p>
              )}

              <h3 className="mt-5 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('admin.cards')}</h3>
              {selected.cards.length > 0 ? (
                <ul className="mt-2 space-y-1 text-sm">
                  {selected.cards.slice(0, 8).map((card) => (
                    <li key={card.id} dir="auto" className="truncate text-slate-700 rtl:text-right dark:text-slate-300">
                      {card.front}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('admin.noCards')}</p>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
