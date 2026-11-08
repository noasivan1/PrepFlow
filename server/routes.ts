import { randomUUID } from 'node:crypto'
import { Router, type Request, type Response } from 'express'
import {
  CODE_LANGUAGES,
  DIFFICULTY_LEVELS,
  FLASHCARD_KINDS,
  LANGUAGES,
  INTERVIEW_STAGES,
  INTERVIEW_STATUSES,
  LANGUAGE_TOPIC_IDS,
  PRACTICE_EMPHASES,
  PRACTICE_RATINGS,
  QUESTION_TYPES,
  type AccountAttemptRow,
  type AccountSettings,
  type AnswerAttempt,
  type AnswerAttemptSummary,
  type AnswerEvaluation,
  type CodeSnippet,
  type Flashcard,
  type Interview,
  type PracticePreferences,
  type Question,
  type RatingEvent,
  type TargetInterview,
} from '../src/types/index.ts'
import { AiBusyError, AiNotConfiguredError, evaluateAnswer, generateQuestions, type EvaluateInput, type GenerateInput } from './ai/index.ts'
import {
  clearSessionCookie,
  createSession,
  currentUser,
  deleteSession,
  hashPassword,
  readCookie,
  requireAdmin,
  requireUser,
  SESSION_COOKIE,
  setSessionCookie,
  toPublicUser,
  userFromRequest,
  verifyPassword,
  type UserRow,
} from './auth.ts'
import { all, db, get, nowIso, parseDocument, run } from './db.ts'

export const router = Router()

// ---------- Small validation helpers ----------

type Body = Record<string, unknown>
type DocumentRow = { id: string; data: string }
type DocumentTable = 'cards' | 'targets' | 'interviews' | 'questions'

function body(req: Request): Body {
  return req.body && typeof req.body === 'object' ? (req.body as Body) : {}
}

function text(value: unknown, max = 500): string | null {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= max ? value.trim() : null
}

function optionalText(value: unknown, max = 5000): string {
  return typeof value === 'string' ? value.slice(0, max) : ''
}

function oneOf<T extends string>(value: unknown, options: readonly T[]): T | null {
  return typeof value === 'string' && (options as readonly string[]).includes(value) ? (value as T) : null
}

function stringList(value: unknown, max = 50): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string').slice(0, max) : []
}

function isoDate(value: unknown): string | null {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null
}

function bad(res: Response, message: string) {
  res.status(400).json({ error: message })
}

function notFound(res: Response) {
  res.status(404).json({ error: 'not_found' })
}

/** One row of a per-user document table, or undefined when it is not this user's. */
function ownedRow(table: DocumentTable, id: unknown, userId: string): Promise<DocumentRow | undefined> {
  return get<DocumentRow>(`SELECT id, data FROM ${table} WHERE id = ? AND user_id = ?`, [String(id), userId])
}

function insertDocument(table: DocumentTable, userId: string, document: { id: string }): Promise<void> {
  return run(`INSERT INTO ${table} (id, user_id, data, created_at) VALUES (?, ?, ?, ?)`, [
    document.id,
    userId,
    JSON.stringify(document),
    nowIso(),
  ])
}

function updateDocument<T extends { id: string }>(table: DocumentTable, document: T): Promise<void> {
  return run(`UPDATE ${table} SET data = ? WHERE id = ?`, [JSON.stringify(document), document.id])
}

async function listDocuments<T extends { id: string }>(table: DocumentTable, userId: string): Promise<T[]> {
  const rows = await all<DocumentRow>(`SELECT id, data FROM ${table} WHERE user_id = ? ORDER BY created_at`, [userId])
  return rows.map((row) => parseDocument<T>(row))
}

function defaultSettings(): AccountSettings {
  return { roleId: null, practicePrefs: { languages: [], emphasis: 'balanced', companyId: null }, showSamples: true }
}

function parsePrefs(value: unknown): PracticePreferences {
  const record = value && typeof value === 'object' ? (value as Body) : {}
  const languages = stringList(record.languages).filter((id): id is (typeof LANGUAGE_TOPIC_IDS)[number] =>
    (LANGUAGE_TOPIC_IDS as readonly string[]).includes(id),
  )
  return {
    languages,
    emphasis: oneOf(record.emphasis, PRACTICE_EMPHASES) ?? 'balanced',
    companyId: typeof record.companyId === 'string' ? record.companyId : null,
  }
}

