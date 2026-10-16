import { useState } from 'react'
import { AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Eye, History, Loader2, MinusCircle, Sparkles, XCircle } from 'lucide-react'
import { ApiError } from '../api/client'
import { useTranslation } from '../i18n/useTranslation'
import { cn, formatDate, textDirection } from '../lib/utils'
import { useUserData } from '../state/user-data-context'
import type { AnswerAttempt, AnswerEvaluation, AnswerVerdict, BadgeTone, Question } from '../types'
import { AnswerText } from './AnswerText'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Textarea } from './ui/Field'

interface AnswerWorkspaceProps {
  question: Question
  /** Whether the recommended answer is already shown below (the parent owns that state). */
  revealed: boolean
  onReveal: () => void
  /** One-line tip under the textarea ("try answering out loud first..."). */
  hint: string
  /** Interview context passed to the grader, in English. */
  roleName?: string
  companyName?: string
}

type Status = { kind: 'idle' } | { kind: 'loading' } | { kind: 'error'; code: 'ai_not_configured' | 'ai_failed' | 'rate_limited' }

const MAX_ANSWER_LENGTH = 4000

const verdictTone: Record<AnswerVerdict, BadgeTone> = {
  incorrect: 'rose',
  partially_correct: 'amber',
  mostly_correct: 'sky',
  correct: 'emerald',
}

function scoreColour(score: number): string {
  if (score >= 85) return 'text-emerald-600 dark:text-emerald-400'
  if (score >= 65) return 'text-sky-600 dark:text-sky-400'
  if (score >= 35) return 'text-amber-600 dark:text-amber-400'
  return 'text-rose-600 dark:text-rose-400'
}

/** One list of points with its own icon and colour; renders nothing when the list is empty. */
function PointList({ title, points, icon, className }: { title: string; points: string[]; icon: React.ReactNode; className: string }) {
  if (points.length === 0) return null
  return (
    <div>
      <p className={cn('inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase', className)}>
        {icon}
        {title}
      </p>
      <ul className="mt-1.5 list-disc space-y-1 ps-5 text-sm text-slate-700 dark:text-slate-300">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

/** The graded result, as learning-friendly sections rather than a bare number. */
function FeedbackPanel({ evaluation, previousScore }: { evaluation: AnswerEvaluation; previousScore: number | null }) {
  const { t, language } = useTranslation()
  const dir = textDirection(false, language)
  return (
    <div dir={dir} className="mt-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-700 dark:bg-slate-900/60">
      <div className="flex flex-wrap items-center gap-2">
        <Sparkles aria-hidden className="size-4 text-brand-600 dark:text-brand-400" />
        <h3 className="font-semibold text-slate-900 dark:text-slate-100">{t('answer.feedbackTitle')}</h3>
        <Badge tone={verdictTone[evaluation.verdict]} dot>
          {t(`answer.verdict.${evaluation.verdict}`)}
        </Badge>
        <span className={cn('ms-auto text-lg font-bold tabular-nums', scoreColour(evaluation.score))}>
          {t('answer.score', { score: evaluation.score })}
        </span>
      </div>
      {previousScore !== null && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {t('answer.previousScore', { score: previousScore })} · {t('answer.currentScore', { score: evaluation.score })}
        </p>
      )}

      <div className="mt-4 space-y-4">
        <PointList
          title={t('answer.correctPoints')}
          points={evaluation.strengths}
          icon={<CheckCircle2 aria-hidden className="size-3.5" />}
          className="text-emerald-700 dark:text-emerald-400"
        />
        <PointList
          title={t('answer.missingPoints')}
          points={evaluation.missingPoints}
          icon={<MinusCircle aria-hidden className="size-3.5" />}
          className="text-amber-700 dark:text-amber-400"
        />
        <PointList
          title={t('answer.incorrectPoints')}
          points={evaluation.incorrectPoints}
          icon={<XCircle aria-hidden className="size-3.5" />}
          className="text-rose-700 dark:text-rose-400"
        />
        {evaluation.feedback && (
          <div>
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('answer.howToImprove')}</p>
            <AnswerText text={evaluation.feedback} dir={dir} className="mt-1.5 text-sm text-slate-700 dark:text-slate-300" />
          </div>
        )}
        {evaluation.improvedAnswer && (
          <details className="group rounded-lg border border-slate-200 dark:border-slate-700">
            <summary className="cursor-pointer list-none px-3 py-2 text-sm font-medium text-brand-700 dark:text-brand-300">
              <span className="inline-flex items-center gap-1.5">
                <ChevronDown aria-hidden className="size-4 transition-transform group-open:rotate-180" />
                {t('answer.improved')}
              </span>
            </summary>
            <AnswerText
              text={evaluation.improvedAnswer}
              dir={dir}
              className="border-t border-slate-200 px-3 py-3 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
            />
          </details>
        )}
      </div>
    </div>
  )
}

