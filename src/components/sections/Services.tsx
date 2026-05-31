'use client'

import { motion } from 'framer-motion'
import { UtensilsCrossed, Package, ChefHat } from 'lucide-react'
import { services, business } from '@/data/content'
import { MagneticButton } from '@/components/primitives/MagneticButton'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const iconMap: Record<string, React.ReactNode> = {
  'utensils-crossed': <UtensilsCrossed className="w-6 h-6" />,
  'package': <Package className="w-6 h-6" />,
  'chef-hat': <ChefHat className="w-6 h-6" />,
}

export function Services() {
  return (
    <section className="section-padding bg-muted/50" id="services">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Serve You
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you&apos;re dining with us, taking food home, or planning an event — we make every experience memorable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 border border-border hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((f) => (
                  <span key={f} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    {f}
                  </span>
                ))}
              </div>
              {service.title === 'Takeaway' ? (
                <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MagneticButton>
                    <span className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                      {service.cta} →
                    </span>
                  </MagneticButton>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  {service.cta} →
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
