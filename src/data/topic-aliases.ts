import type { Topic } from '../types'
import { getTopics } from './queries'

/**
 * Words people use for each topic, in both languages. Shared by the assistant
 * (to understand messages) and by the requirements matcher (to read a job
 * posting). Short aliases such as "c" or "js" only match as whole words.
 */
export const TOPIC_ALIASES: Record<Topic['id'], string[]> = {
  c: ['c', 'embedded c', 'ansi c', 'c99', 'c11'],
  cpp: ['c++', 'cpp', 'c++11', 'c++14', 'c++17', 'c++20', 'סי פלוס'],
  java: ['java', 'spring', 'jvm', 'ג׳אווה', 'גאווה', 'גאבה'],
  python: ['python', 'pytest', 'django', 'fastapi', 'pandas', 'פייתון', 'פיתון'],
  javascript: ['javascript', 'js', 'typescript', 'react', 'node', 'node.js', 'angular', 'vue', 'ג׳אווהסקריפט'],
  oop: ['oop', 'object oriented', 'object-oriented', 'design patterns', 'מונחה עצמים', 'מונחה', 'תבניות עיצוב'],
  os: ['operating system', 'operating systems', 'os', 'rtos', 'freertos', 'threads', 'multithreading', 'concurrency', 'מערכות הפעלה', 'מערכת הפעלה', 'מקביליות'],
  hardware: ['hardware', 'firmware', 'embedded', 'microcontroller', 'bits', 'bit manipulation', 'drivers', 'arm', 'fpga', 'חומרה', 'ביטים', 'אמבדד', 'קושחה', 'בקרים'],
  linux: ['linux', 'bash', 'shell', 'docker', 'kubernetes', 'containers', 'ci/cd', 'לינוקס', 'קונטיינרים'],
  networking: ['networking', 'network', 'tcp', 'udp', 'tcp/ip', 'dns', 'osi', 'routing', 'רשתות', 'רשת', 'תקשורת'],
  security: ['security', 'encryption', 'cyber', 'penetration', 'owasp', 'אבטחה', 'אבטחת מידע', 'הצפנה', 'סייבר'],
  sql: ['sql', 'database', 'databases', 'postgres', 'postgresql', 'mysql', 'mongodb', 'nosql', 'מסד נתונים', 'מסדי נתונים', 'שאילתות'],
  rest: ['rest', 'rest api', 'api', 'apis', 'http', 'microservices', 'graphql'],
  algorithms: ['algorithms', 'algorithm', 'data structures', 'leetcode', 'complexity', 'אלגוריתמים', 'אלגוריתם', 'מבני נתונים', 'ליטקוד'],
  'system-design': ['system design', 'architecture', 'scalability', 'distributed', 'תכנון מערכות', 'ארכיטקטורה'],
}

function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,:;"'()[\]{}`´׳״]/g, ' ')
    .replace(/[\n\r\t–—/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Whole-word match, so "c" does not fire on "concurrency". Handles a Hebrew prefix letter. */
function containsWord(haystack: string, word: string): boolean {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(^|\\s|[בלהומשכ])${escaped}(?=\\s|$)`, 'u').test(haystack)
}

/** Topics mentioned in free text, most mentioned first. */
export function matchTopics(text: string): Topic['id'][] {
  const haystack = normalise(text)
  if (!haystack) return []
  const scores = new Map<Topic['id'], number>()
  for (const topic of getTopics()) {
    const aliases = [topic.name.en, topic.name.he, ...(TOPIC_ALIASES[topic.id] ?? [])].map((alias) =>
      normalise(alias),
    )
    const hits = aliases.filter((alias) => alias && containsWord(haystack, alias)).length
    if (hits > 0) scores.set(topic.id, hits)
  }
  return [...scores.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id)
}
