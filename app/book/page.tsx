import { BookingHero } from "@/components/booking/BookingHero"
import { BookingSection } from "@/components/booking/BookingSection"

export default function BookPage() {
  return (
    <main className="min-h-screen bg-cream">
      <BookingHero />
      <BookingSection />
    </main>
  )
}
