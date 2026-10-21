# PrepFlow

A personal interview preparation and knowledge management app. A React front end
backed by a small Express + SQLite API: accounts, your own interviews and questions,
notes, practice ratings, flashcards and upcoming interviews are saved per user in a
local database.

## Stack

- React 19 + TypeScript, Vite 8, Tailwind CSS 4 (class-based dark mode), React Router 8, lucide-react
- Hebrew / English UI with a small in-house translation layer (no i18n library); all seed questions and answers are bilingual
- API: Express 5 on Node 24; database through `@libsql/client` (a local SQLite file in development,
  Turso when hosted on Vercel); scrypt password hashing, httpOnly cookie sessions
- Optional: the Claude API for the "more questions in this interview's style" helper

## Scripts

```sh
npm install       # install dependencies
npm run dev       # web (http://localhost:5173) and API (http://localhost:3001) together
npm run dev:web   # only the Vite dev server
npm run dev:api   # only the API (tsx watch server/index.ts)
npm run build     # type-check app + server, build the front end for production
npm run preview   # preview the production build
npm run lint      # run oxlint
```

In development Vite proxies `/api` to the API, so the browser only ever talks to port 5173.

## Using it on a phone or tablet

The UI is responsive and installable. Two ways to reach it from an iPhone / iPad:

1. **Same Wi-Fi as the PC** (nothing to set up): run `npm run dev:lan` instead of `npm run dev`.
   Vite prints a "Network:" address such as `http://192.168.1.23:5173`; open it on the phone
   (allow the Windows Firewall prompt once). Then Share → **Add to Home Screen** on iOS, or
   "Install app" on Android: PrepFlow opens full screen with its own icon. Works only while the PC
   is on and both are on the same network.
