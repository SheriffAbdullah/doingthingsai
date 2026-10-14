import { motion, type Variants } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Calendar } from 'lucide-react'

import edition17 from '../assets/Edition-17.avif'
import edition16 from '../assets/Edition-16.avif'
import edition15 from '../assets/Edition-15.avif'
import edition14 from '../assets/Edition-14.avif'
import agentcraft from '../assets/AgentCraft.avif'

const LUMA = 'https://luma.com/00dhanbk'

/* ─── Types & Data ───────────────────────────────────────────── */

interface EventItem {
  title: string
  date: string
  hosts: string
  venue: string
  image: string
}

const upcoming: EventItem = {
  title: 'Build & Blend 17 | Doing Things AI',
  date: 'Today, 7:00 PM',
  hosts: 'By Doing Things AI, Chandrasekar J & Shankar K',
  venue: 'Time cafe',
  image: edition17,
}

const past: EventItem[] = [
  {
    title: 'Build & Blend 16 | Doing Things AI',
    date: 'Wed, Oct 7, 7:00 PM',
    hosts: 'By Doing Things AI, Chandrasekar J & Shankar K',
    venue: 'Love Hope HQ',
    image: edition16,
  },
  {
    title: 'Build & Blend 15 | Doing Things AI',
    date: 'Wed, Sep 30, 7:00 PM',
    hosts: 'By Doing Things AI, Chandrasekar J & Shankar K',
    venue: '119, Dr Radha Krishnan Salai',
    image: edition15,
  },
  {
    title: 'Build & Blend 14 | Doing Things AI',
    date: 'Wed, Sep 23, 7:00 PM',
    hosts: 'By Doing Things AI, Chandrasekar J & Shankar K',
    venue: 'Love Hope HQ',
    image: edition14,
  },
  {
    title: 'Agentcraft - Where good ideas stop waiting for a developer',
    date: 'Sat, Sep 19, 10:00 AM',
    hosts: 'By Cyces & Doing Things AI',
    venue: 'Cyces Innovation Labs LLP',
    image: agentcraft,
  },
]

/* ─── Animation variants ─────────────────────────────────────── */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

/* ─── Single event row card ──────────────────────────────────── */

function EventRow({ event }: { event: EventItem }) {
  return (
    <motion.div
      variants={item}
      className="bg-white rounded-xl border border-navy/8 hover:border-navy/15 hover:shadow-lift transition-all duration-200 overflow-hidden flex flex-row items-center"
    >
      {/* Square thumbnail */}
      <div className="w-20 h-20 sm:w-[88px] sm:h-[88px] flex-shrink-0 m-3 rounded-lg overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex-1 py-3 pr-4 min-w-0">
        {/* Date */}
        <p className="font-body text-xs text-indigo-400 font-medium mb-1">{event.date}</p>

        {/* Title */}
        <h3 className="font-display font-semibold text-navy text-sm sm:text-[15px] leading-snug line-clamp-2 mb-2">
          {event.title}
        </h3>

        {/* Hosts */}
        <div className="flex items-center gap-1.5 mb-1">
          {/* Decorative avatar stack */}
          <div className="flex -space-x-1.5 flex-shrink-0">
            <div className="w-[18px] h-[18px] rounded-full bg-navy/25 border-2 border-white" />
            <div className="w-[18px] h-[18px] rounded-full bg-accent/40 border-2 border-white" />
          </div>
          <p className="font-body text-xs text-navy/45 line-clamp-1">{event.hosts}</p>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-1">
          <MapPin size={10} className="text-navy/35 flex-shrink-0" />
          <p className="font-body text-xs text-navy/45 line-clamp-1">{event.venue}</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main component ─────────────────────────────────────────── */

export default function Events() {
  const { ref, inView } = useInView()

  return (
    <section id="events" className="bg-bg-light section-py" ref={ref}>
      <div className="site-container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-body text-xs text-navy/40 tracking-widest uppercase mb-2">
            Community &nbsp;/&nbsp; Events
          </p>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h2
                className="font-display font-bold text-navy leading-tight mb-1"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
              >
                Past Events &amp; Upcoming
              </h2>
              <p className="font-body text-navy/50 text-sm">15 editions. One city. Still building.</p>
            </div>

            {/* RSVP + handwritten note */}
            <div className="flex items-start gap-4 flex-shrink-0">
              <a
                href={LUMA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm font-semibold text-cream bg-navy px-5 py-3 rounded-full no-underline hover:bg-navy-mid transition-colors whitespace-nowrap"
              >
                <Calendar size={14} />
                RSVP Next Session →
              </a>
              <div className="hidden sm:block relative pt-1">
                <svg width="110" height="56" viewBox="0 0 110 56" fill="none" className="absolute -top-2 -right-2 opacity-60 pointer-events-none">
                  <path d="M 20 40 Q 30 10 80 8" stroke="#F5C842" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M 74 4 L 80 8 L 75 14" stroke="#F5C842" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-body text-xs text-navy/45 leading-relaxed italic text-right">
                  Same city.<br />Different builders.<br />Bigger dreams.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Hosting (upcoming) ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h3 className="font-display font-bold text-navy text-lg mb-3">Hosting</h3>
          {/* Single card but in a 2-col grid so it aligns with the past grid below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <EventRow event={upcoming} />
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="border-t border-navy/10 mb-8" />

        {/* ── Past Events ── */}
        <div className="flex items-center justify-between mb-4">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="font-display font-bold text-navy text-lg"
          >
            Past Events
          </motion.h3>
          <motion.a
            href="https://luma.com/user/DoingThingsAI"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="font-body text-sm text-navy/40 hover:text-navy transition-colors no-underline"
          >
            View All
          </motion.a>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {past.map((e, i) => (
            <EventRow key={i} event={e} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
