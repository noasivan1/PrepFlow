import { Fragment } from 'react'

/**
 * Bracketed fragments with no Hebrew inside, such as `[1, 2, 4]` or `[[1,3],[2,6]]`.
 * One level of nesting is enough for the statements in the bank. A bracket that follows an
 * identifier (`nums[lo]`, `answer[i]`) is indexing, not a list: it already renders left-to-right
 * as part of the word, and isolating it would detach it from its name.
 */
const LTR_FRAGMENT = /(?<![\w\])])\[(?:[^[\]֐-׿]|\[[^[\]֐-׿]*\])*\]/g

/**
 * Text that may mix a right-to-left sentence with arrays or code. Inside a Hebrew
 * paragraph the bidi algorithm reverses `[1, 2, 4]` into `]4 ,2 ,1[`, so every bracketed
 * fragment is isolated and forced left-to-right while the sentence keeps its own direction.
 */
export function BidiText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(LTR_FRAGMENT)) {
    const start = match.index
    if (start > last) parts.push(text.slice(last, start))
    parts.push(
      <bdi key={start} dir="ltr">
        {match[0]}
      </bdi>,
    )
    last = start + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </>
  )
}
