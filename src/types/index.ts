/**
 * Domain types for PrepFlow.
 *
 * Values that the user sees (stages, statuses, types, ...) are stored as short
 * ids and translated in the UI through `src/i18n/translations.ts`.
 * Data that has a name in both languages uses `LocalizedText`.
 */

export const LANGUAGES = ['en', 'he'] as const
export type Language = (typeof LANGUAGES)[number]
export type Theme = 'light' | 'dark'

export interface LocalizedText {
  en: string
  he: string
}

export type BadgeTone =
  | 'slate'
  | 'violet'
  | 'blue'
  | 'indigo'
  | 'sky'
  | 'teal'
  | 'emerald'
  | 'amber'
  | 'orange'
  | 'rose'
  | 'pink'

export interface Topic {
  id: string
  name: LocalizedText
  /** Colour used for the topic badge. */
  color: BadgeTone
}

export const ROLE_CATEGORIES = ['development', 'other'] as const
export type RoleCategory = (typeof ROLE_CATEGORIES)[number]

export const ROLE_ICONS = [
  'code',
  'cpu',
  'server',
  'layout',
  'layers',
  'cloud',
  'database',
  'bug',
  'headset',
  'shield',
  'terminal',
  'graduation',
] as const
export type RoleIcon = (typeof ROLE_ICONS)[number]

/** A job family the user can prepare for. Chosen on the first screen. */
export interface Role {
  id: string
  name: LocalizedText
  description: LocalizedText
  category: RoleCategory
  icon: RoleIcon
  /** Topics this role is usually tested on. Shown on the role card. */
  focusTopicIds: Topic['id'][]
}

export interface Company {
  id: string
  name: LocalizedText
  industry: LocalizedText
  /** Colour of the company avatar. */
  color: BadgeTone
  /** Short background: what the company does. */
  about: LocalizedText
  /** What their interviews usually look like. Not a guarantee. */
  tips: LocalizedText
  /** Topics candidates are usually tested on there. */
  focusTopicIds: Topic['id'][]
}

export const QUESTION_TYPES = ['conceptual', 'coding', 'system-design', 'troubleshooting'] as const
export type QuestionType = (typeof QUESTION_TYPES)[number]

export const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'] as const
export type Difficulty = (typeof DIFFICULTY_LEVELS)[number]

export const CONFIDENCE_LEVELS = ['low', 'medium', 'high'] as const
export type Confidence = (typeof CONFIDENCE_LEVELS)[number]

export const CODE_LANGUAGES = ['c', 'cpp', 'java', 'python', 'javascript', 'sql', 'bash'] as const
export type CodeLanguage = (typeof CODE_LANGUAGES)[number]

export interface CodeSnippet {
  language: CodeLanguage
  code: string
}

/** Topics that are programming languages. Used by the practice preferences. */
export const LANGUAGE_TOPIC_IDS = ['c', 'cpp', 'java', 'python', 'javascript'] as const
export type LanguageTopicId = (typeof LANGUAGE_TOPIC_IDS)[number]

export interface ProblemExample {
  input: string
  output: string
  explanation?: LocalizedText
}

/** Structured statement for longer problems: shown below the short title. */
export interface ProblemDetails {
  description: LocalizedText
  rules?: LocalizedText[]
  examples?: ProblemExample[]
  constraints?: LocalizedText[]
}

export interface Question {
  id: string
  /** The question in both languages. Keep it short; long statements go in `details`. */
  text: LocalizedText
  details?: ProblemDetails
  topicId: Topic['id']
  /** Roles this question is relevant for. Drives the role filter everywhere. */
  roleIds: Role['id'][]
  type: QuestionType
  difficulty: Difficulty
  /** Starting confidence in the seed data. The UI shows the user's own ratings instead (see ratedConfidence). */
  confidence: Confidence
  /** How many interviews this question has come up in. */
  timesAsked: number
  /** Model answer shown during practice and on the question page, in both languages. */
  answer?: LocalizedText
  /** Solutions in several languages, for coding questions. */
  codeSolutions?: CodeSnippet[]
  /** A short illustrative snippet, for open questions. Makes the concept concrete. */
  codeExamples?: CodeSnippet[]
  /** True when the user created this question in the app (stored in their account). */
  custom?: boolean
  /** True when the AI helper wrote it (always also custom). */
  generated?: boolean
  createdAt?: string
}

