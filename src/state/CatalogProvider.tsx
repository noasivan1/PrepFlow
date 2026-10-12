import { useCallback, useMemo, type ReactNode } from 'react'
import { buildCatalog, setActiveCatalog } from '../data/catalog'
import type { Interview } from '../types'
import { CatalogContext, type CatalogContextValue } from './catalog-context'
import { useUserData } from './user-data-context'

/**
 * Merges the seed content with the signed-in user's own questions and
 * interviews, and publishes the result both through context (for memo
 * dependencies) and to `catalog.ts` (so `queries.ts` returns the same data).
 * Adding, editing or deleting content goes through `useUserData()`; this
 * provider only derives the merged view.
 */
export function CatalogProvider({ children }: { children: ReactNode }) {
  const { userQuestions, userInterviews } = useUserData()

  const catalog = useMemo(() => {
    const built = buildCatalog(userQuestions, userInterviews)
    // Published while rendering, before any child renders, so pages that call
    // `getQuestions()` during their own render see exactly this catalog.
    setActiveCatalog(built)
    return built
  }, [userQuestions, userInterviews])

  const getInterview = useCallback(
    (id: Interview['id']) => catalog.interviews.find((interview) => interview.id === id),
    [catalog],
  )

  const value = useMemo<CatalogContextValue>(
    () => ({ questions: catalog.questions, interviews: catalog.interviews, catalog, getInterview }),
    [catalog, getInterview],
  )

  return <CatalogContext value={value}>{children}</CatalogContext>
}
