#!/usr/bin/env node
/**
 * Copies one account's personal data from the local SQLite file (server/data/prepflow.db) into
 * the hosted Turso database: settings, notes, ratings, cards, targets, interviews, own questions
 * and answer attempts. Accounts and passwords are NOT copied: the destination account must
 * already exist (register on the site first); both accounts are matched by email.
 *
 * Credentials come from .env.turso.local in the project root (git-ignored) or the environment:
 *   TURSO_DATABASE_URL=libsql://...turso.io
 *   TURSO_AUTH_TOKEN=...
 *
 * Usage:
 *   node scripts/migrate-local-to-turso.mjs [--from <local email>] [--to <hosted email>] [--dry-run]
 *
 * Without --from, the only local account that is not a demo or test user is used; without --to,
 * the only hosted account. Re-running is safe: rows that already exist on the destination are
 * left alone (settings are overwritten with the local ones).
 */
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createClient as createFileClient } from '@libsql/client'
import { createClient as createWebClient } from '@libsql/client/web'

const root = new URL('../', import.meta.url)
const credentialsFile = fileURLToPath(new URL('.env.turso.local', root))
if (existsSync(credentialsFile)) process.loadEnvFile(credentialsFile)

const args = process.argv.slice(2)
const option = (name) => {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : undefined
}
const dryRun = args.includes('--dry-run')

const url = process.env.TURSO_DATABASE_URL?.trim()
const authToken = process.env.TURSO_AUTH_TOKEN?.trim()
if (!url || !authToken) {
  console.error(`Missing TURSO_DATABASE_URL / TURSO_AUTH_TOKEN. Put them in ${credentialsFile} (one per line, KEY=value).`)
  process.exit(1)
}

const localFile = fileURLToPath(new URL('server/data/prepflow.db', root)).replace(/\\/g, '/')
const local = createFileClient({ url: `file:${localFile}` })
const hosted = createWebClient({ url: url.replace(/^libsql:/, 'https:'), authToken })

const DEMO_OR_TEST = /@example\.com$|^hagit/i

async function pickUser(db, label, email) {
  const rows = (await db.execute('SELECT id, email, name, role FROM users ORDER BY created_at')).rows
  if (email) {
    const user = rows.find((row) => String(row.email).toLowerCase() === email.toLowerCase())
    if (!user) {
      console.error(`${label}: no account with email ${email}. Accounts: ${rows.map((row) => row.email).join(', ') || '(none)'}`)
      process.exit(1)
    }
    return user
  }
  const candidates = label === 'local' ? rows.filter((row) => !DEMO_OR_TEST.test(String(row.email))) : rows
  if (candidates.length !== 1) {
    const flag = label === 'local' ? '--from' : '--to'
    const list = candidates.map((row) => row.email).join(', ') || '(none)'
    console.error(`${label}: ${candidates.length === 0 ? 'no account found' : 'several accounts found'}; pass ${flag} <email>. Accounts: ${list}`)
    process.exit(1)
  }
  return candidates[0]
}

const source = await pickUser(local, 'local', option('--from'))
const target = await pickUser(hosted, 'hosted', option('--to'))

const byUser = async (sql) => (await local.execute({ sql, args: [source.id] })).rows
const settings = (await byUser('SELECT data FROM settings WHERE user_id = ?'))[0]
const notes = await byUser('SELECT question_id, text, updated_at FROM notes WHERE user_id = ?')
const ratings = await byUser('SELECT question_id, rating, at FROM ratings WHERE user_id = ? ORDER BY id')
const documents = {}
for (const table of ['cards', 'targets', 'interviews', 'questions']) {
  documents[table] = await byUser(`SELECT id, data, created_at FROM ${table} WHERE user_id = ? ORDER BY created_at`)
}
const attempts = await byUser(
  'SELECT id, question_id, answer, score, verdict, feedback, created_at FROM answer_attempts WHERE user_id = ? ORDER BY created_at',
)

console.log(`From  local  ${source.email} (${source.name})`)
console.log(`To    hosted ${target.email} (${target.name}, ${target.role})`)
console.log(`  settings: ${settings ? 'yes' : 'no'}`)
console.log(`  notes: ${notes.length}`)
console.log(`  ratings: ${ratings.length}`)
for (const [table, rows] of Object.entries(documents)) console.log(`  ${table}: ${rows.length}`)
console.log(`  answer attempts: ${attempts.length}`)
if (dryRun) {
  console.log('Dry run: nothing written.')
  process.exit(0)
}

const statements = []
if (settings) {
  statements.push({
    sql: 'INSERT INTO settings (user_id, data) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data',
    args: [target.id, settings.data],
  })
}
for (const note of notes) {
  statements.push({
    sql: 'INSERT INTO notes (user_id, question_id, text, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, question_id) DO NOTHING',
    args: [target.id, note.question_id, note.text, note.updated_at],
  })
}
for (const rating of ratings) {
  // No natural key: a rating is "the same" when the question and the timestamp match.
  statements.push({
    sql: `INSERT INTO ratings (user_id, question_id, rating, at)
          SELECT ?, ?, ?, ? WHERE NOT EXISTS (SELECT 1 FROM ratings WHERE user_id = ? AND question_id = ? AND at = ?)`,
    args: [target.id, rating.question_id, rating.rating, rating.at, target.id, rating.question_id, rating.at],
  })
}
for (const [table, rows] of Object.entries(documents)) {
  for (const row of rows) {
    statements.push({
      sql: `INSERT OR IGNORE INTO ${table} (id, user_id, data, created_at) VALUES (?, ?, ?, ?)`,
      args: [row.id, target.id, row.data, row.created_at],
    })
  }
}
for (const attempt of attempts) {
  statements.push({
    sql: `INSERT OR IGNORE INTO answer_attempts (id, user_id, question_id, answer, score, verdict, feedback, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [attempt.id, target.id, attempt.question_id, attempt.answer, attempt.score, attempt.verdict, attempt.feedback, attempt.created_at],
  })
}

await hosted.batch(statements, 'write')
console.log(`Wrote ${statements.length} statements in one transaction.`)

console.log('Hosted account now holds:')
for (const table of ['notes', 'ratings', 'cards', 'targets', 'interviews', 'questions', 'answer_attempts']) {
  const row = (await hosted.execute({ sql: `SELECT COUNT(*) AS n FROM ${table} WHERE user_id = ?`, args: [target.id] })).rows[0]
  console.log(`  ${table}: ${row.n}`)
}
process.exit(0)
