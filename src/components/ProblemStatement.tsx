import type { ProblemDetails } from '../types'
import { useTranslation } from '../i18n/useTranslation'
import { textDirection } from '../lib/utils'

/**
 * A long problem statement, laid out the way it appears in a real test:
 * description, rules, worked examples (input / output / why), constraints.
 */
export function ProblemStatement({ details }: { details: ProblemDetails }) {
  const { t, localize, language } = useTranslation()
  // Seed statements exist in both languages, so they follow the UI language (a Latin-only constraint still sits on the right in Hebrew).
  const direction = textDirection(false, language)

  return (
    <div className="space-y-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
      <p dir={direction}>{localize(details.description)}</p>

      {details.rules && details.rules.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('problem.rules')}
          </h3>
          <ul className="mt-2 list-disc space-y-1 ps-5">
            {details.rules.map((rule, index) => (
              <li key={index} dir={direction}>
                {localize(rule)}
              </li>
            ))}
          </ul>
        </section>
      )}

      {details.examples && details.examples.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('problem.examples')}
          </h3>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {details.examples.map((example, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60"
              >
                <dl className="space-y-2">
                  <div>
                    <dt className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                      {t('problem.input')}
                    </dt>
                    <dd dir="ltr" className="mt-0.5 font-mono text-[13px] whitespace-pre-wrap text-slate-800 dark:text-slate-100">
                      {example.input}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                      {t('problem.output')}
                    </dt>
                    <dd dir="ltr" className="mt-0.5 font-mono text-[13px] whitespace-pre-wrap text-slate-800 dark:text-slate-100">
                      {example.output}
                    </dd>
                  </div>
                  {example.explanation && (
                    <div>
                      <dt className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                        {t('problem.explanation')}
                      </dt>
                      <dd dir={direction} className="mt-0.5 text-sm">
                        {localize(example.explanation)}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            ))}
          </div>
        </section>
      )}

      {details.constraints && details.constraints.length > 0 && (
        <section>
          <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('problem.constraints')}
          </h3>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-sm">
            {details.constraints.map((constraint, index) => (
              <li key={index} dir={direction}>
                {localize(constraint)}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
