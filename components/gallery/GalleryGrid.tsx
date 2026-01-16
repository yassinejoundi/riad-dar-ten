"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import Image from "next/image"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Maximize2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

// Mock data for gallery images
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/assets/images/home/rooms/vanilla-double-room.png",
    category: "Rooms",
    title: "Vanilla Double Room",
    location: "First Floor",
  },
  {
    id: 2,
    src: "/assets/images/gallery/pool-night.png",
    category: "Courtyard & Pool",
    title: "Pool at Night",
    location: "Main Courtyard",
  },
  {
    id: 3,
    src: "/assets/images/gallery/ground-floor.png",
    category: "Courtyard & Pool",
    title: "Traditional Patio",
    location: "Ground Floor",
  },
  {
    id: 4,
    src: "/assets/images/home/rooms/paprika-double-room.png",
    category: "Rooms",
    title: "Paprika Room Detail",
    location: "First Floor",
  },
  {
    id: 5,
    src: "/assets/images/home/cta-background.png",
    category: "Details & Architecture",
    title: "Riad Architecture",
    location: "Central Void",
  },
  {
    id: 6,
    src: "/assets/images/perferct-for/authentic-stay.png",
    category: "Details & Architecture",
    title: "Authentic Design",
    location: "Corridors",
  },
  // Reusing images for demonstration purposes to fill categories
  {
    id: 7,
    src: "/assets/images/home/rooms/vanilla-double-room.png",
    category: "Details & Architecture",
    title: "Room Details",
    location: "Vanilla Room",
  },
  {
    id: 8,
    src: "/assets/images/gallery/dinner-pool-night.png",
    category: "Dining",
    title: "Dinner by the Pool",
    location: "Courtyard",
  },
  {
    id: 9,
    src: "/assets/images/gallery/rooftop-terrace.png",
    category: "Rooftop Terrace",
    title: "Terrace Lounging",
    location: "Rooftop",
  },
  {
    id: 10,
    src: "/assets/images/gallery/hero-background.png",
    category: "Views",
    title: "Sky Views",
    location: "Rooftop",
  },
]

interface GalleryGridProps {
  activeCategory: string
}

export function GalleryGrid({ activeCategory }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const filteredImages = useMemo(
    () =>
      activeCategory === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  )

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev === null || prev === filteredImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      prev === null || prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    },
    [closeLightbox, nextImage, prevImage]
  )

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [lightboxIndex, handleKeyDown])

  const handleShare = async (image: (typeof GALLERY_IMAGES)[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Riad Dar Ten - ${image.title}`,
          text: `Check out this beautiful view of ${image.title} at Riad Dar Ten!`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: Copy link to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <section className="py-12 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-serif text-xl mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/80 font-sans text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    {image.location}
                  </p>
                </div>
                <div className="absolute top-4 right-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-sans text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-50 p-4 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-4 hover:bg-white/10 rounded-full"
          >
            <ChevronRight size={40} />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto p-4 flex flex-col items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center px-4">
              <div className="inline-block bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-4 max-w-3xl">
                <h2 className="text-white font-serif text-2xl md:text-3xl mb-2">
                  {filteredImages[lightboxIndex].title}
                </h2>
                <p className="text-white/80 font-sans text-sm md:text-base mb-6">
                  {filteredImages[lightboxIndex].location} •{" "}
                  {filteredImages[lightboxIndex].category}
                </p>

                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary gap-2"
                    asChild
                  >
                    <a href={filteredImages[lightboxIndex].src} download>
                      <Download size={16} />
                      Download
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary gap-2"
                    onClick={() => handleShare(filteredImages[lightboxIndex])}
                  >
                    <Share2 size={16} />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
