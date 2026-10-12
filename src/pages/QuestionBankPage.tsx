import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { Check, Plus, Search, X } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { QuestionCard } from '../components/QuestionCard'
import { QuestionFormModal } from '../components/QuestionForm'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { Input, Select } from '../components/ui/Field'
import { ratedConfidence } from '../data/practice'
import { getQuestions, getRole, getTopicMap, getTopics } from '../data/queries'
import { useTranslation } from '../i18n/useTranslation'
import { cn } from '../lib/utils'
import { useUserData } from '../state/user-data-context'
import { CONFIDENCE_LEVELS, QUESTION_TYPES, type QuestionType } from '../types'

const ALL = 'all'
/** The three rating levels plus "never rated". */
const CONFIDENCE_FILTERS = [...CONFIDENCE_LEVELS, 'unrated'] as const
type ConfidenceFilter = (typeof CONFIDENCE_FILTERS)[number]

/** Narrows a raw `<select>` value to one of the allowed options, or "all". */
function optionOrAll<T extends string>(value: string, options: readonly T[]): T | typeof ALL {
  return (options as readonly string[]).includes(value) ? (value as T) : ALL
}

export function QuestionBankPage() {
  const { t, localize } = useTranslation()
  const { roleId, flaggedIds, addQuestion, latestRatings } = useUserData()
  const role = roleId ? getRole(roleId) : undefined
  const [addOpen, setAddOpen] = useState(false)
  const flagged = useMemo(() => new Set(flaggedIds), [flaggedIds])

  const questions = getQuestions()
  const topics = getTopics()
  const topicMap = useMemo(() => getTopicMap(), [])

  // Allow deep links such as /questions?topic=oop or /questions?q=thread
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(() => searchParams.get('q') ?? '')
  const [topicId, setTopicId] = useState<string>(() => {
    const requested = searchParams.get('topic')
    return requested && topicMap.has(requested) ? requested : ALL
  })
  const [type, setType] = useState<QuestionType | typeof ALL>(ALL)
  const [confidence, setConfidence] = useState<ConfidenceFilter | typeof ALL>(() =>
    optionOrAll(searchParams.get('confidence') ?? ALL, CONFIDENCE_FILTERS),
  )
  const [onlyMyRole, setOnlyMyRole] = useState(Boolean(roleId))
  const [onlyFlagged, setOnlyFlagged] = useState(() => searchParams.get('flagged') === '1')

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase()
    return questions.filter((question) => {
      if (onlyMyRole && roleId && !question.roleIds.includes(roleId)) return false
      if (onlyFlagged && !flagged.has(question.id)) return false
      if (topicId !== ALL && question.topicId !== topicId) return false
      if (type !== ALL && question.type !== type) return false
      if (confidence !== ALL) {
        const rated = ratedConfidence(question, latestRatings)
        if (confidence === 'unrated' ? rated !== null : rated !== confidence) return false
      }
      if (needle === '') return true
      // Search both languages so "thread" and "תהליך" both find the same question.
      const topic = topicMap.get(question.topicId)
      const haystack = [question.text.en, question.text.he, topic?.name.en ?? '', topic?.name.he ?? '']
        .join(' ')
        .toLowerCase()
      return haystack.includes(needle)
    })
  }, [questions, topicMap, search, topicId, type, confidence, onlyMyRole, roleId, onlyFlagged, flagged, latestRatings])

  const hasActiveFilters = search !== '' || topicId !== ALL || type !== ALL || confidence !== ALL || onlyFlagged

  const clearFilters = () => {
    setSearch('')
    setTopicId(ALL)
    setType(ALL)
    setConfidence(ALL)
    setOnlyFlagged(false)
  }

  const toggleChip = (active: boolean) =>
    cn(
      'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
      active
        ? 'border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/15 dark:text-brand-300'
        : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
    )

  const toggleDot = (active: boolean) =>
    cn(
      'flex size-4 items-center justify-center rounded-full border',
      active ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 dark:border-slate-600',
    )

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('bank.title')}
        description={t('bank.subtitle')}
        action={
          <Button onClick={() => setAddOpen(true)} className="w-full sm:w-auto">
            <Plus aria-hidden className="size-4" />
            {t('bank.addQuestion')}
          </Button>
        }
      />

      <QuestionFormModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        initial={{ roleIds: roleId ? [roleId] : [] }}
        onSave={async (draft) => {
          await addQuestion(draft)
        }}
      />

      <Card className="p-3 sm:p-4">
        <div className="relative">
          <Search
            aria-hidden
            className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          />
          <Input
            type="search"
            aria-label={t('bank.searchLabel')}
            placeholder={t('bank.search')}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="ps-10"
          />
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Select aria-label={t('bank.filterTopic')} value={topicId} onChange={(event) => setTopicId(event.target.value)}>
            <option value={ALL}>{t('bank.allTopics')}</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {localize(topic.name)}
              </option>
            ))}
          </Select>
          <Select
            aria-label={t('bank.filterType')}
            value={type}
            onChange={(event) => setType(optionOrAll(event.target.value, QUESTION_TYPES))}
          >
            <option value={ALL}>{t('bank.allTypes')}</option>
            {QUESTION_TYPES.map((option) => (
              <option key={option} value={option}>
                {t(`type.${option}`)}
              </option>
            ))}
          </Select>
          <Select
            aria-label={t('bank.filterConfidence')}
            value={confidence}
            onChange={(event) => setConfidence(optionOrAll(event.target.value, CONFIDENCE_FILTERS))}
          >
            <option value={ALL}>{t('bank.allConfidence')}</option>
            {CONFIDENCE_FILTERS.map((option) => (
              <option key={option} value={option}>
                {t(option === 'unrated' ? 'confidence.unrated' : `confidence.${option}`)}
              </option>
            ))}
          </Select>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {role && (
            <button
              type="button"
              onClick={() => setOnlyMyRole((current) => !current)}
              aria-pressed={onlyMyRole}
              className={toggleChip(onlyMyRole)}
            >
              <span className={toggleDot(onlyMyRole)}>{onlyMyRole && <Check aria-hidden className="size-3" />}</span>
              {t('bank.onlyMyRole')} · {localize(role.name)}
            </button>
          )}
          {flaggedIds.length > 0 && (
            <button
              type="button"
              onClick={() => setOnlyFlagged((current) => !current)}
              aria-pressed={onlyFlagged}
              className={toggleChip(onlyFlagged)}
            >
              <span className={toggleDot(onlyFlagged)}>{onlyFlagged && <Check aria-hidden className="size-3" />}</span>
              {t('bank.onlyFlagged')} · {flaggedIds.length}
            </button>
          )}
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t('bank.showing', { shown: filtered.length, total: questions.length })}
        </p>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X aria-hidden className="size-4" />
            {t('common.clearFilters')}
          </Button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((question) => (
            <QuestionCard key={question.id} question={question} topic={topicMap.get(question.topicId)} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Search aria-hidden className="size-6" />}
          title={t('bank.noMatch')}
          description={t('bank.noMatchHint')}
          action={
            <Button variant="secondary" onClick={clearFilters}>
              {t('common.clearFilters')}
            </Button>
          }
        />
      )}
    </div>
  )
}
