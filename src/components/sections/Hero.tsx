'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { ParallaxLayer } from '@/components/primitives/ParallaxLayer'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { business } from '@/data/content'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1600&auto=format&fit=crop'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-foreground"
    >
      {/* Background Image with Parallax */}
      <ParallaxLayer depth={0.25} className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={HERO_IMAGE}
            alt="Tandoori chicken and Indian cuisine platter at Moti Mahal"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </ParallaxLayer>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50" />

      {/* Content */}
      <div className="relative z-10 container-wide">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Since 1947 — Born in Delhi
          </div>

          {/* Headline — premium SplitReveal */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <SplitReveal
              type="words"
              stagger={0.04}
              duration={0.9}
              ease="power3.out"
            >
              Authentic Indian Flavors. Right Here in Jinja.
            </SplitReveal>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-lg mb-8 font-body">
            Thali Specialists | Tandoori Chicken | Butter Chicken | Dine-In &amp; Takeaway
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <MagneticButton>
              <Button
                size="lg"
                className="gap-2 text-base group relative overflow-hidden"
                onClick={scrollToMenu}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Our Menu
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Pulse glow ring */}
                <span className="absolute inset-0 rounded-md ring-2 ring-accent/40 animate-pulse-slow group-hover:ring-accent/70 transition-all duration-500" />
              </Button>
            </MagneticButton>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-base border-white/30 text-white hover:bg-white hover:text-foreground"
                >
                  <Phone className="w-4 h-4" />
                  Order via WhatsApp
                </Button>
              </MagneticButton>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="text-white/60 text-sm">
              <span className="text-accent font-semibold">75+</span> Years of Heritage
            </div>
            <div className="text-white/60 text-sm">
              <span className="text-accent font-semibold">100+</span> Dishes
            </div>
            <div className="text-white/60 text-sm">
              <span className="text-accent font-semibold">Dine-In</span> &amp; Takeaway
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
