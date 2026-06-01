import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { ThaliSpotlight } from '@/components/sections/ThaliSpotlight'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { AboutHeritage } from '@/components/sections/AboutHeritage'
import { LegacyTimeline } from '@/components/sections/LegacyTimeline'
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThaliSpotlight />
        <MenuPreview />
        <AboutHeritage />
        <LegacyTimeline />
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
