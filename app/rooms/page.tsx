import { Metadata } from "next"
import { RoomsHero } from "@/components/rooms/RoomsHero"
import { RoomsOverview } from "@/components/rooms/RoomsOverview"
import { RoomListings } from "@/components/rooms/RoomListings"
import { WhatsIncluded } from "@/components/rooms/WhatsIncluded"
import { RoomsCTA } from "@/components/rooms/RoomsCTA"

export const metadata: Metadata = {
  title: "Rooms & Suites | Riad Dar Ten",
  description:
    "Discover the six individually styled double rooms at Riad Dar Ten, each with a private bathroom and access to the riad courtyard and rooftop.",
}

export default function RoomsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-midnight-blue">
      <RoomsHero />
      <RoomsOverview />
      <RoomListings />
      <WhatsIncluded />
      <RoomsCTA />
    </div>
  )
}