// ---------- Auth ----------

router.post('/auth/register', async (req, res) => {
  const { email, name, password } = body(req)
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
  const cleanName = text(name, 80)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) return bad(res, 'invalid_email')
  if (!cleanName) return bad(res, 'invalid_name')
  if (typeof password !== 'string' || password.length < 8) return bad(res, 'weak_password')

  const exists = await get('SELECT 1 AS one FROM users WHERE email = ?', [cleanEmail])
  if (exists) {
    res.status(409).json({ error: 'email_taken' })
    return
  }

  // The very first account becomes the admin; everyone after is a regular user.
  const count = (await get<{ n: number }>('SELECT COUNT(*) AS n FROM users'))?.n ?? 0
  const row: UserRow = {
    id: randomUUID(),
    email: cleanEmail,
    name: cleanName,
    password_hash: hashPassword(password),
    role: count === 0 ? 'admin' : 'user',
    created_at: nowIso(),
  }
  await run('INSERT INTO users (id, email, name, password_hash, role, created_at) VALUES (?, ?, ?, ?, ?, ?)', [
    row.id,
    row.email,
    row.name,
    row.password_hash,
    row.role,
    row.created_at,
  ])
  await run('INSERT INTO settings (user_id, data) VALUES (?, ?)', [row.id, JSON.stringify(defaultSettings())])

  const session = await createSession(row.id)
  setSessionCookie(res, session.token, session.expiresAt)
  res.status(201).json({ user: toPublicUser(row) })
})

router.post('/auth/login', async (req, res) => {
  const { email, password } = body(req)
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
  const row = await get<UserRow>('SELECT * FROM users WHERE email = ?', [cleanEmail])
  if (!row || typeof password !== 'string' || !verifyPassword(password, row.password_hash)) {
    res.status(401).json({ error: 'invalid_credentials' })
    return
  }
  const session = await createSession(row.id)
  setSessionCookie(res, session.token, session.expiresAt)
  res.json({ user: toPublicUser(row) })
})

router.post('/auth/logout', async (req, res) => {
  const token = readCookie(req, SESSION_COOKIE)
  if (token) await deleteSession(token)
  clearSessionCookie(res)
  res.status(204).end()
})

router.get('/auth/me', async (req, res) => {
  const user = await userFromRequest(req)
  if (!user) {
    res.status(401).json({ error: 'unauthenticated' })
    return
  }
  res.json({ user: toPublicUser(user) })
})

// ---------- The signed-in user's data ----------

router.use('/me', requireUser)

async function loadAccount(userId: string) {
  const settingsRow = await get<{ data: string }>('SELECT data FROM settings WHERE user_id = ?', [userId])
  // Settings saved by an older version may lack newer fields; the defaults fill them in.
  const settings: AccountSettings = {
    ...defaultSettings(),
    ...(settingsRow ? (JSON.parse(settingsRow.data) as Partial<AccountSettings>) : {}),
  }

  const notes: Record<string, string> = {}
  for (const row of await all<{ question_id: string; text: string }>('SELECT question_id, text FROM notes WHERE user_id = ?', [
    userId,
  ])) {
    notes[row.question_id] = row.text
  }

  const ratings = (
    await all<{ question_id: string; rating: RatingEvent['rating']; at: string }>(
      'SELECT question_id, rating, at FROM ratings WHERE user_id = ? ORDER BY id',
      [userId],
    )
  ).map((row) => ({ questionId: row.question_id, rating: row.rating, at: row.at }))

  const [cards, targets, interviews, questions, attemptSummaries] = await Promise.all([
    listDocuments<Flashcard>('cards', userId),
    listDocuments<TargetInterview>('targets', userId),
    listDocuments<Interview>('interviews', userId),
    listDocuments<Question>('questions', userId),
    loadAttemptSummaries(userId),
  ])

  return { settings, notes, ratings, cards, targets, interviews, questions, attemptSummaries }
}

router.get('/me/data', async (_req, res) => {
  res.json(await loadAccount(currentUser(res).id))
})

router.put('/me/settings', async (req, res) => {
  const { roleId, practicePrefs, showSamples } = body(req)
  const settings: AccountSettings = {
    roleId: typeof roleId === 'string' ? roleId : null,
    practicePrefs: parsePrefs(practicePrefs),
    showSamples: showSamples !== false,
  }
  await run('INSERT INTO settings (user_id, data) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data', [
    currentUser(res).id,
    JSON.stringify(settings),
  ])
  res.json(settings)
})

