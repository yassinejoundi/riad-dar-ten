"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMugHot, faSun, faWaterLadder } from "@fortawesome/free-solid-svg-icons"

const moments = [
  [faMugHot, "Breakfast", "Homemade each morning and best enjoyed slowly."],
  [faSun, "The rooftop", "A private perch above the ochre roofs of the medina."],
  [faWaterLadder, "The courtyard", "Cool water, filtered light and a pause from the city."],
] as const

export function PoolSpotlight() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-24">
          <motion.div className="relative min-h-[580px]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8 }}>
            <Image src="/assets/images/home/pool-spotlight.png" alt="Quiet courtyard pool surrounded by Moroccan architecture" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
          </motion.div>
          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">A day at Dar Ten</p>
            <h2 className="mb-10 text-balance font-serif text-5xl font-light leading-[1.06] text-midnight-blue md:text-7xl">The luxury of<br/><em className="text-terracotta">unhurried time.</em></h2>
            <div className="divide-y divide-midnight-blue/15 border-y border-midnight-blue/15">
              {moments.map(([icon, title, copy]) => <div key={title} className="grid grid-cols-[36px_1fr] gap-5 py-6"><FontAwesomeIcon icon={icon} className="mt-1 size-4 text-terracotta" /><div><h3 className="mb-2 font-serif text-2xl font-light">{title}</h3><p className="max-w-md text-pretty font-sans text-base leading-7 text-midnight-blue/75">{copy}</p></div></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
