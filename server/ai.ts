import {
  CODE_LANGUAGES,
  DIFFICULTY_LEVELS,
  QUESTION_TYPES,
  type CodeSnippet,
  type GeneratedQuestion,
} from '../src/types/index.ts'

/**
 * The AI helper: asks a Claude model for new interview questions in the style
 * of a specific interview. Everything it knows comes from the request (role,
 * company, posting, languages, the questions already asked there), so the
 * server itself stays free of app data.
 *
 * Needs ANTHROPIC_API_KEY (a .env file in the project root is loaded on start).
 * PREPFLOW_AI=stub returns canned questions without calling the API, for development.
 */

export interface GenerateInput {
  role: { name: string; description: string } | null
  company: { name: string; about: string; tips: string } | null
  position: string
  requirements: string
  languages: string[]
  emphasis: 'balanced' | 'coding' | 'theory'
  topics: Array<{ id: string; name: string }>
  /** Titles already in the bank, so the model does not repeat them. */
  avoid: string[]
  /** Questions actually asked at this company or collected by the user: the style to imitate. */
  examples: string[]
  count: number
}

export class AiNotConfiguredError extends Error {
  constructor() {
    super('ANTHROPIC_API_KEY is not set')
  }
}

export const AI_MODEL = process.env.PREPFLOW_AI_MODEL ?? 'claude-sonnet-5'
const API_URL = 'https://api.anthropic.com/v1/messages'

const SYSTEM =
  'You are a senior technical interviewer at Israeli tech companies (NVIDIA, Intel, Elbit, Rafael, Check Point, ...). ' +
  'You write realistic interview questions for one specific role, company and job posting, at the level a real interviewer would ask. ' +
  'You answer with JSON only: a single array, no prose, no markdown fences.'

function buildPrompt(input: GenerateInput): string {
  const emphasis =
    input.emphasis === 'coding'
      ? 'mostly coding exercises (LeetCode style, solvable in 20-30 minutes)'
      : input.emphasis === 'theory'
        ? 'mostly conceptual / theory questions'
        : 'a balanced mix of coding exercises and conceptual questions'
  const lines: Array<string | null> = [
    `Write ${input.count} NEW interview questions that are likely to be asked in this interview.`,
    input.role ? `Role: ${input.role.name} - ${input.role.description}` : null,
    input.company
      ? `Company: ${input.company.name}. ${input.company.about} What is known about their interviews: ${input.company.tips}`
      : null,
    input.position ? `Job title: ${input.position}` : null,
    input.requirements ? `Job requirements (pasted from the posting):\n${input.requirements}` : null,
    input.languages.length > 0
      ? `Programming languages this interview uses: ${input.languages.join(', ')}. Any code must be in one of them.`
      : null,
    `Emphasis: ${emphasis}.`,
    input.examples.length > 0
      ? `Questions that were actually asked here or that the candidate collected. Match their style, depth and level, but do not repeat them:\n${input.examples
          .map((example) => `- ${example}`)
          .join('\n')}`
      : null,
    input.avoid.length > 0
      ? `Do NOT repeat any of these questions that the candidate already has (or trivial rewordings of them):\n${input.avoid
          .map((title) => `- ${title}`)
          .join('\n')}`
      : null,
    `Allowed topic ids: ${input.topics.map((topic) => `${topic.id} (${topic.name})`).join(', ')}.`,
    `Return a JSON array of exactly ${input.count} objects with these fields:\n` +
      '- text_en, text_he: the question, short and precise (Hebrew must read naturally; technical terms may stay in English)\n' +
      `- type: one of ${QUESTION_TYPES.join(' | ')}\n` +
      '- topic: one of the allowed topic ids\n' +
      `- difficulty: one of ${DIFFICULTY_LEVELS.join(' | ')}\n` +
      '- likelihood: "high" or "medium" - how likely it is to come up in THIS interview\n' +
      '- why_en, why_he: one sentence on why it is likely here\n' +
      '- answer_en, answer_he: a model answer in 2-5 sentences (for coding questions: the approach and its complexity)\n' +
      `- code: only for coding questions, an object { "language": one of ${CODE_LANGUAGES.join(' | ')}, "code": a complete idiomatic solution }`,
  ]
  return lines.filter((line): line is string => line !== null).join('\n\n')
}

function oneOf<T extends string>(value: unknown, options: readonly T[]): T | null {
  return typeof value === 'string' && (options as readonly string[]).includes(value) ? (value as T) : null
}

function field(record: Record<string, unknown>, key: string): string {
  const value = record[key]
  return typeof value === 'string' ? value.trim() : ''
}

function parseCode(value: unknown): CodeSnippet | undefined {
  if (!value || typeof value !== 'object') return undefined
  const record = value as Record<string, unknown>
  const language = oneOf(record.language, CODE_LANGUAGES)
  const code = field(record, 'code')
  return language && code ? { language, code } : undefined
}

