import { randomUUID } from 'node:crypto'
import { Router, type Request, type Response } from 'express'
import {
  CODE_LANGUAGES,
  DIFFICULTY_LEVELS,
  FLASHCARD_KINDS,
  INTERVIEW_STAGES,
  INTERVIEW_STATUSES,
  LANGUAGE_TOPIC_IDS,
  PRACTICE_EMPHASES,
  PRACTICE_RATINGS,
  QUESTION_TYPES,
  type AccountSettings,
  type CodeSnippet,
  type Flashcard,
  type Interview,
  type PracticePreferences,
  type Question,
  type RatingEvent,
  type TargetInterview,
} from '../src/types/index.ts'
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
import { AiNotConfiguredError, generateQuestions, type GenerateInput } from './ai.ts'
import { db, nowIso, parseDocument } from './db.ts'

export const router = Router()

// ---------- Small validation helpers ----------

type Body = Record<string, unknown>
type DocumentRow = { id: string; data: string }

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
function ownedRow(table: 'cards' | 'targets' | 'interviews' | 'questions', id: unknown, userId: string): DocumentRow | undefined {
  return db.prepare(`SELECT id, data FROM ${table} WHERE id = ? AND user_id = ?`).get(String(id), userId) as DocumentRow | undefined
}

function insertDocument(table: 'cards' | 'targets' | 'interviews' | 'questions', userId: string, document: { id: string }) {
  db.prepare(`INSERT INTO ${table} (id, user_id, data, created_at) VALUES (?, ?, ?, ?)`).run(
    document.id,
    userId,
    JSON.stringify(document),
    nowIso(),
  )
}

function updateDocument<T extends { id: string }>(table: 'cards' | 'targets' | 'interviews' | 'questions', document: T) {
  db.prepare(`UPDATE ${table} SET data = ? WHERE id = ?`).run(JSON.stringify(document), document.id)
}

function listDocuments<T extends { id: string }>(table: 'cards' | 'targets' | 'interviews' | 'questions', userId: string): T[] {
  return (db.prepare(`SELECT id, data FROM ${table} WHERE user_id = ? ORDER BY created_at`).all(userId) as unknown as DocumentRow[]).map(
    (row) => parseDocument<T>(row),
  )
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

router.post('/auth/register', (req, res) => {
  const { email, name, password } = body(req)
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
  const cleanName = text(name, 80)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) return bad(res, 'invalid_email')
  if (!cleanName) return bad(res, 'invalid_name')
  if (typeof password !== 'string' || password.length < 8) return bad(res, 'weak_password')

  const exists = db.prepare('SELECT 1 FROM users WHERE email = ?').get(cleanEmail)
  if (exists) {
    res.status(409).json({ error: 'email_taken' })
    return
  }

  // The very first account becomes the admin; everyone after is a regular user.
  const count = (db.prepare('SELECT COUNT(*) AS n FROM users').get() as { n: number }).n
  const row: UserRow = {
    id: randomUUID(),
    email: cleanEmail,
    name: cleanName,
    password_hash: hashPassword(password),
    role: count === 0 ? 'admin' : 'user',
    created_at: nowIso(),
  }
  db.prepare('INSERT INTO users (id, email, name, password_hash, role, created_at) VALUES (?, ?, ?, ?, ?, ?)').run(
    row.id,
    row.email,
    row.name,
    row.password_hash,
    row.role,
    row.created_at,
  )
  db.prepare('INSERT INTO settings (user_id, data) VALUES (?, ?)').run(row.id, JSON.stringify(defaultSettings()))

  const session = createSession(row.id)
  setSessionCookie(res, session.token, session.expiresAt)
  res.status(201).json({ user: toPublicUser(row) })
})

router.post('/auth/login', (req, res) => {
  const { email, password } = body(req)
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
  const row = db.prepare('SELECT * FROM users WHERE email = ?').get(cleanEmail) as UserRow | undefined
  if (!row || typeof password !== 'string' || !verifyPassword(password, row.password_hash)) {
    res.status(401).json({ error: 'invalid_credentials' })
    return
  }
  const session = createSession(row.id)
  setSessionCookie(res, session.token, session.expiresAt)
  res.json({ user: toPublicUser(row) })
})

