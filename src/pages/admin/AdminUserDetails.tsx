import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { KeyRound, ShieldCheck, ShieldOff, Trash2, UserRound, X } from 'lucide-react'
import { api, ApiError } from '../../api/client'
import { InterviewStatusBadge } from '../../components/InterviewCard'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Field } from '../../components/ui/Field'
import { Modal } from '../../components/ui/Modal'
import { PasswordInput } from '../../components/ui/PasswordInput'
import { getCompany, getRole } from '../../data/queries'
import type { TranslationKey } from '../../i18n/translations'
import { useTranslation } from '../../i18n/useTranslation'
import { formatDate } from '../../lib/utils'
import type { AnswerVerdict, BadgeTone, LocalizedText, PracticeRating } from '../../types'
import { QuestionTitle } from './QuestionTitle'
import type { AdminAccount } from './types'

const ratingTone: Record<PracticeRating, BadgeTone> = { again: 'rose', hard: 'amber', okay: 'sky', easy: 'emerald' }
const verdictTone: Record<AnswerVerdict, BadgeTone> = {
  incorrect: 'rose',
  partially_correct: 'amber',
  mostly_correct: 'sky',
  correct: 'emerald',
}

/** Server refusals that deserve a specific sentence; anything else gets the generic one. */
const ERROR_KEYS: Record<string, TranslationKey> = {
  cannot_change_own_role: 'admin.error.cannot_change_own_role',
  last_admin: 'admin.error.last_admin',
  cannot_delete_self: 'admin.error.cannot_delete_self',
  weak_password: 'auth.error.weak_password',
}

const EMPTY_TEXT: LocalizedText = { en: '', he: '' }

interface AdminUserDetailsProps {
  account: AdminAccount
  /** The admin is looking at their own account: role and deletion are not offered. */
  isSelf: boolean
  onChanged: (id: string, removed?: boolean) => Promise<void>
  onClose: () => void
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  )
}

function Empty({ children }: { children: ReactNode }) {
  return <p className="text-sm text-slate-500 dark:text-slate-400">{children}</p>
}