router.put('/me/notes/:questionId', async (req, res) => {
  const questionId = String(req.params.questionId)
  const note = optionalText(body(req).text, 5000)
  if (note.trim()) {
    await run(
      `INSERT INTO notes (user_id, question_id, text, updated_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(user_id, question_id) DO UPDATE SET text = excluded.text, updated_at = excluded.updated_at`,
      [currentUser(res).id, questionId, note, nowIso()],
    )
  } else {
    await run('DELETE FROM notes WHERE user_id = ? AND question_id = ?', [currentUser(res).id, questionId])
  }
  res.status(204).end()
})

router.post('/me/ratings', async (req, res) => {
  const questionId = text(body(req).questionId, 100)
  const rating = oneOf(body(req).rating, PRACTICE_RATINGS)
  if (!questionId || !rating) return bad(res, 'invalid_rating')
  const event: RatingEvent = { questionId, rating, at: nowIso() }
  await run('INSERT INTO ratings (user_id, question_id, rating, at) VALUES (?, ?, ?, ?)', [
    currentUser(res).id,
    event.questionId,
    event.rating,
    event.at,
  ])
  res.status(201).json(event)
})

// ----- Flashcards -----

function parseCard(input: Body, existing?: Flashcard): Flashcard | null {
  const kind = oneOf(input.kind, FLASHCARD_KINDS) ?? existing?.kind
  const front = text(input.front, 2000) ?? existing?.front
  const back = text(input.back, 5000) ?? existing?.back
  if (!kind || !front || !back) return null
  const questionId = typeof input.questionId === 'string' ? input.questionId : existing?.questionId
  return {
    id: existing?.id ?? randomUUID(),
    kind,
    front,
    back,
    questionId: questionId || undefined,
    createdAt: existing?.createdAt ?? nowIso(),
    reviews: typeof input.reviews === 'number' ? input.reviews : (existing?.reviews ?? 0),
    lastResult: oneOf(input.lastResult, ['again', 'good'] as const) ?? existing?.lastResult,
    lastReviewedAt: typeof input.lastReviewedAt === 'string' ? input.lastReviewedAt : existing?.lastReviewedAt,
  }
}

router.post('/me/cards', async (req, res) => {
  const card = parseCard(body(req))
  if (!card) return bad(res, 'invalid_card')
  await insertDocument('cards', currentUser(res).id, card)
  res.status(201).json(card)
})

