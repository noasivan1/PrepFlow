import type { AccountData, AnswerAttempt, Interview, User } from '../../types'

export interface AdminCounts {
  notes: number
  ratings: number
  cards: number
  targets: number
  interviews: number
  questions: number
  attempts: number
}

export interface AdminUser extends User {
  counts: AdminCounts
}

/** Everything the server keeps for one account, plus its recent answer attempts in full. */
export type AdminAccount = AccountData & { user: User; attempts: AnswerAttempt[] }

export interface AdminInterview extends Interview {
  user: Pick<User, 'id' | 'name' | 'email'>
}

export interface QuestionRatingStat {
  questionId: string
  ratings: number
  /** Ratings that were "again" or "hard". */
  struggled: number
  users: number
}

export interface QuestionScoreStat {
  questionId: string
  attempts: number
  averageScore: number
}

export interface AdminStats {
  totals: { users: number; interviews: number; ratings: number; attempts: number; cards: number; notes: number }
  lastWeek: { activeUsers: number; ratings: number; attempts: number }
  averageScore: number | null
  hardestQuestions: QuestionRatingStat[]
  lowestScores: QuestionScoreStat[]
  mostPractised: QuestionRatingStat[]
}
