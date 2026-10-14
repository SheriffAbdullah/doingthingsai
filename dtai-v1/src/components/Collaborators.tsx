import { motion, type Variants } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const collaborators = [
  {
    name: 'Madras Adda',
    edition: 'Edition 15',
    label: 'Recent',
    location: 'Mylapore, Chennai',
    desc: 'Our September 2026 flagship venue.',
    image: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&h=560&fit=crop&q=80',
  },
  {
    name: 'Love Hope HQ',
    edition: 'Edition 14',
    label: 'Intimate',
    location: 'Adyar, Chennai',
    desc: '8 people. 3 hours. A lot happened in one room.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=560&fit=crop&q=80',
  },
  {
    name: 'Time Café',
    edition: 'Edition 12',
    label: 'Classic',
    location: 'Nungambakkam, Chennai',
    desc: 'An afternoon of builders, ideas, and coffee.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=560&fit=crop&q=80',
  },
  {
    name: 'Third Wave Coffee',
    edition: 'Edition 1',
    label: 'Origin',
    location: 'Adyar, Chennai',
    desc: 'Where it all started. 6 attendees. Closed-door by design.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=560&fit=crop&q=80',
  },
  {
    name: 'Become',
    edition: 'Showcase',
    label: 'Studio',
    location: 'Chennai',
    desc: 'Hosted a Pay-As-You-Wish AI Product Showcase, June 2026.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=560&fit=crop&q=80',
  },
  {
    name: 'House of Cyces',
    edition: 'AgentCraft',
    label: 'Partner',
    location: 'Chennai',
    desc: 'DoingThingsAI as Community Partner for a one-day AI agents event.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=560&fit=crop&q=80',
  },
]

const venueMarquee = [
  'Madras Adda', 'Love Hope HQ', 'Time Café', 'Third Wave Coffee',
  'Become', 'House of Cyces', 'Madras Adda', 'Love Hope HQ', 'Time Café',
  'Third Wave Coffee', 'Become', 'House of Cyces',
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Collaborators() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-bg-dark section-py">
      <div className="site-container" ref={ref}>
        {/* Split header — title left, copy right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-10"
        >
          <div>
            <span className="pill-tag pill-tag-dark">Spaces We Build In</span>
            <h2 className="text-h2 text-cream leading-heading">
              Spaces We<br />Build In
            </h2>
          </div>
          <div className="md:border-l md:border-cream/15 md:pl-10">
            <p className="font-display font-bold text-cream text-xl md:text-2xl leading-heading mb-3">
              Companies & spaces that <span className="accent-text">believe in builders.</span>
            </p>
            <p className="font-body text-cream/50 text-base leading-relaxed max-w-md">
              We don&apos;t rent venues — we collaborate with spaces that share our values. These are the places that said yes to a room full of builders.
            </p>
          </div>
        </motion.div>

        {/* Scrolling marquee of venue names */}
        <div className="marquee-track overflow-hidden mb-12 py-4 border-y border-cream/10">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {venueMarquee.map((v, i) => (
              <span key={i} className="font-display font-bold text-2xl text-cream/20 flex-shrink-0 uppercase tracking-wide">
                {v} <span className="text-accent mx-2">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Photo cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {collaborators.map((c) => (
            <motion.article
              key={c.name}
              variants={item}
              className="group rounded-card border border-cream/15 bg-cream/[0.04] p-4 hover:border-cream/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-xs tracking-[0.1em] uppercase text-cream/45">
                  {c.edition}
                </span>
                <span className="font-body text-xs tracking-[0.1em] uppercase text-accent">
                  {c.label}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[0.65rem] mb-4 aspect-[4/3]">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-display font-bold text-cream text-xl mb-1 group-hover:text-accent transition-colors duration-200">
                {c.name}
              </h3>
              <p className="font-body text-xs tracking-[0.08em] uppercase text-cream/40 mb-4">
                {c.location}
              </p>
              <div className="border-t border-cream/10 pt-3">
                <p className="font-body text-sm text-cream/55 leading-relaxed italic">
                  &ldquo;{c.desc}&rdquo;
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
