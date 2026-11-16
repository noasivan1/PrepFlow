import type { RunResult } from '../types'

/**
 * Runs JavaScript in a throw-away Web Worker: no access to the page, the
 * cookies or the DOM, and it is killed after a few seconds so an endless loop
 * cannot freeze the app. `console.log` goes to stdout, `console.error` to
 * stderr, and `readLine()` returns the next line of the input box.
 */
const TIME_LIMIT_MS = 5_000

const WORKER_SOURCE = `
self.onmessage = (event) => {
  const { source, stdin } = event.data
  const out = []
  const err = []
  const show = (value) => (typeof value === 'string' ? value : (() => { try { return JSON.stringify(value) } catch { return String(value) } })())
  const line = (args) => args.map(show).join(' ')
  const lines = stdin.split(/\\r?\\n/)
  let next = 0
  self.readLine = () => (next < lines.length ? lines[next++] : null)
  self.console = { log: (...a) => out.push(line(a)), info: (...a) => out.push(line(a)), warn: (...a) => err.push(line(a)), error: (...a) => err.push(line(a)) }
  let exitCode = 0
  try {
    new Function(source)()
  } catch (error) {
    exitCode = 1
    err.push(error && error.stack ? String(error.stack).split('\\n').slice(0, 4).join('\\n') : String(error))
  }
  self.postMessage({ stdout: out.join('\\n'), stderr: err.join('\\n'), exitCode })
}
`

export function runJavaScript(source: string, stdin: string): Promise<RunResult> {
  const started = performance.now()
  const url = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: 'text/javascript' }))
  const worker = new Worker(url)
  return new Promise<RunResult>((resolve) => {
    const finish = (result: Omit<RunResult, 'durationMs' | 'compiled'>) => {
      window.clearTimeout(timer)
      worker.terminate()
      URL.revokeObjectURL(url)
      resolve({ ...result, compiled: true, durationMs: Math.round(performance.now() - started) })
    }
    const timer = window.setTimeout(() => finish({ stdout: '', stderr: '', exitCode: null, timedOut: true }), TIME_LIMIT_MS)
    worker.onmessage = (event: MessageEvent<{ stdout: string; stderr: string; exitCode: number }>) =>
      finish({ ...event.data, timedOut: false })
    worker.onerror = (event) => {
      event.preventDefault()
      finish({ stdout: '', stderr: event.message || 'SyntaxError', exitCode: 1, timedOut: false })
    }
    worker.postMessage({ source, stdin })
  })
}