2. **Hosted** (works anywhere, HTTPS, no PC needed): see *Deploying* below.
3. **Away from home, app still on the PC**: install [Tailscale](https://tailscale.com) on the PC and the
   phone (same account), run `npm run build` then `npm start` on the PC, and open
   `http://<pc-name>:3001` on the phone from anywhere. Private to your devices; the PC must stay on
   and not sleep. No HTTPS, so cookies and "Add to Home Screen" work but some PWA features do not.

## Deploying

The app is one Express server plus a built front end, and the database is SQLite-compatible
(libSQL). Two ways to host it; both update with `git push` and keep the data.

### Vercel + Turso (free tiers, recommended)

Vercel runs the API as a serverless function (`api/index.ts` hands it the same Express app) and
serves `dist/` as static files (`vercel.json`). Serverless functions have no disk, so the
database lives in **Turso** (hosted libSQL); locally the very same client reads the SQLite file.

1. Push the repository to **GitHub**.
2. **Turso**: create a database (`turso db create prepflow` or the website), copy its URL
   (`libsql://...turso.io`) and create an auth token.
3. **Vercel**: "Add New Project" → import the GitHub repo. Vercel reads `vercel.json`. Under
   *Environment Variables* add `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN` and, optionally,
   `GEMINI_API_KEY` (answer checking) and `ANTHROPIC_API_KEY`. Deploy.
4. Open the `https://...vercel.app` address, register (the first account is the admin) and add
   it to the phone's home screen. Every later `git push` to `main` redeploys.

Limits that matter: the Hobby plan is for personal, non-commercial use; functions run up to 60 s
(set in `vercel.json`), enough for the AI helper. The first request after a quiet period takes
about a second (cold start).

### Docker host with a disk (Railway, Fly.io, Render, a VPS)

`npm run build` produces `dist/`, and `npm start` (`node server/index.ts`) serves it together
with the API on one port, with the SQLite file in `server/data/`. The `Dockerfile` does exactly
that; mount a **persistent disk** at `/app/server/data` (or point `PREPFLOW_DB` into one),
otherwise the database is lost on every deploy. Deploy from GitHub, add the volume, set
`GEMINI_API_KEY` / `ANTHROPIC_API_KEY` if wanted. Costs a few dollars a month; no code changes, no second service.

Updates never need a fresh database: tables are created with `CREATE TABLE IF NOT EXISTS` and the
per-user documents are JSON, so new fields are additive. Back up by copying `prepflow.db` (or with
`turso db shell` / the Turso dashboard when hosted).

## Accounts and data

- Locally the database is created on first run at `server/data/prepflow.db` (override the path with
  `PREPFLOW_DB`); the folder is git-ignored, delete the file to start clean. When `TURSO_DATABASE_URL`
  is set, the same code talks to Turso instead.
- The **first account registered becomes `admin`**; every later account is a regular `user`.
  Admins get an `/admin` page listing every account and what it has saved.
- Sessions are a random token in the httpOnly cookie `prepflow_session`, valid for 30 days,
  stored in the `sessions` table. Passwords are hashed with scrypt and a random salt.
- Everything a user does is stored under their user id only. One account never sees another's data.

### What is stored, and where

| Table | Row shape | Frontend type | Written by |
| --- | --- | --- | --- |
| `users` | real columns: id, email, name, password_hash, role, created_at | `User` | register |
| `sessions` | token, user_id, expires_at | – | login / logout |
| `settings` | one JSON document per user | `AccountSettings` (role, practice preferences, show samples) | role picker, "Tailor to the interview", sample toggle |
| `notes` | user_id, question_id, text | `Record<questionId, string>` | notes box on a question / in practice |
| `ratings` | append-only: question_id, rating, at | `RatingEvent[]` | the four rating buttons in practice |
| `cards` | JSON document | `Flashcard` | Study page, "Add a flashcard" |
| `targets` | JSON document | `TargetInterview` (upcoming interview + requirements text) | onboarding, Interviews page |
| `interviews` | JSON document | `Interview` (with `questionIds`) | "Add interview", logging a passed target, copying a sample |
| `questions` | JSON document | `Question` (`custom: true`, `generated: true` for AI ones) | interview form, question bank, the AI helper |
| `answer_attempts` | real columns: question_id, answer, score, verdict, feedback (JSON evaluation), created_at | `AnswerAttempt` | "Check my answer" in practice |

Small, structured things get real columns; documents whose shape may still change are one JSON
`data` column, and the TypeScript types in `src/types/index.ts` are the schema. `GET /api/me/data`
returns all of it at once and `UserDataProvider` keeps that copy in memory; every write updates the
copy immediately and then calls the API (typing-heavy writes are debounced).

### Seed data vs. your data

`src/data/mock.ts` ships topics, roles, companies, ~90 bilingual questions and 14 **built-in
interviews** (four of them reported by the user - three NVIDIA rounds and a Rafael round - flagged
`reported: true` and labelled "Reported by you"; the rest are demo data labelled "Sample"). `src/data/catalog.ts` merges that seed content with the signed-in user's own
questions and interviews; `CatalogProvider` publishes the merged catalog, and `queries.ts`
reads from it, so every page (bank, company pages, practice, predictions) sees seed + yours.
Built-in interviews carry `sample: true`, can be hidden, and can be copied into your own list (the
copy is editable). Your own questions carry `custom: true`, show a
"My question" badge, and can be edited or deleted from the question page.

## Flow

1. `/login` – sign in or create an account.
2. `/onboarding` – right after registering: the interview you are preparing for (company, role,
   job title, date, languages, the job requirements text). The job title suggests the role
   ("Verification Engineer" → Software Verification Engineer) and topics are detected from the requirements.
3. `/start` – pick a role manually (used when there is no upcoming interview).
4. `/companies`, `/companies/:id`, `/questions/:id` – companies and the questions asked at each,
   with answers, code solutions (C / C++ / Java / Python), your notes and flashcards.
5. `/interviews` – *Upcoming interviews* (edit, delete, add more; a passed date offers
   "How did it go? Log the questions"), *My interviews* (yours, editable) and *Sample interviews*.
   Logging an interview lets you pick questions from the bank or write new ones; new questions are
   saved to your bank and linked to the company.
6. `/practice` – sessions built around the soonest upcoming interview: the next-interview card (or a
   nudge to log one that passed), "Tailor to the interview" (languages and company come from the
   interview; change them here to override, Reset hands control back), "Likely in your interview" with
   a **match level** per question (only medium and high are shown), the optional AI helper, and the
   quick / standard / full plans (30 / 60 / 90 min with 1 / 2 / 3 coding questions) plus a *review*
   plan for flagged questions.
7. `/study` – flashcards (what you got wrong, what to remember, how to approach), created from
   flagged questions or by hand, with a flip review.
8. `/admin` – admins only.

## How practice adapts

- `src/state/usePracticeContext.ts` decides what a session is built from. The soonest upcoming
  interview is the source of truth for the role and the topics; the user's explicit preferences
  override its languages and company when set.
- `src/data/requirements.ts` + `src/data/topic-aliases.ts` match the requirements text to topics
  and languages by keywords and aliases (English and Hebrew), and `suggestRole` maps a job title to a
  role. This is the rule-based "algorithm"; it is the seam where a language model can be plugged in later.
- `src/data/practice.ts` builds every session inside a time budget (coding 10 min, system design 6,
  troubleshooting 4, conceptual 3). `predictQuestions` scores every question — what the company
  already asked (strongest), topics named in the requirements, interview languages, role and company
  focus topics, how often it comes up, where you are weakest, and the coding/theory emphasis — drops
  weak matches and languages the interview does not use, and spreads the open questions over topics.
- General practice (mixed round / coding drill / theory round) ignores the interview: the whole bank
  with near-uniform weights and a slight preference for the role (`scope: 'general'` plans in
  `PRACTICE_PLANS`; `only: 'coding' | 'open'` restricts the kind of question).
- Tailored sessions (quick / standard / full) are all drawn from the same pool: every question that reaches a
  medium match for this interview (the same scoring as the predictions, plus a bonus for questions you
  flagged). The order is a seeded weighted random draw, so every start is a different mix that still
  favours the best matches; the seed sits in the URL (`/practice?plan=quick&seed=...`) so the session you
  previewed is the one you get, and "New mix" redraws. When too few questions match, the floor is lowered
  instead of filling with unrelated questions.
- `src/data/summary.ts` computes the dashboard numbers (streak from rating dates, totals, weakest
  topics, most asked) from the catalog and your ratings.

### Match vs. confidence

Every "confidence" shown in the UI comes from **your own practice ratings** only
(`ratedConfidence` in `src/data/practice.ts`). A question you never rated says "Not practised yet",
and topics you never rated are left out of "needs attention"; the `confidence` field in the seed data
is not shown. **Match** (on predicted questions) is a different thing: how likely the question is to
be asked in this interview. A likely question you are weak in is exactly what to practise.

### Text direction

Seed content exists in both languages, so question and answer text is laid out by the UI language
(`textDirection` in `src/lib/utils.ts`), not by browser detection: a Hebrew answer that opens with
"O(log n)" or "mutex" still reads right-to-left. Text the user typed is detected by the browser.
Long answers are split into paragraphs for display (`AnswerText`); explicit line breaks in an answer win.

## Answering questions in practice

Every practice card has a **My answer** area: write the answer, then **Check my answer** sends it to
the grader together with the recommended answer (the source of truth), the question type, topic and
difficulty, and returns structured feedback: verdict and score, what was correct, what is missing,
what was incorrect, how to improve, and an expandable improved version of the answer. Wording does
not have to match; coding answers are judged on approach, correctness and complexity. The recommended
answer, **My notes** (a separate thing: reminders for later) and the self-rating follow, in that order.
**Show recommended answer** skips the check.

Attempts are saved per user in `answer_attempts`; a question answered before shows "You answered
this before · N attempts · best X%", the previous answers and feedback can be opened, and a new check
shows "Previous / Current". Limits: 4000 characters per answer, 30 checks per user per hour
(`PREPFLOW_EVAL_HOURLY_LIMIT`).

## AI providers

`server/ai/` is the only place that talks to a model vendor. Features build a prompt and parse the
reply (`evaluate.ts`, `questions.ts`); a provider (`gemini.ts`, `anthropic.ts`) just turns a
prompt into text; `index.ts` picks one from the environment. Answer checking prefers **Gemini**
(`GEMINI_API_KEY`, model `GEMINI_MODEL`, default `gemini-3.8-flash`); question generation prefers
Anthropic (`ANTHROPIC_API_KEY`) and falls back to Gemini. When Google answers 503 (high demand) or 429,
the Gemini provider retries once and then tries `gemini-3.7-flash` and `gemini-3.5-flash` before giving
up. Keys are read server-side only; without any
key the UI explains what to set instead of failing. `PREPFLOW_AI=stub` returns canned replies and
`PREPFLOW_AI=fail` always errors, for development and tests.

## AI helper (optional)

On the practice page, "More questions in this interview's style (AI)" asks a Claude model for new
questions built from the role, company, job title, requirements text, languages, emphasis and the
questions already asked at that company (your own questions are used as style examples too). Each
suggestion has a likelihood, a reason and a model answer; "Save to bank" stores it as your own question
(badge "AI"), and from then on it is part of practice and predictions like any other question.

Setup: copy `.env.example` to `.env`, set `ANTHROPIC_API_KEY` or `GEMINI_API_KEY`, restart `npm run dev`.
The key is read only by the API server (route `POST /api/me/ai/questions`); without it the card explains
what to do instead of failing.

Why not scrape Glassdoor / LeetCode instead: they block scraping, company tags are a paid feature, and
it is against their terms. A model that knows the common questions for a role, plus your own examples,
is the practical route; the built-in bank grows with everything you save.

The chat assistant (floating button) is still local and rule-based (`src/assistant/assistant.ts`).

## API

All routes live under `/api` and speak JSON.

| Area | Routes |
| --- | --- |
| Auth | `POST /auth/register`, `POST /auth/login`, `POST /auth/logout`, `GET /auth/me` |
| Account | `GET /me/data` (everything at once), `PUT /me/settings`, `PUT /me/notes/:questionId`, `POST /me/ratings` |
| Flashcards | `POST /me/cards`, `PUT /me/cards/:id`, `DELETE /me/cards/:id` |
| Upcoming interviews | `POST /me/targets`, `PUT /me/targets/:id`, `DELETE /me/targets/:id` |
| Your interviews | `POST /me/interviews`, `PUT /me/interviews/:id`, `DELETE /me/interviews/:id` |
| Your questions | `POST /me/questions`, `PUT /me/questions/:id`, `DELETE /me/questions/:id` (also unlinks it from your interviews) |
| AI helper | `POST /me/ai/questions` (503 `ai_not_configured` without a key) |
| Answer checking | `POST /me/ai/evaluate-answer` (201 with the saved attempt; 503 not configured, 502 failed, 429 rate-limited), `GET /me/attempts/:questionId` |
| Admin | `GET /admin/users`, `GET /admin/users/:id` |

Unauthenticated requests get `401`, non-admins on admin routes get `403`, bad input `400`
with an error `code` the UI translates.

## Structure

```
api/
  index.ts      Vercel entry point: exports the Express app as a serverless function
server/
  index.ts      long-lived entry: loads .env, waits for the schema, listens
  app.ts        the Express app (API router, static front end, errors), shared with api/index.ts
  db.ts         libSQL client (local file or Turso), schema, small async query helpers
  auth.ts       password hashing, sessions, requireUser / requireAdmin middleware
  routes.ts     every endpoint with input validation
  ai/           provider abstraction: provider.ts, gemini.ts, anthropic.ts, stub.ts, evaluate.ts, questions.ts, index.ts
  data/         the database file (git-ignored)
src/
  api/          fetch wrapper with typed errors (client.ts)
  assistant/    local rule-based chat assistant
  components/   reusable UI (ui/ primitives, cards, modals, problem statement, code solutions,
                InterviewFormModal, QuestionForm, TargetInterviewForm, AiSuggestions)
  data/         mock.ts (seed data), catalog.ts (seed + yours), queries.ts (accessors),
                practice.ts (sessions + predictions), requirements.ts (matching), summary.ts (dashboard numbers)
  i18n/         translations.ts (every UI string, en + he) and the useTranslation hook
  layouts/      app shell: desktop sidebar + mobile bottom navigation + account card
  lib/          small helpers (class merging, dates)
  pages/        one file per route
  state/        AuthProvider, SettingsProvider (theme + language), UserDataProvider (all per-user data),
                CatalogProvider (merged content), usePracticeContext
  types/        domain types: Role, Company, Interview, Question, Flashcard, TargetInterview, ...
```

## Adding data

- A company: add one object to `companies` in `src/data/mock.ts`.
- A seed question: add one object to `questions` (with `roleIds`, `codeSolutions` for coding questions,
  `details` for long problem statements) and list its id in a sample interview's `questionIds`.
  Your own questions do not need this: add them in the app, or let the AI helper propose them.
- A role: add one object to `roles`; tag questions with its id in `roleIds`; add title words to
  `ROLE_HINTS` in `src/data/requirements.ts` so job titles suggest it.
- A topic keyword: add it to `src/data/topic-aliases.ts` so requirements text can detect it.
- UI text: add the key to `en` in `src/i18n/translations.ts`; TypeScript will make you add it to `he` too.

Companies, roles, topics and the seed questions are still static data in `src/data/mock.ts`; moving
them into the database and putting a language model behind the chat assistant and the requirements
matcher are the next steps.