router.post('/auth/logout', (req, res) => {
  const token = readCookie(req, SESSION_COOKIE)
  if (token) deleteSession(token)
  clearSessionCookie(res)
  res.status(204).end()
})

router.get('/auth/me', (req, res) => {
  const user = userFromRequest(req)
  if (!user) {
    res.status(401).json({ error: 'unauthenticated' })
    return
  }
  res.json({ user: toPublicUser(user) })
})

// ---------- The signed-in user's data ----------

router.use('/me', requireUser)

function loadAccount(userId: string) {
  const settingsRow = db.prepare('SELECT data FROM settings WHERE user_id = ?').get(userId) as { data: string } | undefined
  // Settings saved by an older version may lack newer fields; the defaults fill them in.
  const settings: AccountSettings = {
    ...defaultSettings(),
    ...(settingsRow ? (JSON.parse(settingsRow.data) as Partial<AccountSettings>) : {}),
  }

  const notes: Record<string, string> = {}
  for (const row of db.prepare('SELECT question_id, text FROM notes WHERE user_id = ?').all(userId) as unknown as {
    question_id: string
    text: string
  }[]) {
    notes[row.question_id] = row.text
  }

  const ratings = (
    db.prepare('SELECT question_id, rating, at FROM ratings WHERE user_id = ? ORDER BY id').all(userId) as unknown as {
      question_id: string
      rating: RatingEvent['rating']
      at: string
    }[]
  ).map((row) => ({ questionId: row.question_id, rating: row.rating, at: row.at }))

  return {
    settings,
    notes,
    ratings,
    cards: listDocuments<Flashcard>('cards', userId),
    targets: listDocuments<TargetInterview>('targets', userId),
    interviews: listDocuments<Interview>('interviews', userId),
    questions: listDocuments<Question>('questions', userId),
  }
}

router.get('/me/data', (_req, res) => {
  res.json(loadAccount(currentUser(res).id))
})

router.put('/me/settings', (req, res) => {
  const { roleId, practicePrefs, showSamples } = body(req)
  const settings: AccountSettings = {
    roleId: typeof roleId === 'string' ? roleId : null,
    practicePrefs: parsePrefs(practicePrefs),
    showSamples: showSamples !== false,
  }
  db.prepare('INSERT INTO settings (user_id, data) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data').run(
    currentUser(res).id,
    JSON.stringify(settings),
  )
  res.json(settings)
})

router.put('/me/notes/:questionId', (req, res) => {
  const questionId = String(req.params.questionId)
  const note = optionalText(body(req).text, 5000)
  if (note.trim()) {
    db.prepare(
      `INSERT INTO notes (user_id, question_id, text, updated_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(user_id, question_id) DO UPDATE SET text = excluded.text, updated_at = excluded.updated_at`,
    ).run(currentUser(res).id, questionId, note, nowIso())
  } else {
    db.prepare('DELETE FROM notes WHERE user_id = ? AND question_id = ?').run(currentUser(res).id, questionId)
  }
  res.status(204).end()
})

