import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'

/**
 * One SQLite file, opened with Node's built-in driver (no native module to
 * compile). The file lives in server/data/ and is ignored by git.
 *
 * Small, structured things (users, sessions, notes, ratings) get real columns.
 * Documents whose shape may still change (cards, targets, interviews, questions) are
 * stored as JSON in a `data` column: the frontend types are the schema.
 */

const here = dirname(fileURLToPath(import.meta.url))
const DB_PATH = process.env.PREPFLOW_DB ?? join(here, 'data', 'prepflow.db')
mkdirSync(dirname(DB_PATH), { recursive: true })

export const db = new DatabaseSync(DB_PATH)

db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;

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
`)

/** Parses a JSON `data` column together with the row's id. */
export function parseDocument<T extends { id: string }>(row: { id: string; data: string }): T {
  return { ...(JSON.parse(row.data) as Omit<T, 'id'>), id: row.id } as T
}

export function nowIso(): string {
  return new Date().toISOString()
}
