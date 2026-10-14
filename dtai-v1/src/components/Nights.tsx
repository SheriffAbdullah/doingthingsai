import { pastEvents } from '../data/events'
import { LUMA_PROFILE_URL } from '../data/site'
import Reveal from './ui/Reveal'
import Tear from './ui/Tear'
import { ArrowUpRight } from './ui/Icons'

/** Edition column: the edition number leads each row; the rest stays a timetable. */
export default function Nights() {
  return (
    <section id="nights" aria-labelledby="nights-title" className="on-ink relative bg-ink text-paper section-pad">
      <Tear from="paper-2" />
      <div className="container-site">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="nights-title" className="display-lg">Past nights.</h2>
          <a
            href={LUMA_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow min-h-[44px] text-paper/70 hover:text-paper"
          >
            All on Luma
            <ArrowUpRight size={14} />
          </a>
        </Reveal>

        <Reveal as="ul" stagger className="mt-10 border-t hairline md:mt-16">
          {pastEvents.map((e) => (
            <li
              key={e.title}
              className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 border-b hairline py-5 md:grid-cols-[6rem_9rem_minmax(0,1fr)_minmax(0,16rem)] md:items-center md:gap-x-6"
            >
              {/* The title already carries the number; this column is visual. */}
              <span
                aria-hidden="true"
                className={`row-span-3 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em] md:row-span-1 ${
                  e.edition ? 'text-orange' : 'text-paper/35'
                }`}
              >
                {e.edition ? String(e.edition).padStart(2, '0') : '—'}
              </span>
              <h3 className="display-sm col-start-2 row-start-2 text-paper md:col-start-3 md:row-start-1">
                {e.title}
                {e.status === 'partner' && (
                  <span className="stamp ml-3 rotate-[-3deg] align-middle text-[0.6875rem] text-paper/80">Partner</span>
                )}
              </h3>
              <p className="meta col-start-2 row-start-1 text-paper/60 md:row-start-1">{e.dateLabel}</p>
              {(e.venue || e.area) && (
                <p className="col-start-2 row-start-3 text-sm text-paper/60 md:col-start-4 md:row-start-1 md:text-right">
                  {[e.venue, e.area].filter(Boolean).join(', ')}
                </p>
              )}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
