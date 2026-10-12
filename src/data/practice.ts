import {
  LANGUAGE_TOPIC_IDS,
  PRACTICE_PLAN_IDS,
  type Company,
  type Confidence,
  type Interview,
  type LatestRatings,
  type PracticePlan,
  type PracticePlanId,
  type PracticePreferences,
  type PracticeQueue,
  type PracticeRating,
  type Question,
  type QuestionType,
  type Role,
  type Topic,
} from '../types'
import { getCompany, getQuestions, getQuestionsAskedAtCompany, getRole, getTopics } from './queries'

/**
 * The session plans. `coding` is how many coding questions to include; the rest
 * of the time budget is filled with open questions.
 */
export const PRACTICE_PLANS: Record<PracticePlanId, PracticePlan> = {
  quick: { id: 'quick', minutes: 30, coding: 1 },
  standard: { id: 'standard', minutes: 60, coding: 2 },
  full: { id: 'full', minutes: 90, coding: 3 },
  review: { id: 'review', minutes: 30, coding: 1 },
  predicted: { id: 'predicted', minutes: 45, coding: 1 },
  general: { id: 'general', minutes: 30, coding: 1, scope: 'general' },
  coding: { id: 'coding', minutes: 40, coding: 4, scope: 'general', only: 'coding' },
  theory: { id: 'theory', minutes: 30, coding: 0, scope: 'general', only: 'open' },
}

/** The three tailored plans everyone sees; `review` and `predicted` appear when they have content. */
export const MAIN_PLAN_IDS: PracticePlanId[] = ['quick', 'standard', 'full']

/** Plans that ignore the interview and draw from the whole bank. */
export const GENERAL_PLAN_IDS: PracticePlanId[] = ['general', 'coding', 'theory']

/** Rough time budget per question type, in minutes. */
export const MINUTES_BY_TYPE: Record<QuestionType, number> = {
  coding: 10,
  'system-design': 6,
  troubleshooting: 4,
  conceptual: 3,
}

const confidenceOrder: Record<Confidence, number> = { low: 0, medium: 1, high: 2 }
const languageTopics = new Set<string>(LANGUAGE_TOPIC_IDS)

/** What the last practice rating says about the user's confidence now. */
const ratingToConfidence: Record<PracticeRating, Confidence> = {
  again: 'low',
  hard: 'low',
  okay: 'medium',
  easy: 'high',
}

export function isPracticePlanId(value: string | null): value is PracticePlanId {
  return value !== null && (PRACTICE_PLAN_IDS as readonly string[]).includes(value)
}

/** Confidence from the user's latest rating, or null when the question was never rated. */
export function ratedConfidence(question: Question, latestRatings: LatestRatings): Confidence | null {
  const rating = latestRatings[question.id]
  return rating ? ratingToConfidence[rating] : null
}

/** For ordering and scoring: the user's rating decides; a question never rated counts as medium (neutral). */
export function effectiveConfidence(question: Question, latestRatings: LatestRatings): Confidence {
  return ratedConfidence(question, latestRatings) ?? 'medium'
}

// ---------- Scoring: how well a question fits the interview ----------

export interface ScoringInput {
  roleId: Role['id'] | null
  prefs: PracticePreferences
  /** Current interviews, so a target company's real questions come first. */
  interviews: Interview[]
  /** The user's latest rating per question, for adaptive ordering. */
  latestRatings: LatestRatings
  /** Extra topics to favour, e.g. those found in the target interview's job requirements. */
  boostTopicIds?: Topic['id'][]
}

interface Scoring {
  role: Role | undefined
  company: Company | undefined
  /** False when nothing is known about the interview (no role, company or requirements). */
  hasContext: boolean
  /** A question about a language the interview does not use is not what to drill now. */
  offLanguage: (question: Question) => boolean
  /** Points for one question; see the comment on `createScoring`. */
  score: (question: Question) => number
}

