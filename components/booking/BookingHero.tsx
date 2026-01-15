"use client"

import Image from "next/image"
import Link from "next/link"

export function BookingHero() {
  return (
    <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/booking/hero-background.png"
          alt="Riad Dar Ten courtyard at dusk"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 md:px-8">
        <div className="mb-6 text-sm font-sans text-gray-200 flex items-center gap-2">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-100">Book</span>
        </div>

        <div className="space-y-5 text-white max-w-3xl">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-terracotta">
            Book Your Stay
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Your Marrakech Escape Awaits
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-100">
            Secure your room at Riad Dar Ten and let us take care of the rest.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-sans text-gray-100">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2">
              Best rate direct with the riad
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2">
              Personalized stay planning
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2">
              Quick response to all requests
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
