import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { api } from '../api/client'
import { todayIso } from '../lib/utils'
import type {
  AccountData,
  AccountSettings,
  AnswerAttempt,
  AnswerAttemptSummary,
  EvaluateAnswerRequest,
  Flashcard,
  FlashcardDraft,
  Interview,
  InterviewDraft,
  LatestRatings,
  PracticePreferences,
  PracticeRating,
  Question,
  QuestionDraft,
  Role,
  TargetInterview,
  TargetInterviewDraft,
} from '../types'
import { useAuth } from './auth-context'
import { DEFAULT_SETTINGS, UserDataContext, type UserDataContextValue } from './user-data-context'

const EMPTY: AccountData = {
  settings: DEFAULT_SETTINGS,
  notes: {},
  ratings: [],
  cards: [],
  targets: [],
  interviews: [],
  questions: [],
  attemptSummaries: [],
}

/** The loaded account, tagged with whose it is so a sign-out or user switch never shows stale data. */
interface Loaded {
  userId: string
  data: AccountData
}

/** Accounts saved by an older version may lack newer fields; fill them from the defaults. */
function normalise(data: AccountData): AccountData {
  return {
    ...EMPTY,
    ...data,
    settings: { ...DEFAULT_SETTINGS, ...data.settings },
  }
}

/**
 * Loads the account when someone signs in and keeps a local copy that every
 * page reads. Writes update the copy immediately (so the UI never waits) and
 * are sent to the API right after; typing-heavy writes (notes, settings) are
 * debounced so the server is not hit on every keystroke.
 */
