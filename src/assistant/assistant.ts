import type { Company, Interview, Language, LatestRatings, Question, Role, Topic } from '../types'
import {
  getCompanies,
  getCompany,
  getQuestions,
  getQuestionsAskedAtCompany,
  getRole,
  getRoles,
  getTopicMap,
  getTopics,
} from '../data/queries'
import { TOPIC_ALIASES } from '../data/topic-aliases'

/**
 * A small, local assistant that answers from the app's own data: questions,
 * answers, companies and roles. It runs entirely in the browser and has no
 * language model behind it yet. When the backend exists, `askAssistant` is the
 * one function to swap for a real model call; the panel does not change.
 */

export interface AssistantLink {
  label: string
  to: string
}

export interface AssistantReply {
  text: string
  links?: AssistantLink[]
}

export interface AssistantMessage extends AssistantReply {
  id: string
  from: 'user' | 'assistant'
}

export interface AssistantContext {
  /** Language of the UI, used when the message has no letters at all. */
  uiLanguage: Language
  roleId: Role['id'] | null
  interviews: Interview[]
  /** The user's latest practice rating per question. */
  latestRatings: LatestRatings
}

const HEBREW = /[֐-׿]/

/** Hebrew letters in the message mean a Hebrew reply, Latin letters an English one. */
export function detectLanguage(text: string, fallback: Language): Language {
  if (HEBREW.test(text)) return 'he'
  if (/[A-Za-z]/.test(text)) return 'en'
  return fallback
}

// ---------- Reply texts ----------

