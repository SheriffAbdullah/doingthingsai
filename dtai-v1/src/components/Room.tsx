import { roomPhotos } from '../data/photos'
import Reveal from './ui/Reveal'

/** Panorama + strip: the first photo carries the headline, the other four follow. Static, no carousel. */
export default function Room() {
  const [pano, ...strip] = roomPhotos
  return (
    <section id="room" aria-labelledby="room-title" className="bg-paper-2 section-pad">
      <div className="container-site">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink lg:aspect-[21/9]">
          <img
            src={pano.src}
            width={pano.width}
            height={pano.height}
            alt={pano.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-[50%_40%]"
          />
          <div className="pano-scrim absolute inset-0" aria-hidden="true" />
          <h2
            id="room-title"
            className="display-lg absolute inset-x-5 bottom-5 max-w-[16ch] text-paper sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10"
          >
            3 hours. Open laptops. Build. <span className="text-orange">Good people.</span>
          </h2>
        </Reveal>

        <Reveal as="ul" stagger className="mt-3 grid grid-cols-2 gap-3 md:mt-4 md:gap-4 lg:grid-cols-4">
          {strip.map((p) => (
            <li key={p.src} className="photo aspect-square lg:aspect-[4/3]">
              <img
                src={p.src}
                width={p.width}
                height={p.height}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
