import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'
import type { NextFunction, Request, Response } from 'express'
import type { User } from '../src/types/index.ts'
import { db, nowIso } from './db.ts'

/**
 * Passwords: scrypt with a random salt (built into Node, no bcrypt needed).
 * Sessions: a random token stored in the database and sent as an httpOnly
 * cookie, so JavaScript in the page can never read it.
 */

export interface UserRow {
  id: string
  email: string
  name: string
  password_hash: string
  role: 'user' | 'admin'
  created_at: string
}

export const SESSION_COOKIE = 'prepflow_session'
const SESSION_DAYS = 30

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const candidate = scryptSync(password, salt, 64)
  const expected = Buffer.from(hash, 'hex')
  return candidate.length === expected.length && timingSafeEqual(candidate, expected)
}

export function toPublicUser(row: UserRow): User {
  return { id: row.id, email: row.email, name: row.name, role: row.role, createdAt: row.created_at }
}

export function createSession(userId: string): { token: string; expiresAt: Date } {
  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000)
  db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').run(
    token,
    userId,
    expiresAt.toISOString(),
  )
  return { token, expiresAt }
}

export function deleteSession(token: string) {
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token)
}

export function setSessionCookie(res: Response, token: string, expiresAt: Date) {
  // `secure` follows the actual protocol: on over HTTPS (hosted), off on plain http (localhost, home Wi-Fi).
  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: res.req.protocol === 'https',
    expires: expiresAt,
    path: '/',
  })
}

export function clearSessionCookie(res: Response) {
  res.clearCookie(SESSION_COOKIE, { path: '/' })
}

/** Reads one cookie from the raw header; small enough not to need a library. */
export function readCookie(req: Request, name: string): string | undefined {
  const header = req.headers.cookie
  if (!header) return undefined
  for (const part of header.split(';')) {
    const [key, ...rest] = part.trim().split('=')
    if (key === name) return decodeURIComponent(rest.join('='))
  }
  return undefined
}

export function userFromRequest(req: Request): UserRow | undefined {
  const token = readCookie(req, SESSION_COOKIE)
  if (!token) return undefined
  const row = db
    .prepare(
      `SELECT u.id, u.email, u.name, u.password_hash, u.role, u.created_at
       FROM sessions s JOIN users u ON u.id = s.user_id
       WHERE s.token = ? AND s.expires_at > ?`,
    )
    .get(token, nowIso()) as UserRow | undefined
  return row
}

/** Express middleware: 401 unless a valid session cookie is present. The user lands in res.locals. */
export function requireUser(req: Request, res: Response, next: NextFunction) {
  const user = userFromRequest(req)
  if (!user) {
    res.status(401).json({ error: 'unauthenticated' })
    return
  }
  res.locals.user = user
  next()
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const user = userFromRequest(req)
  if (!user) {
    res.status(401).json({ error: 'unauthenticated' })
    return
  }
  if (user.role !== 'admin') {
    res.status(403).json({ error: 'forbidden' })
    return
  }
  res.locals.user = user
  next()
}

export function currentUser(res: Response): UserRow {
  return res.locals.user as UserRow
}