/** Below this a question is not considered a match at all. */
export const MEDIUM_MATCH = 4
/** From this up a predicted question is shown as a high match. */
export const HIGH_MATCH = 7
/** A looser floor, used only when too few questions reach a medium match. */
const RELAXED_MATCH = 2.5
/** How many tailored questions a session pool should have before it is relaxed. */
const MIN_POOL = 12

/**
 * One scoring function for predictions and sessions. Points come from: what
 * the target company already asked (strongest), topics named in the job
 * requirements, the interview languages, the role's and company's focus
 * topics, the role tag, how often a question comes up, where the user is
 * weakest, and the chosen emphasis (coding vs theory).
 */
function createScoring({ roleId, prefs, interviews, latestRatings, boostTopicIds = [] }: ScoringInput): Scoring {
  const role = roleId ? getRole(roleId) : undefined
  const company = prefs.companyId ? getCompany(prefs.companyId) : undefined
  const languages = new Set<string>(prefs.languages)
  const boosted = new Set<string>(boostTopicIds)
  const preferred = new Set<string>([...languages, ...boosted])
  const askedAtCompany = new Set(
    company ? getQuestionsAskedAtCompany(interviews, company.id).map((question) => question.id) : [],
  )

  const offLanguage = (question: Question) =>
    preferred.size > 0 && languageTopics.has(question.topicId) && !preferred.has(question.topicId)

  const score = (question: Question) => {
    let points = 0
    if (askedAtCompany.has(question.id)) points += 6
    if (boosted.has(question.topicId)) points += 3
    if (languages.has(question.topicId)) points += 2
    if (company?.focusTopicIds.includes(question.topicId)) points += 2
    if (role?.focusTopicIds.includes(question.topicId)) points += 2
    if (role && question.roleIds.includes(role.id)) points += 1.5
    points += Math.min(question.timesAsked, 4) * 0.5
    const confidence = effectiveConfidence(question, latestRatings)
    points += confidence === 'low' ? 1 : confidence === 'medium' ? 0.5 : 0
    if (prefs.emphasis === 'coding') points += question.type === 'coding' ? 4 : -2
    if (prefs.emphasis === 'theory') points += question.type === 'coding' ? -4 : 2
    return points
  }

  return { role, company, hasContext: Boolean(role || company || boostTopicIds.length > 0), offLanguage, score }
}

// ---------- Prediction ----------

export type PredictionInput = ScoringInput

export interface TopicToStrengthen {
  topic: Topic
  /** The user's weakest rating across that topic's questions; null when nothing in it was rated yet. */
  confidence: Confidence | null
}

/** How strongly a predicted question matches the interview. Weak matches are not shown at all. */
export type MatchLevel = 'high' | 'medium'

export interface PredictedQuestion {
  question: Question
  match: MatchLevel
  /** The raw score, for ordering. */
  points: number
}

export interface Prediction {
  /** Questions most likely to come up, best guess first. Only medium and high matches. */
  questions: PredictedQuestion[]
  /** Focus topics of the role and company, weakest first. */
  strengthen: TopicToStrengthen[]
}

const PREDICTION_SIZE = 8
const OPEN_PER_TOPIC = 2

/**
 * Guesses what the target interview will ask, best guess first. Questions
 * about a language the interview does not use are dropped, and so is anything
 * below a medium match. A heuristic, not a promise.
 */