/** One account in full, with the management actions below the data. */
export function AdminUserDetails({ account, isSelf, onChanged, onClose }: AdminUserDetailsProps) {
  const { t, localize, language } = useTranslation()
  const { user } = account
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<{ tone: 'ok' | 'error'; key: TranslationKey } | null>(null)
  const [passwordOpen, setPasswordOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [newPassword, setNewPassword] = useState('')

  /** Latest rating per question, newest first, with how many times it was rated. */
  const ratingRows = useMemo(() => {
    const byQuestion = new Map<string, { latest: PracticeRating; count: number; at: string }>()
    for (const rating of account.ratings) {
      const previous = byQuestion.get(rating.questionId)
      byQuestion.set(rating.questionId, { latest: rating.rating, count: (previous?.count ?? 0) + 1, at: rating.at })
    }
    return [...byQuestion.entries()].sort((a, b) => b[1].at.localeCompare(a[1].at))
  }, [account.ratings])

  const notes = Object.entries(account.notes)

  const perform = async (action: () => Promise<void>, success: TranslationKey) => {
    setBusy(true)
    setMessage(null)
    try {
      await action()
      setMessage({ tone: 'ok', key: success })
    } catch (error) {
      const key = error instanceof ApiError && ERROR_KEYS[error.code] ? ERROR_KEYS[error.code] : 'auth.error.generic'
      setMessage({ tone: 'error', key })
    } finally {
      setBusy(false)
    }
  }

  const toggleRole = () =>
    perform(async () => {
      await api.put(`/api/admin/users/${user.id}/role`, { role: user.role === 'admin' ? 'user' : 'admin' })
      await onChanged(user.id)
    }, 'admin.roleChanged')

  const resetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void perform(async () => {
      await api.post(`/api/admin/users/${user.id}/password`, { password: newPassword })
      setPasswordOpen(false)
      setNewPassword('')
    }, 'admin.passwordReset')
  }

  const remove = () =>
    perform(async () => {
      await api.delete(`/api/admin/users/${user.id}`)
      setDeleteOpen(false)
      await onChanged(user.id, true)
    }, 'admin.deleted')

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
            <UserRound aria-hidden className="size-5" />
          </div>
          <div>
            <h2 className="flex flex-wrap items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              {t('admin.details', { name: user.name })}
              <Badge tone={user.role === 'admin' ? 'violet' : 'slate'}>{user.role === 'admin' ? t('admin.roleAdmin') : t('admin.roleUser')}</Badge>
              {isSelf && <Badge tone="teal">{t('admin.you')}</Badge>}
            </h2>
            <p dir="ltr" className="text-sm text-slate-500 rtl:text-right dark:text-slate-400">
              {user.email}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} aria-label={t('common.close')}>
          <X aria-hidden className="size-4" />
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Section title={t('admin.settings')}>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {t('interview.role')}: {account.settings.roleId ? localize(getRole(account.settings.roleId)?.name ?? EMPTY_TEXT) : '–'}
            </p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
              {t('prefs.languages')}: {account.settings.practicePrefs.languages.join(', ') || '–'}
            </p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
              {t('prefs.emphasis')}: {t(`emphasis.${account.settings.practicePrefs.emphasis}`)}
            </p>
          </Section>

          <Section title={t('admin.targets')}>
            {account.targets.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {account.targets.map((target) => (
                  <li key={target.id} className="text-slate-700 dark:text-slate-300">
                    {target.companyId ? localize(getCompany(target.companyId)?.name ?? EMPTY_TEXT) : t('target.otherCompany')} ·{' '}
                    {localize(getRole(target.roleId)?.name ?? EMPTY_TEXT)} · {formatDate(target.date, language)}
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>{t('admin.noTargets')}</Empty>
            )}
          </Section>

          <Section title={t('admin.interviews')}>
            {account.interviews.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {account.interviews.map((interview) => (
                  <li key={interview.id} className="flex flex-wrap items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span>
                      {localize(getCompany(interview.companyId)?.name ?? { en: interview.companyId, he: interview.companyId })} ·{' '}
                      {localize(interview.position)} · {formatDate(interview.date, language)}
                    </span>
                    <InterviewStatusBadge status={interview.status} />
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>{t('admin.noInterviews')}</Empty>
            )}
          </Section>

          <Section title={t('admin.checkedAnswers')}>
            {account.attempts.length > 0 ? (
              <ul className="space-y-2">
                {account.attempts.slice(0, 20).map((attempt) => (
                  <li key={attempt.id} className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      <QuestionTitle id={attempt.questionId} own={account.questions} />
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Badge tone={verdictTone[attempt.verdict]} dot>
                        {t(`answer.verdict.${attempt.verdict}`)}
                      </Badge>
                      <span className="tabular-nums">{attempt.score}%</span>
                      <span>{formatDate(attempt.createdAt.slice(0, 10), language)}</span>
                    </div>
                    <details className="mt-2 text-sm">
                      <summary className="cursor-pointer font-medium text-brand-600 dark:text-brand-400">{t('admin.showAnswer')}</summary>
                      <p dir="auto" className="mt-2 whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                        {attempt.answer}
                      </p>
                      <p dir="auto" className="mt-2 text-slate-600 dark:text-slate-400">
                        {attempt.evaluation.feedback}
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>{t('admin.noAttempts')}</Empty>
            )}
          </Section>
        </div>

        <div className="space-y-6">
          <Section title={t('admin.ratings')}>
            {ratingRows.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {ratingRows.map(([questionId, row]) => (
                  <li key={questionId} className="flex flex-wrap items-center justify-between gap-2 text-slate-700 dark:text-slate-300">
                    <span className="min-w-0 flex-1">
                      <QuestionTitle id={questionId} own={account.questions} />
                    </span>
                    <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Badge tone={ratingTone[row.latest]} dot>
                        {t(`rating.${row.latest}`)}
                      </Badge>
                      {row.count === 1 ? t('admin.ratedOnce') : t('admin.timesRated', { count: row.count })}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>{t('admin.noRatings')}</Empty>
            )}
          </Section>

          <Section title={t('admin.notes')}>
            {notes.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {notes.map(([questionId, note]) => (
                  <li key={questionId} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                    <p className="font-medium text-slate-800 dark:text-slate-200">
                      <QuestionTitle id={questionId} own={account.questions} />
                    </p>
                    <p dir="auto" className="mt-1 line-clamp-3 whitespace-pre-wrap text-slate-600 dark:text-slate-400">
                      {note}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>{t('admin.noNotes')}</Empty>
            )}
          </Section>

          <Section title={t('admin.cards')}>
            {account.cards.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {account.cards.map((card) => (
                  <li key={card.id} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                    <p dir="auto" className="font-medium text-slate-800 dark:text-slate-200">
                      {card.front}
                    </p>
                    <p dir="auto" className="mt-1 line-clamp-2 text-slate-600 dark:text-slate-400">
                      {card.back}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>{t('admin.noCards')}</Empty>
            )}
          </Section>

          <Section title={t('admin.ownQuestions')}>
            {account.questions.length > 0 ? (
              <ul className="space-y-1 text-sm">
                {account.questions.map((question) => (
                  <li key={question.id} className="text-slate-700 dark:text-slate-300">
                    <QuestionTitle id={question.id} own={account.questions} />
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>{t('admin.noOwnQuestions')}</Empty>
            )}
          </Section>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('admin.manage')}</h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('admin.manageHint')}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" disabled={busy || isSelf} onClick={() => void toggleRole()}>
            {user.role === 'admin' ? <ShieldOff aria-hidden className="size-4" /> : <ShieldCheck aria-hidden className="size-4" />}
            {user.role === 'admin' ? t('admin.removeAdmin') : t('admin.makeAdmin')}
          </Button>
          <Button variant="secondary" size="sm" disabled={busy} onClick={() => setPasswordOpen(true)}>
            <KeyRound aria-hidden className="size-4" />
            {t('admin.resetPassword')}
          </Button>
          <Button variant="danger" size="sm" disabled={busy || isSelf} onClick={() => setDeleteOpen(true)}>
            <Trash2 aria-hidden className="size-4" />
            {t('admin.deleteUser')}
          </Button>
        </div>
        {message && (
          <p
            role="status"
            className={
              message.tone === 'ok'
                ? 'mt-3 text-sm text-emerald-700 dark:text-emerald-300'
                : 'mt-3 text-sm text-rose-600 dark:text-rose-300'
            }
          >
            {t(message.key)}
          </p>
        )}
      </div>

      <Modal
        open={passwordOpen}
        onClose={() => setPasswordOpen(false)}
        title={t('admin.resetPassword')}
        description={t('admin.resetPasswordHint', { name: user.name })}
      >
        <form onSubmit={resetPassword} className="space-y-4">
          <Field label={t('admin.newPassword')} htmlFor="admin-new-password" hint={t('auth.passwordHint')}>
            <PasswordInput
              id="admin-new-password"
              required
              minLength={8}
              autoComplete="new-password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </Field>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setPasswordOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button type="submit" disabled={busy || newPassword.length < 8}>
              {t('admin.saveNewPassword')}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title={t('admin.deleteUserTitle', { name: user.name })}
        description={t('admin.deleteUserHint')}
      >
        <p dir="ltr" className="text-sm text-slate-600 rtl:text-right dark:text-slate-400">
          {user.email}
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setDeleteOpen(false)}>
            {t('common.cancel')}
          </Button>
          <Button variant="danger" disabled={busy} onClick={() => void remove()}>
            {t('admin.deleteUser')}
          </Button>
        </div>
      </Modal>
    </Card>
  )
}
