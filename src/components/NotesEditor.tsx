import { Check, StickyNote } from 'lucide-react'
import type { Question } from '../types'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import { useUserData } from '../state/user-data-context'
import { Textarea } from './ui/Field'

interface NotesEditorProps {
  questionId: Question['id']
  /** Smaller textarea, for use inside the practice card. */
  compact?: boolean
}

/** Personal note for one question. Saves on every keystroke through UserDataProvider. */
export function NotesEditor({ questionId, compact = false }: NotesEditorProps) {
  const { t } = useTranslation()
  const { notes, setNote } = useUserData()
  const value = notes[questionId] ?? ''

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
          <StickyNote aria-hidden className="size-3.5" />
          {t('notes.title')}
        </p>
        {value.trim() && (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
            <Check aria-hidden className="size-3.5" />
            {t('notes.saved')}
          </span>
        )}
      </div>
      <Textarea
        dir="auto"
        aria-label={t('notes.title')}
        value={value}
        onChange={(event) => setNote(questionId, event.target.value)}
        placeholder={t('notes.placeholder')}
        className={cn('mt-2', compact ? 'min-h-20' : 'min-h-28')}
      />
      <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{t('notes.hint')}</p>
    </div>
  )
}
