import { HeroSection } from "@/components/home/HeroSection"
import { WelcomeSection } from "@/components/home/WelcomeSection"
import { RoomsCarousel } from "@/components/home/RoomsCarousel"
import { PoolSpotlight } from "@/components/home/PoolSpotlight"
import { GuestExperience } from "@/components/home/GuestExperience"
import { LocationSection } from "@/components/home/LocationSection"
import { FinalCTA } from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <HeroSection />
      <WelcomeSection />
      <RoomsCarousel />
      <PoolSpotlight />
      <GuestExperience />
      <LocationSection />
      <FinalCTA />
    </div>
  )
}
