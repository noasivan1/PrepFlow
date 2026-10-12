import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import express, { type NextFunction, type Request, type Response } from 'express'
import { ready } from './db.ts'
import { router } from './routes.ts'

/**
 * The Express app, shared by two entry points:
 * - server/index.ts runs it as a long-lived server (local dev, Docker, Railway, ...)
 * - api/index.ts hands it to Vercel, which calls it per request as a serverless function
 */
export const app = express()
app.disable('x-powered-by')
// Hosted behind a reverse proxy (Vercel, Railway, ...): trust it for the protocol, so
// cookies can be marked secure on HTTPS and req.protocol is right.
app.set('trust proxy', 1)
app.use(express.json({ limit: '1mb' }))

// The schema is created once per process; every request waits for that first.
app.use(async (_req: Request, _res: Response, next: NextFunction) => {
  await ready
  next()
})

app.use('/api', router)

app.use('/api', (_req: Request, res: Response) => {
  res.status(404).json({ error: 'not_found' })
})

// As a long-lived server the app also serves the built front end (`npm run build` -> dist/).
// Every non-API path gets index.html, so React Router handles deep links and refreshes.
// (On Vercel the platform serves dist/ itself; see vercel.json.)
const distDir = fileURLToPath(new URL('../dist', import.meta.url))
export const servesFrontend = !process.env.VERCEL && existsSync(distDir)
if (servesFrontend) {
  app.use(express.static(distDir, { index: false, maxAge: '1h' }))
  app.get(/^(?!\/api(\/|$)).*/, (_req: Request, res: Response) => {
    res.sendFile(join(distDir, 'index.html'))
  })
}

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error)
  res.status(500).json({ error: 'server_error' })
})
