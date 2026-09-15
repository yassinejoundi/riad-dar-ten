"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBed, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { rooms } from "@/lib/rooms"

export function RoomListings() {
  return (
    <section id="rooms" className="bg-midnight-blue py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-12">
          {rooms.map((room, index) => (
            <motion.article key={room.slug} className={index % 3 === 0 ? "lg:col-span-7" : index % 3 === 1 ? "lg:col-span-5 lg:pt-24" : "lg:col-span-6"} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7 }}>
              <Link href={`/rooms/${room.slug}`} className="group block">
                <div className={`relative overflow-hidden ${index % 3 === 0 ? "aspect-[5/4]" : "aspect-[4/5]"}`}><Image src={room.image} alt={`${room.name} double room`} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 md:p-8"><p className="mb-2 font-sans text-xs font-medium uppercase tracking-[.14em] text-white/90"><FontAwesomeIcon icon={faUserGroup} className="mr-2" />2 guests <FontAwesomeIcon icon={faBed} className="ml-4 mr-2" />Double room</p><h3 className="font-serif text-5xl font-light text-white">{room.name}</h3></div></div>
                <div className="mt-5 flex items-start justify-between gap-5"><div><p className="font-serif text-2xl font-light">{room.tone}</p><p className="mt-2 max-w-xl text-pretty font-sans text-base leading-7 text-cream/75">{room.description}</p></div><FontAwesomeIcon icon={faArrowRight} className="mt-2 size-4 shrink-0 transition-transform group-hover:translate-x-1" /></div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
