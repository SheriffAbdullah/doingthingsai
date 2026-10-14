import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Who is Build & Blend for?',
    a: 'Founders, developers, designers, marketers, students, professionals, and AI enthusiasts. No finished product or startup required — if you want to build something with AI, you belong here.',
  },
  {
    q: 'Why is it approval-required?',
    a: 'We prioritise the quality of conversations over the number of attendees. A small, curated room of people who are genuinely trying to build is more valuable than a large crowd. We review RSVPs to keep the energy right.',
  },
  {
    q: 'What does ₹250 entry cover?',
    a: 'Snacks and refreshments for the session. We keep it intentionally low so no one is priced out — the community is the value, not the venue.',
  },
  {
    q: 'Do I need a startup or idea to attend?',
    a: 'No. Many people come to their first session with just curiosity. The format is designed to help you explore and start building, not to pitch a finished product.',
  },
  {
    q: 'How do I RSVP?',
    a: 'Fill in the contact form below or reach out directly on WhatsApp. Payment is confirmed via WhatsApp once your spot is approved.',
  },
  {
    q: 'Can my company or space collaborate with DoingThingsAI?',
    a: 'Yes — we are always looking for spaces that believe in builders. If you want to host a Build & Blend or partner on an event, use the collaboration form below.',
  },
  {
    q: 'What is Women Who Build?',
    a: 'A sub-series created because the founder noticed not enough women at Chennai AI buildathons. It is a closed-door session for women who want to experiment and ship with AI — the first edition generated ₹4,300 in combined revenue.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, inView } = useInView()

  return (
    <section className="bg-bg-light section-py">
      <div className="site-container" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20">
          {/* Left */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="pill-tag">FAQ</span>
            <h2 className="text-h2 text-navy leading-heading mb-4">
              Any questions still <span className="accent-text">unanswered?</span>
            </h2>
            <p className="font-body text-navy/55 text-base leading-relaxed">
              Here you'll find answers to the most common questions before joining Build & Blend.
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-navy/12 last:border-0"
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-body font-medium text-navy text-base group-hover:text-accent transition-colors duration-200">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-navy/40 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-accent' : ''}`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-navy/60 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
