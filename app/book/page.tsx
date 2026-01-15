import { BookingHero } from "@/components/booking/BookingHero"
import { BookingSection } from "@/components/booking/BookingSection"
import { BookingFAQ } from "@/components/booking/BookingFAQ"

export default function BookPage() {
  return (
    <main className="min-h-screen bg-cream">
      <BookingHero />
      <BookingSection />
      <BookingFAQ />
    </main>
  )
}
