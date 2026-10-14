import build14 from '../assets/Build-14.webp'
import build13 from '../assets/Build-13.webp'
import womenWhoBuild from '../assets/Women-Who-Build.webp'
import agentCraft from '../assets/Agent-craft.webp'
import p1 from '../assets/1.webp'
import p2 from '../assets/2.webp'
import p3 from '../assets/3.webp'
import p6 from '../assets/6.webp'
import p7 from '../assets/7.webp'
import revenue from '../assets/revenue.webp'
import parentApp from '../assets/parent_app.webp'

export interface Photo {
  src: string
  width: number
  height: number
  alt: string
  /** Only set when we actually know which session it is. */
  caption?: string
}

/**
 * Served from /public under a stable name so index.html can preload it
 * (it is the LCP element). Same photo as src/assets/5.webp.
 */
export const heroPhoto: Photo = {
  src: '/hero.webp',
  width: 900,
  height: 474,
  alt: 'Five builders working on laptops around a long wooden table in a brick-walled Chennai café at night',
}

export const roomPhotos: Photo[] = [
  { src: build14, width: 800, height: 600, alt: 'Six people at a white table with laptops in a small meeting room', caption: 'Edition 14 · Love Hope HQ, Adyar' },
  { src: p7, width: 900, height: 675, alt: 'Builders around a boardroom table, one presenting from a laptop', caption: 'A Build & Blend night' },
  { src: womenWhoBuild, width: 800, height: 450, alt: 'A group of around twenty women standing together in an office decorated with blue balloons', caption: 'Women Who Build #1 · 14 Sep 2026' },
  { src: p1, width: 900, height: 675, alt: 'A packed room of builders posing for a group selfie beside a Build & Blend welcome poster', caption: 'A Build & Blend night' },
  { src: build13, width: 568, height: 363, alt: 'People working on laptops at a long table in a warmly lit room', caption: 'Edition 13' },
  { src: revenue, width: 900, height: 389, alt: 'Builders at a café table, three people huddled over a phone', caption: 'A Build & Blend night' },
  { src: agentCraft, width: 785, height: 900, alt: 'Builders around a table at AgentCraft, two standing and chatting, laptops open', caption: 'AgentCraft · House of Cyces · 19 Sep 2026' },
  { src: p2, width: 900, height: 675, alt: 'Rows of builders heads-down on laptops in a computer lab', caption: 'A Build & Blend night' },
  { src: p6, width: 900, height: 474, alt: 'A stack of pizza boxes on a wooden table next to a laptop', caption: 'Snacks. Included.' },
  { src: parentApp, width: 900, height: 675, alt: 'A small group at a whiteboard-lined room, laptops open, one person on a call', caption: 'A Build & Blend night' },
  { src: p3, width: 900, height: 675, alt: 'A host standing with arms folded watching builders work under fairy lights', caption: 'A Build & Blend night' },
]
