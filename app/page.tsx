import { HeroSection } from "@/components/home/HeroSection"
import { WelcomeSection } from "@/components/home/WelcomeSection"
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences"
import { RoomsCarousel } from "@/components/home/RoomsCarousel"
import { PoolSpotlight } from "@/components/home/PoolSpotlight"
import { GuestExperience } from "@/components/home/GuestExperience"
import { LocationSection } from "@/components/home/LocationSection"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      <WelcomeSection />
      <FeaturedExperiences />
      <RoomsCarousel />
      <PoolSpotlight />
      <GuestExperience />
      <LocationSection />
      <FinalCTA />
    </div>
  )
}
