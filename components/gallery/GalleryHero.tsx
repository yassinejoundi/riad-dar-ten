"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

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
        <motion.div
          className="flex items-center justify-center space-x-2 text-sm font-sans font-medium uppercase tracking-widest mb-8 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-terracotta">Gallery</span>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Discover Dar Ten <br className="hidden sm:block" />
          <span className="italic text-terracotta">Through Images</span>
        </motion.h1>

        <motion.div
          className="w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