export function predictQuestions(input: PredictionInput): Prediction {
  const scoring = createScoring(input)
  const { role, company, offLanguage, score } = scoring
  if (!scoring.hasContext) return { questions: [], strengthen: [] }
  const { latestRatings, boostTopicIds = [] } = input

  const ranked = getQuestions()
    .filter((question) => !offLanguage(question))
    .map((question) => ({ question, points: score(question) }))
    .filter((entry) => entry.points >= MEDIUM_MATCH)
    .sort((a, b) => b.points - a.points)

  // Spread the open questions over topics (at most two per topic) so one strong topic does
  // not crowd out the rest of the interview. Coding questions are not capped.
  const perTopic = new Map<Topic['id'], number>()
  const chosen: typeof ranked = []
  const skipped: typeof ranked = []
  for (const entry of ranked) {
    if (chosen.length === PREDICTION_SIZE) break
    const isCoding = entry.question.type === 'coding'
    const used = perTopic.get(entry.question.topicId) ?? 0
    if (isCoding || used < OPEN_PER_TOPIC) {
      chosen.push(entry)
      if (!isCoding) perTopic.set(entry.question.topicId, used + 1)
    } else {
      skipped.push(entry)
    }
  }
  const questions = [...chosen, ...skipped]
    .slice(0, PREDICTION_SIZE)
    .map<PredictedQuestion>((entry) => ({ ...entry, match: entry.points >= HIGH_MATCH ? 'high' : 'medium' }))

  const focusIds = [...new Set([...boostTopicIds, ...(company?.focusTopicIds ?? []), ...(role?.focusTopicIds ?? [])])]
  const strengthen = getTopics()
    .filter((topic) => focusIds.includes(topic.id) && !offLanguage({ topicId: topic.id } as Question))
    .map((topic) => {
      const rated = getQuestions()
        .filter((question) => question.topicId === topic.id)
        .map((question) => ratedConfidence(question, latestRatings))
        .filter((confidence): confidence is Confidence => confidence !== null)
      const weakest = rated.reduce<Confidence | null>(
        (worst, current) => (worst === null || confidenceOrder[current] < confidenceOrder[worst] ? current : worst),
        null,
      )
      return { topic, confidence: weakest }
    })
    // Rated topics first (weakest at the top), unrated ones after.
    .sort((a, b) => (a.confidence ? confidenceOrder[a.confidence] : 3) - (b.confidence ? confidenceOrder[b.confidence] : 3))
    .slice(0, 4)

  return { questions, strengthen }
}

// ---------- Sessions ----------

export interface PracticeQueueInput extends ScoringInput {
  planId: PracticePlanId
  /** Same seed, same session: the picker previews a session and then starts exactly that one. */
  seed?: number
}

interface Candidate {
  question: Question
  points: number
}

/** Extra points in sessions for questions the user marked "didn't know" or "hard". */
const REVIEW_BONUS = 2
/** Lower = the draw sticks closer to the best matches; higher = more variety. */
const TEMPERATURE = 2.2

