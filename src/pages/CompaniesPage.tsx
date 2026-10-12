import { useMemo } from 'react'
import { ChevronRight, UserRound } from 'lucide-react'
import { CompanyAvatar } from '../components/CompanyAvatar'
import { PageHeader } from '../components/PageHeader'
import { LinkButton } from '../components/ui/Button'
import { CardLink } from '../components/ui/Card'
import { getCompanies, getCompanyStats, getRole } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { useCatalog } from '../state/catalog-context'
import { useUserData } from '../state/user-data-context'

export function CompaniesPage() {
  const { t, localize, plural } = useTranslation()
  const { roleId } = useUserData()
  const { interviews } = useCatalog()
  const role = roleId ? getRole(roleId) : undefined

  // Companies with the most relevant questions first, then alphabetical.
  const rows = useMemo(
    () =>
      getCompanies()
        .map((company) => ({ company, stats: getCompanyStats(interviews, company.id, roleId) }))
        .sort(
          (a, b) =>
            b.stats.questionCount - a.stats.questionCount ||
            b.stats.interviewCount - a.stats.interviewCount ||
            localize(a.company.name).localeCompare(localize(b.company.name)),
        ),
    [interviews, roleId, localize],
  )

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('companies.title')}
        description={role ? t('companies.subtitleForRole', { role: localize(role.name) }) : t('companies.subtitle')}
        action={
          <LinkButton to="/start" variant="secondary" className="w-full sm:w-auto">
            <UserRound aria-hidden className="size-4 text-brand-600 dark:text-brand-400" />
            {role ? localize(role.name) : t('role.choose')}
          </LinkButton>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {rows.map(({ company, stats }) => (
          <CardLink key={company.id} to={`/companies/${company.id}`} className="flex items-center gap-4 p-5">
            <CompanyAvatar company={company} />
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-semibold text-slate-900 dark:text-slate-100">{localize(company.name)}</h3>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">{localize(company.industry)}</p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                {stats.interviewCount === 0
                  ? t('companies.noInterviews')
                  : `${plural(stats.questionCount, 'common.question', 'common.questions')} · ${plural(stats.interviewCount, 'common.interview', 'common.interviews')}`}
              </p>
            </div>
            <ChevronRight aria-hidden className="size-4 shrink-0 text-slate-300 rtl:-scale-x-100 dark:text-slate-600" />
          </CardLink>
        ))}
      </div>
    </div>
  )
}
