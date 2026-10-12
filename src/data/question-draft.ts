import type { Question, QuestionDraft, Role, Topic } from '../types'

/** A blank question, tagged with the given role and topic so it lands in the right place. */
export function emptyQuestionDraft(roleId: Role['id'] | null, topicId: Topic['id'] = 'algorithms'): QuestionDraft {
  return {
    text: '',
    topicId,
    roleIds: roleId ? [roleId] : [],
    type: 'conceptual',
    difficulty: 'medium',
    answer: '',
    codeSolutions: [{ language: 'python', code: '' }],
  }
}

/** The editable form of an existing question (user-created questions hold the same text in both languages). */
export function draftFromQuestion(question: Question): QuestionDraft {
  return {
    text: question.text.en,
    topicId: question.topicId,
    roleIds: question.roleIds,
    type: question.type,
    difficulty: question.difficulty,
    answer: question.answer?.en ?? '',
    codeSolutions: question.codeSolutions?.length ? question.codeSolutions : [{ language: 'python', code: '' }],
  }
}

/** Trims the text and drops an empty code block before saving. */
export function finaliseQuestionDraft(draft: QuestionDraft): QuestionDraft {
  const codeSolutions = (draft.codeSolutions ?? []).filter((snippet) => snippet.code.trim() !== '')
  return {
    ...draft,
    text: draft.text.trim(),
    answer: draft.answer?.trim() || undefined,
    codeSolutions: codeSolutions.length > 0 ? codeSolutions : undefined,
  }
}
