import { useMemo, useState, type FormEvent } from 'react'
import { getQuestions } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import { useUserData } from '../state/user-data-context'
import { FLASHCARD_KINDS, type Flashcard, type FlashcardDraft, type FlashcardKind } from '../types'
import { Button } from './ui/Button'
import { Field, Select, Textarea } from './ui/Field'
import { Modal } from './ui/Modal'

interface FlashcardModalProps {
  open: boolean
  onClose: () => void
  /** Prefilled values for a new card, e.g. from a question. */
  initial?: Partial<FlashcardDraft>
  /** When set, the modal edits this card instead of creating one. */
  existing?: Flashcard
  onSave: (draft: FlashcardDraft) => Promise<void>
}

const chipBase =
  'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
const chipActive =
  'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500/60 dark:bg-brand-500/15 dark:text-brand-300'
const chipIdle =
  'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'

interface FlashcardFormProps {
  source: Partial<FlashcardDraft> | undefined
  isEdit: boolean
  onSave: (draft: FlashcardDraft) => Promise<void>
  onClose: () => void
}

/** The form itself. It mounts when the modal opens, so its state starts from `source` every time. */
function FlashcardForm({ source, isEdit, onSave, onClose }: FlashcardFormProps) {
  const { t, localize } = useTranslation()
  const { flaggedIds } = useUserData()
  const [kind, setKind] = useState<FlashcardKind>(source?.kind ?? 'remember')
  const [front, setFront] = useState(source?.front ?? '')
  const [back, setBack] = useState(source?.back ?? '')
  const [questionId, setQuestionId] = useState(source?.questionId ?? '')
  const [busy, setBusy] = useState(false)

  // Flagged questions first, so the ones worth a card are at the top of the list.
  const questions = useMemo(() => {
    const flagged = new Set(flaggedIds)
    return [...getQuestions()].sort((a, b) => Number(flagged.has(b.id)) - Number(flagged.has(a.id)))
  }, [flaggedIds])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!front.trim() || !back.trim()) return
    setBusy(true)
    try {
      await onSave({ kind, front: front.trim(), back: back.trim(), questionId: questionId || undefined })
      onClose()
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <fieldset>
        <legend className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">{t('study.kind')}</legend>
        <div className="flex flex-wrap gap-1.5">
          {FLASHCARD_KINDS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={kind === option}
              onClick={() => setKind(option)}
              className={cn(chipBase, kind === option ? chipActive : chipIdle)}
            >
              {t(`kind.${option}`)}
            </button>
          ))}
        </div>
      </fieldset>

      <Field label={t('study.front')} htmlFor="card-front">
        <Textarea
          id="card-front"
          dir="auto"
          required
          placeholder={t('study.frontPlaceholder')}
          value={front}
          onChange={(event) => setFront(event.target.value)}
          className="min-h-20"
        />
      </Field>

      <Field label={t('study.back')} htmlFor="card-back">
        <Textarea
          id="card-back"
          dir="auto"
          required
          placeholder={t('study.backPlaceholder')}
          value={back}
          onChange={(event) => setBack(event.target.value)}
          className="min-h-32"
        />
      </Field>

      <Field label={t('study.linkedQuestion')} htmlFor="card-question">
        <Select id="card-question" value={questionId} onChange={(event) => setQuestionId(event.target.value)}>
          <option value="">{t('study.noQuestion')}</option>
          {questions.map((question) => (
            <option key={question.id} value={question.id}>
              {localize(question.text)}
            </option>
          ))}
        </Select>
      </Field>

      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        <Button variant="secondary" onClick={onClose}>
          {t('common.cancel')}
        </Button>
        <Button type="submit" disabled={busy}>
          {isEdit ? t('study.edit') : t('study.add')}
        </Button>
      </div>
    </form>
  )
}

export function FlashcardModal({ open, onClose, initial, existing, onSave }: FlashcardModalProps) {
  const { t } = useTranslation()
  return (
    <Modal open={open} onClose={onClose} title={existing ? t('study.editTitle') : t('study.addTitle')}>
      {/* The Modal renders nothing when closed, so the form remounts with fresh values on every open. */}
      <FlashcardForm source={existing ?? initial} isEdit={Boolean(existing)} onSave={onSave} onClose={onClose} />
    </Modal>
  )
}
