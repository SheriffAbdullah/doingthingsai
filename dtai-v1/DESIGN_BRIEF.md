# DoingThingsAI — v1 landing: design brief

## Audience
Chennai founders, developers, designers, marketers, students and AI-curious professionals who want to *make* something with AI on a weeknight, not watch a talk about it. Secondary: spaces and companies who might host a night.

## Thesis (first viewport)
"For people who actually build with AI." Build & Blend is a small, closed-door Wednesday-ish builders' night in Chennai. Come with an idea, leave with something real, then find users, sell, grow. The next edition is the product, so the hero is literally the ticket to it.

The brand's edge is candour. Small rooms (6 people at Edition 1, usually ~8), real numbers (₹4,300 made at Women Who Build #1), and an explicit "we don't publish a member count" line. We lean into that instead of hiding it.

## One CTA verb
**Join the Build** — in the nav, hero and ticket. Never "RSVP", "Register", "Sign up". The ticket and every button go to the Luma page. Secondary intent (host/partner) is a text link, visually subordinate, to the form.

## Aesthetic direction: "Wednesday-night ticket"
Chalkboard ink + café paper + one signature orange. The community's own posters are a cream signboard hung over a warm café scene, with a chalkboard line: *3 hours. Open laptops. Build. Good people.* The site borrows that: ink (chalk) sections for the night-time things (hero, timetable, mission), paper sections for the ledger of things built, the people, the FAQ. Edition numbers are used like YC batch codes, stamped in mono: `ED.17`.

Motifs: a perforated ticket stub, rubber-stamp edition numbers, hairline rules and tabular layouts (timetable, ledger, address book) instead of card grids, mono meta-labels. No gradients, no glass, no emoji, no stock photos, no logo wall.

## Palette
- Paper `#F4EFE6` (warm cream) · Paper-2 `#EBE4D8` (bands)
- Ink `#15130F` (warm charcoal) · Ink-2 `#211E19` (raised surface on ink)
- Orange `#F0581F` (signature; buttons carry **ink text** on orange for AA) · Orange-deep `#B9400C` (orange text on paper, AA)
- Blue `#2457D6` (the second mascot; focus rings and one or two accents only)
- Text on paper: ink at 100 / 72 / 56 %. Text on ink: paper at 100 / 70 / 50 %.

## Type (self-hosted via @fontsource-variable, swap, no external CSS)
- Display: **Bricolage Grotesque** 700–800, tracking −0.03em, line-height 0.95–1.05. Fluid: h1 `clamp(2.6rem, 7vw, 6rem)`, h2 `clamp(2rem, 4.2vw, 3.4rem)`.
- Body: **Inter** 400/500, 17px, 1.55, max 62ch.
- Meta: **JetBrains Mono** 500, 12–13px, uppercase, +0.08em: dates, edition stamps, labels.

## Motion language
Ease-out `cubic-bezier(.2,.8,.2,1)`, 200–500ms, transform/opacity only. Reveals: 12px rise + fade, once, from framer-motion `whileInView`. Signature moment: the hero ticket drops in (y 24 → 0, rotate −5° → −3°) and the `ED.17` stamp thumps (scale 1.5 → 1, 350ms, 500ms delay); on pointer devices the ticket tilts ±5° toward the cursor. All of it is gated on `prefers-reduced-motion` (static ticket, no marquee, no tilt). No scroll hijacking, no WebGL.

## Section plan (single page, anchors)
One headline per section, at most one supporting line, then the content. No eyebrows, no explainer copy.
1. **Nav** — Builds · Nights · People · FAQ + Join the Build. Mobile: full-height sheet, focus-trapped, Escape closes.
2. **Hero (ink)** — H1, one-line sub, CTA. Right: the next-edition ticket over a session photo.
3. **Builds (paper)** `#builds` — ledger: name, one-line outcome, origin, builder credit (`SHOW_BUILDER_NAMES`).
4. **Room (paper band)** `#room` — the poster line as headline, a static five-photo grid. No carousel.
5. **Nights (ink)** `#nights` — past editions: date, title, venue. Link to Luma.
6. **People (paper)** `#people` — photo, name, role.
7. **FAQ (paper)** `#faq` — five short answers, accessible accordion.
8. **Join (paper band, ink card)** `#join` — headline + form that opens WhatsApp prefilled.
9. **Footer (ink)** — wordmark, social icons, © line.

## What is cut and why
- Unsplash venue/contact images and the prebuiltui hero illustration — not ours, not real.
- The WebGL CircularGallery (ogl) — GL warnings, poor on mobile, keyboard-hostile, ~bundle weight; replaced by a CSS scroll-snap strip. `ogl`, `clsx`, `tailwind-merge`, the unused `animata` text animators, `style.css`, `counter.ts` and template SVGs are removed.
- Brand logo wall, member count, testimonial wall — no verified data (one participant quote exists and is used in the Women Who Build row only).
- Subtraction pass: proof ticker marquee, Spaces, Why, the photo carousel (arrows/drag), photo captions, Instagram caption cards, participant quote, people bios/links, event posters/notes/status badges, the duplicate upcoming row in Nights, repeated CTAs, form helper text and error summary.
- The fake "avatar stack" in event rows, the "Same city. Different builders. Bigger dreams." doodle, and the product photos that didn't show the product (e.g. a TradeShield screen captioned "AI Outreach Manager").
