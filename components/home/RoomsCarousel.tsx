"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BedDouble } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const rooms = [
  {
    name: "Vanilla Double Room",
    spice: "Vanilla Cream",
    color: "bg-[#F3E5AB]",
    bed: "1 Queen Bed",
    image: "/assets/images/home/rooms/vanilla-double-room.png",
    href: "/rooms/vanilla",
  },
  {
    name: "Chocolate Double Room",
    spice: "Dark Chocolate",
    color: "bg-[#7B3F00]",
    bed: "1 Full Bed",
    image: "/assets/images/home/rooms/chocolate-double-room.png",
    href: "/rooms/chocolate",
  },
  {
    name: "Canelle Double Room",
    spice: "Cinnamon Bark",
    color: "bg-[#D2691E]",
    bed: "1 Queen Bed",
    image: "/assets/images/home/rooms/canelle-double-room.png",
    href: "/rooms/canelle",
  },
  {
    name: "Muscade Double Room",
    spice: "Nutmeg Spice",
    color: "bg-[#8A6642]",
    bed: "1 Queen Bed",
    image: "/assets/images/home/rooms/muscade-double-room.png",
    href: "/rooms/muscade",
  },
  {
    name: "Safran Double Room",
    spice: "Saffron Gold",
    color: "bg-[#F4C430]",
    bed: "1 Queen Bed",
    image: "/assets/images/home/rooms/safran-double-room.png",
    href: "/rooms/safran",
  },
  {
    name: "Paprika Double Room",
    spice: "Paprika Red",
    color: "bg-[#C64B3C]",
    bed: "1 Queen Bed",
    image: "/assets/images/home/rooms/paprika-double-room.png",
    href: "/rooms/paprika",
  },
]

export function RoomsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-3">
            Six Rooms, Six Stories
          </h2>
          <p className="font-sans text-muted-foreground text-lg italic">
            Each named after precious Moroccan spices
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto animate-fade-in-up delay-200">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {rooms.map((room, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative h-[500px] w-full overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl bg-white flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-3/5 w-full overflow-hidden">
                      <div
                        className={cn(
                          "absolute inset-0 opacity-20 z-10",
                          room.color
                        )}
                      />
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col justify-between p-6 bg-white relative z-20">
                      <div>
                        <div className="flex items-center gap-2 text-terracotta mb-2">
                          <BedDouble size={18} />
                          <span className="text-xs font-sans font-semibold uppercase tracking-wider">
                            {room.bed}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl text-primary group-hover:text-terracotta transition-colors mb-1">
                          {room.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Inspired by {room.spice}
                        </p>
                      </div>

                      <Link
                        href={room.href}
                        className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-primary hover:text-terracotta transition-colors group-hover:translate-x-1 duration-300"
                      >
                        Discover
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>

                    {/* Color Accent Bar */}
                    <div className={cn("h-1.5 w-full", room.color)} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="left-[-50px] border-primary text-primary hover:bg-primary hover:text-white" />
              <CarouselNext className="right-[-50px] border-primary text-primary hover:bg-primary hover:text-white" />
            </div>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  current === index
                    ? "w-8 bg-terracotta"
                    : "w-2.5 bg-terracotta/30 hover:bg-terracotta/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up delay-300">
          <Link href="/rooms">
            <Button
              variant="outline"
              className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-8 py-6 rounded-sm text-sm uppercase tracking-widest font-semibold transition-all"
            >
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
