// Vercel entry point: every /api/* request is routed here (see vercel.json) and handled by the
// same Express app the local server runs from the .ts sources. For the function, `npm run build:api`
// (tsconfig.vercel.json) first emits the server as JavaScript into server-dist/: Vercel's own
// TypeScript step keeps the .ts import paths, and the function then cannot find its modules.
// The database is Turso (TURSO_DATABASE_URL).
import { app } from '../server-dist/server/app.js'

export default app
