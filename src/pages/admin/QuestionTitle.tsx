import { BidiText } from '../../components/BidiText'
import { getQuestion } from '../../data/queries'
import { useTranslation } from '../../i18n/useTranslation'
import type { Question } from '../../types'

/** A question's title by id: from the shared bank, or from the user's own questions when they are given. */
export function QuestionTitle({ id, own = [] }: { id: string; own?: Question[] }) {
  const { t, localize } = useTranslation()
  const question = getQuestion(id) ?? own.find((item) => item.id === id)
  if (!question) return <span className="text-slate-500 dark:text-slate-400">{t('admin.ownQuestion')}</span>
  return <BidiText text={localize(question.text)} />
}