export function UserDataProvider({ children }: { children: ReactNode }) {
  const { status, user } = useAuth()
  const [loaded, setLoaded] = useState<Loaded | null>(null)

  const userId = status === 'authenticated' && user ? user.id : null

  useEffect(() => {
    if (!userId || loaded?.userId === userId) return
    let cancelled = false
    api
      .get<AccountData>('/api/me/data')
      .then((data) => {
        if (!cancelled) setLoaded({ userId, data: normalise(data) })
      })
      .catch((error: unknown) => {
        console.error('Could not load account data', error)
        if (!cancelled) setLoaded({ userId, data: EMPTY })
      })
    return () => {
      cancelled = true
    }
  }, [userId, loaded?.userId])

  // Derived, not stored: a signed-out user sees nothing, a different user sees only their own data.
  const isCurrent = userId !== null && loaded?.userId === userId
  const account = isCurrent ? loaded.data : EMPTY

  /** Applies a change to the current account's copy. Ignored when nothing is loaded. */
  const mutate = useCallback((change: (data: AccountData) => AccountData) => {
    setLoaded((previous) => (previous ? { ...previous, data: change(previous.data) } : previous))
  }, [])

  // ----- Settings (role, practice preferences, sample visibility), debounced PUT -----

  const settingsTimer = useRef<number | undefined>(undefined)
  const pushSettings = useCallback((settings: AccountSettings) => {
    window.clearTimeout(settingsTimer.current)
    settingsTimer.current = window.setTimeout(() => {
      api.put('/api/me/settings', settings).catch((error: unknown) => console.error('Could not save settings', error))
    }, 300)
  }, [])

  const changeSettings = useCallback(
    (change: Partial<AccountSettings>) => {
      mutate((data) => {
        const settings = { ...data.settings, ...change }
        pushSettings(settings)
        return { ...data, settings }
      })
    },
    [mutate, pushSettings],
  )

  const setRoleId = useCallback((roleId: Role['id'] | null) => changeSettings({ roleId }), [changeSettings])
  const setPracticePrefs = useCallback(
    (practicePrefs: PracticePreferences) => changeSettings({ practicePrefs }),
    [changeSettings],
  )
  const setShowSamples = useCallback((showSamples: boolean) => changeSettings({ showSamples }), [changeSettings])

  // ----- Notes, debounced per question -----

  const noteTimers = useRef(new Map<string, number>())
  const setNote = useCallback(
    (questionId: Question['id'], text: string) => {
      mutate((data) => {
        const notes = { ...data.notes }
        if (text.trim()) notes[questionId] = text
        else delete notes[questionId]
        return { ...data, notes }
      })
      window.clearTimeout(noteTimers.current.get(questionId))
      noteTimers.current.set(
        questionId,
        window.setTimeout(() => {
          api.put(`/api/me/notes/${encodeURIComponent(questionId)}`, { text }).catch((error: unknown) =>
            console.error('Could not save note', error),
          )
        }, 400),
      )
    },
    [mutate],
  )

  // ----- Ratings -----

  const addRating = useCallback(
    (questionId: Question['id'], rating: PracticeRating) => {
      const event = { questionId, rating, at: new Date().toISOString() }
      mutate((data) => ({ ...data, ratings: [...data.ratings, event] }))
      api.post('/api/me/ratings', { questionId, rating }).catch((error: unknown) =>
        console.error('Could not save rating', error),
      )
    },
    [mutate],
  )

  const latestRatings = useMemo<LatestRatings>(() => {
    const latest: LatestRatings = {}
    for (const event of account.ratings) latest[event.questionId] = event.rating
    return latest
  }, [account.ratings])

  const flaggedIds = useMemo(
    () =>
      Object.entries(latestRatings)
        .filter(([, rating]) => rating === 'again' || rating === 'hard')
        .map(([questionId]) => questionId),
    [latestRatings],
  )

  const timesPractised = useCallback(
    (questionId: Question['id']) => account.ratings.filter((event) => event.questionId === questionId).length,
    [account.ratings],
  )

  // ----- Flashcards -----

  const addCard = useCallback(
    async (draft: FlashcardDraft) => {
      const card = await api.post<Flashcard>('/api/me/cards', draft)
      mutate((data) => ({ ...data, cards: [...data.cards, card] }))
      return card
    },
    [mutate],
  )

  const updateCard = useCallback(
    async (id: Flashcard['id'], draft: FlashcardDraft) => {
      const card = await api.put<Flashcard>(`/api/me/cards/${id}`, draft)
      mutate((data) => ({ ...data, cards: data.cards.map((existing) => (existing.id === id ? card : existing)) }))
    },
    [mutate],
  )

  const deleteCard = useCallback(
    async (id: Flashcard['id']) => {
      await api.delete(`/api/me/cards/${id}`)
      mutate((data) => ({ ...data, cards: data.cards.filter((card) => card.id !== id) }))
    },
    [mutate],
  )

  const reviewCard = useCallback(
    async (id: Flashcard['id'], result: 'again' | 'good') => {
      const existing = account.cards.find((card) => card.id === id)
      if (!existing) return
      const reviewed: Flashcard = {
        ...existing,
        reviews: existing.reviews + 1,
        lastResult: result,
        lastReviewedAt: new Date().toISOString(),
      }
      mutate((data) => ({ ...data, cards: data.cards.map((card) => (card.id === id ? reviewed : card)) }))
      await api.put(`/api/me/cards/${id}`, reviewed).catch((error: unknown) => console.error('Could not save review', error))
    },
    [account.cards, mutate],
  )

  // ----- Target (upcoming) interviews -----

  const addTarget = useCallback(
    async (draft: TargetInterviewDraft) => {
      const target = await api.post<TargetInterview>('/api/me/targets', draft)
      mutate((data) => ({ ...data, targets: [...data.targets, target] }))
      return target
    },
    [mutate],
  )

  const updateTarget = useCallback(
    async (id: TargetInterview['id'], draft: TargetInterviewDraft) => {
      const target = await api.put<TargetInterview>(`/api/me/targets/${id}`, draft)
      mutate((data) => ({ ...data, targets: data.targets.map((existing) => (existing.id === id ? target : existing)) }))
    },
    [mutate],
  )

  const deleteTarget = useCallback(
    async (id: TargetInterview['id']) => {
      await api.delete(`/api/me/targets/${id}`)
      mutate((data) => ({ ...data, targets: data.targets.filter((target) => target.id !== id) }))
    },
    [mutate],
  )

  const { nextTarget, pastTargets } = useMemo(() => {
    const today = todayIso()
    const upcoming = account.targets.filter((target) => target.date >= today).sort((a, b) => a.date.localeCompare(b.date))
    const past = account.targets.filter((target) => target.date < today).sort((a, b) => b.date.localeCompare(a.date))
    return { nextTarget: upcoming[0] ?? null, pastTargets: past }
  }, [account.targets])

  // ----- Interviews logged in the app -----

  const addUserInterview = useCallback(
    async (draft: InterviewDraft) => {
      const interview = await api.post<Interview>('/api/me/interviews', draft)
      mutate((data) => ({ ...data, interviews: [interview, ...data.interviews] }))
      return interview
    },
    [mutate],
  )

  const updateUserInterview = useCallback(
    async (id: Interview['id'], draft: InterviewDraft) => {
      const interview = await api.put<Interview>(`/api/me/interviews/${id}`, draft)
      mutate((data) => ({
        ...data,
        interviews: data.interviews.map((existing) => (existing.id === id ? interview : existing)),
      }))
      return interview
    },
    [mutate],
  )

  const deleteUserInterview = useCallback(
    async (id: Interview['id']) => {
      await api.delete(`/api/me/interviews/${id}`)
      mutate((data) => ({ ...data, interviews: data.interviews.filter((interview) => interview.id !== id) }))
    },
    [mutate],
  )

  // ----- Answer attempts (graded by the AI) -----

  const attemptSummaries = useMemo(
    () => Object.fromEntries(account.attemptSummaries.map((summary) => [summary.questionId, summary])) as Record<
      Question['id'],
      AnswerAttemptSummary
    >,
    [account.attemptSummaries],
  )

  const evaluateAnswer = useCallback(
    async (request: EvaluateAnswerRequest) => {
      const { attempt } = await api.post<{ attempt: AnswerAttempt }>('/api/me/ai/evaluate-answer', request)
      mutate((data) => {
        const existing = data.attemptSummaries.find((summary) => summary.questionId === attempt.questionId)
        const updated: AnswerAttemptSummary = existing
          ? {
              ...existing,
              attempts: existing.attempts + 1,
              bestScore: Math.max(existing.bestScore, attempt.score),
              latestScore: attempt.score,
              lastAt: attempt.createdAt,
            }
          : { questionId: attempt.questionId, attempts: 1, bestScore: attempt.score, latestScore: attempt.score, lastAt: attempt.createdAt }
        return {
          ...data,
          attemptSummaries: existing
            ? data.attemptSummaries.map((summary) => (summary.questionId === attempt.questionId ? updated : summary))
            : [...data.attemptSummaries, updated],
        }
      })
      return attempt
    },
    [mutate],
  )

  const loadAttempts = useCallback(async (questionId: Question['id']) => {
    const { attempts } = await api.get<{ attempts: AnswerAttempt[] }>(`/api/me/attempts/${encodeURIComponent(questionId)}`)
    return attempts
  }, [])

  // ----- Questions the user wrote -----

  const addQuestion = useCallback(
    async (draft: QuestionDraft) => {
      const question = await api.post<Question>('/api/me/questions', draft)
      mutate((data) => ({ ...data, questions: [question, ...data.questions] }))
      return question
    },
    [mutate],
  )

  const updateQuestion = useCallback(
    async (id: Question['id'], draft: QuestionDraft) => {
      const question = await api.put<Question>(`/api/me/questions/${id}`, draft)
      mutate((data) => ({
        ...data,
        questions: data.questions.map((existing) => (existing.id === id ? question : existing)),
      }))
      return question
    },
    [mutate],
  )

  const deleteQuestion = useCallback(
    async (id: Question['id']) => {
      await api.delete(`/api/me/questions/${id}`)
      // The server also drops the id from the user's interviews; mirror that locally.
      mutate((data) => ({
        ...data,
        questions: data.questions.filter((question) => question.id !== id),
        interviews: data.interviews.map((interview) =>
          interview.questionIds.includes(id)
            ? { ...interview, questionIds: interview.questionIds.filter((questionId) => questionId !== id) }
            : interview,
        ),
      }))
    },
    [mutate],
  )

  const value = useMemo<UserDataContextValue>(
    () => ({
      loaded: isCurrent,
      roleId: account.settings.roleId,
      setRoleId,
      practicePrefs: account.settings.practicePrefs,
      setPracticePrefs,
      showSamples: account.settings.showSamples,
      setShowSamples,
      notes: account.notes,
      setNote,
      ratings: account.ratings,
      latestRatings,
      flaggedIds,
      addRating,
      timesPractised,
      cards: account.cards,
      addCard,
      updateCard,
      deleteCard,
      reviewCard,
      targets: account.targets,
      nextTarget,
      pastTargets,
      addTarget,
      updateTarget,
      deleteTarget,
      userInterviews: account.interviews,
      addUserInterview,
      updateUserInterview,
      deleteUserInterview,
      attemptSummaries,
      evaluateAnswer,
      loadAttempts,
      userQuestions: account.questions,
      addQuestion,
      updateQuestion,
      deleteQuestion,
    }),
    [
      isCurrent,
      account,
      setRoleId,
      setPracticePrefs,
      setShowSamples,
      setNote,
      latestRatings,
      flaggedIds,
      addRating,
      timesPractised,
      addCard,
      updateCard,
      deleteCard,
      reviewCard,
      nextTarget,
      pastTargets,
      addTarget,
      updateTarget,
      deleteTarget,
      addUserInterview,
      updateUserInterview,
      deleteUserInterview,
      attemptSummaries,
      evaluateAnswer,
      loadAttempts,
      addQuestion,
      updateQuestion,
      deleteQuestion,
    ],
  )

  return <UserDataContext value={value}>{children}</UserDataContext>
}
