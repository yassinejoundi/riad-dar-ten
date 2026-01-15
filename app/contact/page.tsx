import { ContactHero } from "@/components/contact/ContactHero"
import { ContactFormSection } from "@/components/contact/ContactFormSection"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <ContactHero />
      <ContactFormSection />
    </main>
  )
}
