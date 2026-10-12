import { cn } from '../lib/utils'

type Direction = 'auto' | 'rtl' | 'ltr'

interface AnswerTextProps {
  text: string
  /** Explicit direction for seed content (Hebrew answers start with Latin terms often enough that "auto" guesses wrong). */
  dir: Direction
  className?: string
}

/** Abbreviations after which a period does not end a sentence. */
const ABBREVIATION = /(?:e\.g|i\.e|vs|etc|approx|cf)\.$/i
const SHORT = 30
const LONG_ANSWER = 240

/**
 * Splits an answer into readable paragraphs. Explicit line breaks win; a long
 * single-paragraph answer is split into sentences, and fragments that are too
 * short to stand alone (like "O(log n).") are glued to their neighbour.
 */
function answerParagraphs(text: string): string[] {
  const trimmed = text.trim()
  if (trimmed.includes('\n')) {
    return trimmed
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
  }
  if (trimmed.length < LONG_ANSWER) return [trimmed]

  const pieces = trimmed.split(/(?<=[.!?])\s+(?=[A-Zא-ת0-9"'(])/)
  const sentences: string[] = []
  for (const piece of pieces) {
    const previous = sentences[sentences.length - 1]
    if (previous !== undefined && (ABBREVIATION.test(previous) || previous.length < SHORT)) {
      sentences[sentences.length - 1] = `${previous} ${piece}`
    } else {
      sentences.push(piece)
    }
  }
  return sentences
}

export function AnswerText({ text, dir, className }: AnswerTextProps) {
  const paragraphs = answerParagraphs(text)
  return (
    <div dir={dir} className={cn('space-y-2', className)}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}
