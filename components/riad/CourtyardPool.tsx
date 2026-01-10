"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const galleryImages = [
  {
    src: "/assets/images/home/pool-spotlight.png",
    alt: "Illuminated Tadelakt pool at night",
    caption: "Evening tranquility by the pool",
  },
  {
    src: "/assets/images/home/welcome.png",
    alt: "Courtyard view during the day",
    caption: "Sun-drenched central patio",
  },
  {
    src: "/assets/images/home/hero-background.png",
    alt: "Architectural details of the courtyard",
    caption: "Traditional Moroccan design elements",
  },
]

export function CourtyardPool() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              The Soul of Dar Ten
            </h2>
            <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-lg">
              <p>
                At the heart of every traditional Riad lies the courtyard—a
                sacred open space that serves as the home's lungs, drawing in
                light and air while filtering out the noise of the outside
                world.
              </p>
              <p>
                Our central patio is dominated by a stunning{" "}
                <span className="text-terracotta font-medium">
                  Tadelakt pool
                </span>
                , honoring the ancient Moroccan craft of waterproof lime
                plaster. Cool to the touch and soft on the skin, it offers a
                refreshing respite from the Marrakech sun.
              </p>
              <p>
                Designed as an open-air sanctuary, the courtyard connects you
                directly with the elements. By day, sunlight plays across the
                geometric tiles; by night, the opening frames a canvas of stars,
                creating a peaceful oasis in the bustling Medina.
              </p>
            </div>
          </div>

          {/* Image Gallery Carousel */}
          <div className="order-1 lg:order-2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-12">
                        <p className="text-white font-serif text-lg tracking-wide">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-end gap-2 mt-4 pr-2">
                <CarouselPrevious className="static translate-y-0 text-primary border-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="static translate-y-0 text-primary border-primary hover:bg-primary hover:text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
