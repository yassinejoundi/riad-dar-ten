import type { Metadata } from "next"
import {
  Cormorant_Garamond,
  Montserrat,
  Playfair_Display,
} from "next/font/google"
import "./globals.css"

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
  title: "Riad Dar Ten - Where Tradition Meets Tranquility",
  description: "An intimate Moroccan sanctuary in the heart of Marrakech.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
