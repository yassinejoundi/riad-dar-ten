"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function OurStory() {
  return (
    <section id="story" className="bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8 }}>
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">The spirit of the house</p>
          <h2 className="mb-8 text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">The medina outside. <em className="text-terracotta">Calm within.</em></h2>
          <div className="max-w-xl space-y-5 text-pretty font-sans text-base leading-7 text-midnight-blue/75 md:text-lg md:leading-8">
            <p>Dar Ten is an intimate guesthouse in Lakssour, where six rooms gather around the open heart of a traditional riad.</p>
            <p>Its smooth plaster, carved arches, warm timber and shifting natural light create a gentle counterpoint to the energy of Marrakech. The scale stays deliberately personal: breakfast made each morning, a welcome that feels warm, and quiet corners that quickly feel like your own.</p>
          </div>
        </motion.div>
        <motion.div className="relative min-h-[580px] md:min-h-[720px]" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8 }}>
          <Image src="/assets/images/home/welcome.png" alt="Sunlight falling into the Riad Dar Ten courtyard" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
          <div className="absolute bottom-0 left-0 border-r-[12px] border-t-[12px] border-cream bg-cream px-5 py-4 md:border-r-[18px] md:border-t-[18px]"><span className="block font-serif text-4xl font-light">6</span><span className="font-sans text-xs uppercase tracking-[.18em] text-midnight-blue/70">individual rooms</span></div>
        </motion.div>
      </div>
    </section>
  )
}
