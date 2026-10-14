import { Spark } from './Icons'

/** The orange spark badge plus the name. Same size in the nav and the footer. */
export default function Wordmark() {
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
