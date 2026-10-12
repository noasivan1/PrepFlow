import { useMemo, useState, type FormEvent } from 'react'
import { Plus, Search, X } from 'lucide-react'
import { getCompanies, getRoles } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn, todayIso } from '../lib/utils'
import { useCatalog } from '../state/catalog-context'
import { useUserData } from '../state/user-data-context'
import {
  INTERVIEW_STAGES,
  INTERVIEW_STATUSES,
  type Company,
  type Interview,
  type InterviewDraft,
  type InterviewStage,
  type InterviewStatus,
  type Question,
  type QuestionDraft,
} from '../types'
import { emptyQuestionDraft, finaliseQuestionDraft } from '../data/question-draft'
import { QuestionFields } from './QuestionForm'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Field, Input, Select, Textarea } from './ui/Field'
import { Modal } from './ui/Modal'

interface InterviewFormModalProps {
  open: boolean
  onClose: () => void
  onSave: (draft: InterviewDraft) => Promise<unknown>
  /** When set, the modal edits this interview instead of creating one. */
  existing?: Interview
  /** Starting values for a new interview, e.g. from an upcoming interview that has passed. */
  initial?: Partial<InterviewDraft>
  /** Pre-select a company, e.g. when opened from that company's page. */
  defaultCompanyId?: Company['id']
}

/** What the form holds while typing. Free-text fields are plain strings here. */
interface FormState {
  companyId: string
  roleId: string
  position: string
  stage: InterviewStage
  date: string
  status: InterviewStatus
  notes: string
  /** Questions from the bank that were asked. */
  questionIds: Question['id'][]
  /** Questions typed here that do not exist yet; created on save. */
  newQuestions: QuestionDraft[]
}

function isStage(value: string): value is InterviewStage {
  return (INTERVIEW_STAGES as readonly string[]).includes(value)
}

function isStatus(value: string): value is InterviewStatus {
  return (INTERVIEW_STATUSES as readonly string[]).includes(value)
}

const rowClass =
  'flex items-start gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm dark:border-slate-700'

