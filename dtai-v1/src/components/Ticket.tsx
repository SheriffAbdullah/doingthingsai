import { useRef } from 'react'
import { upcomingEvent } from '../data/events'
import { CTA_LABEL, INSTAGRAM_URL, LUMA_PROFILE_URL } from '../data/site'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ArrowUpRight, Spark } from './ui/Icons'

/**
 * The hero's signature object: a ticket stub for the next Build & Blend.
 * Drops in on load (.ticket-in), the edition stamp thumps (.stamp-in), and on
 * mouse devices the card tilts a few degrees toward the cursor (.tilt, driven
 * by two CSS variables). All transform-only; all off under reduced motion.
 */
export default function Ticket() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`)
    ref.current.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`)
  }
  const onLeave = () => {
    ref.current?.style.removeProperty('--rx')
    ref.current?.style.removeProperty('--ry')
  }

  const ev = upcomingEvent
  const href = ev?.url ?? LUMA_PROFILE_URL

  const rows: [string, string][] = ev
    ? [
        ['Date', ev.dateLabel],
        ['Time', ev.time ?? 'See Luma'],
        ['Venue', [ev.venue, ev.area].filter(Boolean).join(', ')],
        ['Entry', ev.price ?? 'See Luma'],
        ['Room', 'Closed-door · approval-required'],
      ]
    : [
        ['Date', 'Next edition announced on Luma'],
        ['Venue', 'Somewhere in Chennai'],
        ['Entry', 'Usually ₹250, snacks included'],
        ['Room', 'Closed-door · approval-required'],
      ]

  return (
    <div className="ticket-in relative">
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="tilt group block w-full max-w-[26rem] overflow-hidden rounded-xl bg-paper text-ink no-underline shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6),0_0_0_1px_rgb(244_239_230/0.12)] hover:shadow-[0_36px_70px_-20px_rgb(0_0_0/0.7),0_0_0_1px_rgb(244_239_230/0.2)] focus-visible:outline-orange"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <div className="min-w-0">
            <p className="meta opacity-70">Doing Things AI presents</p>
            <p className="mt-2 font-display text-[1.6rem] font-extrabold leading-none tracking-[-0.03em] sm:text-[1.9rem]">
              Build &amp; Blend
            </p>
            <p className="meta mt-2 opacity-70">AI builders’ night</p>
          </div>
          <span className="stamp stamp-in mt-1 shrink-0 text-[1.35rem] text-orange-deep" aria-hidden="true">
            {ev?.edition ? `ED.${ev.edition}` : 'NEXT'}
          </span>
        </div>

        {/* Rows */}
        <dl className="mx-6 mt-5 divide-y divide-ink/10 border-y border-ink/15">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-3 py-2.5">
              <dt className="meta opacity-70">{k}</dt>
              <dd className="m-0 font-body text-[0.95rem] font-medium leading-snug">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Perforation + stub */}
        <div className="mt-5 px-4"><div className="perf" /></div>
        <div className="flex items-center justify-between gap-3 px-6 py-5">
          <span className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-[-0.02em]">
            <Spark size={14} className="text-orange-deep" />
            {CTA_LABEL}
          </span>
          <span className="meta inline-flex items-center gap-1 text-orange-deep">
            RSVP on Luma<span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>

      {!ev && (
        <p className="mt-4 text-sm text-paper/60">
          Nothing on the calendar right now. The next one shows up first on{' '}
          <a href={INSTAGRAM_URL} className="text-paper/80 underline underline-offset-4" target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>
      )}
    </div>
  )
}
