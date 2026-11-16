import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { AlertTriangle, ChevronDown, Loader2, Play, RotateCcw } from 'lucide-react'
import { ApiError, api } from '../api/client'
import { useTranslation } from '../i18n/useTranslation'
import { TEMPLATES, isEditorLanguage, isTemplate, languageLabels } from '../lib/code-languages'
import { useCodeView } from '../lib/code-view'
import { runJavaScript } from '../lib/run-javascript'
import { cn } from '../lib/utils'
import { EDITOR_LANGUAGES, type CodeLanguage, type EditorLanguage, type RunResult } from '../types'
import { CodeViewControls } from './CodeViewControls'
import { Button } from './ui/Button'

const INDENT: Record<EditorLanguage, string> = { python: '    ', java: '    ', c: '    ', cpp: '    ', javascript: '  ' }

type Drafts = Partial<Record<EditorLanguage, string>>
type RunState = { kind: 'idle' } | { kind: 'running' } | { kind: 'done'; result: RunResult } | { kind: 'error'; code: 'runner_unavailable' | 'rate_limited' | 'run_failed' }

const draftKey = (questionId: string) => `prepflow.code.${questionId}`

function readDrafts(questionId: string): { language: EditorLanguage | null; drafts: Drafts } {
  try {
    const stored = JSON.parse(localStorage.getItem(draftKey(questionId)) ?? 'null') as { language?: string; drafts?: Drafts } | null
    if (stored && typeof stored === 'object') {
      const language = (EDITOR_LANGUAGES as readonly string[]).includes(stored.language ?? '') ? (stored.language as EditorLanguage) : null
      return { language, drafts: stored.drafts ?? {} }
    }
  } catch {
    // Private mode or a broken value.
  }
  return { language: null, drafts: {} }
}

interface CodeEditorProps {
  questionId: string
  /** Language to start in when the user has no draft yet (e.g. the interview's main language). */
  preferred?: CodeLanguage | null
  disabled?: boolean
  /** Called on every change, so the parent can send the code to the grader. */
  onChange: (language: EditorLanguage, code: string) => void
}

/**
 * The practice code editor: write a solution in Python, Java, C, C++ or
 * JavaScript, give it input, and run it. Drafts stay on this device per
 * question, so leaving the page does not lose the code.
 */
