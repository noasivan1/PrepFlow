// Vercel entry point: every /api/* request is routed here (see vercel.json) and handled
// by the same Express app the local server uses. The database is Turso (TURSO_DATABASE_URL).
import { app } from '../server/app.ts'

export default app
