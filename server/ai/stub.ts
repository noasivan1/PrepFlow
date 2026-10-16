import type { CompletionRequest, TextProvider } from './provider.ts'

/**
 * Canned replies for development and tests, so the whole flow can be exercised
 * without any API key. `PREPFLOW_AI=stub` answers; `PREPFLOW_AI=fail` throws.
 * The prompt kind is detected from a marker each feature puts in its prompt.
 */
export function stubProvider(mode: 'stub' | 'fail'): TextProvider {
  return {
    name: 'stub',
    model: 'stub',
    async complete({ prompt }: CompletionRequest): Promise<string> {
      if (mode === 'fail') throw new Error('stub provider configured to fail')
      if (prompt.includes('[prepflow:evaluate-answer]')) {
        const hebrew = /language: he\b/.test(prompt)
        const weak = /candidate's answer:\s*(?:.|\n){0,40}?(idk|don't know|לא יודע)/i.test(prompt)
        return JSON.stringify(
          weak
            ? {
                score: 15,
                verdict: 'incorrect',
                strengths: [],
                missingPoints: hebrew ? ['התשובה לא מתייחסת לשאלה.'] : ['The answer does not address the question.'],
                incorrectPoints: [],
                feedback: hebrew ? '(stub) נסו לנסח את הרעיון המרכזי במשפט אחד ואז להרחיב.' : '(stub) Try to state the core idea in one sentence, then expand.',
                improvedAnswer: hebrew ? '(stub) ראו את התשובה המומלצת.' : '(stub) See the recommended answer.',
              }
            : {
                score: 72,
                verdict: 'mostly_correct',
                strengths: hebrew ? ['הרעיון המרכזי נכון.', 'הניסוח ברור.'] : ['The core idea is right.', 'Clear wording.'],
                missingPoints: hebrew ? ['לא צוינה סיבוכיות הזמן.'] : ['Time complexity was not stated.'],
                incorrectPoints: [],
                feedback: hebrew
                  ? '(stub) תשובה טובה; הוסיפו את הסיבוכיות ודוגמה קצרה כדי להשלים אותה.'
                  : '(stub) Good answer; add the complexity and a short example to complete it.',
                improvedAnswer: hebrew
                  ? '(stub) התשובה המשופרת תכלול את הרעיון, את הסיבוכיות ודוגמה.'
                  : '(stub) The improved answer states the idea, its complexity and one example.',
              },
        )
      }
      // Question generation: two canned questions in the expected shape.
      return JSON.stringify([
        {
          text_en: '(stub) Parse a log file and report the top 3 error codes.',
          text_he: '(stub) נתחו קובץ לוג והחזירו את 3 קודי השגיאה הנפוצים.',
          type: 'coding',
          topic: 'python',
          difficulty: 'easy',
          likelihood: 'high',
          why_en: 'Log parsing in Python comes up in almost every verification screening.',
          why_he: 'ניתוח לוגים ב-Python מופיע כמעט בכל סינון לוריפיקציה.',
          answer_en: 'Stream the file, count codes in a dict, take the three largest with heapq.nlargest. O(n).',
          answer_he: 'קוראים את הקובץ בזרימה, סופרים קודים ב-dict ולוקחים את השלושה הגדולים עם heapq.nlargest. O(n).',
          code: {
            language: 'python',
            code: 'from collections import Counter\n\ndef top_errors(path, k=3):\n    counts = Counter()\n    with open(path) as f:\n        for line in f:\n            if " ERROR " in line:\n                counts[line.split()[3]] += 1\n    return counts.most_common(k)',
          },
        },
        {
          text_en: '(stub) What happens when a TCP segment is lost?',
          text_he: '(stub) מה קורה כשסגמנט TCP הולך לאיבוד?',
          type: 'conceptual',
          topic: 'networking',
          difficulty: 'medium',
          likelihood: 'medium',
          why_en: 'Networking fundamentals are listed in the requirements.',
          why_he: 'יסודות רשתות מופיעים בדרישות.',
          answer_en: 'The receiver keeps acknowledging the last in-order byte; duplicate ACKs or a retransmission timeout trigger a resend and congestion control slows down.',
          answer_he: 'המקבל ממשיך לאשר את הבייט האחרון שהגיע בסדר; ACK-ים כפולים או timeout גורמים לשידור חוזר ובקרת הגודש מאיטה.',
        },
      ])
    },
  }
}
