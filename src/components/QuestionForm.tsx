import { useState, type FormEvent } from 'react'
import { draftFromQuestion, emptyQuestionDraft, finaliseQuestionDraft } from '../data/question-draft'
import { getRoles, getTopics } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import {
  CODE_LANGUAGES,
  DIFFICULTY_LEVELS,
  QUESTION_TYPES,
  type CodeLanguage,
  type CodeSnippet,
  type Question,
  type QuestionDraft,
  type Role,
} from '../types'
import { Button } from './ui/Button'
import { Field, Select, Textarea } from './ui/Field'
import { Modal } from './ui/Modal'

const LANGUAGE_LABELS: Record<CodeLanguage, string> = {
  c: 'C',
  cpp: 'C++',
  java: 'Java',
  python: 'Python',
  javascript: 'JavaScript',
  sql: 'SQL',
  bash: 'Bash',
}

const chipBase =
  'rounded-full border px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
const chipActive =
  'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500/60 dark:bg-brand-500/15 dark:text-brand-300'
const chipIdle =
  'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'

interface QuestionFieldsProps {
  draft: QuestionDraft
  onChange: (draft: QuestionDraft) => void
  /** Prefix for element ids, so two forms on one page do not collide. */
  idPrefix?: string
}

/** The fields of a question: text, topic, type, difficulty, roles, answer and one optional code block. */
export function QuestionFields({ draft, onChange, idPrefix = 'question' }: QuestionFieldsProps) {
  const { t, localize } = useTranslation()
  const topics = getTopics()
  const roles = getRoles()
  const snippet: CodeSnippet = draft.codeSolutions?.[0] ?? { language: 'python', code: '' }

  const update = <K extends keyof QuestionDraft>(key: K, value: QuestionDraft[K]) => onChange({ ...draft, [key]: value })

  const toggleRole = (roleId: Role['id']) => {
    update('roleIds', draft.roleIds.includes(roleId) ? draft.roleIds.filter((id) => id !== roleId) : [...draft.roleIds, roleId])
  }

  return (
    <div className="space-y-4">
      <Field label={t('questionForm.text')} htmlFor={`${idPrefix}-text`}>
        <Textarea
          id={`${idPrefix}-text`}
          dir="auto"
          required
          placeholder={t('questionForm.textPlaceholder')}
          value={draft.text}
          onChange={(event) => update('text', event.target.value)}
          className="min-h-20"
        />
      </Field>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Field label={t('questionForm.topic')} htmlFor={`${idPrefix}-topic`}>
          <Select id={`${idPrefix}-topic`} value={draft.topicId} onChange={(event) => update('topicId', event.target.value)}>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {localize(topic.name)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={t('questionForm.type')} htmlFor={`${idPrefix}-type`}>
          <Select
            id={`${idPrefix}-type`}
            value={draft.type}
            onChange={(event) => {
              const value = event.target.value
              if ((QUESTION_TYPES as readonly string[]).includes(value)) update('type', value as QuestionDraft['type'])
            }}
          >
            {QUESTION_TYPES.map((type) => (
              <option key={type} value={type}>
                {t(`type.${type}`)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={t('questionForm.difficulty')} htmlFor={`${idPrefix}-difficulty`}>
          <Select
            id={`${idPrefix}-difficulty`}
            value={draft.difficulty}
            onChange={(event) => {
              const value = event.target.value
              if ((DIFFICULTY_LEVELS as readonly string[]).includes(value)) update('difficulty', value as QuestionDraft['difficulty'])
            }}
          >
            {DIFFICULTY_LEVELS.map((level) => (
              <option key={level} value={level}>
                {t(`difficulty.${level}`)}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">{t('questionForm.roles')}</legend>
        <div className="flex flex-wrap gap-1.5">
          {roles.map((role) => {
            const active = draft.roleIds.includes(role.id)
            return (
              <button
                key={role.id}
                type="button"
                aria-pressed={active}
                onClick={() => toggleRole(role.id)}
                className={cn(chipBase, active ? chipActive : chipIdle)}
              >
                {localize(role.name)}
              </button>
            )
          })}
        </div>
      </fieldset>

      <Field label={t('questionForm.answer')} htmlFor={`${idPrefix}-answer`} hint={t('questionForm.answerHint')}>
        <Textarea
          id={`${idPrefix}-answer`}
          dir="auto"
          placeholder={t('questionForm.answerPlaceholder')}
          value={draft.answer ?? ''}
          onChange={(event) => update('answer', event.target.value)}
          className="min-h-24"
        />
      </Field>

      <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor={`${idPrefix}-code`} className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t('questionForm.code')}
          </label>
          <Select
            aria-label={t('questionForm.codeLanguage')}
            value={snippet.language}
            onChange={(event) => {
              const value = event.target.value
              if ((CODE_LANGUAGES as readonly string[]).includes(value)) {
                update('codeSolutions', [{ ...snippet, language: value as CodeLanguage }])
              }
            }}
            className="w-auto py-1.5 text-xs"
          >
            {CODE_LANGUAGES.map((language) => (
              <option key={language} value={language}>
                {LANGUAGE_LABELS[language]}
              </option>
            ))}
          </Select>
        </div>
        <Textarea
          id={`${idPrefix}-code`}
          dir="ltr"
          spellCheck={false}
          placeholder={t('questionForm.codePlaceholder')}
          value={snippet.code}
          onChange={(event) => update('codeSolutions', [{ ...snippet, code: event.target.value }])}
          className="mt-2 min-h-28 font-mono text-xs"
        />
      </div>
    </div>
  )
}

interface QuestionFormModalProps {
  open: boolean
  onClose: () => void
  /** When set, the modal edits this question instead of creating one. */
  existing?: Question
  /** Starting values for a new question, e.g. the current role. */
  initial?: Partial<QuestionDraft>
  onSave: (draft: QuestionDraft) => Promise<void>
}

function QuestionForm({
  existing,
  initial,
  onSave,
  onClose,
}: Pick<QuestionFormModalProps, 'existing' | 'initial' | 'onSave' | 'onClose'>) {
  const { t } = useTranslation()
  const [draft, setDraft] = useState<QuestionDraft>(() =>
    existing ? draftFromQuestion(existing) : { ...emptyQuestionDraft(null), ...initial },
  )
  const [busy, setBusy] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!draft.text.trim()) return
    setBusy(true)
    try {
      await onSave(finaliseQuestionDraft(draft))
      onClose()
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <QuestionFields draft={draft} onChange={setDraft} />
      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        <Button variant="secondary" onClick={onClose}>
          {t('common.cancel')}
        </Button>
        <Button type="submit" disabled={busy}>
          {existing ? t('questionForm.saveChanges') : t('questionForm.save')}
        </Button>
      </div>
    </form>
  )
}

/** Add or edit one of the user's own questions. The form remounts on every open, so it starts fresh. */
export function QuestionFormModal({ open, onClose, existing, initial, onSave }: QuestionFormModalProps) {
  const { t } = useTranslation()
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={existing ? t('questionForm.editTitle') : t('questionForm.addTitle')}
      description={t('questionForm.description')}
    >
      <QuestionForm existing={existing} initial={initial} onSave={onSave} onClose={onClose} />
    </Modal>
  )
}
