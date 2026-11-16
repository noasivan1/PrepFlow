import { useMemo, useState } from 'react'
import { CODE_LANGUAGES, type CodeLanguage, type CodeSnippet } from '../types'
import { useCodeView } from '../lib/code-view'
import { languageLabels } from '../lib/code-languages'
import { cn } from '../lib/utils'
import { CodeViewControls } from './CodeViewControls'

interface CodeSolutionsProps {
  snippets: CodeSnippet[]
  /** Tab to open first, e.g. the language the interview focuses on. */
  preferred?: CodeLanguage | null
}

/**
 * Language tabs above a code block. Code is always left-to-right, even in the
 * Hebrew UI. The toolbar wraps long lines and zooms, so a phone never needs
 * sideways scrolling to read a solution.
 */
export function CodeSolutions({ snippets, preferred }: CodeSolutionsProps) {
  const view = useCodeView()
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
      <div className="flex flex-wrap-reverse items-end justify-end gap-x-2 border-b border-slate-200 bg-slate-50 ps-2 pe-1 pt-1 dark:border-slate-700 dark:bg-slate-800/60">
        <div role="tablist" className="flex min-w-0 flex-[1_1_16rem] gap-1 overflow-x-auto pt-1">
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
        <CodeViewControls copyText={current.code} className="pb-1" />
      </div>
      <pre
        style={{ fontSize: view.fontSize }}
        className={cn(
          'bg-slate-900 p-4 text-left font-mono leading-relaxed text-slate-100 dark:bg-slate-950',
          view.wrap ? 'break-words whitespace-pre-wrap' : 'overflow-x-auto',
        )}
      >
        <code>{current.code}</code>
      </pre>
    </div>
  )
}
