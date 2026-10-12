import { useMemo, useState } from 'react'
import { CODE_LANGUAGES, type CodeLanguage, type CodeSnippet } from '../types'
import { cn } from '../lib/utils'

const languageLabels: Record<CodeLanguage, string> = {
  c: 'C',
  cpp: 'C++',
  java: 'Java',
  python: 'Python',
  javascript: 'JavaScript',
  sql: 'SQL',
  bash: 'Shell',
}

interface CodeSolutionsProps {
  snippets: CodeSnippet[]
  /** Tab to open first, e.g. the language the interview focuses on. */
  preferred?: CodeLanguage | null
}

/** Language tabs above a code block. Code is always left-to-right, even in the Hebrew UI. */
export function CodeSolutions({ snippets, preferred }: CodeSolutionsProps) {
  const ordered = useMemo(
    () => [...snippets].sort((a, b) => CODE_LANGUAGES.indexOf(a.language) - CODE_LANGUAGES.indexOf(b.language)),
    [snippets],
  )
  const [active, setActive] = useState<CodeLanguage | null>(null)
  const current =
    ordered.find((snippet) => snippet.language === active) ??
    ordered.find((snippet) => snippet.language === preferred) ??
    ordered[0]

  if (!current) return null

  return (
    <div dir="ltr" className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
      <div
        role="tablist"
        className="flex gap-1 overflow-x-auto border-b border-slate-200 bg-slate-50 px-2 pt-2 dark:border-slate-700 dark:bg-slate-800/60"
      >
        {ordered.map((snippet) => {
          const isActive = snippet.language === current.language
          return (
            <button
              key={snippet.language}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(snippet.language)}
              className={cn(
                'shrink-0 rounded-t-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors',
                isActive
                  ? 'bg-slate-900 text-white dark:bg-slate-950'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200',
              )}
            >
              {languageLabels[snippet.language]}
            </button>
          )
        })}
      </div>
      <pre className="overflow-x-auto bg-slate-900 p-4 text-left font-mono text-[13px] leading-relaxed text-slate-100 dark:bg-slate-950">
        <code>{current.code}</code>
      </pre>
    </div>
  )
}
