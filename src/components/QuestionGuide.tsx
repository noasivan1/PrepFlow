import type { ReactNode } from 'react'
import { Compass, Lightbulb, MessageSquareQuote, Star } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { cn, textDirection } from '../lib/utils'
import type { CodeLanguage, LocalizedText, Question } from '../types'
import { AnswerText } from './AnswerText'
import { BidiText } from './BidiText'
import { CodeSolutions } from './CodeSolutions'

const sectionLabel = 'text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400'
/** Body text of every box: compact on a phone, a step larger on wider screens. */
const bodyText = 'text-sm leading-relaxed sm:text-[15px]'

interface QuestionGuideProps {
  question: Question
  /** Heading above the model answer ("Recommended answer" in practice, "Answer" on the question page). */
  answerLabel: string
  preferredLanguage?: CodeLanguage | null
}

type Marker = 'number' | 'dot' | 'star'

function PointsBox({
  title,
  icon,
  points,
  marker,
  tone,
  dir,
}: {
  title: string
  icon: ReactNode
  points: LocalizedText[]
  marker: Marker
  tone: string
  dir: 'rtl' | 'ltr' | 'auto'
}) {
  const { localize } = useTranslation()
  const List = marker === 'number' ? 'ol' : 'ul'
  return (
    <section className={cn('rounded-xl border p-4', tone)}>
      <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
        {icon}
        {title}
      </p>
      <List
        dir={dir}
        className={cn(
          'mt-2 space-y-1.5 text-slate-700 rtl:text-right dark:text-slate-300',
          bodyText,
          marker === 'number' && 'list-decimal ps-5',
          marker === 'dot' && 'list-disc ps-5',
          marker === 'star' && 'space-y-2',
        )}
      >
        {points.map((point, index) =>
          marker === 'star' ? (
            <li key={index} className="flex gap-2">
              <Star aria-hidden className="mt-1 size-3.5 shrink-0 fill-amber-400 text-amber-400" />
              <span className="min-w-0">
                <BidiText text={localize(point)} />
              </span>
            </li>
          ) : (
            <li key={index}>
              <BidiText text={localize(point)} />
            </li>
          ),
        )}
      </List>
    </section>
  )
}

/**
 * Everything a question teaches once it is revealed, short first: for coding
 * questions how to approach the problem, then the answer to say out loud (one
 * or two paragraphs), a concrete example, what interviewers like to hear, the
 * optional extra depth in its own box, and the code.
 */
export function QuestionGuide({ question, answerLabel, preferredLanguage }: QuestionGuideProps) {
  const { t, localize, language } = useTranslation()
  const dir = textDirection(question.custom, language)
  const approach = question.approach ?? []
  const keyPoints = question.keyPoints ?? []
  const extras = question.extras ?? []

  return (
    <div className="space-y-4">
      {approach.length > 0 && (
        <PointsBox
          title={t('guide.approach')}
          icon={<Compass aria-hidden className="size-4" />}
          points={approach}
          marker="number"
          dir={dir}
          tone="border-indigo-100 bg-indigo-50/60 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
        />
      )}

      <section>
        <p className={sectionLabel}>{answerLabel}</p>
        <div className="mt-2 rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
          {question.answer ? (
            <AnswerText text={localize(question.answer)} dir={dir} className={cn('text-slate-800 dark:text-slate-200', bodyText)} />
          ) : (
            <p className={cn('text-slate-500 dark:text-slate-400', bodyText)}>{t('question.noAnswer')}</p>
          )}
          {question.example && (
            <div dir={dir} className="mt-3 flex gap-2 border-t border-slate-200/70 pt-3 dark:border-slate-700/70">
              <Lightbulb aria-hidden className="mt-0.5 size-4 shrink-0 text-sky-500" />
              <p className={cn('text-slate-700 dark:text-slate-300', bodyText)}>
                <span className="font-semibold text-sky-700 dark:text-sky-300">{t('guide.example')}: </span>
                <BidiText text={localize(question.example)} />
              </p>
            </div>
          )}
        </div>
      </section>

      {keyPoints.length > 0 && (
        <PointsBox
          title={t('guide.keyPoints')}
          icon={<MessageSquareQuote aria-hidden className="size-4" />}
          points={keyPoints}
          marker="dot"
          dir={dir}
          tone="border-emerald-100 bg-emerald-50/60 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
        />
      )}

      {extras.length > 0 && (
        <PointsBox
          title={t('guide.extras')}
          icon={<Star aria-hidden className="size-4" />}
          points={extras}
          marker="star"
          dir={dir}
          tone="border-amber-100 bg-amber-50/50 text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300"
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
