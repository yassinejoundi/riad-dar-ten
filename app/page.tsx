import { HeroSection } from "@/components/home/HeroSection"
import { RestaurantStory } from "@/components/home/RestaurantStory"

export default function Home() {
  return (
    <div className="overflow-hidden bg-cream text-midnight-blue">
      <HeroSection />
      <RestaurantStory />
    </div>
  )
}
