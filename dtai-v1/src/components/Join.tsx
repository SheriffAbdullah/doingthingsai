import { useId, useRef, useState } from 'react'
import { CTA_LABEL, INSTAGRAM_URL, LUMA_EVENT_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_URL } from '../data/site'
import Reveal from './ui/Reveal'
import { ArrowUpRight, InstagramIcon, WhatsAppIcon } from './ui/Icons'

type Intent = 'attend' | 'host' | 'partner' | 'speak'

const INTENTS: { value: Intent; label: string; verb: string }[] = [
  { value: 'attend', label: 'Come and build', verb: 'come to the next Build & Blend' },
  { value: 'host', label: 'Host a night at my space', verb: 'host a Build & Blend at my space' },
  { value: 'partner', label: 'Partner on an event', verb: 'partner with Doing Things AI on an event' },
  { value: 'speak', label: 'Demo something I built', verb: 'demo something I built at a session' },
]

interface Values { name: string; email: string; intent: Intent; message: string }
type Errors = Partial<Record<keyof Values, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Tell us your name (at least 2 characters).'
  if (!v.email.trim()) e.email = 'We need an email so Chandru can reply if WhatsApp doesn’t go through.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'That email doesn’t look right. Check for a typo?'
  if (v.message.trim().length < 10) e.message = 'A sentence or two is enough, but we need at least 10 characters.'
  return e
}

function buildMessage(v: Values) {
  const intent = INTENTS.find((i) => i.value === v.intent)!
  return `Hi Chandru! I'd like to ${intent.verb}.\n\nName: ${v.name.trim()}\nEmail: ${v.email.trim()}\n\n${v.message.trim()}`
}

export default function Join() {
  const uid = useId()
  const [values, setValues] = useState<Values>({ name: '', email: '', intent: 'attend', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [copied, setCopied] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)

  const field = (k: keyof Values) => ({
    id: `${uid}-${k}`,
    name: k,
    value: values[k],
    'aria-invalid': touched[k] && errors[k] ? true : undefined,
    'aria-describedby': touched[k] && errors[k] ? `${uid}-${k}-err` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = { ...values, [k]: e.target.value }
      setValues(next)
      if (touched[k]) setErrors(validate(next))
    },
    onBlur: () => {
      setTouched((t) => ({ ...t, [k]: true }))
      setErrors(validate(values))
    },
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errs).length) {
      summaryRef.current?.focus()
      return
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(values))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('sent')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage(values))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard unavailable; the textarea below still shows the text */ }
  }

  const Err = ({ k }: { k: keyof Values }) =>
    touched[k] && errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-1.5 text-sm font-medium text-orange-deep">{errors[k]}</p>
    ) : null

  const errorList = Object.entries(errors).filter(([k]) => touched[k as keyof Values])

  return (
    <section id="join" aria-labelledby="join-title" className="bg-paper-2 section-pad">
      <div className="container-site">
        <Reveal className="grid overflow-hidden rounded-2xl bg-ink text-paper on-ink shadow-[0_0_0_1px_rgb(21_19_15/0.1)] lg:grid-cols-12">
          {/* Left: the ask */}
          <div className="flex flex-col justify-between gap-10 p-7 md:p-10 lg:col-span-5 lg:p-12">
            <div>
              <p className="eyebrow text-orange mb-5">Join, host, or partner</p>
              <h2 id="join-title" className="display-lg">
                Pull up a chair. <span className="text-orange">Bring a laptop.</span>
              </h2>
              <p className="mt-5 text-paper/70">
                RSVPs for the next night happen on Luma. Everything else, from hosting a session to
                showing what you built, starts with a message.
              </p>
            </div>
            <ul className="grid gap-3 border-t hairline pt-6 text-sm">
              <li>
                <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer" className="link-arrow text-paper hover:text-orange" style={{ textDecorationColor: 'rgb(244 239 230 / 0.3)' }}>
                  {CTA_LABEL} on Luma <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-arrow text-paper hover:text-orange" style={{ textDecorationColor: 'rgb(244 239 230 / 0.3)' }}>
                  <WhatsAppIcon size={15} /> {WHATSAPP_DISPLAY} <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="link-arrow text-paper hover:text-orange" style={{ textDecorationColor: 'rgb(244 239 230 / 0.3)' }}>
                  <InstagramIcon size={15} /> @doingthingsai <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Right: the form */}
          <div className="bg-paper p-7 text-ink md:p-10 lg:col-span-7 lg:p-12">
            {status === 'sent' ? (
              <div role="status" aria-live="polite" className="flex h-full flex-col justify-center">
                <span className="stamp self-start text-orange-deep text-base">Sent to WhatsApp</span>
                <h3 className="display-md mt-6">Your message is pre-filled. Hit send over there.</h3>
                <p className="mt-4 text-ink/70">
                  If WhatsApp didn’t open, copy the message and send it to {WHATSAPP_DISPLAY} yourself.
                </p>
                <textarea readOnly className="field mt-5 !min-h-[9rem] text-sm" value={buildMessage(values)} aria-label="Your message" />
                <div className="mt-4 flex flex-wrap gap-3">
                  <button type="button" onClick={copy} className="btn btn-quiet btn-sm">{copied ? 'Copied' : 'Copy message'}</button>
                  <button type="button" onClick={() => setStatus('idle')} className="btn btn-sm text-ink/70 hover:text-ink underline underline-offset-4">
                    Edit and resend
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <div
                  ref={summaryRef}
                  tabIndex={-1}
                  role="alert"
                  aria-live="assertive"
                  className={errorList.length ? 'rounded-lg border border-orange-deep/40 bg-orange/10 p-4 text-sm' : 'sr-only'}
                >
                  {errorList.length > 0 && (
                    <>
                      <p className="font-semibold">Fix {errorList.length === 1 ? 'this' : 'these'} and try again:</p>
                      <ul className="mt-1 list-disc pl-5">
                        {errorList.map(([k, msg]) => (
                          <li key={k}><a href={`#${uid}-${k}`} className="underline underline-offset-2">{msg}</a></li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${uid}-name`} className="meta mb-2 block text-ink/70">Name</label>
                    <input {...field('name')} type="text" autoComplete="name" placeholder="What should we call you?" className="field" required />
                    <Err k="name" />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-email`} className="meta mb-2 block text-ink/70">Email</label>
                    <input {...field('email')} type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" className="field" required />
                    <Err k="email" />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${uid}-intent`} className="meta mb-2 block text-ink/70">I want to</label>
                  <select {...field('intent')} className="field">
                    {INTENTS.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor={`${uid}-message`} className="meta mb-2 block text-ink/70">Message</label>
                  <textarea
                    {...field('message')}
                    rows={4}
                    placeholder={values.intent === 'host' ? 'Where is the space, how many people fits, what nights work?' : 'What are you building, or what do you want to build?'}
                    className="field"
                    required
                  />
                  <Err k="message" />
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                  <button type="submit" className="btn btn-primary">
                    Send on WhatsApp
                    <WhatsAppIcon size={16} />
                  </button>
                  <p className="text-sm text-ink/65">Opens WhatsApp with this pre-filled. Nothing is stored here.</p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
