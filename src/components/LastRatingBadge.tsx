import type { BadgeTone, PracticeRating, Question } from '../types'
import { useTranslation } from '../i18n/useTranslation'
import { useUserData } from '../state/user-data-context'
import { Badge } from './ui/Badge'

const ratingTone: Record<PracticeRating, BadgeTone> = {
  again: 'rose',
  hard: 'amber',
  okay: 'sky',
  easy: 'emerald',
}

/** The user's latest practice rating for a question, or nothing if never rated. */
export function LastRatingBadge({ questionId }: { questionId: Question['id'] }) {
  const { t } = useTranslation()
  const { latestRatings } = useUserData()
  const rating = latestRatings[questionId]
  if (!rating) return null
  return (
    <Badge tone={ratingTone[rating]} dot title={t('rating.last', { rating: t(`rating.${rating}`) })}>
      {t(`rating.${rating}`)}
    </Badge>
  )
}
