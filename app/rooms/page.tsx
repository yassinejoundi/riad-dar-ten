import { Metadata } from "next"
import { RoomsHero } from "@/components/rooms/RoomsHero"
import { RoomsOverview } from "@/components/rooms/RoomsOverview"
import { RoomListings } from "@/components/rooms/RoomListings"
import { WhatsIncluded } from "@/components/rooms/WhatsIncluded"
import { PerfectFor } from "@/components/rooms/PerfectFor"
import { RoomsCTA } from "@/components/rooms/RoomsCTA"

export const metadata: Metadata = {
  title: "Rooms & Suites | Riad Dar Ten",
  description:
    "Discover our six unique rooms, each named after precious Moroccan spices, offering a sanctuary of comfort and tradition.",
}

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <RoomsHero />
      <RoomsOverview />
      <RoomListings />
      <WhatsIncluded />
      <PerfectFor />
      <RoomsCTA />
    </main>
  )
}
