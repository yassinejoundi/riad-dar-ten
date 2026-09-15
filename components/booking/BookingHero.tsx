"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const bookingUrl = "https://riad-dar-ten.amenitiz.io/fr/booking/room"

export function BookingHero() {
  return (
    <section className="relative min-h-[850px] overflow-hidden bg-midnight-blue md:min-h-[900px] lg:h-[100svh]">
      <Image src="/assets/images/booking/hero-background.png" alt="Riad Dar Ten courtyard prepared for an evening stay" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      <div className="relative mx-auto flex min-h-[850px] max-w-[1440px] items-end px-5 pb-16 pt-32 text-white md:min-h-[900px] md:px-10 md:pb-20 lg:h-full lg:items-center lg:pb-0 lg:pt-24">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.28em] text-white/90">Book direct</p><h1 className="max-w-4xl text-balance font-serif text-[clamp(4rem,8vw,8rem)] font-light leading-[.9] tracking-[-.04em]">Your room in Marrakech awaits.</h1></motion.div>
          <motion.div className="border-l border-white/40 pl-6 md:pl-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .25 }}><p className="max-w-md text-pretty font-sans text-base leading-7 text-white/90 md:text-lg md:leading-8">Continue to our secure booking partner to see live availability, current rates and the conditions for your dates.</p><a href={bookingUrl} target="_blank" rel="noreferrer" className="group mt-7 inline-flex min-h-12 items-center gap-3 bg-terracotta px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[.18em] hover:bg-deep-spice">View live availability <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></a><Link href="#before-you-book" className="ml-0 mt-4 flex min-h-11 w-fit items-center gap-3 border-b border-white/50 font-sans text-xs uppercase tracking-[.16em] hover:border-white sm:ml-5 sm:inline-flex">Before you book <FontAwesomeIcon icon={faArrowDown} className="size-3" /></Link></motion.div>
        </div>
      </div>
    </section>
  )
}
