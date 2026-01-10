import { HeroSection } from "@/components/home/HeroSection"
import { WelcomeSection } from "@/components/home/WelcomeSection"
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences"
import { RoomsCarousel } from "@/components/home/RoomsCarousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      <WelcomeSection />
      <FeaturedExperiences />
      <RoomsCarousel />
    </div>
  )
}
