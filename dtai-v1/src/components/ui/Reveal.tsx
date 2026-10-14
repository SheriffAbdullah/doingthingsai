import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Seconds. Small stagger between sibling reveals. */
  delay?: number
  as?: ElementType
  /** Rise each child in turn (--stagger-step apart) instead of the element as one block. */
  stagger?: boolean
  className?: string
  [attr: string]: unknown
}

/**
 * Fade + 12px rise, once, as soon as any part of the element is in view.
 * Pure CSS (.reveal / .stagger / .is-in in index.css); the observer only adds a class.
 * If IntersectionObserver is missing the content shows immediately, and
 * prefers-reduced-motion disables the transition in CSS.
 */
export default function Reveal({ children, delay = 0, as = 'div', stagger = false, className = '', ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setShown(true); io.disconnect() }
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return createElement(
    as,
    {
      ref,
      className: `${stagger ? 'stagger' : 'reveal'} ${shown ? 'is-in' : ''} ${className}`.trim(),
      style: delay && !stagger ? { transitionDelay: `${delay}s` } : undefined,
      ...rest,
    },
    children,
  )
}
