'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { business } from '@/data/content'

const contactMethods = [
  { icon: 'phone', title: 'Call Us', detail: business.phone, href: `tel:${business.phone.replace(/\s/g, '')}` },
  { icon: 'message-circle', title: 'WhatsApp', detail: 'Chat with us', href: business.whatsappUrl },
  { icon: 'map-pin', title: 'Visit Us', detail: '46 Iganga Rd, Jinja', href: `https://maps.google.com/?q=${encodeURIComponent(business.address)}` },
]

export function FinalCTA() {
  return (
    <section className="section-padding bg-background relative overflow-hidden" id="contact">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
                alt="Indian restaurant dining room with warm lighting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent/30 rounded-lg -z-10" />
          </motion.div>

          {/* Right — Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-8 md:p-10 border border-border shadow-elevated"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience Authentic Indian Dining?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Walk-ins welcome. Reservations recommended for groups of 6+. We can&apos;t wait to serve you.
            </p>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="text-primary font-medium text-sm">{method.title}</span>
                  <span className="text-foreground text-sm mt-1">{method.detail}</span>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Message on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
