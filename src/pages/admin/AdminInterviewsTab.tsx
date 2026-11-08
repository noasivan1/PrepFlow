import { useCallback, useEffect, useMemo, useState } from 'react'
import { MessagesSquare } from 'lucide-react'
import { api } from '../../api/client'
import { InterviewStatusBadge } from '../../components/InterviewCard'
import { Card } from '../../components/ui/Card'
import { EmptyState } from '../../components/ui/EmptyState'
import { Field, Select } from '../../components/ui/Field'
import { getCompany, getRole } from '../../data/queries'
import { useTranslation } from '../../i18n/useTranslation'
import { formatDate } from '../../lib/utils'
import type { AdminInterview } from './types'

const ALL = 'all'

/** Every interview anyone logged, newest first, narrowed by company and role. */
export function AdminInterviewsTab() {
  const { t, localize, language } = useTranslation()
  const [interviews, setInterviews] = useState<AdminInterview[] | null>(null)
  const [error, setError] = useState(false)
  const [companyId, setCompanyId] = useState(ALL)
  const [roleId, setRoleId] = useState(ALL)

  useEffect(() => {
    api
      .get<{ interviews: AdminInterview[] }>('/api/admin/interviews')
      .then((data) => setInterviews(data.interviews))
      .catch(() => setError(true))
  }, [])

  // Ids that are not in the catalogue (an older company id, for instance) are shown as they are.
  const companyName = useCallback((id: string) => localize(getCompany(id)?.name ?? { en: id, he: id }), [localize])
  const roleName = useCallback((id: string) => localize(getRole(id)?.name ?? { en: id, he: id }), [localize])

  // Only companies and roles that actually appear, so the filters never offer an empty result.
  const companies = useMemo(
    () =>
      [...new Set((interviews ?? []).map((interview) => interview.companyId))].sort((a, b) =>
        companyName(a).localeCompare(companyName(b)),
      ),
    [interviews, companyName],
  )
  const roles = useMemo(
    () => [...new Set((interviews ?? []).map((interview) => interview.roleId))].sort((a, b) => roleName(a).localeCompare(roleName(b))),
    [interviews, roleName],
  )

  const visible = (interviews ?? [])
    .filter((interview) => companyId === ALL || interview.companyId === companyId)
    .filter((interview) => roleId === ALL || interview.roleId === roleId)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="space-y-4">
      {error && <p className="text-sm text-rose-600 dark:text-rose-300">{t('auth.error.generic')}</p>}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-2xl">
        <Field label={t('admin.company')} htmlFor="admin-company">
          <Select id="admin-company" value={companyId} onChange={(event) => setCompanyId(event.target.value)}>
            <option value={ALL}>{t('admin.allCompanies')}</option>
            {companies.map((id) => (
              <option key={id} value={id}>
                {companyName(id)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={t('admin.roleFilter')} htmlFor="admin-role">
          <Select id="admin-role" value={roleId} onChange={(event) => setRoleId(event.target.value)}>
            <option value={ALL}>{t('admin.allRoles')}</option>
            {roles.map((id) => (
              <option key={id} value={id}>
                {roleName(id)}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        {visible.length === 1 ? t('admin.interviewOne') : t('admin.interviewCount', { count: visible.length })}
      </p>

      {interviews && visible.length === 0 ? (
        <EmptyState
          icon={<MessagesSquare aria-hidden className="size-6" />}
          title={t('admin.tabInterviews')}
          description={t('admin.noInterviewsAll')}
        />
      ) : (
        <Card className="overflow-x-auto">
          <table className="w-full min-w-[48rem] text-sm">
            <thead className="bg-slate-50 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:bg-slate-800/60 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3 text-start">{t('admin.date')}</th>
                <th className="px-4 py-3 text-start">{t('admin.company')}</th>
                <th className="px-4 py-3 text-start">{t('admin.position')}</th>
                <th className="px-4 py-3 text-start">{t('admin.roleFilter')}</th>
                <th className="px-4 py-3 text-start">{t('admin.stage')}</th>
                <th className="px-4 py-3 text-start">{t('admin.status')}</th>
                <th className="px-4 py-3 text-start">{t('admin.user')}</th>
                <th className="px-4 py-3 text-center">{t('admin.questions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {visible.map((interview) => (
                <tr key={interview.id}>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">{formatDate(interview.date, language)}</td>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{companyName(interview.companyId)}</td>
                  <td dir="auto" className="px-4 py-3 text-slate-700 dark:text-slate-300">
                    {localize(interview.position)}
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{roleName(interview.roleId)}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{t(`stage.${interview.stage}`)}</td>
                  <td className="px-4 py-3">
                    <InterviewStatusBadge status={interview.status} />
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-slate-900 dark:text-slate-100">{interview.user.name}</p>
                    <p dir="ltr" title={interview.user.email} className="max-w-[14rem] truncate text-xs text-slate-500 rtl:text-right dark:text-slate-400">
                      {interview.user.email}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-center tabular-nums">{interview.questionIds.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  )
}
