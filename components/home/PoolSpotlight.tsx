"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "motion/react"

const features = [
  "Interior courtyard pool",
  "Rooftop sun terrace",
  "Traditional Moroccan craftsmanship",
  "Peaceful atmosphere",
]

export function PoolSpotlight() {
  return (
    <section className="relative py-24 overflow-hidden bg-desert-sand/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative h-[600px] w-full group overflow-hidden rounded-lg shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/assets/images/home/pool-spotlight.png" // Using the hero image as requested (reusing existing path for now)
              alt="The stunning courtyard pool"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay for mood */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="lg:pl-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4 block">
              Relax & Unwind
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
              The Heart of Our Riad
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
              Experience the tranquility of our traditional tadelakt pool,
              nestled in the interior patio. Surrounded by exquisite Moroccan
              architecture, it serves as a serene oasis where the play of light
              and water creates a mesmerizing atmosphere of calm.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-primary font-serif text-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-tadelakt-green/20 flex items-center justify-center text-tadelakt-green">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
