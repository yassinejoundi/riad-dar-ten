import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactFormSection } from "@/components/contact/ContactFormSection"

export const metadata: Metadata = {
  title: "Contact & Arrival | Riad Dar Ten",
  description: "Contact Riad Dar Ten and plan your arrival at 10 derb Moulay El Ghali in the Marrakech medina.",
  openGraph: { images: ["/assets/images/contact/hero-background.png"] },
}

export default function ContactPage() {
  return <div className="min-h-screen overflow-hidden bg-cream text-midnight-blue"><ContactHero /><ContactFormSection /></div>
}
