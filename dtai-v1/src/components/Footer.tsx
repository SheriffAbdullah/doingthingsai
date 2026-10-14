import { CTA_LABEL, INSTAGRAM_URL, LINKEDIN_URL, LUMA_EVENT_URL, LUMA_PROFILE_URL, NAV_LINKS, WHATSAPP_DISPLAY, WHATSAPP_URL, X_URL } from '../data/site'
import { ArrowUpRight, InstagramIcon, LinkedInIcon, Spark, WhatsAppIcon, XIcon } from './ui/Icons'

const socials = [
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: LinkedInIcon },
  { label: 'X', href: X_URL, Icon: XIcon },
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: WhatsAppIcon },
]

export default function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper border-t hairline">
      <div className="container-site grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="flex items-center gap-2 font-display text-xl font-extrabold tracking-[-0.03em]">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-orange text-ink"><Spark size={14} /></span>
            Doing Things AI
          </p>
          <p className="mt-4 max-w-[36ch] text-paper/65">
            Human-first 0→1 AI community. Chennai. Closed-door by design.
          </p>
          <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-6">
            {CTA_LABEL}
            <ArrowUpRight size={14} />
          </a>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="meta text-paper/60 mb-4">On this page</p>
          <ul className="grid gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-[40px] items-center text-paper/80 no-underline hover:text-orange transition-colors">{l.label}</a>
              </li>
            ))}
            <li><a href="#join" className="inline-flex min-h-[40px] items-center text-paper/80 no-underline hover:text-orange transition-colors">Join / host</a></li>
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="meta text-paper/60 mb-4">Find us</p>
          <ul className="grid gap-1">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[40px] items-center gap-2.5 text-paper/80 no-underline hover:text-orange transition-colors">
                  <Icon size={17} />
                  {label}
                  {label === 'WhatsApp' && <span className="text-paper/60">{WHATSAPP_DISPLAY}</span>}
                </a>
              </li>
            ))}
            <li>
              <a href={LUMA_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[40px] items-center gap-2.5 text-paper/80 no-underline hover:text-orange transition-colors">
                <ArrowUpRight size={17} />
                All events on Luma
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site">
        <div className="flex flex-col gap-2 border-t hairline py-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Doing Things AI, Chennai.</p>
          <p>Build &amp; Blend: 3 hours. Open laptops. Build. Good people.</p>
        </div>
      </div>
    </footer>
  )
}
