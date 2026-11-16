/**
 * Runs a short program for the practice code editor.
 *
 * Compiling and executing untrusted code must never happen inside our own
 * function, so the work goes to Compiler Explorer (godbolt.org), a free public
 * service that sandboxes every run. JavaScript is not listed here: the browser
 * runs it itself in a Web Worker.
 */

import type { RunResult } from '../src/types/index.ts'

export const RUNNABLE_LANGUAGES = ['c', 'cpp', 'java', 'python'] as const
export type RunnableLanguage = (typeof RUNNABLE_LANGUAGES)[number]

/** The service is busy or unreachable: temporary, and on their side. */
export class RunnerUnavailableError extends Error {
  constructor(cause?: unknown) {
    super('The code runner is unavailable right now', { cause })
  }
}

const ENDPOINT = 'https://godbolt.org/api/compiler'
const COMPILERS: Record<RunnableLanguage, { id: string; flags: string }> = {
  c: { id: 'cg141', flags: '-O2 -std=c17 -fdiagnostics-color=never' },
  cpp: { id: 'g141', flags: '-O2 -std=c++20 -fdiagnostics-color=never' },
  java: { id: 'java2102', flags: '' },
  python: { id: 'python312', flags: '' },
}
/** Their own limit kills a program after ~20 s; this leaves room for the compile and the round trip. */
const REQUEST_TIMEOUT_MS = 35_000
const MAX_OUTPUT = 20_000

interface ExplorerLine {
  text?: unknown
}
interface ExplorerResponse {
  code?: unknown
  didExecute?: unknown
  timedOut?: unknown
  stdout?: ExplorerLine[]
  stderr?: ExplorerLine[]
  buildResult?: { code?: unknown; stdout?: ExplorerLine[]; stderr?: ExplorerLine[] }
}

// Colour codes some compilers add even when asked not to.
// eslint-disable-next-line no-control-regex
const ANSI = /\u001b\[[0-9;]*[A-Za-z]/g

function joinLines(lines: ExplorerLine[] | undefined): string {
  const text = (lines ?? []).map((line) => (typeof line.text === 'string' ? line.text : '')).join('\n')
  const clean = text.replace(ANSI, '').replaceAll('<source>', 'main')
  return clean.length > MAX_OUTPUT ? `${clean.slice(0, MAX_OUTPUT)}\n...` : clean
}

/**
 * Java needs a public class to live in a file of the same name, and the service
 * compiles a single unnamed file, so top-level `public` modifiers are dropped.
 */
function prepareSource(language: RunnableLanguage, source: string): string {
  if (language !== 'java') return source
  return source.replace(/^(\s*)public\s+((?:final\s+|abstract\s+)?(?:class|interface|enum|record)\s)/gm, '$1$2')
}

export async function runCode(language: RunnableLanguage, source: string, stdin: string): Promise<RunResult> {
  const compiler = COMPILERS[language]
  const started = Date.now()
  let response: Response
  try {
    response = await fetch(`${ENDPOINT}/${compiler.id}/compile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        source: prepareSource(language, source),
        options: {
          userArguments: compiler.flags,
          executeParameters: { args: [], stdin },
          compilerOptions: { executorRequest: true },
          filters: { execute: true },
          tools: [],
          libraries: [],
        },
        allowStoreCodeDebug: false,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
  } catch (error) {
    throw new RunnerUnavailableError(error)
  }
  if (!response.ok) throw new RunnerUnavailableError(new Error(`HTTP ${response.status}`))

  let body: ExplorerResponse
  try {
    body = (await response.json()) as ExplorerResponse
  } catch (error) {
    throw new RunnerUnavailableError(error)
  }

  const durationMs = Date.now() - started
  const buildFailed = typeof body.buildResult?.code === 'number' && body.buildResult.code !== 0
  if (buildFailed || body.didExecute === false) {
    const messages = joinLines(body.buildResult?.stderr) || joinLines(body.stderr)
    return { compiled: false, exitCode: null, stdout: joinLines(body.buildResult?.stdout), stderr: messages, timedOut: false, durationMs }
  }
  return {
    compiled: true,
    exitCode: typeof body.code === 'number' ? body.code : null,
    stdout: joinLines(body.stdout),
    stderr: joinLines(body.stderr),
    timedOut: body.timedOut === true,
    durationMs,
  }
}
