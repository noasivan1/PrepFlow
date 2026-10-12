import { useNavigate } from 'react-router'
import { CalendarDays } from 'lucide-react'
import { TargetInterviewForm } from '../components/TargetInterviewForm'
import { useTranslation } from '../i18n/useTranslation'
import { useUserData } from '../state/user-data-context'
import type { TargetInterviewDraft } from '../types'

/** Right after registration: the next interview. It becomes the role to prepare for; practice reads languages and company from it. */
export function OnboardingPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { addTarget, setRoleId, roleId } = useUserData()

  const save = async (draft: TargetInterviewDraft) => {
    await addTarget(draft)
    setRoleId(draft.roleId)
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-dvh px-4 py-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            <CalendarDays aria-hidden className="size-7" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
            {t('onboarding.title')}
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{t('onboarding.subtitle')}</p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
          <TargetInterviewForm
            submitLabel={t('onboarding.save')}
            cancelLabel={t('onboarding.skip')}
            onSubmit={save}
            onCancel={() => navigate(roleId ? '/' : '/start', { replace: true })}
          />
        </div>
      </div>
    </div>
  )
}