const R = {
  en: {
    help: 'I know your questions, companies and roles. Try:\n• What did Elbit ask?\n• Explain polymorphism\n• How do I prepare for embedded?\n• C questions\n• Which session should I do?',
    fallback:
      'I did not catch that. I can list questions by company or topic, explain a question from the bank, or suggest a practice session. For example: "What did NVIDIA ask?" or "Explain deadlock".',
    askedAt: (company: string, count: number, interviews: number) =>
      `At ${company} you logged ${count} question${count === 1 ? '' : 's'} across ${interviews} interview${interviews === 1 ? '' : 's'}:`,
    nothingAt: (company: string) => `You have no interviews logged at ${company} yet. Here is what I know about them:`,
    andMore: (count: number) => `…and ${count} more`,
    companyPage: 'Company page',
    questionPage: 'Open question',
    focus: 'Usually tested on',
    expect: 'What to expect',
    prepare: (role: string, topics: string, count: number, coding: number) =>
      `To prepare for ${role}, focus on ${topics}. You have ${count} questions tagged for this role, ${coding} of them coding.`,
    topCompanies: (names: string) => `Companies with the most relevant questions: ${names}.`,
    topicList: (topic: string, count: number) => `${count} question${count === 1 ? '' : 's'} about ${topic}:`,
    topicEmpty: (topic: string) => `No questions about ${topic} yet. Add an interview and the questions you were asked.`,
    hasExample: 'There is a code example on the question page.',
    hasSolutions: 'Solutions in several languages are on the question page.',
    practice:
      'Three sessions, all built from questions for your role:\n• Quick warm-up: up to 30 min, 1 coding question\n• Standard session: up to 60 min, 2 coding questions\n• Full simulation: up to 90 min, 3 coding questions\nTip: open "Tailor to the interview" to choose languages and a target company.',
    weak: (count: number) => `Your ${count} weakest questions right now (flagged in practice first):`,
    weakEmpty: 'Nothing flagged and nothing marked as low confidence for your role. Nice.',
    reviewSession: 'Review session',
    openBank: 'Question bank',
    openPractice: 'Practice',
    openCompanies: 'Companies',
    quick: 'Quick warm-up',
    standard: 'Standard session',
    full: 'Full simulation',
    lowConfidence: 'Low confidence questions',
  },
  he: {
    help: 'אני מכיר את השאלות, החברות והתפקידים שלכם. נסו:\n• מה שאלו באלביט?\n• הסבר על פולימורפיזם\n• איך להתכונן לאמבדד?\n• שאלות ב-C\n• איזה תרגול כדאי לי?',
    fallback:
      'לא הבנתי. אני יכול להציג שאלות לפי חברה או נושא, להסביר שאלה מהמאגר, או להציע תרגול. למשל: "מה שאלו באנבידיה?" או "הסבר על deadlock".',
    askedAt: (company: string, count: number, interviews: number) =>
      `${hePrefix('ב', company)} רשמתם ${count === 1 ? 'שאלה אחת' : `${count} שאלות`} ב${interviews === 1 ? 'ראיון אחד' : `${interviews} ראיונות`}:`,
    nothingAt: (company: string) => `עדיין אין לכם ראיונות ${hePrefix('ב', company)}. הנה מה שאני יודע עליהם:`,
    andMore: (count: number) => `…ועוד ${count}`,
    companyPage: 'לעמוד החברה',
    questionPage: 'לשאלה',
    focus: 'בדרך כלל נבחנים על',
    expect: 'למה לצפות',
    prepare: (role: string, topics: string, count: number, coding: number) =>
      `כדי להתכונן ${hePrefix('ל', role)}, התמקדו ${hePrefix('ב', topics)}. יש לכם ${count} שאלות מתויגות לתפקיד הזה, ${coding} מהן שאלות קוד.`,
    topCompanies: (names: string) => `חברות עם הכי הרבה שאלות רלוונטיות: ${names}.`,
    topicList: (topic: string, count: number) => `${count === 1 ? 'שאלה אחת' : `${count} שאלות`} על ${topic}:`,
    topicEmpty: (topic: string) => `עדיין אין שאלות על ${topic}. הוסיפו ראיון ואת השאלות שנשאלתם.`,
    hasExample: 'יש דוגמה בקוד בעמוד השאלה.',
    hasSolutions: 'פתרונות בכמה שפות נמצאים בעמוד השאלה.',
    practice:
      'שלושה תרגולים, כולם נבנים מהשאלות של התפקיד שלכם:\n• חימום מהיר: עד 30 דקות, שאלת קוד אחת\n• סשן רגיל: עד שעה, שתי שאלות קוד\n• סימולציה מלאה: עד שעה וחצי, שלוש שאלות קוד\nטיפ: פתחו את "התאמה לראיון" כדי לבחור שפות וחברת יעד.',
    weak: (count: number) => `${count} השאלות החלשות שלכם כרגע (קודם מה שסימנתם בתרגול):`,
    weakEmpty: 'אין שאלות מסומנות ואין שאלות בביטחון נמוך לתפקיד שלכם. יפה.',
    reviewSession: 'תרגול חזרה',
    openBank: 'למאגר השאלות',
    openPractice: 'לתרגול',
    openCompanies: 'לחברות',
    quick: 'חימום מהיר',
    standard: 'סשן רגיל',
    full: 'סימולציה מלאה',
    lowConfidence: 'שאלות בביטחון נמוך',
  },
} as const

// ---------- Matching helpers ----------

const STOPWORDS = new Set([
  'what', 'is', 'are', 'the', 'a', 'an', 'of', 'to', 'in', 'and', 'or', 'me', 'explain', 'about', 'how', 'do', 'does',
  'i', 'my', 'for', 'with', 'between', 'vs', 'please', 'can', 'you', 'be', 'it', 'its', 'when', 'why', 'would',
  'מה', 'זה', 'זאת', 'את', 'של', 'על', 'איך', 'למה', 'הסבר', 'הסבירי', 'הסבירו', 'לי', 'בין', 'או', 'עם', 'אני', 'שלי',
  'מהו', 'מהי', 'מהם', 'האם', 'יש', 'כדאי', 'בבקשה', 'תסביר', 'תסבירי',
])

