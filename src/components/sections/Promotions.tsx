'use client'

import { motion } from 'framer-motion'
import { Tag } from 'lucide-react'

export function Promotions() {
  return (
    <section className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="promo-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="currentColor" />
              <rect x="20" y="20" width="20" height="20" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#promo-pattern)" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-medium mb-6">
            <Tag className="w-4 h-4" />
            Special Offer
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Complimentary Ginger Juice &amp; Papadums
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            With every Thali meal — our gift to you. Because at Moti Mahal, hospitality comes first.
            Enjoy the perfect start to your meal with our freshly prepared ginger juice and crispy papadums.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-lg px-6 py-3">
            <span className="text-accent font-semibold">Monday - Friday Lunch Special</span>
            <span className="text-white/40">|</span>
            <span className="text-white">10% off all main courses (12PM - 3PM)</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
