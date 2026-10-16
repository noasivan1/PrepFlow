import {
  ANSWER_VERDICTS,
  type AnswerEvaluation,
  type AnswerVerdict,
  type CodeSnippet,
  type Difficulty,
  type QuestionType,
} from '../../src/types/index.ts'
import { getProvider } from './index.ts'
import { extractJson } from './provider.ts'

/** Everything the grader needs; the route validates and trims it before it gets here. */
export interface EvaluateInput {
  questionText: string
  referenceAnswer: string
  userAnswer: string
  type: QuestionType
  topic: string
  difficulty: Difficulty
  /** Language the feedback should be written in. */
  language: 'en' | 'he'
  codeSolutions: CodeSnippet[]
  role: string
  company: string
}

const SYSTEM =
  'You are an experienced technical interviewer grading a candidate\'s answer to one interview question. ' +
  'The reference answer is the main source of truth: grade conceptual correctness, completeness, important missing points, ' +
  'incorrect claims, clarity and relevance to the question. Do NOT require identical wording, and do NOT invent requirements ' +
  'that the reference answer does not support. For coding questions judge the approach, correctness and complexity, not formatting ' +
  '(pseudocode or a clear description of the algorithm can be fully correct). Be specific and encouraging, like a good mentor. ' +
  'Answer with a single JSON object and nothing else.'

function buildPrompt(input: EvaluateInput): string {
  const code = input.codeSolutions.length
    ? `Reference solution code:\n${input.codeSolutions
        .map((snippet) => `--- ${snippet.language} ---\n${snippet.code.slice(0, 4000)}`)
        .join('\n')}`
    : null
  const lines: Array<string | null> = [
    '[prepflow:evaluate-answer]',
    `Question type: ${input.type}. Topic: ${input.topic}. Difficulty: ${input.difficulty}.`,
    input.role || input.company ? `Interview context: ${[input.role, input.company].filter(Boolean).join(' at ')}.` : null,
    `Question:\n${input.questionText}`,
    `Reference answer:\n${input.referenceAnswer || '(none provided; grade on general correctness for this question)'}`,
    code,
    `Candidate's answer:\n${input.userAnswer}`,
    `Write all free text (strengths, missingPoints, incorrectPoints, feedback, improvedAnswer) in this language: ${input.language}. ` +
      'Technical terms may stay in English.',
    'Return JSON with exactly these fields:\n' +
      '- score: integer 0-100 (100 = complete and correct)\n' +
      `- verdict: one of ${ANSWER_VERDICTS.join(' | ')}\n` +
      '- strengths: array of short strings, what the candidate got right (empty if nothing)\n' +
      '- missingPoints: array of short strings, important points the reference covers and the answer does not\n' +
      '- incorrectPoints: array of short strings, claims in the answer that are wrong (empty if none)\n' +
      '- feedback: 2-4 sentences of concrete advice on how to improve\n' +
      '- improvedAnswer: the candidate\'s answer rewritten into a complete, correct answer in their own style (or a model answer if theirs is empty of content)',
  ]
  return lines.filter((line): line is string => line !== null).join('\n\n')
}

function stringList(value: unknown, max = 8): string[] {
  if (!Array.isArray(value)) return []
  return value
    .filter((item): item is string => typeof item === 'string' && item.trim() !== '')
    .map((item) => item.trim().slice(0, 400))
    .slice(0, max)
}

function clampScore(value: unknown): number {
  const number = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(number)) return 0
  return Math.max(0, Math.min(100, Math.round(number)))
}

function verdictFor(value: unknown, score: number): AnswerVerdict {
  if (typeof value === 'string' && (ANSWER_VERDICTS as readonly string[]).includes(value)) return value as AnswerVerdict
  if (score >= 85) return 'correct'
  if (score >= 65) return 'mostly_correct'
  if (score >= 35) return 'partially_correct'
  return 'incorrect'
}

/** Validates the model's JSON into the shape the app stores and shows. */
export function parseEvaluation(text: string): AnswerEvaluation {
  const raw = extractJson(text, 'object')
  if (!raw || typeof raw !== 'object') throw new Error('The model did not return an evaluation object')
  const record = raw as Record<string, unknown>
  const score = clampScore(record.score)
  return {
    score,
    verdict: verdictFor(record.verdict, score),
    strengths: stringList(record.strengths),
    missingPoints: stringList(record.missingPoints),
    incorrectPoints: stringList(record.incorrectPoints),
    feedback: typeof record.feedback === 'string' ? record.feedback.trim().slice(0, 2000) : '',
    improvedAnswer: typeof record.improvedAnswer === 'string' ? record.improvedAnswer.trim().slice(0, 6000) : '',
  }
}

/** Grades one answer. Gemini when GEMINI_API_KEY is set, otherwise any other configured provider. */
export async function evaluateAnswer(input: EvaluateInput): Promise<{ evaluation: AnswerEvaluation; model: string }> {
  const provider = getProvider('gemini')
  const text = await provider.complete({ system: SYSTEM, prompt: buildPrompt(input), maxTokens: 3000, json: true })
  return { evaluation: parseEvaluation(text), model: `${provider.name}/${provider.model}` }
}
