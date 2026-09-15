import type { Metadata } from "next"
import { BookingHero } from "@/components/booking/BookingHero"
import { BookingSection } from "@/components/booking/BookingSection"
import { BookingFAQ } from "@/components/booking/BookingFAQ"

export const metadata: Metadata = {
  title: "Book Direct | Riad Dar Ten",
  description: "Check live availability and book your stay directly with Riad Dar Ten in the Marrakech medina.",
  openGraph: { images: ["/assets/images/booking/hero-background.png"] },
}

export default function BookPage() {
  return <div className="min-h-screen overflow-hidden bg-cream text-midnight-blue"><BookingHero /><BookingSection /><BookingFAQ /></div>
}
