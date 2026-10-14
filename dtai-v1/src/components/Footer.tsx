import { Globe, ExternalLink, MessageCircle, Link } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Build in Public', href: '#build-in-public' },
  { label: 'Events', href: '#events' },
  { label: 'People', href: '#people' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Globe, href: 'https://instagram.com/doingthingsai', label: 'Instagram' },
  { icon: ExternalLink, href: 'https://linkedin.com/in/chandrasekar-jayapalan', label: 'LinkedIn' },
  { icon: Link, href: 'https://x.com/chandru2win', label: 'Twitter / X' },
  { icon: MessageCircle, href: 'https://wa.me/919677295965', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer
      className="pt-12 pb-8"
      style={{ background: 'linear-gradient(to bottom, #E8E2D9, #F2F0EC)' }}
    >
      <div className="site-container">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Col 1 — Logo & Social */}
          <div>
            <div className="font-display font-extrabold text-navy text-2xl mb-1 tracking-tight">
              Doing<span className="text-accent">Things</span>AI
            </div>
            <p className="font-body text-sm text-navy/50 mb-6 max-w-sm leading-relaxed">
              Chennai's human-first 0→1 AI builder community. Closed-door by design.
            </p>
            <p className="font-body text-xs text-navy/40 mb-3 tracking-wide lowercase">follow us</p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 text-navy/50 hover:text-accent transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Info */}
          <div>
            <p className="font-body text-xs text-navy/40 mb-4 tracking-wide lowercase">chennai, india</p>
            <div className="flex flex-col gap-2">
              <p className="font-body text-sm text-navy/70 font-medium">DoingThingsAI</p>
              <p className="font-body text-sm text-navy/55">Chennai, Tamil Nadu, India</p>
              <a
                href="https://wa.me/919677295965"
                className="font-body text-sm text-accent hover:underline no-underline mt-1"
              >
                +91 96772 95965 (WhatsApp)
              </a>
              <a
                href="https://instagram.com/doingthingsai"
                className="font-body text-sm text-navy/55 hover:text-accent transition-colors no-underline"
              >
                @doingthingsai
              </a>
            </div>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <p className="font-body text-xs text-navy/40 mb-4 tracking-wide lowercase">navigation</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm font-light text-navy/65 no-underline hover:text-navy transition-colors duration-200 hover:underline"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-navy/10">
          <p className="font-body text-xs text-navy/35">
            Build & Blend is Chennai's closed-door AI builder night.
          </p>
          <p className="font-body text-xs text-navy/35">
            © 2026 DoingThingsAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
