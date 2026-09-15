"use client"

import Image from "next/image"
import { motion } from "motion/react"

export function WelcomeSection() {
  return (
    <section id="discover" className="overflow-hidden bg-cream py-24 text-foreground md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            className="order-2 lg:order-1 lg:pr-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-6 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-terracotta">The house</p>
            <h2 className="mb-8 font-serif text-5xl font-light leading-[0.98] text-midnight-blue md:text-7xl">A slower rhythm,<br/><em className="font-light text-terracotta">behind the medina walls.</em></h2>

            <div className="max-w-xl space-y-5 font-sans text-base leading-7 text-midnight-blue/70 md:text-lg md:leading-8">
              <p>
                Step through Dar Ten&apos;s unassuming door and the city softens.
                Light moves across carved plaster, palms frame a still pool, and
                six individually styled rooms open onto the quiet of the patio.
              </p>
              <p>
                This is a small guesthouse by design: warm, personal and rooted
                in Moroccan craft, with homemade breakfasts and a rooftop made
                for long mornings in the sun.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 border-y border-midnight-blue/15 py-6">
              <div><strong className="block font-serif text-3xl font-light">6</strong><span className="font-sans text-[0.65rem] uppercase tracking-widest text-midnight-blue/60">rooms</span></div>
              <div className="border-x border-midnight-blue/15 px-5"><strong className="block font-serif text-3xl font-light">2 min</strong><span className="font-sans text-[0.65rem] uppercase tracking-widest text-midnight-blue/60">to the square</span></div>
              <div className="pl-5"><strong className="block font-serif text-3xl font-light">1</strong><span className="font-sans text-[0.65rem] uppercase tracking-widest text-midnight-blue/60">quiet patio</span></div>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 h-[520px] w-full lg:order-2 lg:h-[720px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative ml-auto h-[90%] w-[88%] overflow-hidden">
              <Image
                src="/assets/images/home/welcome.png"
                alt="Riad Dar Ten Courtyard and Pool"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[45%] border-[10px] border-cream bg-cream pt-3 md:border-[16px]">
              <Image src="/assets/images/riad/food/breakfast-01.png" alt="Homemade Moroccan breakfast at Dar Ten" width={500} height={620} className="aspect-[4/5] w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
