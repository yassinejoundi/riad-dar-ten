"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function CourtyardPool() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-24">
        <motion.div className="relative min-h-[580px]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8 }}><Image src="/assets/images/gallery/pool-night.png" alt="Riad Dar Ten courtyard pool illuminated at night" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></motion.div>
        <div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">The courtyard</p><h2 className="mb-8 text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">The quiet heart of Dar Ten.</h2><div className="space-y-5 text-pretty font-sans text-base leading-7 text-midnight-blue/75 md:text-lg md:leading-8"><p>At the centre of the house, the patio draws in sky and softens the sounds of the medina. Its pool is finished in tadelakt, the hand-polished Moroccan plaster that gives the water its muted, mineral colour.</p><p>Morning light reaches the arches; evenings settle into candlelight. Between excursions, it is a natural place to read, cool off or simply pause.</p></div></div>
      </div>
    </section>
  )
}
