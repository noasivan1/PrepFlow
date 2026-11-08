import { useState, type InputHTMLAttributes } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useTranslation } from '../../i18n/useTranslation'
import { cn } from '../../lib/utils'
import { Input } from './Field'

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'dir'>

/**
 * A password field with an eye button that shows the characters until it is pressed again.
 * Passwords are Latin text, so the whole control is left-to-right even in Hebrew: the button
 * sits at the right end, over the input's end padding.
 */
export function PasswordInput({ className, ...props }: PasswordInputProps) {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  return (
    <div dir="ltr" className="relative">
      <Input {...props} type={visible ? 'text' : 'password'} className={cn('pe-11', className)} />
      <button
        type="button"
        onClick={() => setVisible((current) => !current)}
        aria-label={t(visible ? 'auth.hidePassword' : 'auth.showPassword')}
        aria-pressed={visible}
        className="absolute end-2 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:hover:bg-slate-700 dark:hover:text-slate-200"
      >
        {visible ? <EyeOff aria-hidden className="size-4.5" /> : <Eye aria-hidden className="size-4.5" />}
      </button>
    </div>
  )
}
