import { useMemo } from 'react'
import type { Catalog } from '../data/catalog'
import { targetFocusTopics } from '../data/requirements'
import type { Interview, LatestRatings, PracticePreferences, Role, TargetInterview, Topic } from '../types'
import { useCatalog } from './catalog-context'
import { useUserData } from './user-data-context'

export interface PracticeContext {
  /** The role to practise for: the next interview's role, else the account's role. */
  roleId: Role['id'] | null
  /** Effective preferences: what the user set explicitly, with the next interview filling the gaps. */
  prefs: PracticePreferences
  /** Topics from the next interview: its languages plus what its requirements mention. */
  boostTopicIds: Topic['id'][]
  latestRatings: LatestRatings
  interviews: Interview[]
  nextTarget: TargetInterview | null
  /** Which parts of `prefs` came from the next interview rather than from the user's own choice. */
  fromTarget: { languages: boolean; company: boolean }
  /** The catalog the session is built from; part of the context so memos recompute when content changes. */
  catalog: Catalog
}

/**
 * One place that decides what practice and predictions adapt to. The soonest
 * upcoming interview is the source of truth for the role and the topics; the
 * "Tailor to the interview" card can still override languages, emphasis and
 * company, and "Reset" hands control back to the interview.
 */
export function usePracticeContext(): PracticeContext {
  const { roleId, practicePrefs, latestRatings, nextTarget } = useUserData()
  const { interviews, catalog } = useCatalog()

  return useMemo(() => {
    if (!nextTarget) {
      return {
        roleId,
        prefs: practicePrefs,
        boostTopicIds: [],
        latestRatings,
        interviews,
        nextTarget: null,
        fromTarget: { languages: false, company: false },
        catalog,
      }
    }
    const useTargetLanguages = practicePrefs.languages.length === 0 && nextTarget.languages.length > 0
    const useTargetCompany = practicePrefs.companyId === null && nextTarget.companyId !== null
    return {
      roleId: nextTarget.roleId,
      prefs: {
        languages: useTargetLanguages ? nextTarget.languages : practicePrefs.languages,
        emphasis: practicePrefs.emphasis,
        companyId: useTargetCompany ? nextTarget.companyId : practicePrefs.companyId,
      },
      boostTopicIds: targetFocusTopics(nextTarget),
      latestRatings,
      interviews,
      nextTarget,
      fromTarget: { languages: useTargetLanguages, company: useTargetCompany },
      catalog,
    }
  }, [roleId, practicePrefs, latestRatings, interviews, nextTarget, catalog])
}
