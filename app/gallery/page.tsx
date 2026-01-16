"use client"

import { useState } from "react"
import { GalleryHero } from "@/components/gallery/GalleryHero"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { InstagramFeed } from "@/components/gallery/InstagramFeed"
import { GalleryCTA } from "@/components/gallery/GalleryCTA"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <main className="min-h-screen bg-cream">
      <GalleryHero
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <GalleryGrid activeCategory={activeCategory} />
      <InstagramFeed />
      <GalleryCTA />
    </main>
  )
}
