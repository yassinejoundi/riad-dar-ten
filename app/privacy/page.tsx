import type { Metadata } from "next"
import { LegalPage } from "@/components/common/LegalPage"

export const metadata: Metadata = {
  title: "Privacy Policy | Riad Dar Ten",
  description: "How Riad Dar Ten collects, uses, and protects personal information.",
}

const sections = [
  { title: "Who we are", content: <p>Riad Dar Ten is a guesthouse located in Marrakech, Morocco. In this policy, “we”, “us”, and “our” refer to the riad and its management team.</p> },
  { title: "Information we collect", content: <><p>We collect personal information that you choose to share with us when you:</p><ul><li>Submit a booking request or reservation</li><li>Contact us via email, phone, or contact forms</li><li>Subscribe to any communications or offers</li></ul><p>This may include your name, contact details, travel dates, guest details, preferences, and any special requests you share.</p></> },
  { title: "How we use your information", content: <><p>We use your information to:</p><ul><li>Process and manage your reservations and enquiries</li><li>Communicate with you before, during, and after your stay</li><li>Personalize your experience based on your preferences</li><li>Comply with legal and regulatory obligations</li></ul></> },
  { title: "Cookies and website data", content: <p>Our website may use basic cookies or similar technologies to improve performance and understand how visitors use the site. You can adjust your browser settings to limit or disable cookies if you prefer.</p> },
  { title: "Sharing your information", content: <p>We do not sell your personal data. We may share limited information with trusted service providers such as booking platforms, payment processors, or transfer companies when necessary to manage your reservation or requested services.</p> },
  { title: "Data retention", content: <p>We keep your information only for as long as reasonably necessary for the purposes described in this policy and to comply with local legal requirements.</p> },
  { title: "Your rights", content: <p>Depending on your jurisdiction, you may have rights to access, correct, or request deletion of your personal information. You can contact us using the details below to exercise these rights.</p> },
  { title: "Contact us", content: <><p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p><address className="not-italic">Riad Dar Ten<br />10 derb Moulay El Ghali (Lakssour, Médina)<br />40000 Marrakech, Morocco<br /><a href="mailto:info@riaddarten.com">info@riaddarten.com</a></address></> },
]

export default function PrivacyPage() {
  return <LegalPage eyebrow="Your information" title="Privacy Policy" introduction="This Privacy Policy explains how Riad Dar Ten collects, uses, and protects your personal information when you visit our website or stay with us." sections={sections} note="This policy may be updated from time to time to reflect changes in our practices or applicable regulations." />
}
