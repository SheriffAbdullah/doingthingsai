import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  type: string
  message: string
}

export default function CollaborateForm() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormData>({ name: '', email: '', type: 'attend', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No backend — compose WhatsApp message
    const msg = encodeURIComponent(
      `Hi Chandru! I'd like to ${form.type === 'attend' ? 'attend Build & Blend' : 'collaborate with DoingThingsAI'}.\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/919677295965?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="bg-bg-dark section-py">
      <div className="site-container" ref={ref}>
        {/* Inset card — hadi style dark inset block */}
        <motion.div
          className="rounded-inset overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — image + copy */}
            <div className="relative min-h-[240px] md:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=600&fit=crop&q=80"
                alt="Builders working together"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* gradient: bottom→top on mobile (stacked), left→right on desktop (side-by-side) */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent md:bg-gradient-to-r md:from-navy/90 md:via-navy/70 md:to-transparent" />
              <div className="relative z-10 p-6 md:p-12 flex flex-col justify-end h-full">
                <span className="pill-tag pill-tag-dark mb-4">Join or Collaborate</span>
                <h2 className="text-h2 text-cream leading-heading mb-4">
                  Imagine being in a room full of people who{' '}
                  <span className="accent-text">actually build.</span>
                </h2>
                <p className="font-body text-cream/55 text-sm leading-relaxed mb-6 max-w-xs">
                  The next step takes 2 minutes and could change how you build forever.
                </p>
                <a
                  href="https://wa.me/919677295965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm font-medium text-cream border border-cream/30 px-5 py-3 rounded-pill no-underline hover:bg-cream/10 transition-colors self-start"
                >
                  <MessageCircle size={15} />
                  WhatsApp Chandru directly
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-bg-light p-6 md:p-12">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-2xl mb-2">Opening WhatsApp…</h3>
                  <p className="font-body text-navy/55 text-sm max-w-xs">
                    Your message is pre-filled. Hit send and Chandru will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 font-body text-sm text-navy/40 underline hover:text-navy transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-display font-bold text-navy text-2xl mb-1">Join the Build</h3>
                    <p className="font-body text-navy/50 text-sm">RSVP for the next session or reach out to collaborate.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-xs font-medium text-navy/60 uppercase tracking-wide">Your name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Ravi Kumar"
                        className="font-body text-sm text-navy bg-bg-light border border-navy/15 rounded-card px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-navy/30"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-xs font-medium text-navy/60 uppercase tracking-wide">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="ravi@example.com"
                        className="font-body text-sm text-navy bg-bg-light border border-navy/15 rounded-card px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-navy/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs font-medium text-navy/60 uppercase tracking-wide">I want to</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="font-body text-sm text-navy bg-bg-light border border-navy/15 rounded-card px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="attend">Attend Build & Blend</option>
                      <option value="host">Host a Build & Blend at my space</option>
                      <option value="partner">Partner / Collaborate with DoingThingsAI</option>
                      <option value="speak">Speak or demo at an event</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs font-medium text-navy/60 uppercase tracking-wide">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us what you're building or why you want to collaborate..."
                      className="font-body text-sm text-navy bg-bg-light border border-navy/15 rounded-card px-4 py-3 outline-none focus:border-accent transition-colors resize-none placeholder:text-navy/30"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="font-body text-sm font-medium text-cream bg-navy px-7 py-3.5 rounded-pill hover:bg-navy-mid hover:scale-[0.98] transition-all duration-200"
                    >
                      Send via WhatsApp
                    </button>
                    <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>

                  <p className="font-body text-xs text-navy/35">
                    This opens WhatsApp with your message pre-filled. No data is stored.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
