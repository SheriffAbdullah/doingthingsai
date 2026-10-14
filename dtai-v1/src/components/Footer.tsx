import { INSTAGRAM_URL, LINKEDIN_URL, WHATSAPP_URL, X_URL } from '../data/site'
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, XIcon } from './ui/Icons'
import Wordmark from './ui/Wordmark'

const socials = [
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: LinkedInIcon },
  { label: 'X', href: X_URL, Icon: XIcon },
]

export default function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="container-site flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2">
          <Wordmark />
        </p>
        <ul className="-ml-3 flex flex-wrap gap-1 md:-mr-3 md:ml-0">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-md text-paper/70 transition-colors duration-fast hover:bg-paper/10 hover:text-paper"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-site">
        <p className="border-t hairline py-6 text-sm text-paper/60">© {new Date().getFullYear()} Doing Things AI, Chennai</p>
      </div>
    </footer>
  )
}
