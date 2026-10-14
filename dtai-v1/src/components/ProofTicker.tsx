import { latestEdition } from '../data/events'
import { Spark } from './ui/Icons'

/** Honest numbers only. No member count, on purpose. */
const facts = [
  `${latestEdition} editions of Build & Blend since July 2026`,
  '₹4,300 made by Women Who Build #1 participants, in one session',
  'Edition 1: six people at a coffee shop in Adyar',
  'Usually about eight people. Three hours. Mostly building.',
  'Six Chennai spaces have opened their doors',
  'Community partner at AgentCraft',
  'No member count on this page. We haven’t reconciled one we’d stand behind.',
]

function List({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className={`meta-lg flex gap-5 pr-5 font-semibold ${hidden ? 'marquee-dup' : ''}`} aria-hidden={hidden || undefined}>
      {facts.map((f) => (
        <li key={f} className="flex items-center gap-5 whitespace-nowrap">
          <span>{f}</span>
          <Spark size={12} className="shrink-0 opacity-70" />
        </li>
      ))}
    </ul>
  )
}

/**
 * Slow marquee of real numbers. Under prefers-reduced-motion the CSS turns
 * it into a static wrapped list and hides the duplicate (see index.css), so
 * server and client render identical markup.
 */
export default function ProofTicker() {
  return (
    <aside aria-label="Facts about the community" className="marquee-track overflow-hidden bg-orange text-ink">
      <div className="marquee-inner animate-marquee flex w-max py-4">
        <List />
        <List hidden />
      </div>
    </aside>
  )
}
