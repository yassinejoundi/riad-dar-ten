"use client"

import { useState } from "react"
import { GalleryHero } from "@/components/gallery/GalleryHero"
import { Navbar } from "@/components/common/Navbar"
import { Footer } from "@/components/common/Footer"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <main className="min-h-screen bg-cream">
      <GalleryHero
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {/* Grid will go here */}
      <div className="container mx-auto px-4 py-12 text-center text-gray-500">
        <p>Gallery Grid Component Placeholder for category: {activeCategory}</p>
      </div>
    </main>
  )
}
