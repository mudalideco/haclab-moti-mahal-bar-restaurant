'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  y?: number
  opacity?: number
  duration?: number
  stagger?: number
  trigger?: string | Element
  start?: string
}

export function ScrollReveal({
  children,
  className = '',
  y = 40,
  opacity = 0,
  duration = 0.8,
  stagger = 0,
  trigger,
  start = 'top 85%'
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const elements = ref.current.children.length > 0 ? Array.from(ref.current.children) : [ref.current]
    
    gsap.from(elements, {
      y,
      opacity,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || ref.current,
        start,
        once: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.refresh())
    }
  }, [y, opacity, duration, stagger, trigger, start])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
