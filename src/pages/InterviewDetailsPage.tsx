import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ArrowLeft, Copy, FileQuestion, MessageSquare, Pencil, Plus, Trash2 } from 'lucide-react'
import { CompanyAvatar } from '../components/CompanyAvatar'
import { InterviewStatusBadge, SampleBadge } from '../components/InterviewCard'
import { InterviewFormModal } from '../components/InterviewFormModal'
import { QuestionCard } from '../components/QuestionCard'
import { Button, LinkButton } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { getCompany, getQuestionsByIds, getRole, getTopicMap } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { formatDate } from '../lib/utils'
import { useCatalog } from '../state/catalog-context'
import { useUserData } from '../state/user-data-context'
import type { Interview, InterviewDraft } from '../types'

function MetaItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">{children}</dd>
    </div>
  )
}

/** The editable fields of an interview, for copying a sample into the user's own list. */
function toDraft(interview: Interview): InterviewDraft {
  const { id: _id, sample: _sample, ...draft } = interview
  return draft
}

export function InterviewDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, localize, language, plural } = useTranslation()
  const { getInterview } = useCatalog()
  const { addUserInterview, updateUserInterview, deleteUserInterview } = useUserData()
  const interview = id ? getInterview(id) : undefined
  const topics = useMemo(() => getTopicMap(), [])
  const [editOpen, setEditOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [busy, setBusy] = useState(false)

  if (!interview) {
    return (
      <div className="mx-auto max-w-2xl">
        <EmptyState
          icon={<FileQuestion aria-hidden className="size-6" />}
          title={t('interview.notFound')}
          description={t('interview.notFoundHint')}
          action={
            <LinkButton to="/interviews" variant="secondary">
              <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
              {t('interview.backToList')}
            </LinkButton>
          }
        />
      </div>
    )
  }

  const company = getCompany(interview.companyId)
  const role = getRole(interview.roleId)
  const questions = getQuestionsByIds(interview.questionIds)
  const isUpcoming = interview.status === 'scheduled'
  const isOwn = !interview.sample
  const formattedDate = formatDate(interview.date, language)

  const copyToMine = async () => {
    setBusy(true)
    try {
      const copy = await addUserInterview(toDraft(interview))
      navigate(`/interviews/${copy.id}`, { replace: true })
    } finally {
      setBusy(false)
    }
  }

  const remove = async () => {
    setBusy(true)
    try {
      await deleteUserInterview(interview.id)
      navigate('/interviews', { replace: true })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-6">
      <Link
        to="/interviews"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
        {t('interviews.title')}
      </Link>

      <Card className="p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          {company && <CompanyAvatar company={company} size="lg" />}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
                {company ? (
                  <Link to={`/companies/${company.id}`} className="hover:text-brand-600 dark:hover:text-brand-400">
                    {localize(company.name)}
                  </Link>
                ) : (
                  interview.companyId
                )}
              </h1>
              <InterviewStatusBadge status={interview.status} />
              {interview.sample && <SampleBadge reported={interview.reported} />}
            </div>
            <p dir="auto" className="mt-1 text-slate-500 rtl:text-right dark:text-slate-400">
              {localize(interview.position)}
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <MetaItem label={t('interview.role')}>{role ? localize(role.name) : interview.roleId}</MetaItem>
              <MetaItem label={t('interview.stage')}>{t(`stage.${interview.stage}`)}</MetaItem>
              <MetaItem label={t('interview.date')}>{formattedDate}</MetaItem>
              <MetaItem label={t('interview.questionsAsked')}>
                {plural(questions.length, 'common.question', 'common.questions')}
              </MetaItem>
            </dl>
          </div>
        </div>

        {interview.notes && (
          <div className="mt-5 border-t border-slate-100 pt-5 dark:border-slate-800">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t('interview.notes')}
            </p>
            <p dir="auto" className="mt-2 text-sm leading-relaxed whitespace-pre-line text-slate-700 rtl:text-right dark:text-slate-300">
              {localize(interview.notes)}
            </p>
          </div>
        )}

        {/* Own interviews can be edited and deleted; samples can be copied into the user's list. */}
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
          {isOwn ? (
            confirmDelete ? (
              <>
                <span className="text-sm text-slate-600 dark:text-slate-300">{t('interview.deleteConfirm')}</span>
                <Button variant="danger" size="sm" onClick={remove} disabled={busy}>
                  {t('common.delete')}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(false)}>
                  {t('common.cancel')}
                </Button>
              </>
            ) : (
              <>
                <Button variant="secondary" size="sm" onClick={() => setEditOpen(true)}>
                  <Pencil aria-hidden className="size-4" />
                  {t('interview.edit')}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(true)}>
                  <Trash2 aria-hidden className="size-4" />
                  {t('interview.delete')}
                </Button>
              </>
            )
          ) : (
            <>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t(interview.reported ? 'interview.reportedNote' : 'interview.sampleNote')}
              </p>
              <Button variant="secondary" size="sm" onClick={copyToMine} disabled={busy} className="ms-auto">
                <Copy aria-hidden className="size-4" />
                {t('interview.copyToMine')}
              </Button>
            </>
          )}
        </div>
      </Card>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {t('interview.questionsAsked')}{' '}
            <span className="font-normal text-slate-400 dark:text-slate-500">({questions.length})</span>
          </h2>
          {isOwn && questions.length > 0 && (
            <Button variant="secondary" size="sm" onClick={() => setEditOpen(true)}>
              <Plus aria-hidden className="size-4" />
              {t('interview.addQuestions')}
            </Button>
          )}
        </div>

        {questions.length > 0 ? (
          <div className="mt-4 space-y-3">
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} topic={topics.get(question.topicId)} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-4"
            icon={<MessageSquare aria-hidden className="size-6" />}
            title={isUpcoming ? t('interview.upcomingTitle') : t('interview.pastTitle')}
            description={isUpcoming ? t('interview.upcomingHint', { date: formattedDate }) : t('interview.pastHint')}
            action={
              isOwn ? (
                <Button onClick={() => setEditOpen(true)}>
                  <Plus aria-hidden className="size-4" />
                  {t('interview.addQuestions')}
                </Button>
              ) : undefined
            }
          />
        )}
      </section>

      {isOwn && (
        <InterviewFormModal
          open={editOpen}
          onClose={() => setEditOpen(false)}
          existing={interview}
          onSave={(draft) => updateUserInterview(interview.id, draft)}
        />
      )}
    </div>
  )
}