/** What the user fills in for their own question. Typed text is stored under both languages. */
export interface QuestionDraft {
  text: string
  topicId: Topic['id']
  roleIds: Role['id'][]
  type: QuestionType
  difficulty: Difficulty
  answer?: string
  codeSolutions?: CodeSnippet[]
  /** Hebrew versions, when the text exists in both languages (e.g. written by the AI helper). */
  textHe?: string
  answerHe?: string
  /** True when the AI helper wrote it. */
  generated?: boolean
}

/** How the grader judged an answer. */
export const ANSWER_VERDICTS = ['incorrect', 'partially_correct', 'mostly_correct', 'correct'] as const
export type AnswerVerdict = (typeof ANSWER_VERDICTS)[number]

/** Structured feedback on one answer. Everything the UI shows comes from here, never a bare score. */
export interface AnswerEvaluation {
  /** 0-100. */
  score: number
  verdict: AnswerVerdict
  strengths: string[]
  missingPoints: string[]
  incorrectPoints: string[]
  feedback: string
  improvedAnswer: string
}

/** One saved attempt at answering a question, with its evaluation. */
export interface AnswerAttempt {
  id: string
  questionId: Question['id']
  answer: string
  score: number
  verdict: AnswerVerdict
  evaluation: AnswerEvaluation
  /** ISO date-time. */
  createdAt: string
}

/** Raw aggregate row behind `AnswerAttemptSummary` (server side). */
export interface AccountAttemptRow {
  question_id: string
  attempts: number
  best_score: number
  latest_score: number
  last_at: string
}

/** What the client sends to `POST /api/me/ai/evaluate-answer`. */
export interface EvaluateAnswerRequest {
  questionId: Question['id']
  questionText: string
  referenceAnswer: string
  userAnswer: string
  type: QuestionType
  topic: Topic['id']
  difficulty: Difficulty
  language: Language
  codeSolutions: CodeSnippet[]
  role: string
  company: string
}

/** Per-question roll-up of the user's attempts, loaded with the account. */
export interface AnswerAttemptSummary {
  questionId: Question['id']
  attempts: number
  bestScore: number
  latestScore: number
  lastAt: string
}

/** A question proposed by the AI helper, before the user saves it to their bank. */
export interface GeneratedQuestion {
  text: LocalizedText
  type: QuestionType
  topicId: Topic['id']
  difficulty: Difficulty
  /** How likely the model thinks it is to come up in this interview. */
  likelihood: 'high' | 'medium'
  why: LocalizedText
  answer: LocalizedText
  code?: CodeSnippet
}

export const INTERVIEW_STAGES = ['hr', 'technical', 'home-assignment', 'system-design', 'final'] as const
export type InterviewStage = (typeof INTERVIEW_STAGES)[number]

export const INTERVIEW_STATUSES = ['scheduled', 'awaiting', 'passed', 'rejected'] as const
export type InterviewStatus = (typeof INTERVIEW_STATUSES)[number]

export interface Interview {
  id: string
  companyId: Company['id']
  roleId: Role['id']
  /** The actual job title. When typed in the app, both languages get the same text. */
  position: LocalizedText
  stage: InterviewStage
  /** ISO date, `YYYY-MM-DD`. */
  date: string
  status: InterviewStatus
  notes?: LocalizedText
  questionIds: Question['id'][]
  /** True for the built-in interviews that ship with the app (not stored in the user's account). */
  sample?: boolean
  /** Built-in, but from an interview the user actually reported (their real questions), not invented demo data. */
  reported?: boolean
}

/** What the user fills in when logging or editing an interview. */
export type InterviewDraft = Omit<Interview, 'id' | 'sample'>

/** `again` means "didn't know". */
export const PRACTICE_RATINGS = ['again', 'hard', 'okay', 'easy'] as const
export type PracticeRating = (typeof PRACTICE_RATINGS)[number]

/** `review` drills only flagged questions, `predicted` the ones likely in the target interview. */
export const PRACTICE_PLAN_IDS = ['quick', 'standard', 'full', 'review', 'predicted', 'general', 'coding', 'theory'] as const
export type PracticePlanId = (typeof PRACTICE_PLAN_IDS)[number]

/** One rating given during practice. Appended, never edited, so history is kept. */
export interface RatingEvent {
  questionId: Question['id']
  rating: PracticeRating
  /** ISO date-time. */
  at: string
}

