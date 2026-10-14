import { pastEvents } from '../data/events'
import { LUMA_PROFILE_URL } from '../data/site'
import Reveal from './ui/Reveal'
import { ArrowUpRight } from './ui/Icons'

export default function Nights() {
  return (
    <section id="nights" aria-labelledby="nights-title" className="on-ink bg-ink text-paper section-pad">
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

        <Reveal as="ul" className="mt-16 border-t hairline" delay={0.05}>
          {pastEvents.map((e) => (
            <li
              key={e.title}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 border-b hairline py-5 md:grid-cols-[9rem_minmax(0,1fr)_minmax(0,16rem)] md:py-6"
            >
              <h3 className="display-sm text-paper md:order-2">
                {e.title}
                {e.status === 'partner' && <span className="meta ml-3 align-middle text-paper/60">Partner</span>}
              </h3>
              <p className="meta text-paper/60 md:order-1">{e.dateLabel}</p>
              <p className="col-span-2 text-sm text-paper/60 md:order-3 md:col-span-1 md:text-right">
                {[e.venue, e.area].filter(Boolean).join(', ')}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
