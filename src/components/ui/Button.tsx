import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  danger:
    'bg-rose-600 text-white shadow-xs hover:bg-rose-700 focus-visible:outline-rose-600 dark:bg-rose-500 dark:hover:bg-rose-400',
  primary: 'bg-brand-600 text-white shadow-sm hover:bg-brand-700 active:bg-brand-800',
  secondary:
    'bg-white text-slate-800 shadow-xs ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-700',
  ghost:
    'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
  /** For use on dark or coloured backgrounds. */
  white: 'bg-white text-brand-700 shadow-sm hover:bg-brand-50',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

interface StyleProps {
  variant?: Variant
  size?: Size
  className?: string
}

function buttonClasses({ variant = 'primary', size = 'md', className }: StyleProps) {
  return cn(base, variants[variant], sizes[size], className)
}

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }

export function Button({ variant, size, className, type = 'button', children, ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  )
}

type LinkButtonProps = StyleProps & Omit<ComponentProps<typeof Link>, 'className'> & { children: ReactNode }

/** A router link styled exactly like a button. */
export function LinkButton({ variant, size, className, children, ...rest }: LinkButtonProps) {
  return (
    <Link className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </Link>
  )
}
