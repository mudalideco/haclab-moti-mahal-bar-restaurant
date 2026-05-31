'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { business } from '@/data/content'
import { stats } from '@/data/content'

function ClipPathImage() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={isInView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop"
          alt="Traditional Indian spices and ingredients in a market"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/40 rounded-lg -z-10" />
    </motion.section>
  )
}

export function AboutHeritage() {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ClipPathImage />

          {/* Content Side */}
          <div className="space-y-6">
            <span className="text-accent font-accent text-lg italic">
              <SplitReveal type="words" stagger={0.04} duration={0.9} ease="power3.out">
                A Taste of History
              </SplitReveal>
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <SplitReveal type="words" stagger={0.04} duration={0.9} ease="power3.out">
                Since 1947, Born in Delhi
              </SplitReveal>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Moti Mahal was born in the heart of Delhi in 1947, where our founders invented the dishes that define Indian cuisine today —{' '}
                <span className="text-foreground font-medium">tandoori chicken</span>,{' '}
                <span className="text-foreground font-medium">butter chicken</span>, and{' '}
                <span className="text-foreground font-medium">dal makhani</span>.
              </p>
              <p>
                Over seven decades later, we bring that same passion, those same recipes, and that same warmth to Jinja. At our Iganga Road restaurant, every dish is made from scratch using traditional techniques and the finest spices. No shortcuts. No compromises. Just authentic Indian food, made with love.
              </p>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, stagger: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
