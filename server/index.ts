import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import express, { type NextFunction, type Request, type Response } from 'express'
import { router } from './routes.ts'

// Optional local secrets (ANTHROPIC_API_KEY, ...) from a .env file in the project root. See .env.example.
try {
  process.loadEnvFile(fileURLToPath(new URL('../.env', import.meta.url)))
} catch {
  // No .env file: everything has a default, the AI helper just reports that it is not configured.
}

/**
 * PrepFlow API. In development Vite proxies /api/* to this server (see
 * vite.config.ts), so the browser talks to one origin and cookies just work.
 */
const app = express()
app.disable('x-powered-by')
// Hosted behind a reverse proxy (Railway, Render, Fly, ...): trust it for the protocol, so
// cookies can be marked secure on HTTPS and req.protocol is right.
app.set('trust proxy', 1)
app.use(express.json({ limit: '1mb' }))

app.use('/api', router)

app.use('/api', (_req: Request, res: Response) => {
  res.status(404).json({ error: 'not_found' })
})

// In production the same server also serves the built front end (`npm run build` -> dist/).
// Every non-API path gets index.html, so React Router handles deep links and refreshes.
const distDir = fileURLToPath(new URL('../dist', import.meta.url))
if (existsSync(distDir)) {
  app.use(express.static(distDir, { index: false, maxAge: '1h' }))
  app.get(/^(?!\/api(\/|$)).*/, (_req: Request, res: Response) => {
    res.sendFile(join(distDir, 'index.html'))
  })
}

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error)
  res.status(500).json({ error: 'server_error' })
})

const port = Number(process.env.PORT ?? 3001)
app.listen(port, () => {
  console.log(`PrepFlow ${existsSync(distDir) ? 'app + API' : 'API'} listening on http://localhost:${port}`)
})
