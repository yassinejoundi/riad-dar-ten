"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBed, faUserGroup } from "@fortawesome/free-solid-svg-icons"

const rooms = [
  ["Vanilla", "Soft light and a calm, natural palette", "/assets/images/home/rooms/vanilla-double-room.png", "vanilla"],
  ["Paprika", "Warm colour with a private balcony", "/assets/images/home/rooms/paprika-double-room.png", "paprika"],
  ["Safran", "Sun-washed tones inspired by the souks", "/assets/images/home/rooms/safran-double-room.png", "safran"],
] as const

export function RoomsCarousel() {
  return (
    <section className="bg-midnight-blue py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-saffron-gold">The rooms</p>
            <h2 className="max-w-3xl text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Six rooms, each with its own mood.</h2>
          </div>
          <Link href="/rooms" className="group inline-flex min-h-11 items-center gap-3 self-start border-b border-cream/40 font-sans text-xs uppercase tracking-[0.18em] transition-colors hover:border-cream md:self-auto">Explore all rooms <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-5">
          {rooms.map(([name, description, image, slug], index) => (
            <motion.article key={name} className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: index * .1 }}>
              <Link href={`/rooms/${slug}`} className="group block">
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5]" : "aspect-[4/5]"}`}>
                  <Image src={image} alt={`${name} double room at Riad Dar Ten`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-2 flex gap-4 font-sans text-xs font-medium uppercase tracking-[0.12em] text-white/90"><span><FontAwesomeIcon icon={faUserGroup} className="mr-2" />2 guests</span><span><FontAwesomeIcon icon={faBed} className="mr-2" />Double</span></p>
                    <h3 className="font-serif text-4xl font-light text-white">{name}</h3>
                  </div>
                </div>
                <p className="mt-4 max-w-sm text-pretty font-sans text-base leading-7 text-cream/75">{description}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