function InterviewForm({
  existing,
  initial,
  defaultCompanyId,
  onSave,
  onClose,
}: Omit<InterviewFormModalProps, 'open'>) {
  const { t, localize } = useTranslation()
  const { roleId: currentRoleId, addQuestion } = useUserData()
  const { questions: allQuestions } = useCatalog()

  const roles = getRoles()
  const companies = useMemo(
    () => [...getCompanies()].sort((a, b) => localize(a.name).localeCompare(localize(b.name))),
    [localize],
  )

  const [form, setForm] = useState<FormState>(() => {
    const source = existing ?? initial
    return {
      companyId: source?.companyId ?? defaultCompanyId ?? companies[0].id,
      roleId: source?.roleId ?? currentRoleId ?? roles[0].id,
      position: source?.position ? localize(source.position) : '',
      stage: source?.stage ?? 'technical',
      date: source?.date ?? todayIso(),
      status: source?.status ?? (existing ? 'awaiting' : 'scheduled'),
      notes: source?.notes ? localize(source.notes) : '',
      questionIds: source?.questionIds ?? [],
      newQuestions: [],
    }
  })
  const [search, setSearch] = useState('')
  const [adding, setAdding] = useState(false)
  const [newDraft, setNewDraft] = useState<QuestionDraft>(() => emptyQuestionDraft(form.roleId))
  const [busy, setBusy] = useState(false)

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }))
  }

  const byId = useMemo(() => new Map(allQuestions.map((question) => [question.id, question])), [allQuestions])
  const selected = form.questionIds.flatMap((id) => {
    const question = byId.get(id)
    return question ? [question] : []
  })

  // Bank search: both languages, excluding what is already picked. Short list, best matches first.
  const results = useMemo(() => {
    const needle = search.trim().toLowerCase()
    if (needle.length < 2) return []
    const picked = new Set(form.questionIds)
    return allQuestions
      .filter((question) => !picked.has(question.id))
      .filter((question) => `${question.text.en} ${question.text.he}`.toLowerCase().includes(needle))
      .slice(0, 8)
  }, [search, allQuestions, form.questionIds])

  const addNewQuestion = () => {
    if (!newDraft.text.trim()) return
    update('newQuestions', [...form.newQuestions, finaliseQuestionDraft(newDraft)])
    setNewDraft(emptyQuestionDraft(form.roleId, newDraft.topicId))
    setAdding(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const position = form.position.trim()
    if (!position) return
    setBusy(true)
    try {
      // New questions are saved to the account first; the interview then points at them.
      const createdIds: Question['id'][] = []
      for (const draft of form.newQuestions) {
        const roleIds = draft.roleIds.includes(form.roleId) ? draft.roleIds : [...draft.roleIds, form.roleId]
        const created = await addQuestion({ ...draft, roleIds })
        createdIds.push(created.id)
      }
      const notes = form.notes.trim()
      // Typed text is stored under both languages, so it shows up whichever language is active.
      await onSave({
        companyId: form.companyId,
        roleId: form.roleId,
        stage: form.stage,
        date: form.date,
        status: form.status,
        position: { en: position, he: position },
        notes: notes ? { en: notes, he: notes } : undefined,
        questionIds: [...form.questionIds, ...createdIds],
      })
      onClose()
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={t('interview.company')} htmlFor="company">
          <Select id="company" value={form.companyId} onChange={(event) => update('companyId', event.target.value)}>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {localize(company.name)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={t('interview.role')} htmlFor="role">
          <Select id="role" value={form.roleId} onChange={(event) => update('roleId', event.target.value)}>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {localize(role.name)}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label={t('interview.position')} htmlFor="position">
        <Input
          id="position"
          dir="auto"
          required
          placeholder={t('interview.positionPlaceholder')}
          value={form.position}
          onChange={(event) => update('position', event.target.value)}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label={t('interview.stage')} htmlFor="stage">
          <Select
            id="stage"
            value={form.stage}
            onChange={(event) => {
              if (isStage(event.target.value)) update('stage', event.target.value)
            }}
          >
            {INTERVIEW_STAGES.map((stage) => (
              <option key={stage} value={stage}>
                {t(`stage.${stage}`)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={t('interview.status')} htmlFor="status">
          <Select
            id="status"
            value={form.status}
            onChange={(event) => {
              if (isStatus(event.target.value)) update('status', event.target.value)
            }}
          >
            {INTERVIEW_STATUSES.map((status) => (
              <option key={status} value={status}>
                {t(`status.${status}`)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={t('interview.date')} htmlFor="date">
          <Input id="date" type="date" required value={form.date} onChange={(event) => update('date', event.target.value)} />
        </Field>
      </div>

      {/* Questions asked: pick from the bank, or write new ones that get saved to the bank. */}
      <fieldset className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
        <legend className="px-1 text-sm font-semibold text-slate-800 dark:text-slate-200">{t('interview.questionsAsked')}</legend>
        <p className="text-xs text-slate-500 dark:text-slate-400">{t('interview.questionsHint')}</p>

        {(selected.length > 0 || form.newQuestions.length > 0) && (
          <ul className="mt-3 space-y-1.5">
            {selected.map((question) => (
              <li key={question.id} className={rowClass}>
                <span dir="auto" className="min-w-0 flex-1 rtl:text-right">
                  {localize(question.text)}
                </span>
                <button
                  type="button"
                  aria-label={t('interview.removeQuestion')}
                  onClick={() => update('questionIds', form.questionIds.filter((id) => id !== question.id))}
                  className="shrink-0 rounded-md p-0.5 text-slate-400 hover:text-rose-600"
                >
                  <X aria-hidden className="size-4" />
                </button>
              </li>
            ))}
            {form.newQuestions.map((draft, index) => (
              <li key={`new-${index}`} className={cn(rowClass, 'border-dashed')}>
                <Badge tone="violet" className="shrink-0">
                  {t('interview.newQuestion')}
                </Badge>
                <span dir="auto" className="min-w-0 flex-1 rtl:text-right">
                  {draft.text}
                </span>
                <button
                  type="button"
                  aria-label={t('interview.removeQuestion')}
                  onClick={() => update('newQuestions', form.newQuestions.filter((_, i) => i !== index))}
                  className="shrink-0 rounded-md p-0.5 text-slate-400 hover:text-rose-600"
                >
                  <X aria-hidden className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="relative mt-3">
          <Search aria-hidden className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            aria-label={t('interview.searchQuestions')}
            placeholder={t('interview.searchQuestions')}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="ps-9"
          />
        </div>
        {search.trim().length >= 2 && (
          <ul className="mt-2 max-h-48 overflow-y-auto rounded-xl border border-slate-200 text-sm dark:border-slate-700">
            {results.length === 0 ? (
              <li className="px-3 py-2 text-slate-500 dark:text-slate-400">{t('interview.noMatchingQuestions')}</li>
            ) : (
              results.map((question) => (
                <li key={question.id}>
                  <button
                    type="button"
                    onClick={() => {
                      update('questionIds', [...form.questionIds, question.id])
                      setSearch('')
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-start hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <Plus aria-hidden className="size-4 shrink-0 text-brand-600" />
                    <span dir="auto" className="min-w-0 flex-1 truncate rtl:text-right">
                      {localize(question.text)}
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
        )}

        {adding ? (
          <div className="mt-4 rounded-xl border border-dashed border-brand-300 bg-brand-50/40 p-3 dark:border-brand-500/40 dark:bg-brand-500/5">
            <p className="mb-3 text-sm font-medium text-slate-800 dark:text-slate-200">{t('interview.newQuestion')}</p>
            <QuestionFields draft={newDraft} onChange={setNewDraft} idPrefix="new-question" />
            <div className="mt-3 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button variant="ghost" size="sm" onClick={() => setAdding(false)}>
                {t('common.cancel')}
              </Button>
              <Button size="sm" onClick={addNewQuestion} disabled={!newDraft.text.trim()}>
                <Plus aria-hidden className="size-4" />
                {t('interview.addToList')}
              </Button>
            </div>
          </div>
        ) : (
          <Button variant="secondary" size="sm" className="mt-3" onClick={() => setAdding(true)}>
            <Plus aria-hidden className="size-4" />
            {t('interview.writeNewQuestion')}
          </Button>
        )}
      </fieldset>

      <Field label={t('interview.notes')} htmlFor="notes" hint={t('interview.notesHint')}>
        <Textarea
          id="notes"
          dir="auto"
          placeholder={t('interview.notesPlaceholder')}
          value={form.notes}
          onChange={(event) => update('notes', event.target.value)}
        />
      </Field>

      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        <Button variant="secondary" onClick={onClose}>
          {t('common.cancel')}
        </Button>
        <Button type="submit" disabled={busy}>
          {existing ? t('interview.saveChanges') : t('interview.save')}
        </Button>
      </div>
    </form>
  )
}

/** Log a new interview or edit one of yours. The form remounts on every open, so it starts from `existing` / `initial`. */
export function InterviewFormModal({ open, onClose, onSave, existing, initial, defaultCompanyId }: InterviewFormModalProps) {
  const { t } = useTranslation()
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={existing ? t('interview.editTitle') : t('interview.addTitle')}
      description={t('interview.addDescription')}
    >
      <InterviewForm existing={existing} initial={initial} defaultCompanyId={defaultCompanyId} onSave={onSave} onClose={onClose} />
    </Modal>
  )
}
