import type { Interview, Question } from '../types'
import { interviews as seedInterviews, questions as seedQuestions } from './mock'

/**
 * Everything the pages read as "the data": the seed content that ships with the
 * app merged with what the signed-in user created. `CatalogProvider` builds it
 * from the account and publishes it here, so the plain functions in
 * `queries.ts` (used from React and from plain modules alike) see the same list.
 */
export interface Catalog {
  /** The user's own questions first, then the seed questions. */
  questions: Question[]
  /** The user's own interviews (newest first), then the sample interviews. */
  interviews: Interview[]
}

const SAMPLE_INTERVIEWS: Interview[] = seedInterviews.map((interview) => ({ ...interview, sample: true }))

export function buildCatalog(userQuestions: Question[], userInterviews: Interview[]): Catalog {
  const own = [...userInterviews].sort((a, b) => b.date.localeCompare(a.date))

  // "Asked N times" counts the user's interviews too, not only the seed ones.
  const askedInOwn = new Map<Question['id'], number>()
  for (const interview of own) {
    for (const id of interview.questionIds) askedInOwn.set(id, (askedInOwn.get(id) ?? 0) + 1)
  }

  const customQuestions = userQuestions.map<Question>((question) => ({
    ...question,
    custom: true,
    timesAsked: askedInOwn.get(question.id) ?? 0,
  }))
  const questions = seedQuestions.map<Question>((question) => {
    const extra = askedInOwn.get(question.id) ?? 0
    return extra > 0 ? { ...question, timesAsked: question.timesAsked + extra } : question
  })

  return { questions: [...customQuestions, ...questions], interviews: [...own, ...SAMPLE_INTERVIEWS] }
}

let active: Catalog = buildCatalog([], [])

/** Called by CatalogProvider while it renders, before any page reads data. */
export function setActiveCatalog(catalog: Catalog): void {
  active = catalog
}

export function activeCatalog(): Catalog {
  return active
}