router.put('/me/cards/:id', async (req, res) => {
  const row = await ownedRow('cards', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const card = parseCard(body(req), parseDocument<Flashcard>(row))
  if (!card) return bad(res, 'invalid_card')
  await updateDocument('cards', card)
  res.json(card)
})

router.delete('/me/cards/:id', async (req, res) => {
  await run('DELETE FROM cards WHERE id = ? AND user_id = ?', [String(req.params.id), currentUser(res).id])
  res.status(204).end()
})

// ----- Upcoming (target) interviews -----

function parseTarget(input: Body, existing?: TargetInterview): TargetInterview | null {
  const roleId = text(input.roleId, 50) ?? existing?.roleId
  const date = isoDate(input.date) ?? existing?.date
  if (!roleId || !date) return null
  const languages = Array.isArray(input.languages)
    ? stringList(input.languages).filter((id): id is (typeof LANGUAGE_TOPIC_IDS)[number] =>
        (LANGUAGE_TOPIC_IDS as readonly string[]).includes(id),
      )
    : (existing?.languages ?? [])
  return {
    id: existing?.id ?? randomUUID(),
    companyId: typeof input.companyId === 'string' && input.companyId ? input.companyId : (existing?.companyId ?? null),
    roleId,
    position: optionalText(input.position, 120) || (existing?.position ?? ''),
    date,
    languages,
    requirements: optionalText(input.requirements, 5000) || (existing?.requirements ?? ''),
    createdAt: existing?.createdAt ?? nowIso(),
  }
}

router.post('/me/targets', async (req, res) => {
  const target = parseTarget(body(req))
  if (!target) return bad(res, 'invalid_target')
  await insertDocument('targets', currentUser(res).id, target)
  res.status(201).json(target)
})

router.put('/me/targets/:id', async (req, res) => {
  const row = await ownedRow('targets', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const target = parseTarget(body(req), parseDocument<TargetInterview>(row))
  if (!target) return bad(res, 'invalid_target')
  await updateDocument('targets', target)
  res.json(target)
})

router.delete('/me/targets/:id', async (req, res) => {
  await run('DELETE FROM targets WHERE id = ? AND user_id = ?', [String(req.params.id), currentUser(res).id])
  res.status(204).end()
})

// ----- Interviews the user logged (past rounds and what they asked) -----

function localized(value: unknown, max: number): { en: string; he: string } | null {
  if (!value || typeof value !== 'object') return null
  const record = value as Body
  const en = optionalText(record.en, max)
  const he = optionalText(record.he, max)
  return en.trim() || he.trim() ? { en, he } : null
}

function parseInterview(input: Body, existing?: Interview): Interview | null {
  const companyId = text(input.companyId, 50) ?? existing?.companyId
  const roleId = text(input.roleId, 50) ?? existing?.roleId
  const stage = oneOf(input.stage, INTERVIEW_STAGES) ?? existing?.stage
  const status = oneOf(input.status, INTERVIEW_STATUSES) ?? existing?.status
  const date = isoDate(input.date) ?? existing?.date
  const position = localized(input.position, 120) ?? existing?.position
  if (!companyId || !roleId || !stage || !status || !date || !position) return null
  return {
    id: existing?.id ?? randomUUID(),
    companyId,
    roleId,
    position,
    stage,
    status,
    date,
    notes: 'notes' in input ? (localized(input.notes, 5000) ?? undefined) : existing?.notes,
    questionIds: Array.isArray(input.questionIds) ? [...new Set(stringList(input.questionIds, 200))] : (existing?.questionIds ?? []),
  }
}

router.post('/me/interviews', async (req, res) => {
  const interview = parseInterview(body(req))
  if (!interview) return bad(res, 'invalid_interview')
  await insertDocument('interviews', currentUser(res).id, interview)
  res.status(201).json(interview)
})

router.put('/me/interviews/:id', async (req, res) => {
  const row = await ownedRow('interviews', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const interview = parseInterview(body(req), parseDocument<Interview>(row))
  if (!interview) return bad(res, 'invalid_interview')
  await updateDocument('interviews', interview)
  res.json(interview)
})

router.delete('/me/interviews/:id', async (req, res) => {
  await run('DELETE FROM interviews WHERE id = ? AND user_id = ?', [String(req.params.id), currentUser(res).id])
  res.status(204).end()
})

// ----- Questions the user wrote themselves -----

function parseSnippets(value: unknown): CodeSnippet[] {
  if (!Array.isArray(value)) return []
  return value.flatMap((item): CodeSnippet[] => {
    if (!item || typeof item !== 'object') return []
    const record = item as Body
    const language = oneOf(record.language, CODE_LANGUAGES)
    const code = optionalText(record.code, 20000)
    return language && code.trim() ? [{ language, code }] : []
  })
}

function parseQuestion(input: Body, existing?: Question): Question | null {
  const questionText = text(input.text, 2000) ?? existing?.text.en
  const topicId = text(input.topicId, 50) ?? existing?.topicId
  const type = oneOf(input.type, QUESTION_TYPES) ?? existing?.type
  const difficulty = oneOf(input.difficulty, DIFFICULTY_LEVELS) ?? existing?.difficulty
  if (!questionText || !topicId || !type || !difficulty) return null
  const roleIds = Array.isArray(input.roleIds) ? stringList(input.roleIds, 20) : (existing?.roleIds ?? [])
  const answer = typeof input.answer === 'string' ? input.answer.slice(0, 10000).trim() : (existing?.answer?.en ?? '')
  // A Hebrew version arrives only from the AI helper; text typed in the app is the same in both languages.
  const textHe = text(input.textHe, 2000) ?? questionText
  const answerHe = typeof input.answerHe === 'string' ? input.answerHe.slice(0, 10000).trim() : answer
  const codeSolutions = 'codeSolutions' in input ? parseSnippets(input.codeSolutions) : (existing?.codeSolutions ?? [])
  return {
    id: existing?.id ?? randomUUID(),
    text: { en: questionText, he: textHe },
    topicId,
    roleIds,
    type,
    difficulty,
    confidence: existing?.confidence ?? 'medium',
    timesAsked: 0,
    answer: answer ? { en: answer, he: answerHe || answer } : undefined,
    codeSolutions: codeSolutions.length > 0 ? codeSolutions : undefined,
    custom: true,
    generated: input.generated === true ? true : existing?.generated,
    createdAt: existing?.createdAt ?? nowIso(),
  }
}

router.post('/me/questions', async (req, res) => {
  const question = parseQuestion(body(req))
  if (!question) return bad(res, 'invalid_question')
  await insertDocument('questions', currentUser(res).id, question)
  res.status(201).json(question)
})

router.put('/me/questions/:id', async (req, res) => {
  const row = await ownedRow('questions', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const question = parseQuestion(body(req), parseDocument<Question>(row))
  if (!question) return bad(res, 'invalid_question')
  await updateDocument('questions', question)
  res.json(question)
})

router.delete('/me/questions/:id', async (req, res) => {
  const userId = currentUser(res).id
  const id = String(req.params.id)
  await run('DELETE FROM questions WHERE id = ? AND user_id = ?', [id, userId])
  // The question is gone, so the user's interviews should not point at it any more.
  for (const interview of await listDocuments<Interview>('interviews', userId)) {
    if (interview.questionIds.includes(id)) {
      await updateDocument('interviews', { ...interview, questionIds: interview.questionIds.filter((questionId) => questionId !== id) })
    }
  }
  res.status(204).end()
})

// ----- Answer attempts: the user's own answers, graded by the AI -----

const MAX_ANSWER_LENGTH = 4000
/** Evaluations per user per hour; a plain count on the attempts table, no extra infrastructure. */
const EVALUATIONS_PER_HOUR = Number(process.env.PREPFLOW_EVAL_HOURLY_LIMIT ?? 30)

interface AttemptRow {
  id: string
  question_id: string
  answer: string
  score: number
  verdict: AnswerAttempt['verdict']
  feedback: string
  created_at: string
}

function toAttempt(row: AttemptRow): AnswerAttempt {
  let evaluation: AnswerEvaluation
  try {
    evaluation = JSON.parse(row.feedback) as AnswerEvaluation
  } catch {
    evaluation = {
      score: row.score,
      verdict: row.verdict,
      strengths: [],
      missingPoints: [],
      incorrectPoints: [],
      feedback: row.feedback,
      improvedAnswer: '',
    }
  }
  return {
    id: row.id,
    questionId: row.question_id,
    answer: row.answer,
    score: row.score,
    verdict: row.verdict,
    evaluation,
    createdAt: row.created_at,
  }
}

async function loadAttemptSummaries(userId: string): Promise<AnswerAttemptSummary[]> {
  const rows = await all<AccountAttemptRow>(
    `SELECT a.question_id,
            COUNT(*) AS attempts,
            MAX(a.score) AS best_score,
            MAX(a.created_at) AS last_at,
            (SELECT b.score FROM answer_attempts b
              WHERE b.user_id = a.user_id AND b.question_id = a.question_id
              ORDER BY b.created_at DESC LIMIT 1) AS latest_score
     FROM answer_attempts a WHERE a.user_id = ? GROUP BY a.question_id`,
    [userId],
  )
  return rows.map((row) => ({
    questionId: row.question_id,
    attempts: Number(row.attempts),
    bestScore: Number(row.best_score),
    latestScore: Number(row.latest_score),
    lastAt: row.last_at,
  }))
}

function parseEvaluateInput(input: Body): { questionId: string; evaluate: EvaluateInput } | null {
  const questionId = text(input.questionId, 100)
  const questionText = text(input.questionText, 4000)
  const userAnswer = text(input.userAnswer, MAX_ANSWER_LENGTH)
  const type = oneOf(input.type, QUESTION_TYPES)
  const difficulty = oneOf(input.difficulty, DIFFICULTY_LEVELS)
  if (!questionId || !questionText || !userAnswer || !type || !difficulty) return null
  return {
    questionId,
    evaluate: {
      questionText,
      referenceAnswer: optionalText(input.referenceAnswer, 8000),
      userAnswer,
      type,
      topic: optionalText(input.topic, 60),
      difficulty,
      language: oneOf(input.language, LANGUAGES) ?? 'en',
      codeSolutions: parseSnippets(input.codeSolutions).slice(0, 3),
      role: optionalText(input.role, 120),
      company: optionalText(input.company, 120),
    },
  }
}

router.post('/me/ai/evaluate-answer', async (req, res) => {
  const parsed = parseEvaluateInput(body(req))
  if (!parsed) return bad(res, 'invalid_answer')
  const userId = currentUser(res).id

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString()
  const recent = await get<{ n: number }>('SELECT COUNT(*) AS n FROM answer_attempts WHERE user_id = ? AND created_at > ?', [
    userId,
    since,
  ])
  if ((recent?.n ?? 0) >= EVALUATIONS_PER_HOUR) {
    res.status(429).json({ error: 'rate_limited' })
    return
  }

  let evaluation: AnswerEvaluation
  try {
    evaluation = (await evaluateAnswer(parsed.evaluate)).evaluation
  } catch (error) {
    if (error instanceof AiNotConfiguredError) {
      res.status(503).json({ error: 'ai_not_configured' })
      return
    }
    if (error instanceof AiBusyError) {
      // The vendor is overloaded; the UI tells the user to try again in a minute instead of blaming the app.
      res.status(503).json({ error: 'ai_busy' })
      return
    }
    console.error('Answer evaluation failed:', error)
    res.status(502).json({ error: 'ai_failed' })
    return
  }

  const attempt: AnswerAttempt = {
    id: randomUUID(),
    questionId: parsed.questionId,
    answer: parsed.evaluate.userAnswer,
    score: evaluation.score,
    verdict: evaluation.verdict,
    evaluation,
    createdAt: nowIso(),
  }
  await run(
    'INSERT INTO answer_attempts (id, user_id, question_id, answer, score, verdict, feedback, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [attempt.id, userId, attempt.questionId, attempt.answer, attempt.score, attempt.verdict, JSON.stringify(evaluation), attempt.createdAt],
  )
  res.status(201).json({ attempt })
})

router.get('/me/attempts/:questionId', async (req, res) => {
  const rows = await all<AttemptRow>(
    'SELECT id, question_id, answer, score, verdict, feedback, created_at FROM answer_attempts WHERE user_id = ? AND question_id = ? ORDER BY created_at DESC LIMIT 20',
    [currentUser(res).id, String(req.params.questionId)],
  )
  res.json({ attempts: rows.map(toAttempt) })
})

// ----- AI helper: new questions in the style of this interview -----

function parseGenerateInput(input: Body): GenerateInput {
  const named = (value: unknown): { name: string; description: string } | null => {
    if (!value || typeof value !== 'object') return null
    const record = value as Body
    const name = text(record.name, 120)
    return name ? { name, description: optionalText(record.description, 600) } : null
  }
  const companyValue = input.company && typeof input.company === 'object' ? (input.company as Body) : null
  const companyName = companyValue ? text(companyValue.name, 120) : null
  const count = typeof input.count === 'number' ? Math.min(12, Math.max(1, Math.round(input.count))) : 8
  return {
    role: named(input.role),
    company:
      companyValue && companyName
        ? { name: companyName, about: optionalText(companyValue.about, 800), tips: optionalText(companyValue.tips, 800) }
        : null,
    position: optionalText(input.position, 200),
    requirements: optionalText(input.requirements, 6000),
    languages: stringList(input.languages, 10),
    emphasis: oneOf(input.emphasis, PRACTICE_EMPHASES) ?? 'balanced',
    topics: Array.isArray(input.topics)
      ? input.topics.flatMap((item): Array<{ id: string; name: string }> => {
          if (!item || typeof item !== 'object') return []
          const id = text((item as Body).id, 50)
          return id ? [{ id, name: optionalText((item as Body).name, 80) || id }] : []
        })
      : [],
    avoid: stringList(input.avoid, 300),
    examples: stringList(input.examples, 20),
    count,
  }
}

router.post('/me/ai/questions', async (req, res) => {
  const input = parseGenerateInput(body(req))
  try {
    res.json(await generateQuestions(input))
  } catch (error) {
    if (error instanceof AiNotConfiguredError) {
      res.status(503).json({ error: 'ai_not_configured' })
      return
    }
    if (error instanceof AiBusyError) {
      // The vendor is overloaded; the UI tells the user to try again in a minute instead of blaming the app.
      res.status(503).json({ error: 'ai_busy' })
      return
    }
    console.error('AI generation failed:', error)
    res.status(502).json({ error: 'ai_failed' })
  }
})

// ---------- Admin ----------

type AdminRow = UserRow & {
  notes: number
  ratings: number
  cards: number
  targets: number
  interviews: number
  questions: number
  attempts: number
}

router.get('/admin/users', requireAdmin, async (_req, res) => {
  const rows = await all<AdminRow>(
    `SELECT u.id, u.email, u.name, u.role, u.created_at,
            (SELECT COUNT(*) FROM notes n WHERE n.user_id = u.id)      AS notes,
            (SELECT COUNT(*) FROM ratings r WHERE r.user_id = u.id)    AS ratings,
            (SELECT COUNT(*) FROM cards c WHERE c.user_id = u.id)      AS cards,
            (SELECT COUNT(*) FROM targets t WHERE t.user_id = u.id)    AS targets,
            (SELECT COUNT(*) FROM interviews i WHERE i.user_id = u.id) AS interviews,
            (SELECT COUNT(*) FROM questions q WHERE q.user_id = u.id)  AS questions,
            (SELECT COUNT(*) FROM answer_attempts a WHERE a.user_id = u.id) AS attempts
     FROM users u ORDER BY u.created_at`,
  )
  res.json({
    users: rows.map((row) => ({
      ...toPublicUser(row),
      counts: {
        notes: row.notes,
        ratings: row.ratings,
        cards: row.cards,
        targets: row.targets,
        interviews: row.interviews,
        questions: row.questions,
        attempts: row.attempts,
      },
    })),
  })
})

router.get('/admin/users/:id', requireAdmin, async (req, res) => {
  const row = await get<UserRow>('SELECT * FROM users WHERE id = ?', [String(req.params.id)])
  if (!row) return notFound(res)
  const attempts = await all<AttemptRow>(
    'SELECT id, question_id, answer, score, verdict, feedback, created_at FROM answer_attempts WHERE user_id = ? ORDER BY created_at DESC LIMIT 50',
    [row.id],
  )
  res.json({ user: toPublicUser(row), ...(await loadAccount(row.id)), attempts: attempts.map(toAttempt) })
})

router.get('/admin/interviews', requireAdmin, async (_req, res) => {
  const rows = await all<DocumentRow & { user_id: string; name: string; email: string }>(
    `SELECT i.id, i.data, i.user_id, u.name, u.email
     FROM interviews i JOIN users u ON u.id = i.user_id
     ORDER BY i.created_at DESC`,
  )
  res.json({
    interviews: rows.map((row) => ({
      ...parseDocument<Interview>(row),
      user: { id: row.user_id, name: row.name, email: row.email },
    })),
  })
})

const USER_ROLES = ['user', 'admin'] as const

router.put('/admin/users/:id/role', requireAdmin, async (req, res) => {
  const id = String(req.params.id)
  const role = oneOf(body(req).role, USER_ROLES)
  if (!role) return bad(res, 'invalid_role')
  const target = await get<UserRow>('SELECT * FROM users WHERE id = ?', [id])
  if (!target) return notFound(res)
  if (target.role === 'admin' && role === 'user') {
    // Nobody locks themselves out, and the site always keeps at least one admin.
    if (target.id === currentUser(res).id) return bad(res, 'cannot_change_own_role')
    const admins = (await get<{ n: number }>("SELECT COUNT(*) AS n FROM users WHERE role = 'admin'"))?.n ?? 0
    if (Number(admins) <= 1) return bad(res, 'last_admin')
  }
  await run('UPDATE users SET role = ? WHERE id = ?', [role, id])
  res.json({ user: toPublicUser({ ...target, role }) })
})

router.post('/admin/users/:id/password', requireAdmin, async (req, res) => {
  const id = String(req.params.id)
  const { password } = body(req)
  if (typeof password !== 'string' || password.length < 8) return bad(res, 'weak_password')
  const target = await get<UserRow>('SELECT * FROM users WHERE id = ?', [id])
  if (!target) return notFound(res)
  await run('UPDATE users SET password_hash = ? WHERE id = ?', [hashPassword(password), id])
  // Every signed-in device of that account has to sign in again with the new password. When an
  // admin resets their own password, the session making this request stays valid.
  await run('DELETE FROM sessions WHERE user_id = ? AND token <> ?', [id, readCookie(req, SESSION_COOKIE) ?? ''])
  res.status(204).end()
})

const PER_USER_TABLES = ['sessions', 'settings', 'notes', 'ratings', 'cards', 'targets', 'interviews', 'questions', 'answer_attempts'] as const

router.delete('/admin/users/:id', requireAdmin, async (req, res) => {
  const id = String(req.params.id)
  if (id === currentUser(res).id) return bad(res, 'cannot_delete_self')
  const target = await get<UserRow>('SELECT * FROM users WHERE id = ?', [id])
  if (!target) return notFound(res)
  // Explicit and in one transaction: the ON DELETE CASCADE rules need foreign_keys = ON, which a
  // hosted connection does not necessarily keep between requests.
  await db.batch(
    [
      ...PER_USER_TABLES.map((table) => ({ sql: `DELETE FROM ${table} WHERE user_id = ?`, args: [id] })),
      { sql: 'DELETE FROM users WHERE id = ?', args: [id] },
    ],
    'write',
  )
  res.status(204).end()
})

interface QuestionStatRow {
  question_id: string
  total: number
  struggled: number
  users: number
}

interface ScoreStatRow {
  question_id: string
  attempts: number
  avg_score: number
}

router.get('/admin/stats', requireAdmin, async (_req, res) => {
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const [totals, week, average, hardest, lowest, popular] = await Promise.all([
    get<Record<string, number>>(
      `SELECT (SELECT COUNT(*) FROM users)           AS users,
              (SELECT COUNT(*) FROM interviews)      AS interviews,
              (SELECT COUNT(*) FROM ratings)         AS ratings,
              (SELECT COUNT(*) FROM answer_attempts) AS attempts,
              (SELECT COUNT(*) FROM cards)           AS cards,
              (SELECT COUNT(*) FROM notes)           AS notes`,
    ),
    get<Record<string, number>>(
      `SELECT (SELECT COUNT(DISTINCT user_id) FROM ratings WHERE at > ?)       AS activeUsers,
              (SELECT COUNT(*) FROM ratings WHERE at > ?)                      AS ratings,
              (SELECT COUNT(*) FROM answer_attempts WHERE created_at > ?)      AS attempts`,
      [weekAgo, weekAgo, weekAgo],
    ),
    get<{ avg: number | null }>('SELECT AVG(score) AS avg FROM answer_attempts'),
    // "Hard" = the share of again/hard ratings across everyone, for questions rated at least twice.
    all<QuestionStatRow>(
      `SELECT question_id,
              COUNT(*) AS total,
              SUM(CASE WHEN rating IN ('again', 'hard') THEN 1 ELSE 0 END) AS struggled,
              COUNT(DISTINCT user_id) AS users,
              SUM(CASE WHEN rating IN ('again', 'hard') THEN 1.0 ELSE 0.0 END) / COUNT(*) AS struggle_rate
       FROM ratings GROUP BY question_id HAVING COUNT(*) >= 2
       ORDER BY struggle_rate DESC, total DESC LIMIT 10`,
    ),
    all<ScoreStatRow>(
      `SELECT question_id, COUNT(*) AS attempts, AVG(score) AS avg_score
       FROM answer_attempts GROUP BY question_id HAVING COUNT(*) >= 2
       ORDER BY avg_score ASC LIMIT 10`,
    ),
    all<QuestionStatRow>(
      `SELECT question_id,
              COUNT(*) AS total,
              SUM(CASE WHEN rating IN ('again', 'hard') THEN 1 ELSE 0 END) AS struggled,
              COUNT(DISTINCT user_id) AS users
       FROM ratings GROUP BY question_id ORDER BY total DESC LIMIT 10`,
    ),
  ])
  const numbers = (row: Record<string, number> | undefined): Record<string, number> =>
    Object.fromEntries(Object.entries(row ?? {}).map(([key, value]) => [key, Number(value ?? 0)]))
  const ratingStat = (row: QuestionStatRow) => ({
    questionId: row.question_id,
    ratings: Number(row.total),
    struggled: Number(row.struggled),
    users: Number(row.users),
  })
  res.json({
    totals: numbers(totals),
    lastWeek: numbers(week),
    averageScore: average?.avg === null || average?.avg === undefined ? null : Math.round(Number(average.avg)),
    hardestQuestions: hardest.filter((row) => Number(row.struggled) > 0).map(ratingStat),
    lowestScores: lowest.map((row) => ({
      questionId: row.question_id,
      attempts: Number(row.attempts),
      averageScore: Math.round(Number(row.avg_score)),
    })),
    mostPractised: popular.map(ratingStat),
  })
})
