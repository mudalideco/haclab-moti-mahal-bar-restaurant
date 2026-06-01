'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { business } from '@/data/content'

const THALI_IMAGE = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1600&auto=format&fit=crop"

export function ThaliSpotlight() {
  return (
    <section className="section-padding bg-background" id="thali">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src={THALI_IMAGE}
                alt="Moti Mahal Signature Thali meal with assorted curries, breads, and accompaniments"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent/30 rounded-lg -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <Badge variant="secondary" className="text-xs tracking-wider uppercase">
              ★ Most Popular
            </Badge>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              The Moti Mahal{' '}
              <span className="text-primary">Thali Experience</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A generous platter of our finest curries, dal makhani, fragrant biryani,
              fresh naan, raita, salad, and a sweet finish — served with complimentary
              ginger juice and crispy papadums. Every Thali is a journey through India's
              rich culinary landscape.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Price</span>
                <p className="font-heading text-xl font-bold text-primary">
                  35,000 - 55,000 UGX
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Options</span>
                <p className="font-semibold">Vegetarian &amp; Non-Vegetarian</p>
              </div>
            </div>

            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton>
                <Button size="lg" className="gap-2">
                  Order Thali Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </MagneticButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