/** Small deterministic random generator (mulberry32), so a seed reproduces a session. */
function seededRandom(seed: number): () => number {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Orders candidates by drawing them one at a time, each with probability
 * proportional to exp(points / TEMPERATURE): strong matches come out first
 * most of the time, but every session is a different mix.
 */
function weightedDraw(candidates: Candidate[], random: () => number): Candidate[] {
  const remaining = [...candidates]
  const order: Candidate[] = []
  while (remaining.length > 0) {
    const weights = remaining.map((candidate) => Math.exp(candidate.points / TEMPERATURE))
    let roll = random() * weights.reduce((sum, weight) => sum + weight, 0)
    let index = remaining.findIndex((_, i) => {
      roll -= weights[i]
      return roll <= 0
    })
    if (index < 0) index = remaining.length - 1
    order.push(remaining[index])
    remaining.splice(index, 1)
  }
  return order
}

/** Spreads the coding questions evenly between the open ones, never first. */
function interleave(open: Question[], coding: Question[]): Question[] {
  if (coding.length === 0) return open
  const chunk = Math.max(1, Math.ceil(open.length / (coding.length + 1)))
  const result: Question[] = []
  coding.forEach((question, index) => {
    result.push(...open.slice(index * chunk, (index + 1) * chunk), question)
  })
  result.push(...open.slice(coding.length * chunk))
  return result
}

/**
 * Builds one session. The pool is every question that matches the interview
 * (same scoring as the predictions, plus a bonus for questions flagged in
 * earlier sessions); when too few questions match, the floor is lowered rather
 * than filling with unrelated ones. The order is a seeded weighted draw, so
 * every start is a different mix of the best matches, within the time budget.
 */
export function buildPracticeQueue(input: PracticeQueueInput): PracticeQueue {
  const { planId, prefs, latestRatings, seed = Date.now() } = input
  const plan = PRACTICE_PLANS[planId]
  const scoring = createScoring(input)
  const random = seededRandom(seed)

  const flagged = (question: Question) => {
    const rating = latestRatings[question.id]
    return rating === 'again' || rating === 'hard'
  }
  const general = plan.scope === 'general'
  // General plans ignore the interview: every question, near-uniform weights, a small nod to the role tag.
  const scored: Candidate[] = general
    ? getQuestions().map((question) => ({
        question,
        points: 1 + (scoring.role && question.roleIds.includes(scoring.role.id) ? 1 : 0) + (flagged(question) ? REVIEW_BONUS : 0),
      }))
    : getQuestions()
        .filter((question) => !scoring.offLanguage(question))
        .map((question) => ({ question, points: scoring.score(question) + (flagged(question) ? REVIEW_BONUS : 0) }))

  // The tailored pool. Relaxed step by step only when there is not enough to fill a session.
  let pool = scored
  if (scoring.hasContext && !general) {
    pool = scored.filter((candidate) => candidate.points >= MEDIUM_MATCH)
    if (pool.length < MIN_POOL) pool = scored.filter((candidate) => candidate.points >= RELAXED_MATCH)
    if (pool.length < MIN_POOL && scoring.role) {
      const roleId = scoring.role.id
      pool = scored.filter((candidate) => candidate.points >= RELAXED_MATCH || candidate.question.roleIds.includes(roleId))
    }
  }

  let ordered: Candidate[]
  let codingTarget = general
    ? plan.coding
    : Math.max(0, plan.coding + (prefs.emphasis === 'coding' ? 1 : prefs.emphasis === 'theory' ? -1 : 0))
  if (plan.only === 'coding') codingTarget = Number.POSITIVE_INFINITY
  if (plan.only === 'open') codingTarget = 0

  if (plan.id === 'review') {
    ordered = scored.filter((candidate) => flagged(candidate.question)).sort((a, b) => b.points - a.points)
    codingTarget = Number.POSITIVE_INFINITY // a review takes every flagged question that fits
  } else if (plan.id === 'predicted') {
    // The predicted list in its own order, then the rest of the pool drawn as usual.
    const predicted = predictQuestions(input).questions.map<Candidate>((entry) => ({ question: entry.question, points: entry.points }))
    const predictedIds = new Set(predicted.map((candidate) => candidate.question.id))
    ordered = [...predicted, ...weightedDraw(pool.filter((candidate) => !predictedIds.has(candidate.question.id)), random)]
  } else {
    ordered = weightedDraw(pool, random)
  }

  const taken = new Set<Question['id']>()
  let minutes = 0
  const fits = (question: Question) => minutes + MINUTES_BY_TYPE[question.type] <= plan.minutes

  /** Walks the ordered candidates and takes matching questions while `canAdd` allows. */
  const pick = (matches: (question: Question) => boolean, canAdd: (question: Question) => boolean): Question[] => {
    const picked: Question[] = []
    for (const { question } of ordered) {
      if (taken.has(question.id) || !matches(question) || !canAdd(question)) continue
      taken.add(question.id)
      picked.push(question)
      minutes += MINUTES_BY_TYPE[question.type]
    }
    return picked
  }

  const coding = pick(
    (question) => question.type === 'coding',
    (question) => taken.size < codingTarget && fits(question),
  )
  const open = plan.only === 'coding' ? [] : pick((question) => question.type !== 'coding', fits)
  const questions = interleave(open, coding)

  const pointsOf = new Map(scored.map((candidate) => [candidate.question.id, candidate.points]))
  return {
    plan,
    questions,
    estimatedMinutes: minutes,
    filledFromOtherRoles:
      plan.id === 'review' || general || !scoring.hasContext
        ? 0
        : questions.filter((question) => (pointsOf.get(question.id) ?? 0) < MEDIUM_MATCH).length,
    preferredLanguage: prefs.languages[0] ?? null,
    poolSize: pool.length,
    seed,
  }
}