/** Latest rating per question, derived from the rating history. */
export type LatestRatings = Record<Question['id'], PracticeRating>

// ---------- Accounts ----------

export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  createdAt: string
}

/** An interview the user is preparing for. Drives predictions and practice. */
export interface TargetInterview {
  id: string
  companyId: Company['id'] | null
  roleId: Role['id']
  /** Job title as written in the posting. */
  position: string
  /** ISO date, `YYYY-MM-DD`. */
  date: string
  /** Languages the interview is known to use. */
  languages: LanguageTopicId[]
  /** The job requirements, pasted from the posting. Topics are extracted from it. */
  requirements: string
  createdAt: string
}

export type TargetInterviewDraft = Omit<TargetInterview, 'id' | 'createdAt'>

export const FLASHCARD_KINDS = ['mistake', 'remember', 'approach', 'custom'] as const
export type FlashcardKind = (typeof FLASHCARD_KINDS)[number]

/** A self-study card. `mistake`: where I went wrong; `remember`: a fact; `approach`: how to attack it. */
export interface Flashcard {
  id: string
  kind: FlashcardKind
  front: string
  back: string
  questionId?: Question['id']
  createdAt: string
  reviews: number
  lastResult?: 'again' | 'good'
  lastReviewedAt?: string
}

export type FlashcardDraft = Pick<Flashcard, 'kind' | 'front' | 'back' | 'questionId'>

/** Preferences that belong to the account, not to the device. */
export interface AccountSettings {
  roleId: Role['id'] | null
  practicePrefs: PracticePreferences
  /** Whether the demo interviews that ship with the app are shown next to the user's own. */
  showSamples: boolean
}

/** Everything the API returns for the signed-in user. */
export interface AccountData {
  settings: AccountSettings
  /** Free-text note per question, e.g. a phrasing the user liked. */
  notes: Record<Question['id'], string>
  ratings: RatingEvent[]
  cards: Flashcard[]
  targets: TargetInterview[]
  interviews: Interview[]
  /** Questions the user created themselves. */
  questions: Question[]
  /** One row per question the user has answered, newest attempt summarised. */
  attemptSummaries: AnswerAttemptSummary[]
}

/** A session length the user can pick on the practice page. */
export interface PracticePlan {
  id: PracticePlanId
  /** Time budget in minutes. The builder never exceeds it. */
  minutes: number
  /** How many coding questions the session should contain. */
  coding: number
  /** 'tailored' (default) draws from questions that match the interview; 'general' from the whole bank. */
  scope?: 'tailored' | 'general'
  /** Restrict the session to one kind of question. */
  only?: 'coding' | 'open'
}

export const PRACTICE_EMPHASES = ['balanced', 'coding', 'theory'] as const
export type PracticeEmphasis = (typeof PRACTICE_EMPHASES)[number]

/** Answers to the "tailor to the interview" questionnaire on the practice page. */
export interface PracticePreferences {
  /** Languages the interview focuses on. Empty means no preference. */
  languages: LanguageTopicId[]
  emphasis: PracticeEmphasis
  /** Company the user is preparing for, if known. */
  companyId: Company['id'] | null
}

/** A concrete session built for one role, one plan and the user's preferences. */
export interface PracticeQueue {
  plan: PracticePlan
  questions: Question[]
  estimatedMinutes: number
  /** Questions below a medium match, added only because not enough questions fit this interview yet. */
  filledFromOtherRoles: number
  /** Default tab for code snippets, from the preferred languages. */
  preferredLanguage: CodeLanguage | null
  /** How many questions match this interview: the pool a session is drawn from. */
  poolSize: number
  /** The seed that produced this order; the same seed reproduces the session. */
  seed: number
}

export interface TopicMastery {
  topicId: Topic['id']
  /** 0–100 */
  mastery: number
}

export interface FrequentlyAskedItem {
  questionId: Question['id']
  /** Short label for compact lists, e.g. "Polymorphism". */
  label: LocalizedText
  timesAsked: number
}

/** Everything the dashboard needs. Later this is one API response. */
export interface DashboardSummary {
  streakDays: number
  totals: {
    interviews: number
    questions: number
    topics: number
  }
  needsAttention: TopicMastery[]
  frequentlyAsked: FrequentlyAskedItem[]
}
