import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import type { Room } from "@/lib/rooms"
import { roomAmenities, rooms } from "@/lib/rooms"

export function RoomDetail({ room }: { room: Room }) {
  const index = rooms.findIndex((item) => item.slug === room.slug)
  const nextRoom = rooms[(index + 1) % rooms.length]

  return (
    <div className="bg-cream text-midnight-blue">
      <section className="relative flex min-h-[760px] h-[92svh] items-end overflow-hidden bg-midnight-blue text-white">
        <Image src={room.image} alt={`${room.name} double room at Riad Dar Ten`} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 md:px-10 md:pb-24"><Link href="/rooms" className="mb-7 inline-flex min-h-11 items-center gap-3 font-sans text-xs uppercase tracking-[.18em] text-white/90 hover:text-white"><FontAwesomeIcon icon={faArrowLeft} className="size-3" />All rooms</Link><h1 className="font-serif text-[clamp(4.5rem,10vw,9rem)] font-light leading-[.85] tracking-[-.04em]">{room.name}</h1><p className="mt-7 max-w-xl text-pretty font-sans text-lg leading-8 text-white/90">{room.tone}</p></div>
      </section>

      <section className="py-24 md:py-36"><div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">Room {String(index + 1).padStart(2, "0")} · Double</p><h2 className="text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">A room with its own rhythm.</h2></div><div className="lg:pt-12"><p className="max-w-xl text-pretty font-sans text-lg leading-8 text-midnight-blue/75">{room.description} Like every room at Dar Ten, it is designed as a personal retreat within the shared life of the riad.</p><div className="mt-10 grid grid-cols-2 gap-x-8 border-t border-midnight-blue/15">{roomAmenities.map((item) => <div key={item} className="flex gap-3 border-b border-midnight-blue/15 py-4 font-sans text-sm text-midnight-blue/80"><FontAwesomeIcon icon={faCheck} className="mt-1 size-3 text-terracotta" />{item}</div>)}</div></div></div></section>

      <section className="bg-[#e7ddcf] py-24 md:py-36"><div className="mx-auto max-w-[1320px] px-5 md:px-10"><div className="grid gap-4 md:grid-cols-12"><div className="relative min-h-[560px] md:col-span-7"><Image src={room.image} alt={`Interior details in the ${room.name} room`} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" /></div><div className="relative min-h-[420px] md:col-span-5 md:mt-24"><Image src="/assets/images/home/welcome.png" alt="The shared courtyard at Riad Dar Ten" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" /></div></div><p className="mt-6 max-w-2xl text-pretty font-sans text-base leading-7 text-midnight-blue/75"><FontAwesomeIcon icon={faUserGroup} className="mr-3 text-terracotta" />Made for two, with the courtyard, pool and rooftop terrace just beyond your door.</p></div></section>

      <section className="bg-midnight-blue py-24 text-cream md:py-32"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-12 px-5 md:px-10 lg:flex-row lg:items-end"><div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-saffron-gold">Continue exploring</p><h2 className="font-serif text-5xl font-light md:text-7xl">Next, {nextRoom.name}.</h2><p className="mt-5 max-w-lg font-sans text-base leading-7 text-cream/75">{nextRoom.tone}</p></div><div className="flex flex-col gap-5 sm:flex-row"><Link href={`/rooms/${nextRoom.slug}`} className="group inline-flex min-h-12 items-center gap-3 border border-cream/40 px-7 py-4 font-sans text-xs uppercase tracking-[.18em] hover:border-cream">View {nextRoom.name} <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link><Link href="/book" className="inline-flex min-h-12 items-center bg-terracotta px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[.18em] text-white hover:bg-deep-spice">Check availability</Link></div></div></section>
    </div>
  )
}
