import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight } from 'lucide-react'

import Mission_Vision from '../assets/Mission_Vision.jpg'

export default function Mission() {
  const { ref, inView } = useInView()

  return (
    <section id="mission" className="bg-bg-light section-py">
      <div className="site-container" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="relative rounded-inset overflow-hidden aspect-[4/5]">
              <img
                src={Mission_Vision}
                alt="Builders at a DoingThingsAI session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              {/* floating stat */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-card p-4 border border-navy/10">
                <div className="font-display font-extrabold text-3xl text-navy leading-none mb-1">Edition 1</div>
                <div className="font-body text-sm text-navy/55">Third Wave Coffee, Adyar · 6 builders · The beginning.</div>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          >
            <span className="pill-tag">Mission & Vision</span>
            <h2 className="text-h2 text-navy leading-heading mb-6">
              Not the biggest. <br />
              <span className="accent-text">The most real.</span>
            </h2>

            {/* Founder quote — full, in his own words */}
            <blockquote className="border-l-2 border-accent pl-4 sm:pl-6 mb-8">
              <p className="font-body text-navy/75 text-lg leading-relaxed italic">
                "From day one, our goal wasn't to build the biggest AI community. It was to build a community of people who genuinely love getting their hands dirty — building, experimenting, and shipping with AI. That's why almost every event we've hosted has been a closed-door gathering."
              </p>
              <footer className="mt-4 font-body text-sm text-navy/50 not-italic">
                — Chandrasekar J (Chandru), Founder · DoingThingsAI
              </footer>
            </blockquote>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Quality over quantity', desc: 'Closed-door by design. 8 builders over 200 spectators.' },
                { title: '0→1, not 1→N', desc: 'We focus on the first version. Ship it, then grow it.' },
                { title: 'Human-first', desc: 'AI is the tool. Humans doing the building.' },
                { title: 'Build in public', desc: 'No hidden rooms. Share what works, share what breaks.' },
              ].map((v) => (
                <div key={v.title} className="bg-bg-light border border-navy/10 rounded-card p-4 hover:border-navy/25 transition-colors">
                  <div className="font-display font-bold text-navy text-sm mb-1">{v.title}</div>
                  <div className="font-body text-navy/55 text-xs leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://luma.com/00dhanbk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium text-cream bg-navy px-6 py-3 rounded-pill no-underline hover:bg-navy-mid transition-colors"
              >
                Join the Build
              </a>
              <a
                href="https://luma.com/00dhanbk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-accent flex items-center justify-center hover:scale-110 hover:shadow-orange transition-all duration-200 group"
              >
                <ArrowUpRight size={18} className="text-white group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
