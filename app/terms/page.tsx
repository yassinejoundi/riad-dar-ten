import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/common/LegalPage"

export const metadata: Metadata = {
  title: "Terms of Service | Riad Dar Ten",
  description: "The terms governing website use and stays at Riad Dar Ten in Marrakech.",
}

const sections = [
  { title: "Scope of these terms", content: <p>By using this website or making a reservation with Riad Dar Ten, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site or submit a booking request.</p> },
  { title: "Reservations and confirmations", content: <p>Reservation requests sent through this website, email, or other channels are subject to availability and approval. Your booking is confirmed once you receive a written confirmation from us, which may include specific payment or deposit conditions.</p> },
  { title: "Rates, payments, and taxes", content: <p>Rates communicated to you at the time of booking are quoted per room and per night unless otherwise stated, and may include or exclude local taxes and fees. You are responsible for all applicable taxes, city taxes, or other mandatory charges under local law.</p> },
  { title: "Cancellations and no-shows", content: <p>Cancellation conditions are communicated during the booking process and in your confirmation. Depending on the rate and dates, late cancellations or no-shows may incur partial or full charges of the reserved stay. Please review the conditions carefully when confirming your reservation.</p> },
  { title: "Guest responsibilities", content: <p>Guests are expected to respect the property, fellow guests, and neighbors, and to comply with our house rules, including guidelines regarding noise, smoking, and the use of shared areas. You are responsible for any damage caused by you or members of your party during your stay.</p> },
  { title: "Check-in, check-out, and access", content: <p>Standard check-in and check-out times will be provided with your booking. Early check-in or late check-out is subject to availability and may incur additional charges. For security reasons, only registered guests are permitted to stay overnight at the riad.</p> },
  { title: "Liability", content: <p>While we take great care to provide a safe and enjoyable stay, Riad Dar Ten is not liable for loss, theft, or damage to personal belongings, nor for events beyond our reasonable control, such as strikes, travel disruptions, or extreme weather. We recommend that guests obtain appropriate travel insurance.</p> },
  { title: "Website use and content", content: <p>The content on this website is provided for general information and marketing purposes. We make reasonable efforts to keep information accurate but do not guarantee that descriptions, images, or availability are error-free or always up to date.</p> },
  { title: "Privacy", content: <p>The way we collect and handle personal data is described in our <Link href="/privacy">Privacy Policy</Link>. By making a reservation, you acknowledge that you have read and understood this policy.</p> },
  { title: "Changes to these terms", content: <p>We may update these Terms of Service from time to time. The version published on this website at the time of your booking or stay will generally apply to that stay, unless otherwise required by law.</p> },
  { title: "Contact and applicable law", content: <><p>If you have questions about these Terms of Service, please contact us using the details below.</p><address className="not-italic">Riad Dar Ten<br />10 derb Moulay El Ghali (Lakssour, Médina)<br />40000 Marrakech, Morocco<br /><a href="mailto:info@riaddarten.com">info@riaddarten.com</a></address></> },
]

export default function TermsPage() {
  return <LegalPage eyebrow="Your stay" title="Terms of Service" introduction="These Terms of Service outline the conditions under which you may use our website and stay at Riad Dar Ten." sections={sections} note="These Terms are governed by the laws of Morocco, without prejudice to any mandatory protections that may apply under the laws of your country of residence." />
}
