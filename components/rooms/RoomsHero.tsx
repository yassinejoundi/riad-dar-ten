"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export function RoomsHero() {
  return (
    <section className="relative flex min-h-[720px] h-[88svh] items-end overflow-hidden bg-midnight-blue text-white">
      <Image src="/assets/images/home/rooms/vanilla-double-room.png" alt="Vanilla double room at Riad Dar Ten" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 md:px-10 md:pb-24">
        <motion.p className="mb-5 font-sans text-xs font-medium uppercase tracking-[.28em] text-white/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>Six individual rooms</motion.p>
        <motion.h1 className="max-w-4xl text-balance font-serif text-[clamp(3.8rem,8vw,7.8rem)] font-light leading-[.92] tracking-[-.035em]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>A different mood behind every door.</motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .3 }}><Link href="#rooms" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-white/50 font-sans text-xs uppercase tracking-[.18em] hover:border-white">Find your room <FontAwesomeIcon icon={faArrowDown} className="size-3" /></Link></motion.div>
      </div>
    </section>
  )
}
