"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/home/hero-background.png"
          alt="Riad Dar Ten Interior"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          className="mb-4 font-serif text-5xl font-light tracking-wide md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          RIAD DAR TEN
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl font-accent text-2xl italic tracking-wider text-cream md:text-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          &quot;Where Tradition Meets Tranquility&quot;
        </motion.p>
        <motion.p
          className="mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-200 md:text-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          An intimate Moroccan sanctuary in the heart of Marrakech, where
          contemporary comfort meets timeless tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
          viewport={{ once: true }}
        >
          <Link
            href="/book"
            className="group relative overflow-hidden rounded-sm bg-terracotta px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-deep-spice hover:shadow-lg"
          >
            <span className="relative z-10">Book Your Stay</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
