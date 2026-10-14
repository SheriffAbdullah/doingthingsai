import { pastEvents, upcomingEvent, type CommunityEvent } from '../data/events'
import { CTA_LABEL, LUMA_EVENT_URL, LUMA_PROFILE_URL } from '../data/site'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { ArrowUpRight } from './ui/Icons'

function Status({ e }: { e: CommunityEvent }) {
  if (e.status === 'upcoming') return <span className="stamp !rotate-0 text-[0.68rem] text-orange">Next</span>
  if (e.status === 'partner') return <span className="meta text-paper/60">Partner</span>
  return <span className="meta text-paper/60">Done</span>
}

function Row({ e }: { e: CommunityEvent }) {
  const where = [e.venue, e.area].filter(Boolean).join(', ')
  return (
    <li className="grid grid-cols-[3.25rem_1fr_auto] items-start gap-x-4 gap-y-2 border-b hairline py-5 lg:grid-cols-[4rem_9rem_minmax(0,1fr)_minmax(0,14rem)_4.5rem] lg:items-center lg:gap-x-6">
      <div className="photo row-span-3 h-[3.25rem] w-[3.25rem] shrink-0 bg-ink-2 lg:row-span-1 lg:h-16 lg:w-16">
        {e.poster ? (
          <img src={e.poster} width={560} height={560} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        ) : (
          <div className="grid h-full w-full place-items-center font-display text-lg font-extrabold text-paper/55">
            {e.edition ?? '•'}
          </div>
        )}
      </div>

      <p className="meta pt-1 text-paper/60 lg:pt-0">{e.dateLabel}{e.time ? ` · ${e.time}` : ''}</p>

      <div className="justify-self-end lg:order-last">
        <Status e={e} />
      </div>

      <div className="col-span-2 lg:col-span-1">
        <h3 className="display-sm text-paper">{e.title}</h3>
        {e.note && <p className="mt-1 text-sm text-paper/60">{e.note}</p>}
      </div>

      <p className="col-span-2 text-sm text-paper/70 lg:col-span-1">
        {where || <span className="text-paper/55">Venue not logged</span>}
        {e.price && <span className="block text-paper/60">{e.price}</span>}
      </p>
    </li>
  )
}

export default function Nights() {
  return (
    <section id="nights" aria-labelledby="nights-title" className="on-ink bg-ink text-paper section-pad">
      <div className="container-site">
        <SectionHeader
          id="nights-title"
          eyebrow="Nights"
          title={
            <>
              Every edition so far, <span className="text-orange">tagged like a batch.</span>
            </>
          }
          lede="Mostly Wednesdays, 7–10 PM, in whichever Chennai room says yes that week. Here is the record."
          aside={
            <a href={LUMA_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="link-arrow text-paper/80 hover:text-paper" style={{ textDecorationColor: 'rgb(244 239 230 / 0.3)' }}>
              Every event on Luma
              <ArrowUpRight size={14} />
            </a>
          }
        />

        {upcomingEvent && (
          <Reveal className="mt-14" delay={0.05}>
            <p className="meta mb-3 text-orange">Upcoming</p>
            <ul className="border-t hairline">
              <Row e={upcomingEvent} />
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {CTA_LABEL}
                <ArrowUpRight size={15} />
              </a>
              <p className="text-sm text-paper/55">Approval-required. Payment confirmed over WhatsApp once you’re in.</p>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-14" delay={0.05}>
          <p className="meta mb-3 text-paper/60">Completed</p>
          <ul className="border-t hairline">
            {pastEvents.map((e) => (
              <Row key={e.title} e={e} />
            ))}
          </ul>
          <p className="mt-5 text-sm text-paper/60">
            Editions 2–10 happened too; we just haven’t written them up here yet. They are all on Luma.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
