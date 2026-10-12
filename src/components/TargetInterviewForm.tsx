import { useMemo, useState, type FormEvent } from 'react'
import { analyseRequirements, suggestRole } from '../data/requirements'
import { getCompanies, getRole, getRoles, getTopicMap } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn, todayIso } from '../lib/utils'
import { LANGUAGE_TOPIC_IDS, type LanguageTopicId, type TargetInterviewDraft } from '../types'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Field, Input, Select, Textarea } from './ui/Field'

interface TargetInterviewFormProps {
  initial?: TargetInterviewDraft
  submitLabel: string
  cancelLabel?: string
  onSubmit: (draft: TargetInterviewDraft) => Promise<void>
  onCancel?: () => void
}

const chipBase =
  'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500'
const chipActive =
  'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500/60 dark:bg-brand-500/15 dark:text-brand-300'
const chipIdle =
  'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'

function emptyDraft(): TargetInterviewDraft {
  return {
    companyId: null,
    roleId: getRoles()[0].id,
    position: '',
    date: todayIso(),
    languages: [],
    requirements: '',
  }
}

/**
 * The "upcoming interview" form: used on the onboarding screen and in the
 * Interviews page. Topics are detected from the requirements as you type.
 */
export function TargetInterviewForm({ initial, submitLabel, cancelLabel, onSubmit, onCancel }: TargetInterviewFormProps) {
  const { t, localize } = useTranslation()
  const [draft, setDraft] = useState<TargetInterviewDraft>(initial ?? emptyDraft)
  const [busy, setBusy] = useState(false)
  // Until the user picks a role by hand, the job title chooses it ("Verification Engineer" -> verification).
  const [roleTouched, setRoleTouched] = useState(Boolean(initial))

  const roles = getRoles()
  const topics = useMemo(() => getTopicMap(), [])
  const companies = useMemo(
    () => [...getCompanies()].sort((a, b) => localize(a.name).localeCompare(localize(b.name))),
    [localize],
  )
  const analysis = useMemo(() => analyseRequirements(draft.requirements), [draft.requirements])
  const suggestedId = suggestRole(draft.position)
  const suggestion = suggestedId && suggestedId !== draft.roleId ? getRole(suggestedId) : undefined

  const update = <K extends keyof TargetInterviewDraft>(key: K, value: TargetInterviewDraft[K]) => {
    setDraft((previous) => ({ ...previous, [key]: value }))
  }

  const toggleLanguage = (id: LanguageTopicId) => {
    update(
      'languages',
      draft.languages.includes(id) ? draft.languages.filter((language) => language !== id) : [...draft.languages, id],
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBusy(true)
    try {
      // If the user did not pick languages, take the ones the posting mentions.
      const languages = draft.languages.length > 0 ? draft.languages : analysis.languages
      await onSubmit({ ...draft, position: draft.position.trim(), requirements: draft.requirements.trim(), languages })
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={t('target.company')} htmlFor="target-company">
          <Select
            id="target-company"
            value={draft.companyId ?? ''}
            onChange={(event) => update('companyId', event.target.value || null)}
          >
            <option value="">{t('target.otherCompany')}</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {localize(company.name)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={t('target.role')} htmlFor="target-role">
          <Select
            id="target-role"
            value={draft.roleId}
            onChange={(event) => {
              setRoleTouched(true)
              update('roleId', event.target.value)
            }}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {localize(role.name)}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={t('target.position')} htmlFor="target-position">
          <Input
            id="target-position"
            placeholder={t('target.positionPlaceholder')}
            value={draft.position}
            onChange={(event) => {
              const position = event.target.value
              const suggested = roleTouched ? null : suggestRole(position)
              setDraft((previous) => ({ ...previous, position, roleId: suggested ?? previous.roleId }))
            }}
          />
          {suggestion && (
            <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-xs text-slate-500 dark:text-slate-400">
              {t('target.roleSuggestion', { role: localize(suggestion.name) })}
              <button
                type="button"
                onClick={() => {
                  setRoleTouched(true)
                  update('roleId', suggestion.id)
                }}
                className="font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
              >
                {t('target.useSuggestion')}
              </button>
            </p>
          )}
        </Field>
        <Field label={t('target.date')} htmlFor="target-date">
          <Input id="target-date" type="date" required value={draft.date} onChange={(event) => update('date', event.target.value)} />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">{t('target.languages')}</legend>
        <div className="flex flex-wrap gap-1.5">
          {LANGUAGE_TOPIC_IDS.map((id) => {
            const active = draft.languages.includes(id)
            const topic = topics.get(id)
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => toggleLanguage(id)}
                className={cn(chipBase, active ? chipActive : chipIdle)}
              >
                {topic ? localize(topic.name) : id}
              </button>
            )
          })}
        </div>
      </fieldset>

      <Field label={t('target.requirements')} htmlFor="target-requirements" hint={t('target.requirementsHint')}>
        <Textarea
          id="target-requirements"
          dir="auto"
          placeholder={t('target.requirementsPlaceholder')}
          value={draft.requirements}
          onChange={(event) => update('requirements', event.target.value)}
          className="min-h-32"
        />
      </Field>

      <div className="rounded-xl border border-dashed border-slate-200 p-3 dark:border-slate-700">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{t('target.detected')}</p>
        {analysis.topicIds.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {analysis.topicIds.map((id) => {
              const topic = topics.get(id)
              return topic ? (
                <Badge key={id} tone={topic.color}>
                  {localize(topic.name)}
                </Badge>
              ) : null
            })}
          </div>
        ) : (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('target.detectedNone')}</p>
        )}
      </div>

      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        {onCancel && cancelLabel && (
          <Button variant="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
        )}
        <Button type="submit" disabled={busy}>
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