/** Earlier attempts at the same question, loaded on demand. */
function PreviousAttempts({ attempts }: { attempts: AnswerAttempt[] }) {
  const { t, language } = useTranslation()
  const [open, setOpen] = useState<string | null>(null)
  return (
    <ul className="mt-3 space-y-2">
      {attempts.map((attempt) => {
        const expanded = open === attempt.id
        return (
          <li key={attempt.id} className="rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : attempt.id)}
              aria-expanded={expanded}
              className="flex w-full items-center gap-3 px-3 py-2 text-start text-sm"
            >
              <span className={cn('font-bold tabular-nums', scoreColour(attempt.score))}>{attempt.score}%</span>
              <Badge tone={verdictTone[attempt.verdict]}>{t(`answer.verdict.${attempt.verdict}`)}</Badge>
              <span className="ms-auto text-xs text-slate-500 dark:text-slate-400">{formatDate(attempt.createdAt.slice(0, 10), language)}</span>
              {expanded ? <ChevronUp aria-hidden className="size-4 text-slate-400" /> : <ChevronDown aria-hidden className="size-4 text-slate-400" />}
            </button>
            {expanded && (
              <div className="space-y-3 border-t border-slate-200 px-3 py-3 dark:border-slate-700">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('answer.yourAnswer')}</p>
                  <p dir="auto" className="mt-1 text-sm whitespace-pre-line text-slate-700 dark:text-slate-300">
                    {attempt.answer}
                  </p>
                </div>
                {attempt.evaluation.feedback && (
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t('answer.howToImprove')}</p>
                    <p dir={textDirection(false, language)} className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      {attempt.evaluation.feedback}
                    </p>
                  </div>
                )}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

/**
 * "My answer": the user's own attempt at the question, graded by the AI against
 * the recommended answer. Separate from "My notes" (reminders for later), which
 * the parent renders further down.
 */
export function AnswerWorkspace({ question, revealed, onReveal, hint, roleName, companyName }: AnswerWorkspaceProps) {
  const { t, localize, language } = useTranslation()
  const { attemptSummaries, evaluateAnswer, loadAttempts } = useUserData()
  const summary = attemptSummaries[question.id]

  const [answer, setAnswer] = useState('')
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [attempt, setAttempt] = useState<AnswerAttempt | null>(null)
  // The score before this session's attempt, for the "Previous / Current" line.
  const [previousScore, setPreviousScore] = useState<number | null>(null)
  const [history, setHistory] = useState<AnswerAttempt[] | null>(null)
  const [historyOpen, setHistoryOpen] = useState(false)

  const canCheck = answer.trim().length > 0 && status.kind !== 'loading'

  const check = async () => {
    if (!canCheck) return
    setStatus({ kind: 'loading' })
    setPreviousScore(summary?.latestScore ?? null)
    try {
      const result = await evaluateAnswer({
        questionId: question.id,
        questionText: localize(question.text),
        referenceAnswer: question.answer ? localize(question.answer) : '',
        userAnswer: answer.trim(),
        type: question.type,
        topic: question.topicId,
        difficulty: question.difficulty,
        language,
        codeSolutions: question.codeSolutions ?? [],
        role: roleName ?? '',
        company: companyName ?? '',
      })
      setAttempt(result)
      setHistory((current) => (current ? [result, ...current] : current))
      setStatus({ kind: 'idle' })
      onReveal() // the recommended answer follows the feedback
    } catch (error) {
      const code =
        error instanceof ApiError && (error.code === 'ai_not_configured' || error.code === 'rate_limited') ? error.code : 'ai_failed'
      setStatus({ kind: 'error', code }) // the typed answer stays in the box
    }
  }

  const toggleHistory = async () => {
    if (!historyOpen && history === null) {
      try {
        setHistory(await loadAttempts(question.id))
      } catch {
        setHistory([])
      }
    }
    setHistoryOpen((open) => !open)
  }

  const errorKey = status.kind === 'error' ? (`answer.${status.code === 'ai_not_configured' ? 'notConfigured' : status.code === 'rate_limited' ? 'rateLimited' : 'failed'}` as const) : null

  return (
    <section className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/40 p-4 sm:p-5 dark:border-brand-500/20 dark:bg-brand-500/5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label htmlFor={`answer-${question.id}`} className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {t('answer.title')}
        </label>
        {summary && (
          <button
            type="button"
            onClick={() => void toggleHistory()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <History aria-hidden className="size-3.5" />
            {t('answer.answeredBefore')} ·{' '}
            {summary.attempts === 1
              ? t('answer.attemptsSummaryOne', { best: summary.bestScore })
              : t('answer.attemptsSummary', { count: summary.attempts, best: summary.bestScore })}
            {historyOpen ? <ChevronUp aria-hidden className="size-3.5" /> : <ChevronDown aria-hidden className="size-3.5" />}
          </button>
        )}
      </div>

      {historyOpen && history && history.length > 0 && <PreviousAttempts attempts={history} />}

      <Textarea
        id={`answer-${question.id}`}
        dir="auto"
        value={answer}
        maxLength={MAX_ANSWER_LENGTH}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder={t('answer.placeholder')}
        disabled={status.kind === 'loading'}
        className="mt-3 min-h-32 bg-white dark:bg-slate-800"
      />
      <div className="mt-1.5 flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>{hint}</span>
        <span className="tabular-nums">
          {answer.length}/{MAX_ANSWER_LENGTH}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <Button onClick={() => void check()} disabled={!canCheck} aria-busy={status.kind === 'loading'}>
          {status.kind === 'loading' ? <Loader2 aria-hidden className="size-4 animate-spin" /> : <Sparkles aria-hidden className="size-4" />}
          {status.kind === 'loading' ? t('answer.checking') : t('answer.check')}
        </Button>
        {!revealed && (
          <Button variant="secondary" onClick={onReveal}>
            <Eye aria-hidden className="size-4" />
            {t('answer.showRecommended')}
          </Button>
        )}
      </div>

      {errorKey && (
        <p
          role="alert"
          className="mt-3 inline-flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200"
        >
          <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0" />
          {t(errorKey)}
        </p>
      )}

      {attempt && <FeedbackPanel evaluation={attempt.evaluation} previousScore={previousScore} />}
    </section>
  )
}
