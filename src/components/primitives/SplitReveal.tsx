'use client'

import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitRevealProps {
  children: string
  as?: keyof JSX.IntrinsicElements
  type?: 'chars' | 'words' | 'lines'
  stagger?: number
  duration?: number
  ease?: string
  className?: string
}

export function SplitReveal({
  children,
  as: Tag = 'span',
  type = 'words',
  stagger = 0.04,
  duration = 0.9,
  ease = 'power3.out',
  className,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const split = new SplitType(ref.current, { types: type })
    const items = type === 'chars' ? split.chars : type === 'words' ? split.words : split.lines
    if (!items) return

    ref.current.style.overflow = 'hidden'

    gsap.from(items, {
      yPercent: 110,
      opacity: 0,
      stagger,
      duration,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 88%',
        once: true,
      },
    })

    return () => split.revert()
  }, [type, stagger, duration, ease])

  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  )
}
