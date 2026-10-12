import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ArrowLeft, BookMarked, CalendarDays, FileQuestion, Pencil, Repeat, Trash2 } from 'lucide-react'
import { AnswerText } from '../components/AnswerText'
import { CodeSolutions } from '../components/CodeSolutions'
import { CompanyAvatar } from '../components/CompanyAvatar'
import { FlashcardModal } from '../components/FlashcardModal'
import { LastRatingBadge } from '../components/LastRatingBadge'
import { NotesEditor } from '../components/NotesEditor'
import { ProblemStatement } from '../components/ProblemStatement'
import { ConfidenceValue } from '../components/QuestionCard'
import { QuestionFormModal } from '../components/QuestionForm'
import { Badge } from '../components/ui/Badge'
import { Button, LinkButton } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { ratedConfidence } from '../data/practice'
import { getCompany, getInterviewsForQuestion, getQuestion, getRole, getTopicMap } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn, formatDate, textDirection } from '../lib/utils'
import { useCatalog } from '../state/catalog-context'
import { useUserData } from '../state/user-data-context'
import type { Difficulty, FlashcardDraft } from '../types'

const difficultyDot: Record<Difficulty, string> = {
  easy: 'bg-emerald-500',
  medium: 'bg-amber-500',
  hard: 'bg-rose-500',
}

