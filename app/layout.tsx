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
  title: "Dar Ten | Contemporary Moroccan Restaurant in Marrakech",
  description:
    "Seasonal Moroccan cooking served in an intimate Marrakech courtyard, moments from Jemaa el-Fna in the heart of the medina.",
  openGraph: {
    title: "Dar Ten | Morocco, Served in a New Light",
    description:
      "Contemporary Moroccan cooking, seasonal ingredients and intimate courtyard dining in Marrakech.",
    images: ["/assets/images/restaurant/hero-courtyard.png"],
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
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-cream px-4 py-3 font-sans text-sm font-semibold text-midnight-blue transition-transform focus:translate-y-0">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
