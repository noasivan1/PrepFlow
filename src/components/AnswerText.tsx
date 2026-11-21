import { cn } from '../lib/utils'
import { BidiText } from './BidiText'

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
// Short model answers stay one paragraph; only a long unbroken text (e.g. typed by the user) is split.
const LONG_ANSWER = 700

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

type Block = { kind: 'paragraph'; text: string } | { kind: 'list'; items: string[] }

/** Consecutive lines that start with "- " become one bulleted list; everything else stays a paragraph. */
function answerBlocks(paragraphs: string[]): Block[] {
  const blocks: Block[] = []
  for (const paragraph of paragraphs) {
    const item = /^[-•]\s+(.*)$/.exec(paragraph)
    const last = blocks[blocks.length - 1]
    if (item) {
      if (last?.kind === 'list') last.items.push(item[1])
      else blocks.push({ kind: 'list', items: [item[1]] })
    } else {
      blocks.push({ kind: 'paragraph', text: paragraph })
    }
  }
  return blocks
}

export function AnswerText({ text, dir, className }: AnswerTextProps) {
  const blocks = answerBlocks(answerParagraphs(text))
  return (
    <div dir={dir} className={cn('space-y-2', className)}>
      {blocks.map((block, index) =>
        block.kind === 'list' ? (
          <ul key={index} className="list-disc space-y-1 ps-5 marker:text-slate-400">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <BidiText text={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p key={index}>
            <BidiText text={block.text} />
          </p>
        ),
      )}
    </div>
  )
}
