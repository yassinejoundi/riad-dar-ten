import type { Metadata } from "next"
import { GalleryHero } from "@/components/gallery/GalleryHero"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { InstagramFeed } from "@/components/gallery/InstagramFeed"
import { GalleryCTA } from "@/components/gallery/GalleryCTA"

export const metadata: Metadata = {
  title: "Gallery | Riad Dar Ten",
  description: "Explore the rooms, courtyard, rooftop and quiet daily moments of Riad Dar Ten in the Marrakech medina.",
  openGraph: { images: ["/assets/images/gallery/hero-background.png"] },
}

export default function GalleryPage() {
  return <div className="min-h-screen overflow-hidden bg-cream text-midnight-blue"><GalleryHero /><GalleryGrid /><InstagramFeed /><GalleryCTA /></div>
}
