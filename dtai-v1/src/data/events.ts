import { LUMA_EVENT_URL, LUMA_PROFILE_URL } from './site'
import edition17 from '../assets/Edition-17.avif'
import edition16 from '../assets/Edition-16.avif'
import edition15 from '../assets/Edition-15.avif'
import edition14 from '../assets/Edition-14.avif'
import agentcraft from '../assets/AgentCraft.avif'
import womenWhoBuild from '../assets/Women-Who-Build.webp'
import edition1 from '../assets/Mission_Vision.webp'

export type EventStatus = 'upcoming' | 'completed' | 'partner'

export interface CommunityEvent {
  /** Build & Blend edition number, when it is one. */
  edition?: number
  title: string
  series: 'Build & Blend' | 'Women Who Build' | 'Partner event'
  /** ISO date when known; used for sorting only. */
  date?: string
  dateLabel: string
  time?: string
  venue?: string
  area?: string
  price?: string
  status: EventStatus
  /** One honest line, in the community's own words where we have them. */
  note?: string
  poster?: string
  url?: string
}

/**
 * Update this list when a new edition is announced: add it with
 * status 'upcoming' and move the previous one to 'completed'.
 * The hero ticket renders whichever event is 'upcoming'.
 */
export const events: CommunityEvent[] = [
  {
    edition: 17,
    title: 'Build & Blend 17',
    series: 'Build & Blend',
    date: '2026-10-14',
    dateLabel: 'Wed 14 Oct 2026',
    time: '7–10 PM',
    venue: 'Time Café',
    area: 'Nungambakkam',
    price: 'Usually ₹250, snacks included',
    status: 'upcoming',
    poster: edition17,
    url: LUMA_EVENT_URL,
  },
  {
    edition: 16,
    title: 'Build & Blend 16',
    series: 'Build & Blend',
    date: '2026-10-07',
    dateLabel: 'Wed 7 Oct 2026',
    time: '7–10 PM',
    venue: 'The Love Hope Company',
    area: 'Adyar',
    status: 'completed',
    poster: edition16,
  },
  {
    edition: 15,
    title: 'Build & Blend 15',
    series: 'Build & Blend',
    date: '2026-09-30',
    dateLabel: 'Wed 30 Sep 2026',
    time: '7–10 PM',
    venue: 'Madras Adda',
    area: 'Mylapore',
    price: '₹250, snacks included',
    status: 'completed',
    poster: edition15,
  },
  {
    edition: 14,
    title: 'Build & Blend 14',
    series: 'Build & Blend',
    date: '2026-09-23',
    dateLabel: 'Wed 23 Sep 2026',
    time: '7–10 PM',
    venue: 'The Love Hope Company',
    area: 'Adyar',
    status: 'completed',
    note: '“8 people. 3 hours. A lot happened in one room.”',
    poster: edition14,
  },
  {
    title: 'AgentCraft',
    series: 'Partner event',
    date: '2026-09-19',
    dateLabel: 'Sat 19 Sep 2026',
    time: '10 AM–5 PM',
    venue: 'House of Cyces',
    area: 'Chennai',
    status: 'partner',
    note: 'One-day AI agent builders’ event. We were community partner, not host.',
    poster: agentcraft,
  },
  {
    title: 'Women Who Build #1',
    series: 'Women Who Build',
    date: '2026-09-14',
    dateLabel: 'Mon 14 Sep 2026',
    status: 'completed',
    note: 'Participants built prototypes, pitched to buyers, and made ₹4,300 combined.',
    poster: womenWhoBuild,
  },
  {
    edition: 13,
    title: 'Build & Blend 13',
    series: 'Build & Blend',
    date: '2026-09-13',
    dateLabel: 'Sep 2026',
    status: 'completed',
    note: '“Build something. Find users. Let’s talk about money.”',
  },
  {
    edition: 12,
    title: 'Build & Blend 12',
    series: 'Build & Blend',
    date: '2026-09-06',
    dateLabel: 'Sun 6 Sep 2026',
    venue: 'Time Café',
    area: 'Nungambakkam',
    status: 'completed',
  },
  {
    edition: 11,
    title: 'Build & Blend 11',
    series: 'Build & Blend',
    dateLabel: '2026',
    status: 'completed',
    note: 'Hosted by Shankar K. A parent to-do app got built in the room.',
  },
  {
    edition: 1,
    title: 'Build & Blend 1',
    series: 'Build & Blend',
    date: '2026-07-08',
    dateLabel: 'Wed 8 Jul 2026',
    time: '7–10 PM',
    venue: 'Third Wave Coffee',
    area: 'Adyar',
    status: 'completed',
    note: 'The first one. 6 people, after several cancellations. Closed-door by design.',
    poster: edition1,
  },
]

export const upcomingEvent = events.find((e) => e.status === 'upcoming')
export const pastEvents = events.filter((e) => e.status !== 'upcoming')

/** Highest Build & Blend edition number we have on record. */
export const latestEdition = Math.max(...events.map((e) => e.edition ?? 0))

export { LUMA_PROFILE_URL }