/** Pulls the JSON array out of the model's reply and keeps only well-formed questions. */
export function parseGenerated(text: string, input: GenerateInput): GeneratedQuestion[] {
  const start = text.indexOf('[')
  const end = text.lastIndexOf(']')
  if (start < 0 || end <= start) throw new Error('The model did not return a JSON array')
  const raw = JSON.parse(text.slice(start, end + 1)) as unknown
  if (!Array.isArray(raw)) throw new Error('The model did not return a JSON array')
  const allowedTopics = new Set(input.topics.map((topic) => topic.id))
  const fallbackTopic = input.topics[0]?.id ?? 'algorithms'

  return raw.flatMap((item): GeneratedQuestion[] => {
    if (!item || typeof item !== 'object') return []
    const record = item as Record<string, unknown>
    const textEn = field(record, 'text_en')
    if (!textEn) return []
    const topic = field(record, 'topic')
    const answerEn = field(record, 'answer_en')
    const whyEn = field(record, 'why_en')
    return [
      {
        text: { en: textEn, he: field(record, 'text_he') || textEn },
        type: oneOf(record.type, QUESTION_TYPES) ?? 'conceptual',
        topicId: allowedTopics.has(topic) ? topic : fallbackTopic,
        difficulty: oneOf(record.difficulty, DIFFICULTY_LEVELS) ?? 'medium',
        likelihood: field(record, 'likelihood') === 'high' ? 'high' : 'medium',
        why: { en: whyEn, he: field(record, 'why_he') || whyEn },
        answer: { en: answerEn, he: field(record, 'answer_he') || answerEn },
        code: parseCode(record.code),
      },
    ]
  })
}

/** Canned output for development, so the whole flow can be exercised without an API key. */
function stubQuestions(input: GenerateInput): GeneratedQuestion[] {
  const topic = input.topics.find((candidate) => candidate.id === 'python') ?? input.topics[0]
  const where = input.company?.name ?? input.role?.name ?? 'this interview'
  const questions: GeneratedQuestion[] = [
    {
      text: { en: `(stub) Parse a log file and report the top 3 error codes for ${where}.`, he: `(stub) נתחו קובץ לוג והחזירו את 3 קודי השגיאה הנפוצים עבור ${where}.` },
      type: 'coding',
      topicId: topic?.id ?? 'algorithms',
      difficulty: 'easy',
      likelihood: 'high',
      why: { en: 'Log parsing in Python comes up in almost every verification screening.', he: 'ניתוח לוגים ב-Python מופיע כמעט בכל סינון לוריפיקציה.' },
      answer: { en: 'Stream the file, count codes in a dict, take the three largest with heapq.nlargest. O(n).', he: 'קוראים את הקובץ בזרימה, סופרים קודים ב-dict ולוקחים את השלושה הגדולים עם heapq.nlargest. O(n).' },
      code: { language: 'python', code: 'from collections import Counter\n\ndef top_errors(path, k=3):\n    counts = Counter()\n    with open(path) as f:\n        for line in f:\n            if " ERROR " in line:\n                counts[line.split()[3]] += 1\n    return counts.most_common(k)' },
    },
    {
      text: { en: '(stub) What happens when a TCP segment is lost?', he: '(stub) מה קורה כשסגמנט TCP הולך לאיבוד?' },
      type: 'conceptual',
      topicId: input.topics.find((candidate) => candidate.id === 'networking')?.id ?? topic?.id ?? 'algorithms',
      difficulty: 'medium',
      likelihood: 'medium',
      why: { en: 'Networking fundamentals are listed in the requirements.', he: 'יסודות רשתות מופיעים בדרישות.' },
      answer: { en: 'The receiver keeps acknowledging the last in-order byte; duplicate ACKs or a retransmission timeout trigger a resend and congestion control slows down.', he: 'המקבל ממשיך לאשר את הבייט האחרון שהגיע בסדר; ACK-ים כפולים או timeout גורמים לשידור חוזר ובקרת הגודש מאיטה.' },
    },
  ]
  return questions.slice(0, input.count)
}

export async function generateQuestions(input: GenerateInput): Promise<{ questions: GeneratedQuestion[]; model: string }> {
  if (process.env.PREPFLOW_AI === 'stub') return { questions: stubQuestions(input), model: 'stub' }
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new AiNotConfiguredError()

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model: AI_MODEL,
      max_tokens: 8000,
      system: SYSTEM,
      messages: [{ role: 'user', content: buildPrompt(input) }],
    }),
    signal: AbortSignal.timeout(90_000),
  })
  if (!response.ok) throw new Error(`Anthropic API ${response.status}: ${(await response.text()).slice(0, 500)}`)
  const data = (await response.json()) as { content?: Array<{ type: string; text?: string }> }
  const text = (data.content ?? [])
    .filter((block) => block.type === 'text')
    .map((block) => block.text ?? '')
    .join('')
  return { questions: parseGenerated(text, input), model: AI_MODEL }
}
