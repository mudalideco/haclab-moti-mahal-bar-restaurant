'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { MapPin, Clock, Phone, Car } from 'lucide-react'
import { business } from '@/data/content'

const Map = dynamic(() => import('@/components/MapEmbed').then(m => ({ default: m.default })), {
  ssr: false,
  loading: () => <div className="h-80 bg-muted animate-pulse rounded-lg" />
})

export function LocationHours() {
  return (
    <section className="section-padding bg-background" id="location">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="h-80 lg:h-full min-h-[320px] rounded-lg overflow-hidden border border-border"
          >
            <Map address={business.address} />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Visit Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Find us at <span className="text-foreground font-medium">46 Iganga Road, Jinja</span> — just a short walk from the Source of the Nile gardens and opposite the main taxi park.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Opening Hours</p>
                  <p className="text-muted-foreground">{business.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone &amp; WhatsApp</p>
                  <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Parking</p>
                  <p className="text-muted-foreground">{business.parking}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Landmark</p>
                  <p className="text-muted-foreground">{business.landmark}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
