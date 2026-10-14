import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight, Hammer } from 'lucide-react'

import chandru from '../assets/chandru.jpg'
import shankar from '../assets/shankar.jpg'

const builders = [
  {
    name: 'Chandrasekar J',
    handle: '@chandru2win',
    role: 'Founder, DoingThingsAI',
    bio: 'Full-stack marketer turned builder. 12 years across product marketing, GTM, and brand building. Engineer-turned-marketer who started DoingThingsAI to build quality over quantity.',
    built: 'NammaKuppai - Chennai Civic Issue Reporting Platform',
    image: chandru,
    tags: ['Marketing', 'GTM', 'Community'],
  },
  {
    name: 'Shankar K',
    handle: '@shankark.313',
    role: 'Recurring Host, Build & Blend',
    bio: 'Recurring host across Build & Blend editions 11 and 15. A builder who shows up every week to hold the room, challenge ideas, and make sure everyone ships something.',
    built: 'Hosted 2+ Build & Blend editions',
    image: shankar,
    tags: ['Hosting', 'AI Builders', 'Community'],
  },
]

const rotations = [-4, 4]

export default function Builders() {
  const { ref, inView } = useInView()

  return (
    <section id="people" className="bg-bg-dark section-py">
      <div className="site-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="pill-tag pill-tag-dark">The Builders</span>
          <h2 className="text-h2 text-cream leading-heading">
            Organizers who <span className="accent-text">shipped first.</span>
          </h2>
          <p className="font-body text-cream/50 mt-4 text-base leading-relaxed">
            We don&apos;t have admins. We have builders who happen to organize. Every organizer here has shipped something real.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-end justify-center mb-14">
          {builders.map((b, i) => (
            <motion.div
              key={i}
              className="group relative w-full md:w-80 flex-shrink-0"
              initial={{ opacity: 0, y: 40, rotate: rotations[i] }}
              animate={inView ? { opacity: 1, y: 0, rotate: rotations[i] } : {}}
              whileHover={{ rotate: 0, scale: 1.04, y: -10, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22, delay: i * 0.15 }}
            >
              {/* Photo card */}
              <div className="relative h-72 md:h-80 rounded-card-lg overflow-hidden shadow-fan mb-4">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-cream text-xl">{b.name}</h3>
                  <p className="font-body text-cream/60 text-sm">{b.role}</p>
                </div>
              </div>

              {/* Bio card */}
              <div className="bg-cream/5 border border-cream/10 rounded-card p-4 group-hover:border-cream/20 transition-colors duration-300">
                <p className="font-body text-cream/65 text-sm leading-relaxed mb-3">{b.bio}</p>
                <div className="flex items-start gap-2 pt-3 border-t border-cream/10">
                  <Hammer size={13} className="text-accent mt-0.5 flex-shrink-0" />
                  <p className="font-body text-xs text-accent/80">{b.built}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-cream/10"
        >
          <p className="font-body text-cream/50 text-sm max-w-sm">
            Want to be listed here? Ship something at Build &amp; Blend and reach out.
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
