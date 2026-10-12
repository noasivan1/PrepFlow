import type { ComponentProps, HTMLAttributes } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/utils'

const cardBase = 'rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900'

export function Card({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(cardBase, className)} {...rest}>
      {children}
    </div>
  )
}

/** A card that is a router link, with a gentle lift on hover. */
export function CardLink({ className, children, ...rest }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        cardBase,
        'transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:hover:border-slate-700',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
