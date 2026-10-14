import { useId, useRef, useState } from 'react'
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/site'
import Reveal from './ui/Reveal'
import { WhatsAppIcon } from './ui/Icons'

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
const REQUIRED: (keyof Values)[] = ['name', 'email', 'message']

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email.'
  if (v.message.trim().length < 10) e.message = 'Add a short message.'
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
  const formRef = useRef<HTMLFormElement>(null)

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
    const firstBad = REQUIRED.find((k) => errs[k])
    if (firstBad) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus()
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
    } catch { /* clipboard unavailable */ }
  }

  const Err = ({ k }: { k: keyof Values }) =>
    touched[k] && errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-1.5 text-sm font-medium text-orange-deep">{errors[k]}</p>
    ) : null

  const label = 'meta mb-2 block text-ink/70'

  return (
    <section id="join" aria-labelledby="join-title" className="bg-paper-2 section-pad">
      <div className="container-site">
        <Reveal className="grid overflow-hidden rounded-2xl bg-ink text-paper on-ink lg:grid-cols-12">
          <div className="p-8 md:p-12 lg:col-span-5 lg:p-14">
            <h2 id="join-title" className="display-lg">
              Pull up a chair. <span className="text-orange">Bring a laptop.</span>
            </h2>
          </div>

          <div className="bg-paper p-8 text-ink md:p-12 lg:col-span-7 lg:p-14">
            {status === 'sent' ? (
              <div role="status" aria-live="polite" className="flex h-full flex-col justify-center">
                <h3 className="display-md">Now hit send in WhatsApp.</h3>
                <p className="mt-4 text-ink/70">Didn’t open? Copy it to {WHATSAPP_DISPLAY}.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="button" onClick={copy} className="btn btn-quiet btn-sm">{copied ? 'Copied' : 'Copy message'}</button>
                  <button type="button" onClick={() => setStatus('idle')} className="btn btn-sm text-ink/70 underline underline-offset-4 hover:text-ink">
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${uid}-name`} className={label}>Name</label>
                    <input {...field('name')} type="text" autoComplete="name" className="field" required />
                    <Err k="name" />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-email`} className={label}>Email</label>
                    <input {...field('email')} type="email" autoComplete="email" inputMode="email" className="field" required />
                    <Err k="email" />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${uid}-intent`} className={label}>I want to</label>
                  <select {...field('intent')} className="field">
                    {INTENTS.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor={`${uid}-message`} className={label}>Message</label>
                  <textarea {...field('message')} rows={4} className="field" required />
                  <Err k="message" />
                </div>

                <div className="pt-1">
                  <button type="submit" className="btn btn-primary">
                    Send on WhatsApp
                    <WhatsAppIcon size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