function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,:;"'()[\]{}`´׳״]/g, ' ')
    .replace(/[-–—/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** A Hebrew token without a leading prefix letter (ב, ל, ה, ו, מ, ש, כ), so "באלביט" matches "אלביט". */
function stripPrefix(token: string): string {
  return token.length > 3 && /^[בלהומשכ]/.test(token) ? token.slice(1) : token
}

/** Meaningful words of a message. Single letters are kept because "C" is a topic. */
function tokens(text: string): string[] {
  return normalise(text)
    .split(' ')
    .filter((token) => token.length > 0 && !STOPWORDS.has(token))
}

/** "ב" + "NVIDIA" reads badly in Hebrew; a hyphen is the convention before Latin names. */
function hePrefix(prefix: string, name: string): string {
  return /^[A-Za-z]/.test(name) ? `${prefix}-${name}` : `${prefix}${name}`
}

function tokenMatches(a: string, b: string): boolean {
  return a === b || stripPrefix(a) === b || a === stripPrefix(b) || stripPrefix(a) === stripPrefix(b)
}

function containsAny(message: string, words: readonly string[]): boolean {
  return words.some((word) => message.includes(word))
}

const QUESTION_WORDS = ['question', 'asked', 'ask', 'שאל', 'נשאל'] as const
const PREPARE_WORDS = ['prepare', 'prep', 'ready', 'study', 'להתכונן', 'הכנה', 'מתכונן', 'מתכוננת', 'להכין', 'ללמוד'] as const
const ABOUT_WORDS = ['about', 'background', 'who is', 'who are', 'tell me', 'רקע', 'מי זה', 'מי זאת', 'ספר', 'ספרי', 'על החברה', 'מתמחה', 'עוסקת'] as const
const PRACTICE_WORDS = ['practice', 'session', 'train', 'drill', 'תרגול', 'לתרגל', 'סשן', 'אימון'] as const
const WEAK_WORDS = ['weak', 'improve', 'worst', 'struggle', 'חלש', 'לשפר', 'קשה לי', 'לא בטוח', 'לא בטוחה', 'מתקשה'] as const
const HELP_WORDS = ['help', 'hi', 'hello', 'hey', 'what can you', 'עזרה', 'שלום', 'היי', 'מה אתה יודע', 'מה את יודעת'] as const

/* Short forms people actually type. Multi-word names need their first word here. */
const COMPANY_ALIASES: Record<string, string[]> = {
  elbit: ['elbit', 'אלביט'],
  nvidia: ['אנבידיה', 'אנווידיה'],
  checkpoint: ['checkpoint', 'check point', 'צק פוינט', 'צקפוינט'],
  'palo-alto': ['palo alto', 'פאלו'],
  iai: ['iai', 'aerospace', 'תעשייה אווירית', 'תעש'],
  monday: ['monday', 'מאנדיי', 'מאנדי'],
}

const ROLE_ALIASES: Record<string, string[]> = {
  embedded: ['embedded', 'firmware', 'אמבדד', 'קושחה'],
  software: ['software developer', 'software engineer', 'מפתח תוכנה', 'מפתחת תוכנה', 'תוכנה'],
  backend: ['backend', 'בקאנד', 'בק אנד'],
  frontend: ['frontend', 'פרונט'],
  fullstack: ['full stack', 'fullstack', 'פולסטאק'],
  devops: ['devops', 'דבאופס'],
  data: ['data engineer', 'ml engineer', 'דאטה', 'machine learning'],
  qa: ['qa', 'automation', 'אוטומציה'],
  helpdesk: ['help desk', 'helpdesk', 'it support', 'תמיכה'],
  sysadmin: ['sysadmin', 'system admin', 'מנהל מערכות', 'מנהלת מערכות'],
  security: ['security analyst', 'cyber', 'אבטחת מידע', 'סייבר'],
  student: ['student', 'intern', 'סטודנט', 'מתמחה'],
}


/** Both sides go through `normalise`, so apostrophes and dashes never break a match. */
function mentions(message: string, names: string[]): boolean {
  return names.some((name) => {
    const needle = normalise(name)
    return needle.length > 0 && message.includes(needle)
  })
}

function findCompany(message: string): Company | undefined {
  return getCompanies().find((company) =>
    mentions(message, [company.name.en, company.name.he, ...(COMPANY_ALIASES[company.id] ?? [])]),
  )
}

function findRole(message: string): Role | undefined {
  return getRoles().find((role) => mentions(message, [role.name.en, role.name.he, ...(ROLE_ALIASES[role.id] ?? [])]))
}

function findTopic(message: string, messageTokens: string[]): Topic | undefined {
  return getTopics().find((topic) => {
    const aliases = [topic.name.en, topic.name.he, ...(TOPIC_ALIASES[topic.id] ?? [])].map((a) => a.toLowerCase())
    return aliases.some((alias) =>
      alias.includes(' ') || alias.length > 2
        ? message.includes(alias) || messageTokens.some((token) => tokenMatches(token, alias))
        : messageTokens.some((token) => token === alias),
    )
  })
}

/** Best matching question by token overlap with its text in either language. */
function findQuestion(messageTokens: string[]): Question | undefined {
  let best: { question: Question; score: number } | undefined
  for (const question of getQuestions()) {
    const questionTokens = [...new Set([...tokens(question.text.en), ...tokens(question.text.he)])]
    const score = questionTokens.filter((qt) => messageTokens.some((mt) => tokenMatches(mt, qt))).length
    if (score > 0 && (!best || score > best.score)) best = { question, score }
  }
  if (!best) return undefined
  // A one-word message that hits ("deadlock") is enough; longer messages must overlap on two words.
  const needed = Math.min(2, messageTokens.length)
  return best.score >= needed ? best.question : undefined
}

// ---------- Reply builders ----------

function listQuestions(questions: Question[], language: Language, limit = 6): string {
  const lines = questions.slice(0, limit).map((question) => `• ${question.text[language]}`)
  if (questions.length > limit) lines.push(R[language].andMore(questions.length - limit))
  return lines.join('\n')
}

function topicNames(ids: Topic['id'][], language: Language): string {
  const topics = getTopicMap()
  return ids
    .map((id) => topics.get(id)?.name[language])
    .filter((name): name is string => Boolean(name))
    .join(', ')
}

function companyReply(company: Company, message: string, language: Language, context: AssistantContext): AssistantReply {
  const r = R[language]
  const name = company.name[language]
  const asked = getQuestionsAskedAtCompany(context.interviews, company.id)
  const interviewCount = context.interviews.filter((interview) => interview.companyId === company.id).length
  const links = [{ label: r.companyPage, to: `/companies/${company.id}` }]
  const wantsQuestions = containsAny(message, QUESTION_WORDS) && !containsAny(message, ABOUT_WORDS)

  if (wantsQuestions && asked.length > 0) {
    return { text: `${r.askedAt(name, asked.length, interviewCount)}\n${listQuestions(asked, language)}`, links }
  }
  const intro = asked.length === 0 && wantsQuestions ? `${r.nothingAt(name)}\n\n` : ''
  return {
    text: `${intro}${company.about[language]}\n\n${r.expect}: ${company.tips[language]}\n${r.focus}: ${topicNames(company.focusTopicIds, language)}.`,
    links,
  }
}

function roleReply(role: Role, language: Language, context: AssistantContext): AssistantReply {
  const r = R[language]
  const questions = getQuestions().filter((question) => question.roleIds.includes(role.id))
  const coding = questions.filter((question) => question.type === 'coding').length
  const ranked = getCompanies()
    .map((company) => ({
      company,
      count: getQuestionsAskedAtCompany(context.interviews, company.id).filter((q) => q.roleIds.includes(role.id)).length,
    }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
  const companies = ranked.map((entry) => `${entry.company.name[language]} (${entry.count})`).join(', ')
  const text = [
    r.prepare(role.name[language], topicNames(role.focusTopicIds, language), questions.length, coding),
    companies ? r.topCompanies(companies) : '',
  ]
    .filter(Boolean)
    .join('\n')
  return {
    text,
    links: [
      { label: r.openPractice, to: '/practice' },
      { label: r.openCompanies, to: '/companies' },
    ],
  }
}

function topicReply(topic: Topic, language: Language, context: AssistantContext): AssistantReply {
  const r = R[language]
  const all = getQuestions().filter((question) => question.topicId === topic.id)
  const forRole = context.roleId ? all.filter((question) => question.roleIds.includes(context.roleId ?? '')) : all
  const questions = forRole.length > 0 ? forRole : all
  const name = topic.name[language]
  const links = [{ label: r.openBank, to: `/questions?topic=${topic.id}` }]
  if (questions.length === 0) return { text: r.topicEmpty(name), links }
  return { text: `${r.topicList(name, questions.length)}\n${listQuestions(questions, language)}`, links }
}

function questionReply(question: Question, language: Language): AssistantReply {
  const r = R[language]
  const parts = [question.text[language], '', question.answer ? question.answer[language] : '']
  if (question.codeSolutions?.length) parts.push('', r.hasSolutions)
  else if (question.codeExamples?.length) parts.push('', r.hasExample)
  return { text: parts.join('\n').trim(), links: [{ label: r.questionPage, to: `/questions/${question.id}` }] }
}

function practiceReply(language: Language): AssistantReply {
  const r = R[language]
  return {
    text: r.practice,
    links: [
      { label: r.quick, to: '/practice?plan=quick' },
      { label: r.standard, to: '/practice?plan=standard' },
      { label: r.full, to: '/practice?plan=full' },
    ],
  }
}

function weakReply(language: Language, context: AssistantContext): AssistantReply {
  const r = R[language]
  const all = getQuestions()
  // What the user flagged during practice comes first, then the static low-confidence ones.
  const flagged = all.filter((question) => {
    const rating = context.latestRatings[question.id]
    return rating === 'again' || rating === 'hard'
  })
  const flaggedIds = new Set(flagged.map((question) => question.id))
  const low = all.filter(
    (question) =>
      !flaggedIds.has(question.id) &&
      question.confidence === 'low' &&
      (!context.roleId || question.roleIds.includes(context.roleId)),
  )
  const questions = [...flagged, ...low]
  const links = flagged.length > 0
    ? [
        { label: r.reviewSession, to: '/practice?plan=review' },
        { label: r.lowConfidence, to: '/questions?flagged=1' },
      ]
    : [{ label: r.lowConfidence, to: '/questions?confidence=low' }]
  if (questions.length === 0) return { text: r.weakEmpty, links }
  return { text: `${r.weak(Math.min(questions.length, 6))}\n${listQuestions(questions, language)}`, links }
}

// ---------- Entry point ----------

export function askAssistant(rawMessage: string, context: AssistantContext): AssistantReply {
  const language = detectLanguage(rawMessage, context.uiLanguage)
  const r = R[language]
  const message = normalise(rawMessage)
  const messageTokens = tokens(rawMessage)

  if (message.length < 2) return { text: r.help }

  const company = findCompany(message)
  if (company) return companyReply(company, message, language, context)

  if (containsAny(message, PRACTICE_WORDS)) return practiceReply(language)
  if (containsAny(message, WEAK_WORDS)) return weakReply(language, context)

  const role = findRole(message)
  if (role && (containsAny(message, PREPARE_WORDS) || !containsAny(message, QUESTION_WORDS))) {
    return roleReply(role, language, context)
  }

  const topic = findTopic(message, messageTokens)
  if (topic && (containsAny(message, QUESTION_WORDS) || messageTokens.length <= 2)) {
    return topicReply(topic, language, context)
  }

  const question = findQuestion(messageTokens)
  if (question) return questionReply(question, language)

  if (topic) return topicReply(topic, language, context)
  if (role) return roleReply(role, language, context)
  if (containsAny(message, HELP_WORDS) || messageTokens.length === 0) return { text: r.help }

  return { text: r.fallback }
}

/** Used by the panel to resolve the role name for the header, if any. */
export function describeRole(roleId: Role['id'] | null, language: Language): string | null {
  const role = roleId ? getRole(roleId) : undefined
  return role ? role.name[language] : null
}

/** Exposed for the panel's "open company" links when a company is mentioned. */
export function companyName(id: Company['id'], language: Language): string {
  return getCompany(id)?.name[language] ?? id
}
