import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import {
  Bug,
  Check,
  Cloud,
  Code,
  Cpu,
  Database,
  GraduationCap,
  Headset,
  LayoutTemplate,
  Layers,
  Server,
  Shield,
  Terminal,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Role, RoleIcon, Topic } from '../types'
import { Badge } from '../components/ui/Badge'
import { getQuestionsForRole, getRoles, getTopicMap } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import { useUserData } from '../state/user-data-context'

const roleIcons: Record<RoleIcon, LucideIcon> = {
  code: Code,
  cpu: Cpu,
  server: Server,
  layout: LayoutTemplate,
  layers: Layers,
  cloud: Cloud,
  database: Database,
  bug: Bug,
  headset: Headset,
  shield: Shield,
  terminal: Terminal,
  graduation: GraduationCap,
}

interface RoleCardProps {
  role: Role
  topics: Map<Topic['id'], Topic>
  selected: boolean
  onSelect: () => void
}

function RoleCard({ role, topics, selected, onSelect }: RoleCardProps) {
  const { t, localize } = useTranslation()
  const Icon = roleIcons[role.icon]
  const questionCount = getQuestionsForRole(role.id).length

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        'flex h-full flex-col rounded-2xl border bg-white p-5 text-start shadow-xs transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-slate-900',
        selected
          ? 'border-brand-500 ring-2 ring-brand-500/20'
          : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700',
      )}
    >
      <div className="flex w-full items-start justify-between gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
          <Icon aria-hidden className="size-5" />
        </div>
        {selected && (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-2 py-0.5 text-xs font-medium text-white">
            <Check aria-hidden className="size-3" />
            {t('role.selected')}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100">{localize(role.name)}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{localize(role.description)}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {role.focusTopicIds.map((topicId) => {
          const topic = topics.get(topicId)
          return topic ? (
            <Badge key={topicId} tone={topic.color}>
              {localize(topic.name)}
            </Badge>
          ) : null
        })}
      </div>

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        {t('common.questions', { count: questionCount })}
      </p>
    </button>
  )
}

interface RoleSectionProps {
  title: string
  hint: string
  roles: Role[]
  topics: Map<Topic['id'], Topic>
  selectedId: Role['id'] | null
  onSelect: (role: Role) => void
}

function RoleSection({ title, hint, roles, topics, selectedId, onSelect }: RoleSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{hint}</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            topics={topics}
            selected={role.id === selectedId}
            onSelect={() => onSelect(role)}
          />
        ))}
      </div>
    </section>
  )
}

export function RoleSelectPage() {
  const { t } = useTranslation()
  const { roleId, setRoleId } = useUserData()
  const navigate = useNavigate()
  const topics = useMemo(() => getTopicMap(), [])

  const roles = getRoles()
  const development = roles.filter((role) => role.category === 'development')
  const other = roles.filter((role) => role.category === 'other')

  const choose = (role: Role) => {
    setRoleId(role.id)
    navigate('/companies')
  }

  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
          <Zap aria-hidden className="size-7" />
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
          {t('role.title')}
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">{t('role.subtitle')}</p>
      </div>

      <RoleSection
        title={t('role.development')}
        hint={t('role.developmentHint')}
        roles={development}
        topics={topics}
        selectedId={roleId}
        onSelect={choose}
      />
      <RoleSection
        title={t('role.other')}
        hint={t('role.otherHint')}
        roles={other}
        topics={topics}
        selectedId={roleId}
        onSelect={choose}
      />
    </div>
  )
}
