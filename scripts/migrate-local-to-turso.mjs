#!/usr/bin/env node
/**
 * Copies one account from the local SQLite file (server/data/prepflow.db) into the hosted Turso
 * database, so you can carry on there from where you left off on this computer: the account
 * itself (email, name, password, so the same login works), settings, notes, ratings, cards,
 * targets, interviews, own questions and answer attempts.
 *
 * The hosted account is matched by email. If none exists yet it is created from the local row;
 * when the hosted database has no accounts at all, the copied account becomes the admin, exactly
 * as the first registration would. Re-running is safe: rows that already exist on the destination
 * are left alone (settings are overwritten with the local ones).
 *
 * Credentials come from .env.turso.local in the project root (git-ignored) or the environment:
 *   TURSO_DATABASE_URL=libsql://...turso.io
 *   TURSO_AUTH_TOKEN=...
 *
 * Usage:
 *   node scripts/migrate-local-to-turso.mjs [--from <local email>] [--to <hosted email>]
 *                                           [--admin] [--dry-run] [--to-file <path>]
 *
 *   --from      which local account to copy; default: the only account that is not a demo or test user
 *   --to        an existing hosted account to receive the data (when its email differs from the local one)
 *   --admin     give the copied account the admin role even if the hosted database already has accounts
 *   --dry-run   only report what would be copied
 *   --to-file   rehearse against a local SQLite file instead of Turso (no credentials needed)
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
const forceAdmin = args.includes('--admin')
const targetFile = option('--to-file')

const localFile = fileURLToPath(new URL('server/data/prepflow.db', root)).replace(/\\/g, '/')
if (!existsSync(localFile)) {
  console.error(`Local database not found at ${localFile}.`)
  process.exit(1)
}
const local = createFileClient({ url: `file:${localFile}` })

let hosted
let destination
if (targetFile) {
  destination = `file ${targetFile}`
  hosted = createFileClient({ url: `file:${targetFile.replace(/\\/g, '/')}` })
} else {
  const url = process.env.TURSO_DATABASE_URL?.trim()
  const authToken = process.env.TURSO_AUTH_TOKEN?.trim()
  if (!url || !authToken) {
    console.error(`Missing TURSO_DATABASE_URL / TURSO_AUTH_TOKEN. Put them in ${credentialsFile} (one per line, KEY=value).`)
    process.exit(1)
  }
  destination = url.replace(/^libsql:\/\//, '')
  hosted = createWebClient({ url: url.replace(/^libsql:/, 'https:'), authToken })
}

// The server creates the tables on its first request; a destination without them has never been opened.
const tables = new Set((await hosted.execute("SELECT name FROM sqlite_master WHERE type = 'table'")).rows.map((row) => String(row.name)))
for (const table of ['users', 'settings', 'notes', 'ratings', 'cards', 'targets', 'interviews', 'questions', 'answer_attempts']) {
  if (!tables.has(table)) {
    console.error(`Destination has no table "${table}". Open the site once so the server creates the schema, then run again.`)
    process.exit(1)
  }
}

const DEMO_OR_TEST = /@example\.com$|^hagit/i

async function listUsers(db) {
  return (await db.execute('SELECT id, email, name, role, password_hash, created_at FROM users ORDER BY created_at')).rows
}

function findByEmail(rows, email) {
  return rows.find((row) => String(row.email).toLowerCase() === email.toLowerCase())
}

// Which local account to copy.
const localUsers = await listUsers(local)
let source
if (option('--from')) {
  source = findByEmail(localUsers, option('--from'))
  if (!source) {
    console.error(`local: no account with email ${option('--from')}. Accounts: ${localUsers.map((row) => row.email).join(', ') || '(none)'}`)
    process.exit(1)
  }
} else {
  const candidates = localUsers.filter((row) => !DEMO_OR_TEST.test(String(row.email)))
  if (candidates.length !== 1) {
    const list = candidates.map((row) => row.email).join(', ') || '(none)'
    console.error(`local: ${candidates.length === 0 ? 'no account found' : 'several accounts found'}; pass --from <email>. Accounts: ${list}`)
    process.exit(1)
  }
  source = candidates[0]
}

// Which hosted account receives the data: --to, else the same email, else a copy of the local account.
const hostedUsers = await listUsers(hosted)
let target
let createAccount = false
if (option('--to')) {
  target = findByEmail(hostedUsers, option('--to'))
  if (!target) {
    console.error(`hosted: no account with email ${option('--to')}. Accounts: ${hostedUsers.map((row) => row.email).join(', ') || '(none)'}`)
    process.exit(1)
  }
} else {
  target = findByEmail(hostedUsers, String(source.email))
  if (!target) {
    createAccount = true
    const role = hostedUsers.length === 0 || forceAdmin ? 'admin' : String(source.role)
    target = { ...source, role }
  }
}
if (forceAdmin && !createAccount && target.role !== 'admin') target = { ...target, role: 'admin' }
const roleChanges = !createAccount && forceAdmin && findByEmail(hostedUsers, String(target.email))?.role !== 'admin'

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

console.log(`From  local        ${source.email} (${source.name}, ${source.role})`)
console.log(`To    ${destination}`)
if (createAccount) {
  console.log(`  account: will be CREATED as ${target.email} (${target.name}, ${target.role}) with the same password as on this computer`)
} else {
  console.log(`  account: existing ${target.email} (${target.name}, ${target.role})${roleChanges ? ' - role will be set to admin' : ''}`)
}
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
if (createAccount) {
  statements.push({
    sql: 'INSERT INTO users (id, email, name, password_hash, role, created_at) VALUES (?, ?, ?, ?, ?, ?)',
    args: [target.id, target.email, target.name, source.password_hash, target.role, source.created_at],
  })
} else if (roleChanges) {
  statements.push({ sql: 'UPDATE users SET role = ? WHERE id = ?', args: ['admin', target.id] })
}
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

const account = (await hosted.execute({ sql: 'SELECT email, name, role FROM users WHERE id = ?', args: [target.id] })).rows[0]
console.log(`Destination account: ${account.email} (${account.name}, ${account.role}) now holds:`)
for (const table of ['notes', 'ratings', 'cards', 'targets', 'interviews', 'questions', 'answer_attempts']) {
  const row = (await hosted.execute({ sql: `SELECT COUNT(*) AS n FROM ${table} WHERE user_id = ?`, args: [target.id] })).rows[0]
  console.log(`  ${table}: ${row.n}`)
}
process.exit(0)
