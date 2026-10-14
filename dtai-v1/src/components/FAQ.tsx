import { useId, useState } from 'react'
import { faqs } from '../data/faq'
import { WHATSAPP_URL } from '../data/site'
import Reveal from './ui/Reveal'
import { ArrowUpRight } from './ui/Icons'

function Item({ q, a, index, open, onToggle }: { q: string; a: string; index: number; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <li className="border-b hairline">
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-start gap-5 py-5 text-left md:py-6"
        >
          <span className="meta pt-1.5 text-ink/60 transition-colors group-hover:text-orange-deep">0{index + 1}</span>
          <span className="flex-1 font-display text-[1.2rem] font-semibold leading-snug tracking-[-0.015em] md:text-[1.35rem]">
            {q}
          </span>
          <span
            aria-hidden="true"
            className={`relative mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/30 transition-colors duration-200 group-hover:border-ink ${open ? 'bg-ink text-paper' : ''}`}
          >
            <span className="absolute h-[2px] w-3 bg-current" />
            <span className={`absolute h-[2px] w-3 bg-current transition-transform duration-300 ease-out ${open ? 'rotate-0' : 'rotate-90'}`} />
          </span>
        </button>
      </h3>
      {/* Content stays in the DOM (find-in-page works); the grid-rows trick animates height. */}
      <div id={`${id}-a`} role="region" aria-labelledby={`${id}-q`} className="acc-panel" data-open={open} aria-hidden={!open}>
        <div>
          <p className="max-w-[62ch] pb-6 pl-[calc(1.6rem+1.25rem)] text-ink/75">{a}</p>
        </div>
      </div>
    </li>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper section-pad">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow mb-5 opacity-70">Before you come</p>
          <h2 id="faq-title" className="display-lg">
            The things people <span className="text-orange-deep">ask on WhatsApp.</span>
          </h2>
          <p className="mt-5 text-ink/70">If yours isn’t here, ask it the same way everyone else does.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-arrow mt-4 text-ink">
            Message Chandru
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
        <Reveal as="ul" className="border-t hairline lg:col-span-8" delay={0.05}>
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} index={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
