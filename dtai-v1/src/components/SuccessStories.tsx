import { motion, type Variants } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight } from 'lucide-react'

import scene044 from '../assets/scene044.jpg'
import parent_app from '../assets/parent_app.jpg'
import outreach from '../assets/outreach.jpg'
import revenue from '../assets/revenue.jpg'

const stories = [
  {
    builder: 'A builder at Women Who Build #1',
    product: 'scene_044',
    outcome: 'Started at Women Who Build #1, launched publicly.',
    image: scene044,
  },
  {
    builder: 'A builder at Build & Blend',
    product: 'AI Outreach Manager',
    outcome: 'Built a prototype at Build & Blend, returned the next edition to iterate.',
    image: outreach,
  },
  {
    builder: 'A builder at Edition 11',
    product: 'Parent To-Do App',
    outcome: 'Built with Claude — includes baby sleep-tracking for family members.',
    image: parent_app,
  },
  {
    builder: 'Women Who Build #1 cohort',
    product: '₹4,300 Combined Revenue',
    outcome: 'Participants built, pitched to buyers and generated real revenue in one session.',
    image: revenue,
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function SuccessStories() {
  const { ref, inView } = useInView()

  return (
    <section id="products" className="bg-bg-dark section-py">
      <div className="site-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="pill-tag pill-tag-dark">Products We Built</span>
          <h2 className="text-h2 text-cream max-w-2xl leading-heading">
            Real builders. <span className="accent-text">Real products.</span> If they can, you can too.
          </h2>
          <p className="font-body text-cream/50 mt-4 max-w-lg text-base leading-relaxed">
            Every product below was started at a Build & Blend session or Women Who Build. No finished product required to join.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {stories.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative rounded-card-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              {/* Photo */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.product}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <p className="font-body text-cream/60 text-xs mb-1">{s.builder}</p>
                <h3 className="font-display font-bold text-cream text-xl leading-tight mb-2">{s.product}</h3>
                <p className="font-body text-cream/70 text-sm leading-relaxed">{s.outcome}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-cream/10"
        >
          <p className="font-body text-cream/50 text-sm max-w-sm">
            The next product on this list could be yours. Come to a Build & Blend.
          </p>
          <div className="flex items-center gap-2">
            <a href="https://luma.com/00dhanbk" target="_blank" rel="noopener noreferrer" className="font-body text-sm font-medium text-cream bg-accent px-5 py-2.5 rounded-pill no-underline hover:bg-accent/90 transition-colors">
              Join the Build
            </a>
            <a href="https://luma.com/00dhanbk" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream/50 transition-colors">
              <ArrowUpRight size={16} className="text-cream" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
