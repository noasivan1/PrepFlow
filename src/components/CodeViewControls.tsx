import { useState } from 'react'
import { Check, Copy, WrapText, ZoomIn, ZoomOut } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { CODE_FONT_MAX, CODE_FONT_MIN, setCodeView, useCodeView } from '../lib/code-view'
import { cn } from '../lib/utils'

const button =
  'inline-flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800 disabled:opacity-40 disabled:hover:bg-transparent dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100'

/** Wrap lines, smaller / larger text, and (when `copyText` is given) copy. Shared by every code box. */
export function CodeViewControls({ copyText, className }: { copyText?: string; className?: string }) {
  const { t } = useTranslation()
  const view = useCodeView()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    if (copyText === undefined) return
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard blocked: nothing to do, the text is still selectable.
    }
  }

  return (
    <div className={cn('flex shrink-0 items-center gap-0.5', className)}>
      <button
        type="button"
        onClick={() => setCodeView({ wrap: !view.wrap })}
        aria-pressed={view.wrap}
        title={view.wrap ? t('code.noWrap') : t('code.wrap')}
        aria-label={view.wrap ? t('code.noWrap') : t('code.wrap')}
        className={cn(button, view.wrap && 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100')}
      >
        <WrapText aria-hidden className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => setCodeView({ fontSize: view.fontSize - 1 })}
        disabled={view.fontSize <= CODE_FONT_MIN}
        title={t('code.zoomOut')}
        aria-label={t('code.zoomOut')}
        className={button}
      >
        <ZoomOut aria-hidden className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => setCodeView({ fontSize: view.fontSize + 1 })}
        disabled={view.fontSize >= CODE_FONT_MAX}
        title={t('code.zoomIn')}
        aria-label={t('code.zoomIn')}
        className={button}
      >
        <ZoomIn aria-hidden className="size-4" />
      </button>
      {copyText !== undefined && (
        <button type="button" onClick={() => void copy()} title={t('code.copy')} aria-label={t('code.copy')} className={button}>
          {copied ? <Check aria-hidden className="size-4 text-emerald-600" /> : <Copy aria-hidden className="size-4" />}
        </button>
      )}
    </div>
  )
}
