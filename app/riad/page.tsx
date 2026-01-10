import { Metadata } from "next"
import { RiadHero } from "@/components/riad/RiadHero"
import { OurStory } from "@/components/riad/OurStory"
import { ArchitectureDesign } from "@/components/riad/ArchitectureDesign"
import { CourtyardPool } from "@/components/riad/CourtyardPool"
import { RooftopTerrace } from "@/components/riad/RooftopTerrace"
import { DiningExperience } from "@/components/riad/DiningExperience"
import { AmenitiesServices } from "@/components/riad/AmenitiesServices"

export const metadata: Metadata = {
  title: "The Riad | Riad Dar Ten",
  description:
    "Discover the history and architecture of Riad Dar Ten, a sanctuary of peace in the heart of Marrakech.",
}

export default function RiadPage() {
  return (
    <main className="min-h-screen bg-cream">
      <RiadHero />
      <OurStory />
      <ArchitectureDesign />
      <CourtyardPool />
      <RooftopTerrace />
      <DiningExperience />
      <AmenitiesServices />
    </main>
  )
}
