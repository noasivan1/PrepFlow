import { ChevronDown, Lightbulb } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import type { LocalizedText } from '../types'

/** How strong candidates work through any coding question, out loud. Same for every question. */
const STEPS: LocalizedText[] = [
  {
    en: 'Restate the problem in your own words and ask clarifying questions: input size, value ranges, duplicates, negative numbers, empty input, what to return when there is no answer.',
    he: 'נסחו את הבעיה במילים שלכם ושאלו שאלות הבהרה: גודל הקלט, טווח הערכים, כפילויות, מספרים שליליים, קלט ריק, ומה מחזירים כשאין תשובה.',
  },
  {
    en: 'Walk through one small example by hand, and one edge case. It proves you understood the task before writing anything.',
    he: 'עברו ידנית על דוגמה קטנה אחת ועל מקרה קצה אחד. זה מראה שהבנתם את המשימה לפני שכתבתם שורה.',
  },
  {
    en: 'Say the brute-force idea and its complexity first, even if you will not code it. Interviewers want to see the starting point.',
    he: 'אמרו קודם את הפתרון הנאיבי (brute force) ואת הסיבוכיות שלו, גם אם לא תכתבו אותו. מראיינים רוצים לראות את נקודת ההתחלה.',
  },
  {
    en: 'Find the bottleneck and name the tool that removes it: a hash map, two pointers, sorting, a stack, binary search, BFS/DFS, dynamic programming.',
    he: 'זהו מה מאט את הפתרון וקראו בשם לכלי שפותר את זה: hash map, שני מצביעים, מיון, מחסנית, חיפוש בינארי, BFS/DFS, תכנון דינמי.',
  },
  {
    en: 'Agree on the plan with the interviewer, then code it cleanly: meaningful names, small helper functions, and keep talking while you type.',
    he: 'סכמו את התוכנית עם המראיין, ורק אז כתבו קוד נקי: שמות משמעותיים, פונקציות עזר קטנות, והמשיכו לדבר תוך כדי כתיבה.',
  },
  {
    en: 'State time and space complexity in Big-O and explain where each term comes from.',
    he: 'ציינו סיבוכיות זמן וזיכרון ב-Big-O והסבירו מאיפה מגיע כל רכיב.',
  },
  {
    en: 'Test your code out loud: run the example line by line, then the edge cases (empty, one element, all equal, very large). Fix bugs calmly; finding your own bug is a plus.',
    he: 'בדקו את הקוד בקול: הריצו את הדוגמה שורה אחר שורה, ואז את מקרי הקצה (ריק, איבר אחד, כולם שווים, קלט גדול מאוד). תקנו באגים ברוגע; למצוא באג בעצמכם זה יתרון.',
  },
]

/** A collapsible checklist shown above the editor of every coding question. */
export function CodingInterviewTips() {
  const { t, localize, language } = useTranslation()
  return (
    <details className="group mt-3 rounded-xl border border-indigo-100 bg-white dark:border-indigo-500/20 dark:bg-slate-900/60">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-indigo-700 dark:text-indigo-300">
        <Lightbulb aria-hidden className="size-4 shrink-0" />
        <span className="flex-1">{t('guide.codingTips')}</span>
        <ChevronDown aria-hidden className="size-4 shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <ol
        dir={language === 'he' ? 'rtl' : 'ltr'}
        className="list-decimal space-y-1.5 border-t border-indigo-100 px-3.5 py-3 ps-8 text-sm leading-relaxed text-slate-700 dark:border-indigo-500/20 dark:text-slate-300"
      >
        {STEPS.map((step, index) => (
          <li key={index}>{localize(step)}</li>
        ))}
      </ol>
    </details>
  )
}
