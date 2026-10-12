import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { Briefcase, Building2, CalendarDays, ClipboardList, Eye, EyeOff, Pencil, Plus, Trash2 } from 'lucide-react'
import { CompanyAvatar } from '../components/CompanyAvatar'
import { InterviewCard } from '../components/InterviewCard'
import { InterviewFormModal } from '../components/InterviewFormModal'
import { PageHeader } from '../components/PageHeader'
import { TargetInterviewForm } from '../components/TargetInterviewForm'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { Modal } from '../components/ui/Modal'
import { getCompany, getRole, getTopicMap } from '../data/queries'
import { daysUntil, targetFocusTopics } from '../data/requirements'
import { useTranslation } from '../i18n/useTranslation'
import { cn, describeDays, formatDate, todayIso } from '../lib/utils'
import { useCatalog } from '../state/catalog-context'
import { useUserData } from '../state/user-data-context'
import type { InterviewDraft, TargetInterview, TargetInterviewDraft } from '../types'

function toDraft(target: TargetInterview): TargetInterviewDraft {
  const { id: _id, createdAt: _createdAt, ...draft } = target
  return draft
}

/** The starting values for logging an upcoming interview that has now happened. */
function logDraftFor(target: TargetInterview): Partial<InterviewDraft> {
  return {
    companyId: target.companyId ?? undefined,
    roleId: target.roleId,
    position: { en: target.position, he: target.position },
    date: target.date,
    stage: 'technical',
    status: 'awaiting',
  }
}

