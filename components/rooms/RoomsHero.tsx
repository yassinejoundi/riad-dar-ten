"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function RoomsHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/home/rooms/vanilla-double-room.png"
          alt="Luxury Room Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center text-white">
        <motion.div
          className="flex items-center space-x-2 text-sm font-sans font-medium uppercase tracking-widest mb-6 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-terracotta">Rooms & Suites</span>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Six Rooms, Each a <br className="hidden md:block" />
          <span className="italic text-terracotta">Unique Sanctuary</span>
        </motion.h1>

        <motion.p
          className="font-sans text-lg md:text-xl text-white/90 tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Named after the precious spices of Morocco
        </motion.p>
      </div>
    </section>
  );
}