export function QuestionDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, localize, language } = useTranslation()
  const { interviews } = useCatalog()
  const { practicePrefs, timesPractised, addCard, notes, updateQuestion, deleteQuestion, latestRatings } = useUserData()
  const preferredLanguage = practicePrefs.languages[0] ?? null
  const question = id ? getQuestion(id) : undefined
  const topics = useMemo(() => getTopicMap(), [])
  const [cardOpen, setCardOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [busy, setBusy] = useState(false)

  const askedIn = useMemo(
    () => (question ? getInterviewsForQuestion(interviews, question.id) : []),
    [interviews, question],
  )

  if (!question) {
    return (
      <div className="mx-auto max-w-2xl">
        <EmptyState
          icon={<FileQuestion aria-hidden className="size-6" />}
          title={t('question.notFound')}
          description={t('question.notFoundHint')}
          action={
            <LinkButton to="/questions" variant="secondary">
              <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
              {t('question.backToBank')}
            </LinkButton>
          }
        />
      </div>
    )
  }

  const topic = topics.get(question.topicId)
  const roles = question.roleIds.flatMap((roleId) => {
    const role = getRole(roleId)
    return role ? [role] : []
  })
  const askedLabel =
    question.timesAsked === 1 ? t('common.askedOnce') : t('common.askedTimes', { count: question.timesAsked })
  const practised = timesPractised(question.id)

  const remove = async () => {
    setBusy(true)
    try {
      await deleteQuestion(question.id)
      navigate('/questions', { replace: true })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        to="/questions"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
        {t('bank.title')}
      </Link>

      <Card className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-1.5">
          {topic && <Badge tone={topic.color}>{localize(topic.name)}</Badge>}
          <Badge>{t(`type.${question.type}`)}</Badge>
          {question.custom && <Badge tone="violet">{t('question.mine')}</Badge>}
          {question.generated && <Badge tone="sky">{t('ai.badge')}</Badge>}
          <LastRatingBadge questionId={question.id} />
          <span className="ms-auto inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Repeat aria-hidden className="size-3.5" />
            {askedLabel}
            {practised > 0 && (
              <span className="text-slate-400 dark:text-slate-500">
                {' · '}
                {practised === 1 ? t('rating.practisedOnce') : t('rating.practised', { count: practised })}
              </span>
            )}
          </span>
        </div>

        <h1
          dir={textDirection(question.custom, language)}
          className="mt-5 text-2xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-3xl rtl:text-right dark:text-slate-100"
        >
          {localize(question.text)}
        </h1>

        {question.details && (
          <div className="mt-5">
            <ProblemStatement details={question.details} />
          </div>
        )}

        <dl className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <dt>{t('question.difficulty')}</dt>
            <dd className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
              <span aria-hidden className={cn('size-1.5 rounded-full', difficultyDot[question.difficulty])} />
              {t(`difficulty.${question.difficulty}`)}
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt>{t('question.confidence')}</dt>
            <dd className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
              <ConfidenceValue level={ratedConfidence(question, latestRatings)} />
            </dd>
          </div>
        </dl>

        <section className="mt-6">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('question.answer')}
          </p>
          {question.answer ? (
            <AnswerText
              text={localize(question.answer)}
              dir={textDirection(question.custom, language)}
              className="mt-2 rounded-xl border border-slate-100 bg-slate-50 p-4 text-[15px] leading-relaxed text-slate-700 sm:p-5 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
            />
          ) : (
            <p className="mt-2 rounded-xl border border-slate-100 bg-slate-50 p-4 text-[15px] text-slate-500 sm:p-5 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
              {t('question.noAnswer')}
            </p>
          )}
        </section>

        {question.codeSolutions && question.codeSolutions.length > 0 && (
          <section className="mt-6">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t('question.solutions')}
            </p>
            <div className="mt-2">
              <CodeSolutions snippets={question.codeSolutions} preferred={preferredLanguage} />
            </div>
          </section>
        )}

        {question.codeExamples && question.codeExamples.length > 0 && (
          <section className="mt-6">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t('question.examples')}
            </p>
            <div className="mt-2">
              <CodeSolutions snippets={question.codeExamples} preferred={preferredLanguage} />
            </div>
          </section>
        )}

        {/* The user's own questions can be edited and deleted. Seed questions cannot. */}
        {question.custom && (
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
            {confirmDelete ? (
              <>
                <span className="text-sm text-slate-600 dark:text-slate-300">{t('question.deleteConfirm')}</span>
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
                  {t('question.edit')}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(true)}>
                  <Trash2 aria-hidden className="size-4" />
                  {t('question.delete')}
                </Button>
              </>
            )}
          </div>
        )}
      </Card>

      <Card className="p-5 sm:p-6">
        <NotesEditor questionId={question.id} />
        <div className="mt-4 flex justify-end">
          <Button variant="secondary" size="sm" onClick={() => setCardOpen(true)}>
            <BookMarked aria-hidden className="size-4" />
            {t('study.addFromQuestion')}
          </Button>
        </div>
      </Card>

      <FlashcardModal
        open={cardOpen}
        onClose={() => setCardOpen(false)}
        initial={{
          kind: question.type === 'coding' ? 'mistake' : 'remember',
          front: localize(question.text),
          back: notes[question.id] ?? '',
          questionId: question.id,
        }}
        onSave={async (draft: FlashcardDraft) => {
          await addCard(draft)
        }}
      />

      {question.custom && (
        <QuestionFormModal
          open={editOpen}
          onClose={() => setEditOpen(false)}
          existing={question}
          onSave={async (draft) => {
            await updateQuestion(question.id, draft)
          }}
        />
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('question.askedAt')}</h2>
          {askedIn.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {askedIn.map((interview) => {
                const company = getCompany(interview.companyId)
                return (
                  <li key={interview.id}>
                    <Link
                      to={`/interviews/${interview.id}`}
                      className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      {company && <CompanyAvatar company={company} />}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                          {company ? localize(company.name) : interview.companyId}
                          {interview.sample && (
                            <span className="ms-1.5 text-xs font-normal text-slate-400">
                              · {t(interview.reported ? 'interview.reported' : 'interview.sample')}
                            </span>
                          )}
                        </p>
                        <p dir="auto" className="truncate text-xs text-slate-500 rtl:text-right dark:text-slate-400">
                          {localize(interview.position)}
                        </p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <CalendarDays aria-hidden className="size-3.5" />
                        {formatDate(interview.date, language)}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('question.neverAsked')}</p>
          )}
        </Card>

        <Card className="p-5">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('question.roles')}</h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {roles.map((role) => (
              <Badge key={role.id} tone="indigo">
                {localize(role.name)}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
