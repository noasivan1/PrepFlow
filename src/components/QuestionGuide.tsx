import { Compass, MessageSquareQuote } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { textDirection } from '../lib/utils'
import type { CodeLanguage, LocalizedText, Question } from '../types'
import { AnswerText } from './AnswerText'
import { BidiText } from './BidiText'
import { CodeSolutions } from './CodeSolutions'

const sectionLabel = 'text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400'

interface QuestionGuideProps {
  question: Question
  /** Heading above the model answer ("Recommended answer" in practice, "Answer" on the question page). */
  answerLabel: string
  preferredLanguage?: CodeLanguage | null
}

function PointsBox({
  title,
  icon,
  points,
  ordered,
  tone,
  dir,
}: {
  title: string
  icon: React.ReactNode
  points: LocalizedText[]
  ordered?: boolean
  tone: string
  dir: 'rtl' | 'ltr' | 'auto'
}) {
  const { localize } = useTranslation()
  const List = ordered ? 'ol' : 'ul'
  return (
    <section className={`rounded-xl border p-4 sm:p-5 ${tone}`}>
      <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
        {icon}
        {title}
      </p>
      <List
        dir={dir}
        className={`mt-2 space-y-1.5 ps-5 text-[15px] leading-relaxed text-slate-700 rtl:text-right dark:text-slate-300 ${ordered ? 'list-decimal' : 'list-disc'}`}
      >
        {points.map((point, index) => (
          <li key={index}>
            <BidiText text={localize(point)} />
          </li>
        ))}
      </List>
    </section>
  )
}

/**
 * Everything a question teaches once it is revealed, in the order an
 * interviewer would want it: for coding questions how to approach the problem
 * first, then the model answer, what interviewers like to hear, and the code.
 */
export function QuestionGuide({ question, answerLabel, preferredLanguage }: QuestionGuideProps) {
  const { t, localize, language } = useTranslation()
  const dir = textDirection(question.custom, language)
  const approach = question.approach ?? []
  const keyPoints = question.keyPoints ?? []

  return (
    <div className="space-y-5">
      {approach.length > 0 && (
        <PointsBox
          title={t('guide.approach')}
          icon={<Compass aria-hidden className="size-4" />}
          points={approach}
          ordered
          dir={dir}
          tone="border-indigo-100 bg-indigo-50/60 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
        />
      )}

      <section>
        <p className={sectionLabel}>{answerLabel}</p>
        {question.answer ? (
          <AnswerText
            text={localize(question.answer)}
            dir={dir}
            className="mt-2 rounded-xl border border-slate-100 bg-slate-50 p-4 text-[15px] leading-relaxed text-slate-700 sm:p-5 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
          />
        ) : (
          <p className="mt-2 rounded-xl border border-slate-100 bg-slate-50 p-4 text-[15px] text-slate-500 sm:p-5 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
            {t('question.noAnswer')}
          </p>
        )}
      </section>

      {keyPoints.length > 0 && (
        <PointsBox
          title={t('guide.keyPoints')}
          icon={<MessageSquareQuote aria-hidden className="size-4" />}
          points={keyPoints}
          dir={dir}
          tone="border-emerald-100 bg-emerald-50/60 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
        />
      )}

      {question.codeSolutions && question.codeSolutions.length > 0 && (
        <section>
          <p className={sectionLabel}>{t('question.solutions')}</p>
          <div className="mt-2">
            <CodeSolutions snippets={question.codeSolutions} preferred={preferredLanguage} />
          </div>
        </section>
      )}

      {question.codeExamples && question.codeExamples.length > 0 && (
        <section>
          <p className={sectionLabel}>{t('question.examples')}</p>
          <div className="mt-2">
            <CodeSolutions snippets={question.codeExamples} preferred={preferredLanguage} />
          </div>
        </section>
      )}
    </div>
  )
}
