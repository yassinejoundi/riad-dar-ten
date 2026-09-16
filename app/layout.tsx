import type { Metadata } from "next"
import {
  Cormorant_Garamond,
  Montserrat,
  Playfair_Display,
} from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/common/Navbar"
import { Footer } from "@/components/common/Footer"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riad-darten.com"),
  title: "Riad Dar Ten | Boutique Riad in the Marrakech Medina",
  description:
    "Six intimate rooms, a peaceful courtyard pool and a rooftop terrace, two minutes from Jemaa el-Fna in the Marrakech medina.",
  openGraph: {
    title: "Riad Dar Ten | A Quiet Riad in the Heart of Marrakech",
    description:
      "Stay in a six-room riad moments from Jemaa el-Fna, with warm Moroccan hospitality and a tranquil courtyard.",
    images: ["/assets/images/home/hero-background.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
