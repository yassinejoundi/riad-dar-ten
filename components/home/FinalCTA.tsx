"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/welcome.png"
          alt="Riad Dar Ten Courtyard"
          fill
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <motion.h2
          className="font-serif text-4xl md:text-6xl text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Begin Your Marrakech Story
        </motion.h2>
        <motion.p
          className="font-sans text-xl md:text-2xl text-white/90 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Limited rooms, unlimited memories
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/book">
            <Button
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-white font-sans text-lg px-8 py-6 h-auto"
            >
              Check Availability
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-sans text-lg px-8 py-6 h-auto bg-transparent"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
