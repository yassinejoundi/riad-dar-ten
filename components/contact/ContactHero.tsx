"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faLocationDot } from "@fortawesome/free-solid-svg-icons"

export function ContactHero() {
  return (
    <section className="relative min-h-[850px] overflow-hidden bg-midnight-blue md:min-h-[900px] lg:h-[100svh]">
      <Image
        src="/assets/images/contact/hero-background.png"
        alt="The candlelit courtyard and pool at Riad Dar Ten"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

      <motion.div
        className="absolute right-6 top-28 hidden border-l border-white/50 py-2 pl-5 text-white lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em]"><FontAwesomeIcon icon={faLocationDot} className="mr-3 text-saffron-gold" />Lakssour, Marrakech</p>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <motion.div
          className="max-w-4xl bg-cream px-6 py-10 text-midnight-blue md:px-12 md:py-12 lg:px-16 lg:py-14"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">Contact & arrival</p>
          <div className="grid gap-7 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:gap-12">
            <h1 className="text-balance font-serif text-[clamp(3.4rem,6vw,6.6rem)] font-light leading-[0.92] tracking-[-0.035em]">Your journey starts at our door.</h1>
            <div>
              <p className="text-pretty font-sans text-base leading-7 text-midnight-blue/75">Questions, room advice or help finding us in the medina: speak with the house directly.</p>
              <Link href="#contact" className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-midnight-blue/35 font-sans text-xs font-semibold uppercase tracking-[0.16em] hover:border-midnight-blue">Start a conversation <FontAwesomeIcon icon={faArrowDown} className="size-3" /></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
