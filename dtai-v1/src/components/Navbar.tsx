import { useCallback, useEffect, useRef, useState } from 'react'
import { CTA_LABEL, LUMA_EVENT_URL, NAV_LINKS } from '../data/site'
import { ArrowUpRight, Spark } from './ui/Icons'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 no-underline text-ink" aria-label="Doing Things AI, back to top">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-orange text-ink">
        <Spark size={16} />
      </span>
      <span className="font-display font-extrabold text-[1.2rem] tracking-[-0.03em] leading-none">
        Doing Things AI
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        className={`fixed inset-x-0 top-0 z-50 bg-paper transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_1px_0_rgb(21_19_15/0.14)]' : ''
        }`}
      >
        <div className="container-site flex items-center justify-between" style={{ height: 'var(--nav-h)' }}>
          <Logo />

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-[44px] items-center rounded-md px-3 text-[0.9375rem] font-medium text-ink/75 no-underline transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink"
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
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              {CTA_LABEL}
              <ArrowUpRight size={15} />
            </a>
            <button
              ref={openerRef}
              type="button"
              className="md:hidden grid h-11 w-11 place-items-center rounded-md text-ink hover:bg-ink/[0.06]"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => (open ? close() : setOpen(true))}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
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
                {NAV_LINKS.map((l, i) => (
                  <li key={l.href} className="border-b hairline">
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[64px] items-center justify-between py-3 font-display text-[2rem] font-bold tracking-[-0.03em] text-ink no-underline"
                    >
                      {l.label}
                      <span className="meta opacity-50">0{i + 1}</span>
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
                className="btn btn-primary w-full text-base"
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
