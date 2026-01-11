"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function RoomsHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/home/rooms/vanilla-double-room.png"
          alt="Luxury Room Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center text-white">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-sans font-medium uppercase tracking-widest mb-6 text-white/80 animate-fade-in-up">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-terracotta">Rooms & Suites</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in-up delay-100">
          Six Rooms, Each a <br className="hidden md:block" />
          <span className="italic text-terracotta">Unique Sanctuary</span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-lg md:text-xl text-white/90 tracking-wide animate-fade-in-up delay-200">
          Named after the precious spices of Morocco
        </p>
      </div>
    </section>
  );
}
