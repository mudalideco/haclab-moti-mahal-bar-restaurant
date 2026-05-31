'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/content'

function TestimonialCard({ quote, name, rating, index }: { quote: string; name: string; rating: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 md:p-8 border border-border hover:shadow-elevated transition-shadow duration-300 h-full"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`}
          />
        ))}
      </div>
      <blockquote className="text-foreground leading-relaxed mb-6">&ldquo;{quote}&rdquo;</blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-semibold text-sm">
          {name.charAt(0)}
        </div>
        <span className="font-medium text-foreground">{name}</span>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/50" id="testimonials">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the people who make Moti Mahal their go-to Indian restaurant in Jinja.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
