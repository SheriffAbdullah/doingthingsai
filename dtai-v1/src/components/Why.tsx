import edition1Poster from '../assets/Mission_Vision.webp'
import Reveal from './ui/Reveal'

export default function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="on-ink bg-ink text-paper section-pad">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-orange mb-5">Why this exists</p>
          <h2 id="why-title" className="display-lg">
            Not the biggest room in Chennai. <span className="text-orange">The realest one.</span>
          </h2>

          <blockquote className="m-0 mt-10 border-l-2 border-orange pl-6 md:pl-8">
            <p className="font-display text-[clamp(1.25rem,2vw,1.6rem)] font-medium leading-[1.35] tracking-[-0.01em] text-paper/90">
              “From day one, our goal wasn’t to build the biggest AI community. It was to build a
              community of people who genuinely love getting their hands dirty building, experimenting,
              and shipping with AI. That’s why almost every event we’ve hosted has been a closed-door
              gathering.”
            </p>
            <footer className="meta mt-6 text-paper/55">Chandru, founder · September 2026</footer>
          </blockquote>

          <dl className="mt-12 grid gap-6 border-t hairline pt-8 sm:grid-cols-3">
            <div>
              <dt className="meta text-paper/60">The rule</dt>
              <dd className="m-0 mt-2 text-paper/85">Quality of conversations over the number of attendees.</dd>
            </div>
            <div>
              <dt className="meta text-paper/60">The loop</dt>
              <dd className="m-0 mt-2 text-paper/85">Build → find users → sell → grow. 0 → 1 → many.</dd>
            </div>
            <div>
              <dt className="meta text-paper/60">The number we don’t show</dt>
              <dd className="m-0 mt-2 text-paper/85">A member count. We haven’t reconciled one we’d stand behind, so you get the editions and the outcomes instead.</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:pl-4" delay={0.1}>
          <figure className="m-0">
            <div className="photo aspect-[4/5] max-w-[26rem]">
              <img
                src={edition1Poster}
                width={720}
                height={900}
                alt="The poster for Build & Blend #1: 3 hours, open laptops, build, good people. 8th July, 7 to 10 PM, Third Wave Coffee, Adyar. Below it, a photo of laptops on a dark wooden table."
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 max-w-[26rem]">
              <p className="meta text-orange">Edition 1 · Wed 8 Jul 2026</p>
              <p className="mt-2 text-sm text-paper/65">
                Third Wave Coffee, Adyar. Six people showed up after several cancellations. The format was
                borrowed from closed-door AI sessions in Bengaluru and has not really changed since.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