/** One upcoming (or just passed) interview: who, what, when, and what it emphasises. */
function TargetCard({
  target,
  isNext,
  onEdit,
  onDelete,
  onLog,
}: {
  target: TargetInterview
  isNext: boolean
  onEdit: () => void
  onDelete: () => void
  onLog: () => void
}) {
  const { t, localize, language } = useTranslation()
  const topics = useMemo(() => getTopicMap(), [])
  const company = target.companyId ? getCompany(target.companyId) : undefined
  const role = getRole(target.roleId)
  const focus = targetFocusTopics(target)
  const days = daysUntil(target.date)
  const passed = days < 0

  return (
    <Card className={cn('flex flex-col p-5', isNext && 'ring-2 ring-brand-500/30', passed && 'border-dashed')}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {company ? (
            <CompanyAvatar company={company} />
          ) : (
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <Building2 aria-hidden className="size-5" />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="truncate font-semibold text-slate-900 dark:text-slate-100">
              {company ? localize(company.name) : target.position || t('target.otherCompany')}
            </h3>
            <p dir="auto" className="truncate text-sm text-slate-500 rtl:text-right dark:text-slate-400">
              {company && target.position ? target.position : role ? localize(role.name) : ''}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 gap-1">
          <button
            type="button"
            onClick={onEdit}
            aria-label={t('target.edit')}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <Pencil aria-hidden className="size-4" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            aria-label={t('target.delete')}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-300"
          >
            <Trash2 aria-hidden className="size-4" />
          </button>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-xs text-slate-500 dark:text-slate-400">{t('target.role')}</dt>
          <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">{role ? localize(role.name) : target.roleId}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500 dark:text-slate-400">{t('target.date')}</dt>
          <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">
            {formatDate(target.date, language)}
            <span className={cn('ms-1.5 text-xs font-medium', passed ? 'text-slate-400' : 'text-brand-600 dark:text-brand-400')}>
              {describeDays(days, t)}
            </span>
          </dd>
        </div>
      </dl>

      {focus.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {focus.map((id) => {
            const topic = topics.get(id)
            return topic ? (
              <Badge key={id} tone={topic.color}>
                {localize(topic.name)}
              </Badge>
            ) : null
          })}
        </div>
      )}

      {isNext && <p className="mt-3 text-xs text-brand-600 dark:text-brand-400">{t('target.tailored')}</p>}

      {passed && (
        <Button variant="secondary" size="sm" className="mt-4 w-full" onClick={onLog}>
          <ClipboardList aria-hidden className="size-4" />
          {t('target.logIt')}
        </Button>
      )}
    </Card>
  )
}

export function InterviewsPage() {
  const { t, plural } = useTranslation()
  const { interviews } = useCatalog()
  const { targets, nextTarget, addTarget, updateTarget, deleteTarget, addUserInterview, showSamples, setShowSamples } =
    useUserData()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [targetModal, setTargetModal] = useState<{ open: boolean; existing?: TargetInterview }>(() => ({
    open: searchParams.get('add') === 'target',
  }))
  // `?log=<target id>` (from the dashboard nudge) opens the "how did it go?" form for that interview.
  const [logTargetId, setLogTargetId] = useState<string | null>(() => searchParams.get('log'))
  const logTarget = logTargetId ? targets.find((target) => target.id === logTargetId) : undefined

  const own = useMemo(() => interviews.filter((interview) => !interview.sample), [interviews])
  const samples = useMemo(
    () => interviews.filter((interview) => interview.sample).sort((a, b) => b.date.localeCompare(a.date)),
    [interviews],
  )
  const { upcoming, past } = useMemo(() => {
    const today = todayIso()
    return {
      upcoming: targets.filter((target) => target.date >= today).sort((a, b) => a.date.localeCompare(b.date)),
      past: targets.filter((target) => target.date < today).sort((a, b) => b.date.localeCompare(a.date)),
    }
  }, [targets])

  const clearParams = () => {
    if (searchParams.get('add') || searchParams.get('log')) setSearchParams({})
  }

  const closeTargetModal = () => {
    setTargetModal({ open: false })
    clearParams()
  }

  const saveTarget = async (draft: TargetInterviewDraft) => {
    if (targetModal.existing) await updateTarget(targetModal.existing.id, draft)
    else await addTarget(draft)
    closeTargetModal()
  }

  const closeLog = () => {
    setLogTargetId(null)
    clearParams()
  }

  /** Logging a passed interview turns the "upcoming" entry into a real one. */
  const saveLog = async (draft: InterviewDraft) => {
    await addUserInterview(draft)
    if (logTarget) await deleteTarget(logTarget.id)
  }

  const renderTargets = (list: TargetInterview[]) => (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {list.map((target) => (
        <TargetCard
          key={target.id}
          target={target}
          isNext={nextTarget?.id === target.id}
          onEdit={() => setTargetModal({ open: true, existing: target })}
          onDelete={() => void deleteTarget(target.id)}
          onLog={() => setLogTargetId(target.id)}
        />
      ))}
    </div>
  )

  return (
    <div className="space-y-10">
      <PageHeader
        title={t('interviews.title')}
        description={t('interviews.subtitle')}
        action={
          <Button onClick={() => setIsAddOpen(true)} className="w-full sm:w-auto">
            <Plus aria-hidden className="size-4" />
            {t('interviews.add')}
          </Button>
        }
      />

      {/* Upcoming: what the user is preparing for */}
      <section>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t('target.upcoming')}</h2>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t('target.upcomingHint')}</p>
          </div>
          <Button variant="secondary" onClick={() => setTargetModal({ open: true })}>
            <CalendarDays aria-hidden className="size-4" />
            {t('target.add')}
          </Button>
        </div>
        {upcoming.length > 0 ? (
          renderTargets(upcoming)
        ) : (
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t('target.none')}</p>
        )}

        {past.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t('target.passed')}</h3>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t('target.passedSectionHint')}</p>
            {renderTargets(past)}
          </div>
        )}
      </section>

      {/* The user's own history */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t('interviews.mine')}</h2>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t('interviews.mineHint')}</p>
        {own.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {own.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-4"
            icon={<Briefcase aria-hidden className="size-6" />}
            title={t('interviews.mineEmpty')}
            description={t('interviews.mineEmptyHint')}
            action={
              <Button onClick={() => setIsAddOpen(true)}>
                <Plus aria-hidden className="size-4" />
                {t('interviews.add')}
              </Button>
            }
          />
        )}
      </section>

      {/* Demo data, clearly separated from the user's own */}
      <section>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t('interviews.samples')}</h2>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t('interviews.samplesHint')}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setShowSamples(!showSamples)}>
            {showSamples ? <EyeOff aria-hidden className="size-4" /> : <Eye aria-hidden className="size-4" />}
            {showSamples ? t('interviews.hideSamples') : t('interviews.showSamples')}
          </Button>
        </div>
        {showSamples ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {samples.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {t('interviews.samplesHidden', { count: plural(samples.length, 'common.interview', 'common.interviews') })}
          </p>
        )}
      </section>

      <InterviewFormModal open={isAddOpen} onClose={() => setIsAddOpen(false)} onSave={addUserInterview} />

      <InterviewFormModal
        key={logTarget?.id ?? 'log'}
        open={Boolean(logTarget)}
        onClose={closeLog}
        onSave={saveLog}
        initial={logTarget ? logDraftFor(logTarget) : undefined}
      />

      <Modal
        open={targetModal.open}
        onClose={closeTargetModal}
        title={targetModal.existing ? t('target.editTitle') : t('target.addTitle')}
        description={t('target.upcomingHint')}
      >
        <TargetInterviewForm
          key={targetModal.existing?.id ?? 'new'}
          initial={targetModal.existing ? toDraft(targetModal.existing) : undefined}
          submitLabel={t('target.save')}
          cancelLabel={t('common.cancel')}
          onSubmit={saveTarget}
          onCancel={closeTargetModal}
        />
      </Modal>
    </div>
  )
}
