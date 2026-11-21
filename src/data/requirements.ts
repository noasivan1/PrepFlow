import { LANGUAGE_TOPIC_IDS, type LanguageTopicId, type Role, type TargetInterview, type Topic } from '../types'
import { matchTopics } from './topic-aliases'

/**
 * Reads a pasted job posting and turns it into things the app understands:
 * which topics it mentions and which programming languages. This is the
 * "matching algorithm" behind the target-interview screen: keyword based
 * today, a language model later.
 */

export interface RequirementsAnalysis {
  /** Topics named in the posting, most mentioned first. */
  topicIds: Topic['id'][]
  /** Languages named in the posting. */
  languages: LanguageTopicId[]
  /** The posting asks for a junior, student or entry-level candidate. */
  junior: boolean
}

/** Words that mark a junior / student / entry-level posting, in both languages. */
const JUNIOR_HINTS = /\b(junior|entry[\s-]level|graduate|new grad|student|intern(ship)?)\b|ג['׳]?וניור|סטודנט|בוגר(ים|ות)? טרי|ללא ניסיון|התמחות/i

export function analyseRequirements(text: string): RequirementsAnalysis {
  const topicIds = matchTopics(text)
  const languages = topicIds.filter((id): id is LanguageTopicId =>
    (LANGUAGE_TOPIC_IDS as readonly string[]).includes(id),
  )
  return { topicIds, languages, junior: JUNIOR_HINTS.test(text) }
}

/** True when the target interview is for a junior / student / entry-level position. */
export function isJuniorTarget(target: TargetInterview): boolean {
  return target.roleId === 'student' || JUNIOR_HINTS.test(`${target.position}\n${target.requirements}`)
}

/** Everything a target interview tells us to emphasise: its languages plus the topics in its requirements. */
export function targetFocusTopics(target: TargetInterview): Topic['id'][] {
  const fromRequirements = analyseRequirements(target.requirements).topicIds
  return [...new Set([...target.languages, ...fromRequirements])]
}

/** Days from today until the interview; negative when it already happened. */
export function daysUntil(date: string, today = new Date()): number {
  const target = new Date(`${date}T00:00:00`)
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  return Math.round((target.getTime() - start.getTime()) / (24 * 60 * 60 * 1000))
}

/** Words in a job title that point at one of the app's roles. Checked in order; the first hit wins. */
const ROLE_HINTS: Array<[Role['id'], string[]]> = [
  ['verification', ['verification', 'validation', 'ורפיקציה', 'וריפיקציה', 'ולידציה']],
  ['embedded', ['embedded', 'firmware', 'rtos', 'אמבדד', 'קושחה']],
  ['fullstack', ['full stack', 'fullstack', 'full-stack', 'פולסטאק']],
  ['backend', ['backend', 'back-end', 'back end', 'server side', 'בקאנד']],
  ['frontend', ['frontend', 'front-end', 'front end', 'react', 'angular', 'פרונט']],
  ['devops', ['devops', 'sre', 'site reliability', 'platform engineer']],
  ['data', ['data scientist', 'data engineer', 'machine learning', 'ml engineer', 'deep learning', 'דאטה']],
  ['qa', ['qa', 'automation', 'test engineer', 'tester', 'אוטומציה', 'בודק']],
  ['helpdesk', ['help desk', 'helpdesk', 'it support', 'support engineer', 'תמיכה']],
  ['sysadmin', ['system administrator', 'sysadmin', 'it administrator', 'מנהל מערכות', 'מנהל/ת מערכות']],
  ['security', ['security', 'soc analyst', 'cyber', 'אבטחת מידע', 'סייבר']],
  ['student', ['student', 'intern', 'סטודנט', 'מתמחה']],
]

/** The role a job title most likely belongs to, or null when nothing in it is recognised. */
export function suggestRole(title: string): Role['id'] | null {
  const needle = title.toLowerCase()
  if (!needle.trim()) return null
  for (const [roleId, hints] of ROLE_HINTS) {
    if (hints.some((hint) => needle.includes(hint))) return roleId
  }
  return null
}
