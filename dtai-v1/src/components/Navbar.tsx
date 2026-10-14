import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Build in Public', href: '#build-in-public' },
  { label: 'Events', href: '#events' },
  { label: 'People', href: '#people' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-light/90 backdrop-blur-md border-b border-navy/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="site-container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline">
            <span className="font-display font-800 text-navy text-xl leading-none tracking-tight">
              Doing<span className="text-accent">Things</span>AI
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm font-normal text-navy/80 no-underline hover:text-accent transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA Pair */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://luma.com/00dhanbk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-cream bg-navy px-5 py-2.5 rounded-pill no-underline hover:bg-navy-mid transition-colors duration-200"
            >
              Join the Build
            </a>
            <a
              href="https://luma.com/00dhanbk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform duration-200 group"
            >
              <ArrowUpRight size={18} className="text-white group-hover:rotate-12 transition-transform duration-200" />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-3 -mr-1 text-navy"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-navy/40 z-50 md:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-bg-light z-50 flex flex-col p-6 md:hidden"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <button className="self-end mb-8 p-3 -mr-1 text-navy" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
              <nav className="flex flex-col gap-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-bold text-navy no-underline hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex gap-3">
                <a
                  href="https://luma.com/00dhanbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center font-body text-sm font-semibold text-cream bg-navy px-5 py-3.5 rounded-pill no-underline"
                >
                  Join the Build
                </a>
                <a
                  href="https://luma.com/00dhanbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
                >
                  <ArrowUpRight size={18} className="text-white" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
