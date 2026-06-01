'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Milestone {
  year: string
  title: string
  description: string
  highlight: string
  image: string
}

const milestones: Milestone[] = [
  {
    year: '1947',
    title: 'Born in Delhi',
    description:
      'Moti Mahal was founded in the heart of Old Delhi, drawing from generations of Punjabi culinary tradition. The original dhaba-style kitchen became legendary among locals for its bold, aromatic flavors.',
    highlight: 'The year India gained independence — and a culinary legacy began.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: '1950',
    title: 'Tandoori Chicken Perfected',
    description:
      'Our founders pioneered the tandoori cooking technique that became the hallmark of Indian cuisine worldwide. Marinated in yogurt and over 15 hand-ground spices, then roasted in a clay tandoor — the recipe remains unchanged to this day.',
    highlight: 'The dish that put Indian food on the global map.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: '1970',
    title: 'Butter Chicken Invented',
    description:
      'In a moment of inspired improvisation, our chefs combined leftover tandoori chicken pieces with a rich, creamy tomato gravy enriched with butter and cream. The dish was an instant sensation — and remains our most ordered creation.',
    highlight: 'Accidental genius: leftover tandoori chicken + tomato cream sauce.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: '2000',
    title: 'Journey to Jinja',
    description:
      'Carrying our family recipes and traditions across continents, Moti Mahal found a new home in Jinja, Uganda. We brought the same clay tandoors, the same spice blends, and the same unwavering commitment to authenticity.',
    highlight: 'From the banks of the Yamuna to the shores of Lake Victoria.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
  },
  {
    year: 'Today',
    title: 'Serving Jinja with Pride',
    description:
      'At 46 Iganga Road, we continue the Moti Mahal legacy every single day. From our signature Thali spreads to our famous Kulfi Milkshake, every dish carries nearly a century of passion, tradition, and love for Indian food.',
    highlight: '75+ years. One recipe. Countless smiles.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
  },
]

function TimelineCard({
  milestone,
  index,
}: {
  milestone: Milestone
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative pb-16 last:pb-0">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`
          relative ml-8 md:ml-0 md:w-[calc(50%-2rem)]
          ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
        `}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-accent/20 p-6 md:p-8 hover:border-accent/50 transition-colors duration-500">
          {/* Year — oversized accent */}
          <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-accent/20 leading-none block -mb-2 select-none">
            {milestone.year}
          </span>

          {/* Title */}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-2 mb-3">
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
            {milestone.description}
          </p>

          {/* Highlight quote */}
          <div className="border-l-2 border-accent pl-4">
            <p className="font-accent text-accent text-base italic">
              &ldquo;{milestone.highlight}&rdquo;
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline dot connector */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute left-0 top-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-foreground z-10 shadow-[0_0_12px_rgba(201,168,76,0.4)]"
      />
    </div>
  )
}

export function LegacyTimeline() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' })

  return (
    <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <span className="font-accent text-accent text-lg md:text-xl italic mb-4 block">
            Nearly a Century of Flavor
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Moti Mahal{' '}
            <span className="text-accent">Legacy</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our story isn&apos;t just about food — it&apos;s about passion, innovation, and
            the relentless pursuit of authentic flavor. From a small kitchen in Old Delhi
            to our dining room in Jinja, every chapter is seasoned with tradition.
          </p>
        </motion.div>

        {/* Timeline Line (desktop) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[9px] top-0 bottom-0 w-px bg-accent/20 hidden md:block md:left-1/2 md:-translate-x-px" />

          {/* Milestones */}
          <div className="relative">
            {milestones.map((milestone, index) => (
              <TimelineCard
                key={milestone.year}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-medium text-sm">
              Every dish tells a story. Come taste the legacy.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Gold bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </section>
  )
}