router.post('/me/ratings', (req, res) => {
  const questionId = text(body(req).questionId, 100)
  const rating = oneOf(body(req).rating, PRACTICE_RATINGS)
  if (!questionId || !rating) return bad(res, 'invalid_rating')
  const event: RatingEvent = { questionId, rating, at: nowIso() }
  db.prepare('INSERT INTO ratings (user_id, question_id, rating, at) VALUES (?, ?, ?, ?)').run(
    currentUser(res).id,
    event.questionId,
    event.rating,
    event.at,
  )
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

router.post('/me/cards', (req, res) => {
  const card = parseCard(body(req))
  if (!card) return bad(res, 'invalid_card')
  insertDocument('cards', currentUser(res).id, card)
  res.status(201).json(card)
})

router.put('/me/cards/:id', (req, res) => {
  const row = ownedRow('cards', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const card = parseCard(body(req), parseDocument<Flashcard>(row))
  if (!card) return bad(res, 'invalid_card')
  updateDocument('cards', card)
  res.json(card)
})

router.delete('/me/cards/:id', (req, res) => {
  db.prepare('DELETE FROM cards WHERE id = ? AND user_id = ?').run(String(req.params.id), currentUser(res).id)
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

router.post('/me/targets', (req, res) => {
  const target = parseTarget(body(req))
  if (!target) return bad(res, 'invalid_target')
  insertDocument('targets', currentUser(res).id, target)
  res.status(201).json(target)
})

router.put('/me/targets/:id', (req, res) => {
  const row = ownedRow('targets', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const target = parseTarget(body(req), parseDocument<TargetInterview>(row))
  if (!target) return bad(res, 'invalid_target')
  updateDocument('targets', target)
  res.json(target)
})

router.delete('/me/targets/:id', (req, res) => {
  db.prepare('DELETE FROM targets WHERE id = ? AND user_id = ?').run(String(req.params.id), currentUser(res).id)
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

router.post('/me/interviews', (req, res) => {
  const interview = parseInterview(body(req))
  if (!interview) return bad(res, 'invalid_interview')
  insertDocument('interviews', currentUser(res).id, interview)
  res.status(201).json(interview)
})

router.put('/me/interviews/:id', (req, res) => {
  const row = ownedRow('interviews', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const interview = parseInterview(body(req), parseDocument<Interview>(row))
  if (!interview) return bad(res, 'invalid_interview')
  updateDocument('interviews', interview)
  res.json(interview)
})

router.delete('/me/interviews/:id', (req, res) => {
  db.prepare('DELETE FROM interviews WHERE id = ? AND user_id = ?').run(String(req.params.id), currentUser(res).id)
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

router.post('/me/questions', (req, res) => {
  const question = parseQuestion(body(req))
  if (!question) return bad(res, 'invalid_question')
  insertDocument('questions', currentUser(res).id, question)
  res.status(201).json(question)
})

router.put('/me/questions/:id', (req, res) => {
  const row = ownedRow('questions', req.params.id, currentUser(res).id)
  if (!row) return notFound(res)
  const question = parseQuestion(body(req), parseDocument<Question>(row))
  if (!question) return bad(res, 'invalid_question')
  updateDocument('questions', question)
  res.json(question)
})

router.delete('/me/questions/:id', (req, res) => {
  const userId = currentUser(res).id
  const id = String(req.params.id)
  db.prepare('DELETE FROM questions WHERE id = ? AND user_id = ?').run(id, userId)
  // The question is gone, so the user's interviews should not point at it any more.
  for (const interview of listDocuments<Interview>('interviews', userId)) {
    if (interview.questionIds.includes(id)) {
      updateDocument('interviews', { ...interview, questionIds: interview.questionIds.filter((questionId) => questionId !== id) })
    }
  }
  res.status(204).end()
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
    console.error('AI generation failed:', error)
    res.status(502).json({ error: 'ai_failed' })
  }
})

// ---------- Admin ----------

router.get('/admin/users', requireAdmin, (_req, res) => {
  const rows = db
    .prepare(
      `SELECT u.id, u.email, u.name, u.role, u.created_at,
              (SELECT COUNT(*) FROM notes n WHERE n.user_id = u.id)      AS notes,
              (SELECT COUNT(*) FROM ratings r WHERE r.user_id = u.id)    AS ratings,
              (SELECT COUNT(*) FROM cards c WHERE c.user_id = u.id)      AS cards,
              (SELECT COUNT(*) FROM targets t WHERE t.user_id = u.id)    AS targets,
              (SELECT COUNT(*) FROM interviews i WHERE i.user_id = u.id) AS interviews,
              (SELECT COUNT(*) FROM questions q WHERE q.user_id = u.id)  AS questions
       FROM users u ORDER BY u.created_at`,
    )
    .all() as unknown as (UserRow & {
    notes: number
    ratings: number
    cards: number
    targets: number
    interviews: number
    questions: number
  })[]
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
      },
    })),
  })
})

router.get('/admin/users/:id', requireAdmin, (req, res) => {
  const row = db.prepare('SELECT * FROM users WHERE id = ?').get(String(req.params.id)) as UserRow | undefined
  if (!row) return notFound(res)
  res.json({ user: toPublicUser(row), ...loadAccount(row.id) })
})