export function CodeEditor({ questionId, preferred, disabled, onChange }: CodeEditorProps) {
  const { t } = useTranslation()
  const view = useCodeView()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [initial] = useState(() => readDrafts(questionId))
  const [language, setLanguage] = useState<EditorLanguage>(initial.language ?? (isEditorLanguage(preferred) ? preferred : 'python'))
  const [drafts, setDrafts] = useState<Drafts>(initial.drafts)
  const [stdin, setStdin] = useState('')
  const [inputOpen, setInputOpen] = useState(false)
  const [runState, setRunState] = useState<RunState>({ kind: 'idle' })

  const code = drafts[language] ?? TEMPLATES[language]

  // Keep the parent and the stored draft in step with what is on screen.
  useEffect(() => {
    onChange(language, code)
    try {
      localStorage.setItem(draftKey(questionId), JSON.stringify({ language, drafts }))
    } catch {
      // Not stored; the code still lives in memory.
    }
  }, [language, code, drafts, questionId, onChange])

  const setCode = (next: string) => setDrafts((current) => ({ ...current, [language]: next }))

  // Tab indents instead of leaving the box; Enter keeps the current line's indentation.
  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const box = event.currentTarget
    const { selectionStart: start, selectionEnd: end, value } = box
    let insert: string | null = null
    if (event.key === 'Tab' && !event.shiftKey) {
      insert = INDENT[language]
    } else if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      const lineStart = value.lastIndexOf('\n', start - 1) + 1
      const indent = /^[ \t]*/.exec(value.slice(lineStart, start))?.[0] ?? ''
      const opensBlock = /[:{([]\s*$/.test(value.slice(lineStart, start))
      insert = `\n${indent}${opensBlock ? INDENT[language] : ''}`
    }
    if (insert === null) return
    event.preventDefault()
    const next = value.slice(0, start) + insert + value.slice(end)
    setCode(next)
    requestAnimationFrame(() => {
      const caret = start + insert.length
      textareaRef.current?.setSelectionRange(caret, caret)
    })
  }

  const runCode = async () => {
    setRunState({ kind: 'running' })
    try {
      const result =
        language === 'javascript'
          ? await runJavaScript(code, stdin)
          : await api.post<RunResult>('/api/me/code/run', { language, source: code, stdin })
      setRunState({ kind: 'done', result })
    } catch (error) {
      const known = error instanceof ApiError && (error.code === 'runner_unavailable' || error.code === 'rate_limited') ? error.code : 'run_failed'
      setRunState({ kind: 'error', code: known })
    }
  }

  const reset = () => {
    setDrafts((current) => ({ ...current, [language]: TEMPLATES[language] }))
    setRunState({ kind: 'idle' })
  }

  const lineCount = code.split('\n').length

  return (
    <div dir="ltr" className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 dark:border-slate-700 dark:bg-slate-950">
      <div className="flex flex-wrap-reverse items-end justify-end gap-x-2 border-b border-slate-200 bg-slate-50 ps-2 pe-1 pt-1 dark:border-slate-700 dark:bg-slate-800/60">
        <div role="tablist" aria-label={t('editor.language')} className="flex min-w-0 flex-[1_1_16rem] gap-1 overflow-x-auto pt-1">
          {EDITOR_LANGUAGES.map((option) => (
            <button
              key={option}
              role="tab"
              type="button"
              aria-selected={option === language}
              onClick={() => {
                setLanguage(option)
                setRunState({ kind: 'idle' })
              }}
              className={cn(
                'shrink-0 rounded-t-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors',
                option === language
                  ? 'bg-slate-900 text-white dark:bg-slate-950'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
              )}
            >
              {languageLabels[option]}
            </button>
          ))}
        </div>
        <CodeViewControls copyText={code} className="pb-1" />
      </div>

      <textarea
        ref={textareaRef}
        value={code}
        onChange={(event) => setCode(event.target.value)}
        onKeyDown={onKeyDown}
        disabled={disabled}
        aria-label={t('editor.title')}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        wrap={view.wrap ? 'soft' : 'off'}
        rows={Math.min(24, Math.max(10, lineCount + 1))}
        style={{ fontSize: view.fontSize, tabSize: 4 }}
        className="block w-full resize-y bg-slate-900 p-4 text-left font-mono leading-relaxed text-slate-100 caret-brand-300 outline-none selection:bg-brand-500/40 dark:bg-slate-950"
      />

      <div className="space-y-3 border-t border-slate-700 bg-slate-800/80 p-3 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={() => void runCode()} disabled={disabled || runState.kind === 'running' || !code.trim()}>
            {runState.kind === 'running' ? <Loader2 aria-hidden className="size-4 animate-spin" /> : <Play aria-hidden className="size-4" />}
            {runState.kind === 'running' ? t('editor.running') : t('editor.run')}
          </Button>
          <button
            type="button"
            onClick={() => setInputOpen((open) => !open)}
            aria-expanded={inputOpen}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            <ChevronDown aria-hidden className={cn('size-3.5 transition-transform', inputOpen && 'rotate-180')} />
            {t('editor.input')}
          </button>
          <button
            type="button"
            onClick={reset}
            disabled={disabled || isTemplate(language, code)}
            className="ms-auto inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-400 hover:bg-slate-700 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <RotateCcw aria-hidden className="size-3.5" />
            {t('editor.reset')}
          </button>
        </div>

        {inputOpen && (
          <textarea
            value={stdin}
            onChange={(event) => setStdin(event.target.value)}
            aria-label={t('editor.input')}
            placeholder={t('editor.inputPlaceholder')}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            rows={3}
            className="block w-full resize-y rounded-lg border border-slate-600 bg-slate-900 p-2.5 text-left font-mono text-[13px] text-slate-100 outline-none placeholder:text-slate-500 focus:border-brand-400"
          />
        )}

        <RunOutput state={runState} />
      </div>
    </div>
  )
}

function RunOutput({ state }: { state: RunState }) {
  const { t } = useTranslation()
  const view = useCodeView()
  if (state.kind === 'idle' || state.kind === 'running') return null

  if (state.kind === 'error') {
    const key = state.code === 'runner_unavailable' ? 'editor.unavailable' : state.code === 'rate_limited' ? 'editor.rateLimited' : 'editor.failed'
    return (
      <p role="alert" dir="auto" className="flex items-start gap-2 rounded-lg bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
        <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0" />
        {t(key)}
      </p>
    )
  }

  const { result } = state
  const seconds = (result.durationMs / 1000).toFixed(1)
  const [label, tone] = !result.compiled
    ? [t('editor.compileError'), 'text-rose-300']
    : result.timedOut
      ? [t('editor.timedOut'), 'text-amber-300']
      : result.exitCode === 0
        ? [t('editor.success', { seconds }), 'text-emerald-300']
        : [t('editor.exitError', { code: result.exitCode ?? '?' }), 'text-rose-300']

  const block = cn('rounded-lg bg-slate-950 p-3 font-mono leading-relaxed', view.wrap ? 'break-words whitespace-pre-wrap' : 'overflow-x-auto whitespace-pre')

  return (
    <div className="space-y-2" aria-live="polite">
      <p dir="auto" className={cn('text-xs font-semibold', tone)}>
        {label}
      </p>
      {result.stdout && (
        <pre style={{ fontSize: view.fontSize }} className={cn(block, 'text-slate-100')}>
          {result.stdout}
        </pre>
      )}
      {result.stderr && (
        <pre style={{ fontSize: view.fontSize }} className={cn(block, 'text-rose-300')}>
          {result.stderr}
        </pre>
      )}
      {result.compiled && !result.stdout && !result.stderr && !result.timedOut && (
        <p dir="auto" className="text-xs text-slate-400">
          {t('editor.noOutput')}
        </p>
      )}
    </div>
  )
}
