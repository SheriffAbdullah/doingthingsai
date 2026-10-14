# DoingThingsAI — v1 landing: design brief

## Audience
Chennai founders, developers, designers, marketers, students and AI-curious professionals who want to *make* something with AI on a weeknight, not watch a talk about it. Secondary: spaces and companies who might host a night.

## Thesis (first viewport)
"For people who actually build with AI." Build & Blend is a small, closed-door Wednesday-ish builders' night in Chennai. Come with an idea, leave with something real, then find users, sell, grow. The next edition is the product, so the hero is literally the ticket to it.

The brand's edge is candour. Small rooms (6 people at Edition 1, usually ~8), real numbers (₹4,300 made at Women Who Build #1), and an explicit "we don't publish a member count" line. We lean into that instead of hiding it.

## One CTA verb
**Join the Build** — in the nav, hero, after proof, in the timetable, after people, in the form. Never "RSVP", "Register", "Sign up". The ticket and every button go to the Luma page. Secondary intent (host/partner) is a text link, visually subordinate, to the form.

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
1. **Nav** — paper signboard, 5 flat anchors (Builds · Nights · Spaces · People · FAQ) + Join the Build. Mobile: full-height sheet, focus-trapped, Escape closes.
2. **Hero (ink)** — eyebrow "Human-first 0→1 AI community · Chennai", H1, 2-line sub, CTA, WhatsApp link. Right: the Edition 17 ticket over a real session photo. Below: a ticker of honest numbers (static list under reduced motion).
3. **Built in the room (paper)** `#builds` — ledger of things shipped: scene_044, AI Outreach Manager, Parent to-do app, ₹4,300. Builder credits behind a `SHOW_BUILDER_NAMES` flag pending Chandru's go-ahead. Namma Kuppai as a footnote. Closing: "If they can, you can too." + CTA.
4. **The room (paper band)** `#room` — the chalk line as a big statement, scroll-snap photo strip of real photos with captions where known, two raw captions from Instagram, follow link.
5. **Nights (ink)** `#nights` — timetable: Upcoming (Ed.17, date/time/venue/price/link) + Completed rows with status badges; posters as thumbnails; Luma link. Data lives in `src/data/events.ts` so Chandru's team edits one file.
6. **Spaces (ink)** `#spaces` — address-book list of the six real venues with the editions they hosted; "Host a night" text link to the form.
7. **People (paper)** `#people` — Chandru and Shankar as builders first, facts only.
8. **Why (ink)** `#why` — founder quote in full, origin (Edition 1 poster: 8 July 2026, Third Wave Coffee, 6 people), the no-member-count line.
9. **FAQ (paper)** `#faq` — 7 real objections, accessible accordion.
10. **Join (paper, ink card)** `#join` — form with labels, inline validation, error/success states; opens WhatsApp prefilled. Direct links alongside.
11. **Footer (ink)** — flat links, real social icons, WhatsApp number, © line.

## What is cut and why
- Unsplash venue/contact images and the prebuiltui hero illustration — not ours, not real.
- The WebGL CircularGallery (ogl) — GL warnings, poor on mobile, keyboard-hostile, ~bundle weight; replaced by a CSS scroll-snap strip. `ogl`, `clsx`, `tailwind-merge`, the unused `animata` text animators, `style.css`, `counter.ts` and template SVGs are removed.
- Brand logo wall, member count, testimonial wall — no verified data (one participant quote exists and is used in the Women Who Build row only).
- The fake "avatar stack" in event rows, the "Same city. Different builders. Bigger dreams." doodle, and the product photos that didn't show the product (e.g. a TradeShield screen captioned "AI Outreach Manager").
