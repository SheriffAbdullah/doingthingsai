import { INSTAGRAM_URL, LINKEDIN_URL, LUMA_PROFILE_URL, WHATSAPP_DISPLAY, WHATSAPP_URL, X_URL } from '../data/site'
import Wordmark from './ui/Wordmark'

const ledger = [
  {
    title: 'Chennai',
    links: [
      { label: WHATSAPP_DISPLAY, href: WHATSAPP_URL },
      { label: 'Luma', href: LUMA_PROFILE_URL },
    ],
  },
  {
    title: 'Follow',
    links: [
      { label: 'Instagram', href: INSTAGRAM_URL },
      { label: 'LinkedIn', href: LINKEDIN_URL },
      { label: 'X', href: X_URL },
    ],
  },
]

/** Big wordmark sign-off with the address ledger beneath. */
export default function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="container-site">
        <p className="border-t hairline pt-12 md:pt-16">
          <Wordmark size="xl" />
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t hairline py-8 md:mt-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-10">
          <p className="order-last col-span-2 self-end text-sm text-paper/60 md:order-none md:col-span-1">
            © {new Date().getFullYear()} Doing Things AI, Chennai
          </p>
          {ledger.map((col) => (
            <div key={col.title}>
              <h2 className="meta text-paper/60">{col.title}</h2>
              <ul className="mt-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center font-medium text-paper/80 no-underline underline-offset-4 transition-colors duration-fast hover:text-paper hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
