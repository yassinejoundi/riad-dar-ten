"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export function ContactHero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-midnight-blue text-white lg:h-[92svh]">
      <div className="absolute inset-x-0 top-0 h-[58%] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[54%]">
        <Image src="/assets/images/contact/hero-background.png" alt="The welcoming entrance to Riad Dar Ten" fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue via-midnight-blue/20 to-black/15 lg:bg-gradient-to-r lg:from-midnight-blue lg:via-transparent lg:to-transparent" />
      </div>
      <div className="relative mx-auto grid min-h-[760px] w-full max-w-[1440px] items-end px-5 pb-16 pt-[48vh] md:px-10 md:pb-20 lg:h-full lg:grid-cols-2 lg:items-center lg:pb-0 lg:pt-24">
        <div className="max-w-2xl lg:pr-16">
          <motion.p className="mb-5 font-sans text-xs font-medium uppercase tracking-[.28em] text-saffron-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>Contact & arrival</motion.p>
          <motion.h1 className="text-balance font-serif text-[clamp(3.6rem,7vw,7rem)] font-light leading-[.92] tracking-[-.035em]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>Let&apos;s plan your arrival.</motion.h1>
          <motion.p className="mt-7 max-w-lg text-pretty font-sans text-base leading-7 text-cream/80 md:text-lg md:leading-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>From choosing a room to finding the door through the medina, we are here to make the journey simple.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .35 }}><Link href="#contact" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-cream/50 font-sans text-xs uppercase tracking-[.18em] hover:border-cream">Speak with us <FontAwesomeIcon icon={faArrowDown} className="size-3" /></Link></motion.div>
        </div>
      </div>
    </section>
  )
}
