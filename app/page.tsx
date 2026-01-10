import { HeroSection } from "@/components/home/HeroSection"
import { WelcomeSection } from "@/components/home/WelcomeSection"
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      <WelcomeSection />
      <FeaturedExperiences />
    </div>
  )
}
