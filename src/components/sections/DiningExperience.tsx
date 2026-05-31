'use client'

import { motion } from 'framer-motion'
import { UtensilsCrossed, Package, ChefHat, Wifi, Users, Wind, Car } from 'lucide-react'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  { icon: <Wind className="w-6 h-6" />, title: 'Air-Cooled Comfort', description: 'Relax in our climate-controlled dining room' },
  { icon: <Users className="w-6 h-6" />, title: 'Family-Friendly', description: 'Warm atmosphere perfect for all ages' },
  { icon: <Wifi className="w-6 h-6" />, title: 'Free Wi-Fi', description: 'Stay connected while you dine' },
  { icon: <Car className="w-6 h-6" />, title: 'Easy Parking', description: 'Street parking available on Iganga Road' },
]

export function DiningExperience() {
  return (
    <section className="section-padding bg-muted/30" id="experience">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            More Than a Meal. <span className="text-primary">An Experience.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Step into our warm, inviting dining room on Iganga Road. Whether you&apos;re celebrating with family, grabbing lunch with colleagues, or enjoying a quiet dinner — every visit feels like home.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 border border-border hover:shadow-elevated transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
