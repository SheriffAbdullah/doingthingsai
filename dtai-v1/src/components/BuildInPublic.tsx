import { motion, type Variants } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ExternalLink, Globe } from 'lucide-react'
import CircularGallery from './CircularGallery'

import build14 from '../assets/Build-14.jpg'
import build13 from '../assets/Build-13.jpg'
import womenWhoBuild from '../assets/Women-Who-Build.jpg'
import agentCraft from '../assets/Agent-craft.jpg'
import gallery1 from '../assets/1.jpg'
import gallery2 from '../assets/2.jpg'
import gallery3 from '../assets/3.jpg'
import gallery4 from '../assets/4.jpg'
import gallery5 from '../assets/5.jpg'
import gallery6 from '../assets/6.jpg'
import gallery7 from '../assets/7.jpg'
import gallery8 from '../assets/8.jpg'

// Static social-feed-style cards (no backend, no API)
const feedCards = [
  {
    handle: '@doingthingsai',
    caption: '"8 people. 3 hours. A lot happened in one room." — Build & Blend #14',
    image: build14,
    date: 'Sep 23, 2026',
  },
  {
    handle: '@doingthingsai',
    caption: '"No long talks. Mostly building." — Build & Blend #13: Build something. Find users. Talk money.',
    image: build13,
    date: 'Sep 13, 2026',
  },
  {
    handle: '@doingthingsai',
    caption: 'Women Who Build #1 — Participants built, pitched to buyers, generated Rs.4,300 in revenue. In one session.',
    image: womenWhoBuild,
    date: 'Sep 14, 2026',
  },
  {
    handle: '@doingthingsai',
    caption: 'AgentCraft — DoingThingsAI as Community Partner. AI agent builders. House of Cyces, Chennai.',
    image: agentCraft,
    date: 'Sep 19, 2026',
  },
]

const galleryItems = [
  { image: gallery1, text: '' },
  { image: gallery2, text: '' },
  { image: gallery3, text: '' },
  { image: gallery4, text: '' },
  { image: gallery5, text: '' },
  { image: gallery6, text: '' },
  { image: gallery7, text: '' },
  { image: gallery8, text: '' },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function BuildInPublic() {
  const { ref, inView } = useInView()

  return (
    <section id="build-in-public" className="bg-bg-light section-py" ref={ref}>
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="pill-tag">Build in Public</span>
          <h2 className="text-h2 text-navy max-w-2xl leading-heading">
            We build in public. <span className="accent-text">Every week.</span>
          </h2>
          <p className="font-body text-navy/55 mt-4 max-w-lg text-base leading-relaxed">
            Follow along on Instagram as we ship, experiment, and share what we&apos;re learning — raw and unfiltered.
          </p>
        </motion.div>

        {/* Social Feed Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {feedCards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group bg-white rounded-card border border-navy/10 overflow-hidden hover:border-navy/25 hover:shadow-card transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={card.image}
                  alt={`Social post ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-pill text-xs font-body text-navy font-medium">
                    <Globe size={11} className="text-accent" />
                    {card.handle}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-body text-sm text-navy/75 leading-relaxed line-clamp-3">{card.caption}</p>
                <p className="font-body text-xs text-navy/35 mt-3">{card.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://instagram.com/doingthingsai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm font-medium text-navy bg-transparent border border-navy/25 px-5 py-2.5 rounded-pill no-underline hover:bg-navy hover:text-cream transition-all duration-200"
          >
            <Globe size={15} />
            Follow @doingthingsai
          </a>
          <a
            href="https://linkedin.com/in/chandrasekar-jayapalan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm font-medium text-navy bg-transparent border border-navy/25 px-5 py-2.5 rounded-pill no-underline hover:bg-navy hover:text-cream transition-all duration-200"
          >
            <ExternalLink size={15} />
            Follow on LinkedIn
          </a>
        </motion.div>

        {/* Circular Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-body text-sm text-navy/50 tracking-wide mb-5">
            From past Build &amp; Blend sessions — drag or scroll to explore
          </p>
          <div style={{ height: 'clamp(280px, 55vw, 500px)', position: 'relative' }}>
            <CircularGallery
              items={galleryItems}
              bend={1}
              textColor="#F05A28"
              borderRadius={0.05}
              scrollEase={0.05}
              scrollSpeed={2}
              font="600 22px Inter"
              fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
