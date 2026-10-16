import { createContext, useContext } from 'react'
import type {
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
  RatingEvent,
  Role,
  TargetInterview,
  TargetInterviewDraft,
} from '../types'

export const DEFAULT_PRACTICE_PREFS: PracticePreferences = {
  languages: [],
  emphasis: 'balanced',
  companyId: null,
}

export const DEFAULT_SETTINGS: AccountSettings = {
  roleId: null,
  practicePrefs: DEFAULT_PRACTICE_PREFS,
  showSamples: true,
}

/**
 * Everything that belongs to the signed-in account. Pages only talk to this
 * interface; `UserDataProvider` implements it against the API.
 */
export interface UserDataContextValue {
  /** False until the account data has been fetched. */
  loaded: boolean

  roleId: Role['id'] | null
  setRoleId: (roleId: Role['id'] | null) => void
  practicePrefs: PracticePreferences
  setPracticePrefs: (prefs: PracticePreferences) => void
  /** Whether the demo interviews that ship with the app are shown. */
  showSamples: boolean
  setShowSamples: (show: boolean) => void

  notes: Record<Question['id'], string>
  setNote: (questionId: Question['id'], text: string) => void

  ratings: RatingEvent[]
  /** Latest rating per question. */
  latestRatings: LatestRatings
  /** Questions whose latest rating was "didn't know" or "hard". */
  flaggedIds: Question['id'][]
  addRating: (questionId: Question['id'], rating: PracticeRating) => void
  timesPractised: (questionId: Question['id']) => number

  cards: Flashcard[]
  addCard: (draft: FlashcardDraft) => Promise<Flashcard>
  updateCard: (id: Flashcard['id'], draft: FlashcardDraft) => Promise<void>
  deleteCard: (id: Flashcard['id']) => Promise<void>
  reviewCard: (id: Flashcard['id'], result: 'again' | 'good') => Promise<void>

  targets: TargetInterview[]
  /** The soonest upcoming target interview (today or later), or null. */
  nextTarget: TargetInterview | null
  /** Target interviews whose date has passed, most recent first. */
  pastTargets: TargetInterview[]
  addTarget: (draft: TargetInterviewDraft) => Promise<TargetInterview>
  updateTarget: (id: TargetInterview['id'], draft: TargetInterviewDraft) => Promise<void>
  deleteTarget: (id: TargetInterview['id']) => Promise<void>

  /** Interviews the user logged in the app (the sample data is merged in by CatalogProvider). */
  userInterviews: Interview[]
  addUserInterview: (draft: InterviewDraft) => Promise<Interview>
  updateUserInterview: (id: Interview['id'], draft: InterviewDraft) => Promise<Interview>
  deleteUserInterview: (id: Interview['id']) => Promise<void>

  /** Latest and best graded attempt per question the user has answered. */
  attemptSummaries: Record<Question['id'], AnswerAttemptSummary>
  /** Sends an answer to the grader; the attempt is saved to the account and returned. */
  evaluateAnswer: (request: EvaluateAnswerRequest) => Promise<AnswerAttempt>
  /** Full history for one question, newest first. */
  loadAttempts: (questionId: Question['id']) => Promise<AnswerAttempt[]>

  /** Questions the user wrote themselves. */
  userQuestions: Question[]
  addQuestion: (draft: QuestionDraft) => Promise<Question>
  updateQuestion: (id: Question['id'], draft: QuestionDraft) => Promise<Question>
  deleteQuestion: (id: Question['id']) => Promise<void>
}

export const UserDataContext = createContext<UserDataContextValue | null>(null)

export function useUserData(): UserDataContextValue {
  const context = useContext(UserDataContext)
  if (!context) {
    throw new Error('useUserData must be used inside <UserDataProvider>')
  }
  return context
}
