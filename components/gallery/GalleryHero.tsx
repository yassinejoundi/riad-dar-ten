"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  "All",
  "Rooms",
  "Courtyard & Pool",
  "Rooftop Terrace",
  "Dining",
  "Details & Architecture",
  "Views",
]

interface GalleryHeroProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function GalleryHero({
  activeCategory,
  onCategoryChange,
}: GalleryHeroProps) {
  return (
    <section className="relative pt-32 pb-12 min-h-[50vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/gallery/hero-background.png"
          alt="Riad Dar Ten Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center space-x-2 text-sm font-sans font-medium uppercase tracking-widest mb-8 text-white/80 animate-fade-in-up">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-terracotta">Gallery</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12 animate-fade-in-up delay-100 max-w-4xl mx-auto">
          Discover Dar Ten <br className="hidden sm:block" />
          <span className="italic text-terracotta">Through Images</span>
        </h1>

        {/* Filter Tabs */}
        <div className="w-full max-w-5xl mx-auto animate-fade-in-up delay-200">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm md:text-base font-sans font-medium transition-all duration-300 border backdrop-blur-sm",
                  activeCategory === category
                    ? "bg-terracotta text-white border-terracotta shadow-md"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
