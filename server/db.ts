import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient, type InValue } from '@libsql/client'

/**
 * One database client for every environment, through libSQL (SQLite-compatible):
 * - locally: the file server/data/prepflow.db (or PREPFLOW_DB), same format as before
 * - hosted on Vercel: a Turso database (TURSO_DATABASE_URL + TURSO_AUTH_TOKEN), because
 *   serverless functions have no persistent disk
 *
 * Small, structured things (users, sessions, notes, ratings) get real columns.
 * Documents whose shape may still change (cards, targets, interviews, questions) are
 * stored as JSON in a `data` column: the frontend types are the schema.
 */

const here = dirname(fileURLToPath(import.meta.url))
const remoteUrl = process.env.TURSO_DATABASE_URL
const filePath = (process.env.PREPFLOW_DB ?? join(here, 'data', 'prepflow.db')).replace(/\\/g, '/')
if (!remoteUrl) mkdirSync(dirname(filePath), { recursive: true })

export const db = createClient(
  remoteUrl ? { url: remoteUrl, authToken: process.env.TURSO_AUTH_TOKEN } : { url: `file:${filePath}` },
)

export const isRemote = Boolean(remoteUrl)

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id            TEXT PRIMARY KEY,
    email         TEXT NOT NULL UNIQUE,
    name          TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    role          TEXT NOT NULL DEFAULT 'user',
    created_at    TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token      TEXT PRIMARY KEY,
    user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS settings (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    data    TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS notes (
    user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL,
    text        TEXT NOT NULL,
    updated_at  TEXT NOT NULL,
    PRIMARY KEY (user_id, question_id)
  );

  CREATE TABLE IF NOT EXISTS ratings (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL,
    rating      TEXT NOT NULL,
    at          TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS ratings_by_user ON ratings(user_id, id);

  CREATE TABLE IF NOT EXISTS cards (
    id         TEXT PRIMARY KEY,
    user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    data       TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS cards_by_user ON cards(user_id, created_at);

  CREATE TABLE IF NOT EXISTS targets (
    id         TEXT PRIMARY KEY,
    user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    data       TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS targets_by_user ON targets(user_id, created_at);

  CREATE TABLE IF NOT EXISTS interviews (
    id         TEXT PRIMARY KEY,
    user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    data       TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS interviews_by_user ON interviews(user_id, created_at);

  CREATE TABLE IF NOT EXISTS questions (
    id         TEXT PRIMARY KEY,
    user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    data       TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS questions_by_user ON questions(user_id, created_at);
`

async function initialise(): Promise<void> {
  if (!isRemote) {
    // Local file only: WAL lets the dev server read while a write is in progress.
    await db.execute('PRAGMA journal_mode = WAL')
  }
  try {
    await db.execute('PRAGMA foreign_keys = ON')
  } catch {
    // Not every hosted backend accepts pragmas; the schema is still consistent without it.
  }
  await db.executeMultiple(SCHEMA)
}

/** Resolves once the schema exists. Awaited before the server listens / before the first request. */
export const ready: Promise<void> = initialise()

export type Args = InValue[]

/** All rows of a query, typed by the caller. Column names are the keys. */
export async function all<T>(sql: string, args: Args = []): Promise<T[]> {
  const result = await db.execute({ sql, args })
  return result.rows as unknown as T[]
}

/** The first row of a query, or undefined. */
export async function get<T>(sql: string, args: Args = []): Promise<T | undefined> {
  return (await all<T>(sql, args))[0]
}

/** A statement that returns nothing. */
export async function run(sql: string, args: Args = []): Promise<void> {
  await db.execute({ sql, args })
}

/** Parses a JSON `data` column together with the row's id. */
export function parseDocument<T extends { id: string }>(row: { id: string; data: string }): T {
  return { ...(JSON.parse(row.data) as Omit<T, 'id'>), id: row.id } as T
}

export function nowIso(): string {
  return new Date().toISOString()
}
