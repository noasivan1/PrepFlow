import { useState, type FormEvent } from 'react'
import { Navigate, useLocation } from 'react-router'
import { Languages, Moon, Sun, Zap } from 'lucide-react'
import { ApiError } from '../api/client'
import { Button } from '../components/ui/Button'
import { Field, Input } from '../components/ui/Field'
import type { TranslationKey } from '../i18n/translations'
import { useTranslation } from '../i18n/useTranslation'
import { useAuth } from '../state/auth-context'
import { useSettings } from '../state/settings-context'

const ERROR_KEYS: Record<string, TranslationKey> = {
  invalid_credentials: 'auth.error.invalid_credentials',
  email_taken: 'auth.error.email_taken',
  weak_password: 'auth.error.weak_password',
  invalid_email: 'auth.error.invalid_email',
  invalid_name: 'auth.error.invalid_name',
}

function errorKey(error: unknown): TranslationKey {
  if (error instanceof ApiError && ERROR_KEYS[error.code]) return ERROR_KEYS[error.code]
  return 'auth.error.generic'
}

/** Sign in or create an account. Standalone screen, outside the app shell. */
export function LoginPage() {
  const { t } = useTranslation()
  const { status, login, register } = useAuth()
  const { theme, toggleTheme, toggleLanguage } = useSettings()
  const location = useLocation()

  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<TranslationKey | null>(null)
  const [busy, setBusy] = useState(false)
  // Where to go once signed in: set before the request, so the redirect below is deterministic.
  const [destination, setDestination] = useState<string | null>(null)

  const from = (location.state as { from?: string } | null)?.from

  if (status === 'authenticated') {
    return <Navigate to={destination ?? from ?? '/'} replace />
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBusy(true)
    setError(null)
    setDestination(mode === 'login' ? (from ?? '/') : '/onboarding')
    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await register(name, email, password)
      }
    } catch (caught) {
      setError(errorKey(caught))
    } finally {
      setBusy(false)
    }
  }

  const toggleButton =
    'inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'

  return (
    <div className="flex min-h-dvh flex-col px-4 py-6">
      <div className="mx-auto flex w-full max-w-md items-center justify-end gap-1">
        <button type="button" onClick={toggleTheme} className={toggleButton} aria-label={t(theme === 'dark' ? 'theme.switchToLight' : 'theme.switchToDark')}>
          {theme === 'dark' ? <Sun aria-hidden className="size-4.5" /> : <Moon aria-hidden className="size-4.5" />}
        </button>
        <button type="button" onClick={toggleLanguage} className={toggleButton} aria-label={t('language.switch')}>
          <Languages aria-hidden className="size-4.5" />
          {t('language.other')}
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-8">
        <div className="text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
            <Zap aria-hidden className="size-7" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
            {t('auth.welcome')}
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{t('auth.tagline')}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900"
        >
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {mode === 'login' ? t('auth.login') : t('auth.register')}
          </h2>

          {mode === 'register' && (
            <Field label={t('auth.name')} htmlFor="name">
              <Input id="name" required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
            </Field>
          )}
          <Field label={t('auth.email')} htmlFor="email">
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              dir="ltr"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Field>
          <Field label={t('auth.password')} htmlFor="password" hint={mode === 'register' ? t('auth.passwordHint') : undefined}>
            <Input
              id="password"
              type="password"
              required
              minLength={mode === 'register' ? 8 : undefined}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              dir="ltr"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Field>

          {error && (
            <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">
              {t(error)}
            </p>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={busy}>
            {mode === 'login' ? t('auth.login') : t('auth.register')}
          </Button>

          <button
            type="button"
            onClick={() => {
              setMode((current) => (current === 'login' ? 'register' : 'login'))
              setError(null)
            }}
            className="w-full text-center text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            {mode === 'login' ? t('auth.toRegister') : t('auth.toLogin')}
          </button>
        </form>
      </div>
    </div>
  )
}
