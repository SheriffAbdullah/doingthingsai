import { useCallback, useEffect, useRef, useState } from 'react'
import { CTA_LABEL, LUMA_EVENT_URL, NAV_LINKS } from '../data/site'
import { ArrowUpRight } from './ui/Icons'
import Wordmark from './ui/Wordmark'

function Logo() {
  return (
    <a href="#top" className="flex min-h-[44px] items-center gap-2 rounded-md text-current no-underline" aria-label="Doing Things AI, back to top">
      <Wordmark />
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // The hero ticket is the one "Join the Build" up top; the nav button waits until it has scrolled away.
  const [ticketGone, setTicketGone] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ticket = document.getElementById('hero-ticket')
    if (!ticket || !('IntersectionObserver' in window)) { setTicketGone(true); return }
    const navH = getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim() || '0px'
    const io = new IntersectionObserver(([e]) => setTicketGone(!e.isIntersecting && e.boundingClientRect.top < 0), {
      rootMargin: `-${navH} 0px 0px 0px`,
    })
    io.observe(ticket)
    return () => io.disconnect()
  }, [])

  // Clear over the hero photo at the very top; paper once scrolled or while the menu is open.
  const solid = scrolled || open

  const close = useCallback(() => {
    setOpen(false)
    openerRef.current?.focus()
  }, [])

  // Lock scroll, trap focus, close on Escape while the sheet is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusables = () =>
      Array.from(sheetRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])
    focusables()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); close() }
      if (e.key === 'Tab') {
        const els = focusables()
        if (!els.length) return
        const first = els[0], last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey) }
  }, [open, close])

  // Close the sheet if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => { if (mq.matches) setOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow] duration-base ease-out ${
          solid ? 'bg-paper text-ink' : 'on-ink nav-clear bg-transparent text-paper'
        } ${scrolled ? 'nav-scrolled' : ''}`}
      >
        <div className="container-site flex items-center justify-between" style={{ height: 'var(--nav-h)' }}>
          <Logo />

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`inline-flex min-h-[44px] items-center rounded-md px-3 text-ui font-medium no-underline transition-colors duration-fast ${
                      solid ? 'text-ink/70 hover:bg-ink/[0.06] hover:text-ink' : 'text-paper/85 hover:bg-paper/10 hover:text-paper'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={LUMA_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta btn btn-primary btn-sm hidden sm:inline-flex"
              data-hidden={!ticketGone}
              aria-hidden={ticketGone ? undefined : true}
              tabIndex={ticketGone ? undefined : -1}
            >
              {CTA_LABEL}
              <ArrowUpRight size={15} />
            </a>
            <button
              ref={openerRef}
              type="button"
              className={`md:hidden grid h-11 w-11 place-items-center rounded-md ${solid ? 'hover:bg-ink/[0.06]' : 'hover:bg-paper/10'}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => (open ? close() : setOpen(true))}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-base ease-out ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-fast ${open ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-base ease-out ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
          <div
            id="mobile-menu"
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="sheet-in fixed inset-x-0 bottom-0 z-40 flex flex-col bg-paper md:hidden"
            style={{ top: 'var(--nav-h)' }}
          >
            <nav aria-label="Primary mobile" className="container-site flex-1 overflow-y-auto border-t hairline pt-2">
              <ul>
                {NAV_LINKS.map((l) => (
                  <li key={l.href} className="border-b hairline">
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[64px] items-center py-3 font-display text-[2rem] font-bold tracking-[-0.03em] text-ink no-underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="container-site py-5">
              <a
                href={LUMA_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary btn-lg w-full"
              >
                {CTA_LABEL}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
    </>
  )
}
