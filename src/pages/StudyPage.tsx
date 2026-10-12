import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { BookMarked, Check, ExternalLink, Layers, Pencil, Play, Plus, RotateCcw, Trash2, X } from 'lucide-react'
import { FlashcardModal } from '../components/FlashcardModal'
import { PageHeader } from '../components/PageHeader'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { ProgressBar } from '../components/ui/ProgressBar'
import { getQuestion, getQuestionsByIds } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import { useUserData } from '../state/user-data-context'
import { FLASHCARD_KINDS, type BadgeTone, type Flashcard, type FlashcardDraft, type FlashcardKind } from '../types'

const kindTone: Record<FlashcardKind, BadgeTone> = {
  mistake: 'rose',
  remember: 'sky',
  approach: 'emerald',
  custom: 'slate',
}

const THREE_DAYS = 3 * 24 * 60 * 60 * 1000

/** Never reviewed, missed last time, or not seen for three days. */
function isDue(card: Flashcard, now: number): boolean {
  if (!card.lastReviewedAt) return true
  if (card.lastResult === 'again') return true
  return now - new Date(card.lastReviewedAt).getTime() > THREE_DAYS
}

// ---------- Review mode ----------

function ReviewSession({ cards, onExit }: { cards: Flashcard[]; onExit: () => void }) {
  const { t, localize } = useTranslation()
  const { reviewCard } = useUserData()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const total = cards.length
  const current: Flashcard | undefined = cards[index]

  const answer = (result: 'again' | 'good') => {
    if (current) void reviewCard(current.id, result)
    setFlipped(false)
    setIndex((previous) => previous + 1)
  }

  if (!current) {
    return (
      <Card className="p-8 text-center sm:p-12">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
          <Check aria-hidden className="size-8" />
        </div>
        <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{t('study.reviewDone')}</h2>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{t('study.reviewDoneHint', { count: total })}</p>
        <div className="mt-8 flex justify-center">
          <Button variant="secondary" onClick={onExit}>
            <RotateCcw aria-hidden className="size-4" />
            {t('study.backToList')}
          </Button>
        </div>
      </Card>
    )
  }

  const linked = current.questionId ? getQuestion(current.questionId) : undefined

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <div className="flex items-end justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('study.progress', { current: index + 1, total })}</p>
          <Button variant="ghost" size="sm" onClick={onExit}>
            <X aria-hidden className="size-4" />
            {t('study.backToList')}
          </Button>
        </div>
        <ProgressBar value={(index / total) * 100} className="mt-3" label={t('study.progress', { current: index + 1, total })} />
      </div>

      <Card className="p-6 sm:p-10">
        <Badge tone={kindTone[current.kind]}>{t(`kind.${current.kind}`)}</Badge>
        <p dir="auto" className="mt-5 text-xl leading-snug font-semibold text-slate-900 whitespace-pre-line rtl:text-right sm:text-2xl dark:text-slate-100">
          {current.front}
        </p>

        {flipped ? (
          <div className="mt-6 animate-fade-in">
            <div
              dir="auto"
              className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-[15px] leading-relaxed text-slate-700 whitespace-pre-line sm:p-5 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
            >
              {current.back}
            </div>
            {linked && (
              <Link
                to={`/questions/${linked.id}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
              >
                <ExternalLink aria-hidden className="size-4" />
                {localize(linked.text)}
              </Link>
            )}
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => answer('again')}
                className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-3 text-sm font-medium text-rose-700 transition-colors hover:bg-rose-100 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20"
              >
                {t('study.again')}
              </button>
              <button
                type="button"
                onClick={() => answer('good')}
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300 dark:hover:bg-emerald-500/20"
              >
                {t('study.good')}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => setFlipped(true)}>
              {t('study.flip')}
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}

// ---------- Page ----------

export function StudyPage() {
  const { t, localize, plural } = useTranslation()
  const { cards, flaggedIds, notes, addCard, updateCard, deleteCard } = useUserData()
  const [reviewing, setReviewing] = useState(false)
  const [filter, setFilter] = useState<FlashcardKind | 'all'>('all')
  const [modal, setModal] = useState<{ open: boolean; existing?: Flashcard }>({ open: false })
  const [created, setCreated] = useState<number | null>(null)
  // Fixed at mount: "due" is judged against the moment the page opened.
  const [now] = useState(() => Date.now())

  const due = useMemo(() => cards.filter((card) => isDue(card, now)), [cards, now])
  const visible = useMemo(
    () => [...cards].filter((card) => filter === 'all' || card.kind === filter).reverse(),
    [cards, filter],
  )

  /** One "remember" card per flagged question that does not have a card yet. */
  const createFromFlagged = async () => {
    const covered = new Set(cards.map((card) => card.questionId).filter(Boolean))
    const missing = getQuestionsByIds(flaggedIds).filter((question) => !covered.has(question.id))
    for (const question of missing) {
      const note = notes[question.id]
      const back = [question.answer ? localize(question.answer) : '', note ? `\n${note}` : ''].join('\n').trim()
      await addCard({ kind: 'remember', front: localize(question.text), back: back || localize(question.text), questionId: question.id })
    }
    setCreated(missing.length)
  }

  if (reviewing) {
    return <ReviewSession cards={due} onExit={() => setReviewing(false)} />
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('study.title')}
        description={t('study.subtitle')}
        action={
          <Button onClick={() => setModal({ open: true })} className="w-full sm:w-auto">
            <Plus aria-hidden className="size-4" />
            {t('study.add')}
          </Button>
        }
      />

      <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            <BookMarked aria-hidden className="size-5" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              {t('study.due')}{' '}
              <span className="font-normal text-slate-400 dark:text-slate-500">({due.length})</span>
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{due.length > 0 ? t('study.dueHint') : t('study.dueNone')}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          {flaggedIds.length > 0 && (
            <Button variant="secondary" onClick={createFromFlagged}>
              <Layers aria-hidden className="size-4" />
              {t('study.fromFlagged')}
            </Button>
          )}
          <Button onClick={() => setReviewing(true)} disabled={due.length === 0}>
            <Play aria-hidden className="size-4 fill-current" />
            {t('study.start')}
          </Button>
        </div>
      </Card>

      {created !== null && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {created > 0 ? t('study.fromFlaggedDone', { count: created }) : t('study.fromFlaggedNone')}
        </p>
      )}

      <section>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {t('study.all')}{' '}
            <span className="font-normal text-slate-400 dark:text-slate-500">
              ({plural(cards.length, 'study.card', 'study.cards')})
            </span>
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {(['all', ...FLASHCARD_KINDS] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                  filter === option
                    ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500/60 dark:bg-brand-500/15 dark:text-brand-300'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
                )}
              >
                {option === 'all' ? t('study.filterAll') : t(`kind.${option}`)}
              </button>
            ))}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {visible.map((card) => {
              const linked = card.questionId ? getQuestion(card.questionId) : undefined
              return (
                <Card key={card.id} className="flex flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <Badge tone={kindTone[card.kind]}>{t(`kind.${card.kind}`)}</Badge>
                    <div className="flex shrink-0 gap-1">
                      <button
                        type="button"
                        onClick={() => setModal({ open: true, existing: card })}
                        aria-label={t('study.edit')}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      >
                        <Pencil aria-hidden className="size-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => void deleteCard(card.id)}
                        aria-label={t('study.delete')}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-300"
                      >
                        <Trash2 aria-hidden className="size-4" />
                      </button>
                    </div>
                  </div>
                  <p dir="auto" className="mt-3 font-semibold text-slate-900 whitespace-pre-line rtl:text-right dark:text-slate-100">
                    {card.front}
                  </p>
                  <p dir="auto" className="mt-2 line-clamp-4 text-sm leading-relaxed text-slate-600 whitespace-pre-line rtl:text-right dark:text-slate-300">
                    {card.back}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    <span>
                      {card.reviews === 0 ? t('study.never') : t('study.reviews', { count: card.reviews })}
                    </span>
                    {linked && (
                      <Link to={`/questions/${linked.id}`} className="inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">
                        <ExternalLink aria-hidden className="size-3.5" />
                        {t('study.linkedQuestion')}
                      </Link>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        ) : (
          <EmptyState
            className="mt-4"
            icon={<BookMarked aria-hidden className="size-6" />}
            title={t('study.title')}
            description={t('study.empty')}
            action={
              <Button onClick={() => setModal({ open: true })}>
                <Plus aria-hidden className="size-4" />
                {t('study.add')}
              </Button>
            }
          />
        )}
      </section>

      <FlashcardModal
        open={modal.open}
        existing={modal.existing}
        onClose={() => setModal({ open: false })}
        onSave={async (draft: FlashcardDraft) => {
          if (modal.existing) await updateCard(modal.existing.id, draft)
          else await addCard(draft)
        }}
      />
    </div>
  )
}
