"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function OurStory() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                Where Tradition Lives
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground font-sans leading-relaxed space-y-6">
              <p>
                Riad Dar Ten is more than just a place to stay; it is a living
                testament to the rich heritage of Marrakech. Born from a passion
                for preserving Moroccan craftsmanship, our riad was meticulously
                restored to honor the architectural traditions of the Medina
                while embracing the needs of the modern traveler.
              </p>
              <p>
                Our philosophy of hospitality is rooted in the ancient custom of
                welcoming guests as family. From the moment you step through our
                heavy cedar doors, leaving the bustling souks behind, you enter
                a sanctuary of peace where every detail, from the intricate
                zellige tiles to the hand-carved plaster, tells a story of
                artisans who have passed their skills down through generations.
              </p>
              <p>
                We believe in an authentic experience that engages all the
                senses. The scent of orange blossom in the courtyard, the
                texture of warm tadelakt walls, and the taste of freshly minted
                tea are all curated to immerse you in the true spirit of
                Morocco.
              </p>
              <p>
                While deeply rooted in tradition, we have thoughtfully
                integrated contemporary comforts. We understand that true luxury
                lies in the balance between the charm of the old world and the
                ease of the new, ensuring your stay is as restful as it is
                inspiring.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden translate-y-8">
              <Image
                src="/assets/images/home/welcome.png"
                alt="Architectural Detail - Archway"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image
                src="/assets/images/home/pool-spotlight.png"
                alt="Decorative Element - Zellige"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden col-span-2 mt-4">
              <Image
                src="/assets/images/home/hero-background.png"
                alt="Riad Courtyard Atmosphere"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
