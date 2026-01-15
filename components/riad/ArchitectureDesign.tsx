"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "motion/react"

export function ArchitectureDesign() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4 block">
            Design Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Timeless Moroccan Craftsmanship
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden translate-y-8">
                <Image
                  src="/assets/images/home/pool-spotlight.png"
                  alt="Tadelakt Pool"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/home/welcome.png"
                  alt="Traditional Arches"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-serif text-3xl text-primary mb-6">
              Traditional Elements
            </h3>
            <p className="font-sans text-muted-foreground mb-8 leading-relaxed">
              Our restoration process focused on preserving the authentic soul
              of the building. We worked with local Maâlems (master craftsmen)
              to restore the original features using age-old techniques.
            </p>
            <ul className="space-y-4">
              {[
                "Hand-polished Tadelakt walls and pool",
                "Intricate carved Cedar woodwork",
                "Authentic Zellige geometric tile work",
                "Classic Moroccan arches and domes",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-primary font-sans"
                >
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 text-terracotta flex-shrink-0 shadow-sm">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-serif text-3xl text-primary mb-6">
              Contemporary Touches
            </h3>
            <p className="font-sans text-muted-foreground mb-8 leading-relaxed">
              While respecting tradition, we have seamlessly integrated modern
              amenities to ensure your absolute comfort. The design palette is
              intentionally calm and neutral to create a soothing retreat from
              the vibrant city.
            </p>
            <ul className="space-y-4">
              {[
                "Soothing neutral color palette",
                "Modern en-suite bathrooms",
                "High-speed WiFi & LCD TVs",
                "Plush, high-quality furnishings",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-primary font-sans"
                >
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 text-tadelakt-green flex-shrink-0 shadow-sm">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/home/rooms/vanilla-double-room.png"
                  alt="Modern Comfort"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden translate-y-8">
                <Image
                  src="/assets/images/home/rooms/safran-double-room.png"
                  alt="Contemporary Furnishing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
