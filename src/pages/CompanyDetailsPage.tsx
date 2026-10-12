import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ArrowLeft, Building2, Info, MessageSquare, Plus, Target } from 'lucide-react'
import { InterviewFormModal } from '../components/InterviewFormModal'
import { CompanyAvatar } from '../components/CompanyAvatar'
import { InterviewCard } from '../components/InterviewCard'
import { QuestionCard } from '../components/QuestionCard'
import { Badge } from '../components/ui/Badge'
import { Button, LinkButton } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { getCompany, getQuestionsAskedAtCompany, getRole, getTopicMap } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { useCatalog } from '../state/catalog-context'
import { useUserData } from '../state/user-data-context'

export function CompanyDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, localize, plural } = useTranslation()
  const { roleId, practicePrefs, setPracticePrefs, addUserInterview } = useUserData()
  const { interviews } = useCatalog()
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const company = id ? getCompany(id) : undefined
  const role = roleId ? getRole(roleId) : undefined
  const topics = useMemo(() => getTopicMap(), [])

  const asked = useMemo(
    () => (company ? getQuestionsAskedAtCompany(interviews, company.id) : []),
    [interviews, company],
  )
  const companyInterviews = useMemo(
    () =>
      interviews
        .filter((interview) => interview.companyId === company?.id)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [interviews, company],
  )

  if (!company) {
    return (
      <div className="mx-auto max-w-2xl">
        <EmptyState
          icon={<Building2 aria-hidden className="size-6" />}
          title={t('company.notFound')}
          description={t('company.notFoundHint')}
          action={
            <LinkButton to="/companies" variant="secondary">
              <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
              {t('company.backToList')}
            </LinkButton>
          }
        />
      </div>
    )
  }

  const relevant = role ? asked.filter((question) => question.roleIds.includes(role.id)) : asked
  const visible = showAll ? asked : relevant
  const hiddenCount = asked.length - relevant.length
  const companyName = localize(company.name)

  /** Sets this company as the practice target and jumps to the session picker. */
  const prepareHere = () => {
    setPracticePrefs({ ...practicePrefs, companyId: company.id })
    navigate('/practice')
  }

  return (
    <div className="space-y-6">
      <Link
        to="/companies"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
        {t('nav.companies')}
      </Link>

      <Card className="p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <CompanyAvatar company={company} size="lg" />
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
              {companyName}
            </h1>
            <p className="mt-1 text-slate-500 dark:text-slate-400">{localize(company.industry)}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{localize(company.about)}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {plural(asked.length, 'common.question', 'common.questions')} ·{' '}
              {plural(companyInterviews.length, 'common.interview', 'common.interviews')}
            </p>
          </div>
          <Button onClick={() => setIsAddOpen(true)} className="w-full sm:w-auto">
            <Plus aria-hidden className="size-4" />
            {t('interviews.add')}
          </Button>
        </div>
      </Card>

      <Card className="p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Info aria-hidden className="size-4 text-brand-600 dark:text-brand-400" />
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('company.tips')}</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{localize(company.tips)}</p>
            <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">{t('company.focus')}</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {company.focusTopicIds.map((topicId) => {
                const topic = topics.get(topicId)
                return topic ? (
                  <Badge key={topicId} tone={topic.color}>
                    {localize(topic.name)}
                  </Badge>
                ) : null
              })}
            </div>
          </div>
          <Button variant="secondary" onClick={prepareHere} className="w-full sm:w-auto">
            <Target aria-hidden className="size-4 text-brand-600 dark:text-brand-400" />
            {t('company.prepareHere')}
          </Button>
        </div>
      </Card>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {t('company.questionsAskedHere')}{' '}
          <span className="font-normal text-slate-400 dark:text-slate-500">({visible.length})</span>
          {role && !showAll && (
            <span className="ms-2 text-sm font-normal text-slate-500 dark:text-slate-400">{localize(role.name)}</span>
          )}
        </h2>

        {visible.length > 0 ? (
          <div className="mt-4 space-y-3">
            {visible.map((question) => (
              <QuestionCard key={question.id} question={question} topic={topics.get(question.topicId)} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-4"
            icon={<MessageSquare aria-hidden className="size-6" />}
            title={t('company.noQuestionsTitle')}
            description={t('company.noQuestionsHint', { company: companyName })}
            action={
              <Button variant="secondary" onClick={() => setIsAddOpen(true)}>
                <Plus aria-hidden className="size-4" />
                {t('interviews.add')}
              </Button>
            }
          />
        )}

        {!showAll && hiddenCount > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
            <span>{t('company.otherRoles', { count: hiddenCount })}</span>
            <Button variant="ghost" size="sm" onClick={() => setShowAll(true)}>
              {t('common.showAll')}
            </Button>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t('company.yourInterviews')}</h2>
        {companyInterviews.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {companyInterviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('companies.noInterviews')}</p>
        )}
      </section>

      <InterviewFormModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSave={addUserInterview}
        defaultCompanyId={company.id}
      />
    </div>
  )
}
