import { useCallback, useEffect, useState } from 'react'
import { api } from '../../api/client'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import type { TranslationKey } from '../../i18n/translations'
import { useTranslation } from '../../i18n/useTranslation'
import { cn, formatDate } from '../../lib/utils'
import { useAuth } from '../../state/auth-context'
import { AdminUserDetails } from './AdminUserDetails'
import type { AdminAccount, AdminCounts, AdminUser } from './types'

const COUNT_COLUMNS: Array<{ key: keyof AdminCounts; labelKey: TranslationKey }> = [
  { key: 'ratings', labelKey: 'admin.ratings' },
  { key: 'attempts', labelKey: 'admin.attempts' },
  { key: 'cards', labelKey: 'admin.cards' },
  { key: 'notes', labelKey: 'admin.notes' },
  { key: 'interviews', labelKey: 'admin.interviews' },
  { key: 'targets', labelKey: 'admin.targets' },
  { key: 'questions', labelKey: 'admin.questions' },
]

/** Every account in one table (a row opens it), and the full data of the open one below. */
export function AdminUsersTab() {
  const { t, language } = useTranslation()
  const { user: me } = useAuth()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [selected, setSelected] = useState<AdminAccount | null>(null)
  const [error, setError] = useState(false)

  const load = useCallback(
    () =>
      api
        .get<{ users: AdminUser[] }>('/api/admin/users')
        .then((data) => {
          setUsers(data.users)
          setError(false)
        })
        .catch(() => setError(true)),
    [],
  )

  useEffect(() => {
    void load()
  }, [load])

  const view = useCallback(
    (id: string) =>
      api
        .get<AdminAccount>(`/api/admin/users/${id}`)
        .then(setSelected)
        .catch(() => setError(true)),
    [],
  )

  /** After a management action: refresh the table, and the open details unless the account is gone. */
  const changed = useCallback(
    async (id: string, removed = false) => {
      await load()
      if (removed) setSelected(null)
      else await view(id)
    },
    [load, view],
  )

  return (
    <div className="space-y-6">
      {error && <p className="text-sm text-rose-600 dark:text-rose-300">{t('auth.error.generic')}</p>}

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[44rem] text-sm">
          <thead className="bg-slate-50 text-start text-xs font-semibold tracking-wider text-slate-500 uppercase dark:bg-slate-800/60 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 text-start">{t('admin.user')}</th>
              <th className="px-4 py-3 text-start">{t('admin.role')}</th>
              <th className="px-4 py-3 text-start">{t('admin.joined')}</th>
              {COUNT_COLUMNS.map((column) => (
                <th key={column.key} className="px-4 py-3 text-center">
                  {t(column.labelKey)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {users.map((entry) => {
              const open = selected?.user.id === entry.id
              return (
                <tr
                  key={entry.id}
                  onClick={() => void view(entry.id)}
                  className={cn(
                    'cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40',
                    open && 'bg-brand-50/50 hover:bg-brand-50/50 dark:bg-brand-500/10 dark:hover:bg-brand-500/10',
                  )}
                >
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        void view(entry.id)
                      }}
                      aria-expanded={open}
                      className="flex items-center gap-2 text-start font-medium text-slate-900 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:text-slate-100 dark:hover:text-brand-300"
                    >
                      {entry.name}
                      {entry.id === me?.id && <Badge tone="teal">{t('admin.you')}</Badge>}
                    </button>
                    <p dir="ltr" title={entry.email} className="max-w-[14rem] truncate text-xs text-slate-500 rtl:text-right dark:text-slate-400">
                      {entry.email}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <Badge tone={entry.role === 'admin' ? 'violet' : 'slate'}>
                      {entry.role === 'admin' ? t('admin.roleAdmin') : t('admin.roleUser')}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">
                    {formatDate(entry.createdAt.slice(0, 10), language)}
                  </td>
                  {COUNT_COLUMNS.map((column) => (
                    <td key={column.key} className="px-4 py-3 text-center tabular-nums">
                      {entry.counts[column.key] ?? 0}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>

      {selected && (
        <AdminUserDetails
          key={selected.user.id}
          account={selected}
          isSelf={selected.user.id === me?.id}
          onChanged={changed}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
