import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { Send, Sparkles, X } from 'lucide-react'
import type { AssistantMessage } from '../assistant/assistant'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import { Button } from './ui/Button'
import { Input } from './ui/Field'

interface AssistantPanelProps {
  open: boolean
  onClose: () => void
  messages: AssistantMessage[]
  onSend: (text: string) => void
}

/**
 * Floating chat window, anchored to the bottom corner of the screen.
 * Presentation only: replies come from `askAssistant` in the layout.
 */
export function AssistantPanel({ open, onClose, messages, onSend }: AssistantPanelProps) {
  const { t } = useTranslation()
  const [draft, setDraft] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  // Keep the latest message in view.
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [messages, open])

  if (!open) return null

  const submit = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    onSend(trimmed)
    setDraft('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit(draft)
  }

  // On a phone the panel covers the page, so following a link should close it.
  const closeIfNarrow = () => {
    if (!window.matchMedia('(min-width: 768px)').matches) onClose()
  }

  const suggestions = [t('assistant.s1'), t('assistant.s2'), t('assistant.s3'), t('assistant.s4')]

  return (
    <div
      role="dialog"
      aria-label={t('assistant.title')}
      className="fixed inset-x-4 bottom-36 z-40 flex h-[min(34rem,calc(100dvh-11rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:inset-x-auto md:end-6 md:bottom-22 md:w-96 dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="flex items-start gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
          <Sparkles aria-hidden className="size-4.5" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('assistant.title')}</h2>
          <p className="text-xs leading-snug text-slate-500 dark:text-slate-400">{t('assistant.subtitle')}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('assistant.close')}
          className="-me-1 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X className="size-5" />
        </button>
      </div>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
        {messages.length === 0 ? (
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t('assistant.empty')}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submit(suggestion)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={cn('flex', message.from === 'user' ? 'justify-end' : 'justify-start')}>
              <div
                dir="auto"
                className={cn(
                  'max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line',
                  message.from === 'user'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
                )}
              >
                {message.text}
                {message.links && message.links.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {message.links.map((link) => (
                      <Link
                        key={link.to + link.label}
                        to={link.to}
                        onClick={closeIfNarrow}
                        className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-50 dark:bg-slate-900 dark:text-brand-300 dark:ring-brand-500/30 dark:hover:bg-slate-800"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-100 p-3 dark:border-slate-800">
        <Input
          aria-label={t('assistant.placeholder')}
          placeholder={t('assistant.placeholder')}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          autoComplete="off"
        />
        <Button type="submit" aria-label={t('assistant.send')} className="shrink-0 px-3">
          <Send aria-hidden className="size-4 rtl:-scale-x-100" />
        </Button>
      </form>
      <p className="px-4 pb-2 text-[11px] text-slate-400 dark:text-slate-500">{t('assistant.note')}</p>
    </div>
  )
}
