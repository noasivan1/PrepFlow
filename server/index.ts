import { fileURLToPath } from 'node:url'

// Optional local secrets (ANTHROPIC_API_KEY, TURSO_*, ...) from a .env file in the project root. See .env.example.
try {
  process.loadEnvFile(fileURLToPath(new URL('../.env', import.meta.url)))
} catch {
  // No .env file: everything has a default, the AI helper just reports that it is not configured.
}

// Imported after the .env is loaded, so the database client sees TURSO_* when they are set.
const { app, servesFrontend } = await import('./app.ts')
const { ready } = await import('./db.ts')

await ready
const port = Number(process.env.PORT ?? 3001)
app.listen(port, () => {
  console.log(`PrepFlow ${servesFrontend ? 'app + API' : 'API'} listening on http://localhost:${port}`)
})
