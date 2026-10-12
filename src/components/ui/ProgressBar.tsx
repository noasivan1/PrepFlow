import { cn } from '../../lib/utils'

type Tone = 'brand' | 'rose' | 'amber' | 'emerald'

const fills: Record<Tone, string> = {
  brand: 'bg-brand-500',
  rose: 'bg-rose-500',
  amber: 'bg-amber-500',
  emerald: 'bg-emerald-500',
}

interface ProgressBarProps {
  /** 0–100 */
  value: number
  /** `auto` picks red / amber / green based on the value. */
  tone?: Tone | 'auto'
  size?: 'sm' | 'md'
  label?: string
  className?: string
}

function autoTone(value: number): Tone {
  if (value < 50) return 'rose'
  if (value < 70) return 'amber'
  return 'emerald'
}

export function ProgressBar({ value, tone = 'brand', size = 'md', label, className }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))
  const fill = fills[tone === 'auto' ? autoTone(clamped) : tone]

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        'w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800',
        size === 'sm' ? 'h-1.5' : 'h-2',
        className,
      )}
    >
      <div className={cn('h-full rounded-full transition-[width] duration-500', fill)} style={{ width: `${clamped}%` }} />
    </div>
  )
}
