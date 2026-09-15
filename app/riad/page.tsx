import { Metadata } from "next"
import { RiadHero } from "@/components/riad/RiadHero"
import { OurStory } from "@/components/riad/OurStory"
import { ArchitectureDesign } from "@/components/riad/ArchitectureDesign"
import { CourtyardPool } from "@/components/riad/CourtyardPool"
import { RooftopTerrace } from "@/components/riad/RooftopTerrace"
import { DiningExperience } from "@/components/riad/DiningExperience"
import { AmenitiesServices } from "@/components/riad/AmenitiesServices"
import { LocationNeighborhood } from "@/components/riad/LocationNeighborhood"
import { RiadCTA } from "@/components/riad/RiadCTA"

export const metadata: Metadata = {
  title: "The Riad | Riad Dar Ten",
  description:
    "Step inside Riad Dar Ten: a six-room Marrakech guesthouse with a tranquil courtyard pool, rooftop terrace and warm Moroccan hospitality.",
}

export default function RiadPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-midnight-blue">
      <RiadHero />
      <OurStory />
      <ArchitectureDesign />
      <CourtyardPool />
      <RooftopTerrace />
      <DiningExperience />
      <AmenitiesServices />
      <LocationNeighborhood />
      <RiadCTA />
    </div>
  )
}
