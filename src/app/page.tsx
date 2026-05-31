import dynamic from 'next/dynamic'

// Dynamic imports for client-only sections (avoid SSR issues)
import { ThaliSpotlight } from '@/components/sections/ThaliSpotlight'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { AboutHeritage } from '@/components/sections/AboutHeritage'
import { DiningExperience } from '@/components/sections/DiningExperience'
import { Testimonials } from '@/components/sections/Testimonials'
import { FoodGallery } from '@/components/sections/FoodGallery'
import { Services } from '@/components/sections/Services'
import { WhatsAppButton } from '@/components/sections/WhatsAppButton'
import { Promotions } from '@/components/sections/Promotions'
import { LocationHours } from '@/components/sections/LocationHours'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { BackToTop } from '@/components/sections/BackToTop'

const Header = dynamic(() => import('@/components/sections/Header').then(m => ({ default: m.Header })))
const Hero = dynamic(() => import('@/components/sections/Hero').then(m => ({ default: m.Hero })))

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThaliSpotlight />
        <MenuPreview />
        <AboutHeritage />
        <DiningExperience />
        <Testimonials />
        <FoodGallery />
        <Services />
        <Promotions />
        <LocationHours />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
