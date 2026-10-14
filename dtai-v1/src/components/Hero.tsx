import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="min-h-[100svh] flex items-center pt-16 bg-bg-light bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(242,240,237,0.28) 0%, rgba(242,240,237,0.78) 100%), url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient-bg-with-grid.png')",
      }}
    >
      <div className="site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-8 lg:py-16">

          {/* ── Left Column ───────────────────────────────── */}
          <div className="flex flex-col">
            {/* Pill tag */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-7"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-tag border border-navy/20 font-body text-xs text-navy/70"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                CHENNAI &nbsp;·&nbsp; INDIA &nbsp;·&nbsp; 0 → 1
              </span>
            </motion.div>

            {/* Headline — 3 stacked lines, responsive */}
            <motion.h1
              className="font-display font-extrabold leading-[1.02] tracking-tight mb-7
                         text-[2.4rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[3.75rem] xl:text-[4.75rem]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="text-navy block">Human-first</span>
              <span className="text-accent block">0→1&nbsp;&nbsp;AI</span>
              <span className="text-accent block">Community.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              className="font-body text-navy/55 text-base leading-relaxed max-w-sm mb-10"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            >
              For people who actually build with AI. Come with an idea. Leave with something real.
            </motion.p>

            {/* CTA — orange pill button with inline arrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.19, 1, 0.22, 1] }}
            >
              <a
                href="https://luma.com/00dhanbk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-body font-semibold text-white bg-accent px-6 py-3 rounded-pill no-underline hover:bg-accent/90 hover:scale-[0.97] active:scale-95 transition-all duration-200 group"
              >
                Join the Build
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/40 group-hover:border-white/70 transition-colors">
                  <ArrowUpRight size={13} className="text-white" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* ── Right Column ─────────────────────────────── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Hero illustration */}
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
                alt="Builders collaborating at Build &amp; Blend"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
