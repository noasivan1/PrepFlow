import type { AnswerAttemptSummary, LatestRatings, RatingEvent } from '../types'
import { computeStreak } from './summary'

export interface DayActivity {
  /** Local date, `YYYY-MM-DD`. */
  date: string
  /** Practice ratings given that day. */
  count: number
}

export interface ProfileStats {
  /** Different questions the user has rated at least once. */
  practisedQuestions: number
  /** Questions whose latest rating was "okay" or "easy". */
  knew: number
  /** Questions whose latest rating was "didn't know" or "hard". */
  didNotKnow: number
  /** Every rating ever given (one per question per session). */
  totalAnswers: number
  /** The last seven days, oldest first, today last. */
  lastWeek: DayActivity[]
  /** Answers in the last seven days. */
  weekTotal: number
  /** Days with any practice in the last 30 days. */
  activeDaysThisMonth: number
  streak: number
  bestStreak: number
  /** Answers sent to the AI check, and their average latest score (null before the first). */
  checkedAnswers: number
  averageScore: number | null
}

function localIso(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/** Longest run of consecutive days with practice, ever. */
function longestStreak(days: Set<string>): number {
  let best = 0
  for (const day of days) {
    const [year, month, date] = day.split('-').map(Number)
    const previous = localIso(new Date(year, month - 1, date - 1))
    if (days.has(previous)) continue // not the start of a run
    let length = 1
    while (days.has(localIso(new Date(year, month - 1, date + length)))) length += 1
    best = Math.max(best, length)
  }
  return best
}

/** The numbers on the profile page, from the account's own ratings and AI checks. */
export function computeProfileStats(
  ratings: RatingEvent[],
  latestRatings: LatestRatings,
  attempts: AnswerAttemptSummary[],
  today = new Date(),
): ProfileStats {
  const latest = Object.values(latestRatings)
  const perDay = new Map<string, number>()
  for (const event of ratings) {
    const day = localIso(new Date(event.at))
    perDay.set(day, (perDay.get(day) ?? 0) + 1)
  }

  const lastWeek: DayActivity[] = []
  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = localIso(new Date(today.getFullYear(), today.getMonth(), today.getDate() - offset))
    lastWeek.push({ date, count: perDay.get(date) ?? 0 })
  }
  let activeDaysThisMonth = 0
  for (let offset = 0; offset < 30; offset += 1) {
    if (perDay.has(localIso(new Date(today.getFullYear(), today.getMonth(), today.getDate() - offset)))) activeDaysThisMonth += 1
  }

  const checkedAnswers = attempts.reduce((sum, summary) => sum + summary.attempts, 0)
  const averageScore = attempts.length
    ? Math.round(attempts.reduce((sum, summary) => sum + summary.latestScore, 0) / attempts.length)
    : null

  return {
    practisedQuestions: latest.length,
    knew: latest.filter((rating) => rating === 'okay' || rating === 'easy').length,
    didNotKnow: latest.filter((rating) => rating === 'again' || rating === 'hard').length,
    totalAnswers: ratings.length,
    lastWeek,
    weekTotal: lastWeek.reduce((sum, day) => sum + day.count, 0),
    activeDaysThisMonth,
    streak: computeStreak(ratings, today),
    bestStreak: longestStreak(new Set(perDay.keys())),
    checkedAnswers,
    averageScore,
  }
}
