import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router'
import { Zap } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { useAuth } from '../state/auth-context'
import { useUserData } from '../state/user-data-context'

/** Shows the wrapped screen only to a signed-in user whose account data has loaded. */
export function RequireAuth({ children }: { children: ReactNode }) {
  const { status } = useAuth()
  const { loaded } = useUserData()
  const { t } = useTranslation()
  const location = useLocation()

  if (status === 'anonymous') {
    return <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />
  }

  if (status === 'loading' || !loaded) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
        <div className="flex size-12 animate-pulse items-center justify-center rounded-2xl bg-brand-600 text-white">
          <Zap aria-hidden className="size-6" />
        </div>
        <p className="text-sm">{t('auth.loading')}</p>
      </div>
    )
  }

  return <>{children}</>
}
