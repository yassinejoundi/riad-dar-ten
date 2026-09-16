import { DiningExperience } from "@/components/home/DiningExperience"
import { HeroSection } from "@/components/home/HeroSection"
import { RestaurantStory } from "@/components/home/RestaurantStory"
import { SeasonalMenu } from "@/components/home/SeasonalMenu"
import { VisitReservation } from "@/components/home/VisitReservation"

export default function Home() {
  return (
    <div className="overflow-hidden bg-cream text-midnight-blue">
      <HeroSection />
      <RestaurantStory />
      <SeasonalMenu />
      <DiningExperience />
      <VisitReservation />
    </div>
  )
}
