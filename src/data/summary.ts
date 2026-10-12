import type { Confidence, DashboardSummary, Interview, LatestRatings, RatingEvent, Role, Topic } from '../types'
import { ratedConfidence } from './practice'
import { getQuestions, getTopics } from './queries'

/** A rough "mastery" percentage per confidence level, averaged over a topic's rated questions. */
const MASTERY: Record<Confidence, number> = { low: 30, medium: 65, high: 95 }

function localIso(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/**
 * Consecutive days with at least one practice rating, counting back from today.
 * A streak survives until the end of today: practising yesterday but not yet today still counts.
 */
export function computeStreak(ratings: RatingEvent[], today = new Date()): number {
  const days = new Set(ratings.map((event) => localIso(new Date(event.at))))
  const cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  if (!days.has(localIso(cursor))) cursor.setDate(cursor.getDate() - 1)
  let streak = 0
  while (days.has(localIso(cursor))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

export interface SummaryInput {
  /** Everything in the catalog; only the user's own interviews are counted. */
  interviews: Interview[]
  ratings: RatingEvent[]
  latestRatings: LatestRatings
  roleId: Role['id'] | null
}

interface TopicMasteryItem {
  topicId: Topic['id']
  mastery: number
}

/**
 * The numbers on the dashboard, computed from the catalog and the user's own
 * ratings. Topics the user has never rated are left out of "needs attention":
 * there is no honest number to show for them yet.
 */
export function computeDashboardSummary({ interviews, ratings, latestRatings, roleId }: SummaryInput): DashboardSummary {
  const questions = getQuestions()
  const forRole = roleId ? questions.filter((question) => question.roleIds.includes(roleId)) : questions
  const pool = forRole.length >= 6 ? forRole : questions

  const needsAttention = getTopics()
    .map<TopicMasteryItem | null>((topic) => {
      const rated = pool
        .filter((question) => question.topicId === topic.id)
        .map((question) => ratedConfidence(question, latestRatings))
        .filter((confidence): confidence is Confidence => confidence !== null)
      if (rated.length === 0) return null
      const total = rated.reduce((sum, confidence) => sum + MASTERY[confidence], 0)
      return { topicId: topic.id, mastery: Math.round(total / rated.length) }
    })
    .filter((item): item is TopicMasteryItem => item !== null)
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, 3)

  const frequentlyAsked = [...pool]
    .filter((question) => question.timesAsked > 0)
    .sort((a, b) => b.timesAsked - a.timesAsked)
    .slice(0, 6)
    .map((question) => ({ questionId: question.id, label: question.text, timesAsked: question.timesAsked }))

  return {
    streakDays: computeStreak(ratings),
    totals: {
      interviews: interviews.filter((interview) => !interview.sample).length,
      questions: questions.length,
      topics: getTopics().length,
    },
    needsAttention,
    frequentlyAsked,
  }
}
