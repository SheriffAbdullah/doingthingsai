/**
 * Site-wide constants. Everything here is sourced from recon/ or the
 * community's own posters. Edit here, not in components.
 */
export const LUMA_EVENT_URL = 'https://luma.com/00dhanbk'
export const LUMA_PROFILE_URL = 'https://luma.com/user/DoingThingsAI'
export const INSTAGRAM_URL = 'https://instagram.com/doingthingsai'
export const LINKEDIN_URL = 'https://linkedin.com/in/chandrasekar-jayapalan'
export const X_URL = 'https://x.com/chandru2win'
export const WHATSAPP_NUMBER = '919677295965'
export const WHATSAPP_DISPLAY = '+91 96772 95965'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

/** The single CTA verb used everywhere on the page. */
export const CTA_LABEL = 'Join the Build'

/**
 * Builder names come from public Instagram posts by @doingthingsai.
 * Flip to false to show builds without naming people until Chandru confirms
 * each person is happy to be featured.
 */
export const SHOW_BUILDER_NAMES = true

export const NAV_LINKS = [
  { label: 'Builds', href: '#builds' },
  { label: 'Nights', href: '#nights' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'People', href: '#people' },
  { label: 'FAQ', href: '#faq' },
] as const
