import { Spark } from './Icons'

/**
 * The orange spark badge plus the name. `md` is the nav size; `xl` is the
 * footer sign-off, sized in em so the badge scales with the type.
 */
export default function Wordmark({ size = 'md' }: { size?: 'md' | 'xl' }) {
  if (size === 'xl') {
    return (
      <span className="wordmark-xl inline-flex items-center gap-[0.14em] font-display font-extrabold">
        <span className="grid h-[0.62em] w-[0.62em] shrink-0 place-items-center rounded-[0.12em] bg-orange text-ink" aria-hidden="true">
          <Spark size={16} className="h-[60%] w-[60%]" />
        </span>
        <span>Doing Things AI</span>
      </span>
    )
  }
  return (
    <>
      <span className="grid h-8 w-8 place-items-center rounded-md bg-orange text-ink">
        <Spark size={16} />
      </span>
      <span className="font-display text-[1.2rem] font-extrabold leading-none tracking-[-0.03em]">
        Doing Things AI
      </span>
    </>
  )
}
