import type { Company, Interview, Question, Role, Topic } from '../types'
import { activeCatalog } from './catalog'
import { companies, roles, topics } from './mock'

/**
 * Data access layer. Topics, roles and companies are static (they live in
 * `mock.ts`); questions and interviews come from the active catalog, which is
 * the seed content merged with what the signed-in user created (see
 * `catalog.ts` and `CatalogProvider`).
 *
 * Functions that take `interviews` as a parameter are pure helpers: pages pass
 * the current list from `useCatalog()`.
 */

// ---------- Topics ----------

export function getTopics(): Topic[] {
  return topics
}

export function getTopicMap(): Map<Topic['id'], Topic> {
  return new Map(topics.map((topic) => [topic.id, topic]))
}

// ---------- Roles ----------

export function getRoles(): Role[] {
  return roles
}

export function getRole(id: Role['id']): Role | undefined {
  return roles.find((role) => role.id === id)
}

// ---------- Companies ----------

export function getCompanies(): Company[] {
  return companies
}

export function getCompany(id: Company['id']): Company | undefined {
  return companies.find((company) => company.id === id)
}

// ---------- Questions ----------

export function getQuestions(): Question[] {
  return activeCatalog().questions
}

export function getQuestion(id: Question['id']): Question | undefined {
  return activeCatalog().questions.find((question) => question.id === id)
}

export function getQuestionsByIds(ids: Question['id'][]): Question[] {
  const byId = new Map(activeCatalog().questions.map((question) => [question.id, question]))
  return ids.flatMap((id) => {
    const question = byId.get(id)
    return question ? [question] : []
  })
}

/** Questions tagged as relevant for a role. With no role, everything. */
export function getQuestionsForRole(roleId: Role['id'] | null): Question[] {
  const questions = activeCatalog().questions
  if (!roleId) return questions
  return questions.filter((question) => question.roleIds.includes(roleId))
}

// ---------- Derived: questions per company ----------

/** Unique questions asked in any interview at this company, most recent interview first. */
export function getQuestionsAskedAtCompany(allInterviews: Interview[], companyId: Company['id']): Question[] {
  const ids = [...allInterviews]
    .filter((interview) => interview.companyId === companyId)
    .sort((a, b) => b.date.localeCompare(a.date))
    .flatMap((interview) => interview.questionIds)
  return getQuestionsByIds([...new Set(ids)])
}

export interface CompanyStats {
  /** Questions asked here that are relevant to the role (all, if no role). */
  questionCount: number
  interviewCount: number
}

export function getCompanyStats(
  allInterviews: Interview[],
  companyId: Company['id'],
  roleId: Role['id'] | null,
): CompanyStats {
  const asked = getQuestionsAskedAtCompany(allInterviews, companyId)
  const relevant = roleId ? asked.filter((question) => question.roleIds.includes(roleId)) : asked
  return {
    questionCount: relevant.length,
    interviewCount: allInterviews.filter((interview) => interview.companyId === companyId).length,
  }
}

/** Interviews in which a question was asked, most recent first. */
export function getInterviewsForQuestion(allInterviews: Interview[], questionId: Question['id']): Interview[] {
  return [...allInterviews]
    .filter((interview) => interview.questionIds.includes(questionId))
    .sort((a, b) => b.date.localeCompare(a.date))
}
