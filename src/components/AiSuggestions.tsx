import { useMemo, useState } from 'react'
import { Check, Plus, Sparkles } from 'lucide-react'
import { ApiError, api } from '../api/client'
import { getCompany, getQuestionsAskedAtCompany, getRole, getTopicMap, getTopics } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { textDirection } from '../lib/utils'
import { useCatalog } from '../state/catalog-context'
import type { PracticeContext } from '../state/usePracticeContext'
import { useUserData } from '../state/user-data-context'
import type { GeneratedQuestion, QuestionDraft } from '../types'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

type Status =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'error'; code: 'ai_not_configured' | 'ai_failed' }
  | { kind: 'done'; questions: GeneratedQuestion[]; model: string }

interface GenerateResponse {
  questions: GeneratedQuestion[]
  model: string
}

/**
 * "More questions in this interview's style": asks the server's AI helper for
 * new questions built from the practice context, and lets the user save the
 * good ones to their bank (where they join practice and predictions).
 */
export function AiSuggestions({ context }: { context: PracticeContext }) {
  const { t, localize, language } = useTranslation()
  const { questions, interviews } = useCatalog()
  // Generated text exists in both languages, so it follows the UI language.
  const direction = textDirection(false, language)
  const { addQuestion } = useUserData()
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [saved, setSaved] = useState<ReadonlySet<number>>(new Set())
  const [savingAll, setSavingAll] = useState(false)

  const topics = useMemo(() => getTopicMap(), [])
  const role = context.roleId ? getRole(context.roleId) : undefined
  const company = context.prefs.companyId ? getCompany(context.prefs.companyId) : undefined
  const canGenerate = Boolean(role || company)

  const generate = async () => {
    setStatus({ kind: 'loading' })
    setSaved(new Set())
    // The style to imitate: what this company actually asked, plus the user's own questions.
    const askedHere = company ? getQuestionsAskedAtCompany(interviews, company.id) : []
    const examples = [...new Set([...askedHere, ...questions.filter((question) => question.custom)].map((q) => q.text.en))]
    try {
      const result = await api.post<GenerateResponse>('/api/me/ai/questions', {
        role: role ? { name: role.name.en, description: role.description.en } : null,
        company: company ? { name: company.name.en, about: company.about.en, tips: company.tips.en } : null,
        position: context.nextTarget?.position ?? '',
        requirements: context.nextTarget?.requirements ?? '',
        languages: context.prefs.languages.map((id) => topics.get(id)?.name.en ?? id),
        emphasis: context.prefs.emphasis,
        topics: getTopics().map((topic) => ({ id: topic.id, name: topic.name.en })),
        avoid: questions.map((question) => question.text.en),
        examples: examples.slice(0, 12),
        count: 8,
      })
      setStatus({ kind: 'done', questions: result.questions, model: result.model })
    } catch (error) {
      const notConfigured = error instanceof ApiError && error.code === 'ai_not_configured'
      setStatus({ kind: 'error', code: notConfigured ? 'ai_not_configured' : 'ai_failed' })
    }
  }

  const toDraft = (suggestion: GeneratedQuestion): QuestionDraft => ({
    text: suggestion.text.en,
    textHe: suggestion.text.he,
    topicId: suggestion.topicId,
    roleIds: role ? [role.id] : [],
    type: suggestion.type,
    difficulty: suggestion.difficulty,
    answer: suggestion.answer.en,
    answerHe: suggestion.answer.he,
    codeSolutions: suggestion.code ? [suggestion.code] : undefined,
    generated: true,
  })

  const save = async (index: number) => {
    if (status.kind !== 'done') return
    await addQuestion(toDraft(status.questions[index]))
    setSaved((previous) => new Set(previous).add(index))
  }

  const saveAll = async () => {
    if (status.kind !== 'done') return
    setSavingAll(true)
    try {
      for (let index = 0; index < status.questions.length; index += 1) {
        if (!saved.has(index)) await save(index)
      }
    } finally {
      setSavingAll(false)
    }
  }

  const buttonLabel =
    status.kind === 'loading' ? t('ai.generating') : status.kind === 'done' ? t('ai.regenerate') : t('ai.generate')

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300">
            <Sparkles aria-hidden className="size-4" />
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">{t('ai.title')}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('ai.subtitle')}</p>
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={() => void generate()}
          disabled={!canGenerate || status.kind === 'loading'}
          className="w-full sm:w-auto"
        >
          <Sparkles aria-hidden className="size-4" />
          {buttonLabel}
        </Button>
      </div>

      {!canGenerate && <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('ai.needContext')}</p>}

      {status.kind === 'error' && (
        <p
          role="alert"
          className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200"
        >
          {t(status.code === 'ai_not_configured' ? 'ai.notConfigured' : 'ai.failed')}
        </p>
      )}

      {status.kind === 'done' &&
        (status.questions.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('ai.failed')}</p>
        ) : (
          <>
            <ol className="mt-5 space-y-3">
              {status.questions.map((suggestion, index) => {
                const topic = topics.get(suggestion.topicId)
                const isSaved = saved.has(index)
                return (
                  <li key={`${index}-${suggestion.text.en}`} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge tone={suggestion.likelihood === 'high' ? 'emerald' : 'amber'} dot>
                        {t(`ai.likelihood.${suggestion.likelihood}`)}
                      </Badge>
                      {topic && <Badge tone={topic.color}>{localize(topic.name)}</Badge>}
                      <Badge>{t(`type.${suggestion.type}`)}</Badge>
                      <Badge>{t(`difficulty.${suggestion.difficulty}`)}</Badge>
                    </div>
                    <p dir={direction} className="mt-2 font-medium leading-snug text-slate-900 rtl:text-right dark:text-slate-100">
                      {localize(suggestion.text)}
                    </p>
                    {suggestion.why.en && (
                      <p dir={direction} className="mt-1 text-sm text-slate-500 rtl:text-right dark:text-slate-400">
                        <span className="font-medium">{t('ai.why')}:</span> {localize(suggestion.why)}
                      </p>
                    )}
                    {suggestion.answer.en && (
                      <details className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        <summary className="cursor-pointer font-medium text-brand-600 dark:text-brand-400">{t('ai.answer')}</summary>
                        <p dir={direction} className="mt-2 leading-relaxed whitespace-pre-line rtl:text-right">
                          {localize(suggestion.answer)}
                        </p>
                        {suggestion.code && (
                          <pre dir="ltr" className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs leading-relaxed text-slate-100">
                            <code>{suggestion.code.code}</code>
                          </pre>
                        )}
                      </details>
                    )}
                    <div className="mt-3 flex justify-end">
                      <Button size="sm" variant={isSaved ? 'ghost' : 'secondary'} disabled={isSaved} onClick={() => void save(index)}>
                        {isSaved ? <Check aria-hidden className="size-4" /> : <Plus aria-hidden className="size-4" />}
                        {isSaved ? t('ai.saved') : t('ai.save')}
                      </Button>
                    </div>
                  </li>
                )
              })}
            </ol>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('ai.model', { model: status.model })}</p>
              <Button size="sm" onClick={() => void saveAll()} disabled={savingAll || saved.size === status.questions.length}>
                <Plus aria-hidden className="size-4" />
                {t('ai.saveAll')}
              </Button>
            </div>
          </>
        ))}
    </Card>
  )
}
