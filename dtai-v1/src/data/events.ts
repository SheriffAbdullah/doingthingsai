import { LUMA_EVENT_URL } from './site'

export type EventStatus = 'upcoming' | 'completed' | 'partner'

export interface CommunityEvent {
  /** Build & Blend edition number, when it is one. */
  edition?: number
  title: string
  dateLabel: string
  time?: string
  venue?: string
  area?: string
  price?: string
  status: EventStatus
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
    dateLabel: 'Wed 14 Oct 2026',
    time: '7–10 PM',
    venue: 'Time Café',
    area: 'Nungambakkam',
    price: 'Usually ₹250, snacks included',
    status: 'upcoming',
    url: LUMA_EVENT_URL,
  },
  { edition: 16, title: 'Build & Blend 16', dateLabel: '7 Oct 2026', venue: 'The Love Hope Company', area: 'Adyar', status: 'completed' },
  { edition: 15, title: 'Build & Blend 15', dateLabel: '30 Sep 2026', venue: 'Madras Adda', area: 'Mylapore', status: 'completed' },
  { edition: 14, title: 'Build & Blend 14', dateLabel: '23 Sep 2026', venue: 'The Love Hope Company', area: 'Adyar', status: 'completed' },
  { title: 'AgentCraft', dateLabel: '19 Sep 2026', venue: 'House of Cyces', area: 'Chennai', status: 'partner' },
  { title: 'Women Who Build #1', dateLabel: '14 Sep 2026', status: 'completed' },
  { edition: 13, title: 'Build & Blend 13', dateLabel: 'Sep 2026', status: 'completed' },
  { edition: 12, title: 'Build & Blend 12', dateLabel: '6 Sep 2026', venue: 'Time Café', area: 'Nungambakkam', status: 'completed' },
  { edition: 11, title: 'Build & Blend 11', dateLabel: '2026', status: 'completed' },
  { edition: 1, title: 'Build & Blend 1', dateLabel: '8 Jul 2026', venue: 'Third Wave Coffee', area: 'Adyar', status: 'completed' },
]

export const upcomingEvent = events.find((e) => e.status === 'upcoming')
export const pastEvents = events.filter((e) => e.status !== 'upcoming')
