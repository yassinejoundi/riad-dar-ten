"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export function HeroSection() {
  return (
    <section className="relative min-h-[720px] h-[100svh] w-full overflow-hidden bg-midnight-blue">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/home/hero-background.png"
          alt="Sunlit courtyard and plunge pool at Riad Dar Ten"
          fill
          className="object-cover object-[62%_center] md:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-5 pb-24 text-white md:px-10 md:pb-20">
        <div className="max-w-4xl">
        <motion.p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.28em] text-white/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Lakssour · Marrakech Medina
        </motion.p>
        <motion.h1
          className="max-w-3xl text-balance font-serif text-[clamp(3.5rem,8vw,7.6rem)] font-light leading-[0.92] tracking-[-0.035em]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          A quiet house in the heart of Marrakech
        </motion.h1>
        <motion.p
          className="mb-8 mt-6 max-w-lg text-pretty font-sans text-base leading-7 text-white/90 md:text-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Six intimate rooms gathered around a tranquil courtyard, two minutes
          on foot from Jemaa el-Fna.
        </motion.p>

        <motion.div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <Link
            href="/book"
            className="group inline-flex min-h-12 items-center gap-3 bg-terracotta px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-deep-spice"
          >
            <span>Book your stay</span><FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="#discover" className="inline-flex min-h-11 items-center gap-3 border-b border-white/50 font-sans text-xs uppercase tracking-[0.18em] text-white transition-colors hover:border-white">
            Discover Dar Ten <FontAwesomeIcon icon={faArrowDown} className="size-3" />
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
