import { createContext, useContext } from 'react'
import type { Catalog } from '../data/catalog'
import type { Interview, Question } from '../types'

export interface CatalogContextValue {
  /** The user's own questions first, then the seed questions. */
  questions: Question[]
  /** The user's own interviews (newest first), then the sample interviews (`sample: true`). */
  interviews: Interview[]
  /** The whole catalog object; changes identity whenever the content changes, so it works as a memo dependency. */
  catalog: Catalog
  getInterview: (id: Interview['id']) => Interview | undefined
}

export const CatalogContext = createContext<CatalogContextValue | null>(null)

export function useCatalog(): CatalogContextValue {
  const context = useContext(CatalogContext)
  if (!context) {
    throw new Error('useCatalog must be used inside <CatalogProvider>')
  }
  return context
}
