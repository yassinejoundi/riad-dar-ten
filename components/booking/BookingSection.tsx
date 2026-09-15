import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCalendarCheck, faEnvelope, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import { rooms } from "@/lib/rooms"
import { BookingRequestForm } from "@/components/booking/BookingRequestForm"

const bookingSteps = [
  [faCalendarCheck, "Share your dates", "Tell us when you would like to stay and who is travelling."],
  [faShieldHalved, "Review your request", "Check every detail before submitting it to the riad."],
  [faEnvelope, "Await confirmation", "The team will confirm availability, rate and conditions personally."],
] as const

export function BookingSection() {
  return (
    <div id="before-you-book">
      <section className="bg-cream py-24 md:py-36"><div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">A simple reservation</p><h2 className="text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">From your dates to our door.</h2></div><div className="divide-y divide-midnight-blue/15 border-y border-midnight-blue/15 lg:mt-12">{bookingSteps.map(([icon, title, copy], index) => <div key={title} className="grid grid-cols-[42px_1fr] gap-5 py-7"><span className="font-serif text-xl text-terracotta">0{index + 1}</span><div><h3 className="font-serif text-2xl font-light">{title}</h3><p className="mt-2 max-w-lg text-pretty font-sans text-base leading-7 text-midnight-blue/75">{copy}</p><FontAwesomeIcon icon={icon} className="mt-4 size-4 text-terracotta" /></div></div>)}</div></div></section>

      <section className="bg-midnight-blue py-24 text-cream md:py-36"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-saffron-gold">Choose your atmosphere</p><h2 className="text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Six rooms, one quiet house.</h2></div><Link href="/rooms" className="group inline-flex min-h-11 items-center gap-3 self-start border-b border-cream/40 font-sans text-xs uppercase tracking-[.18em] hover:border-cream md:self-auto">Compare every room <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{rooms.map((room) => <Link key={room.slug} href={`/rooms/${room.slug}`} className="group relative aspect-[4/5] overflow-hidden"><Image src={room.image} alt={`${room.name} double room`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><h3 className="font-serif text-4xl font-light">{room.name}</h3><p className="mt-2 font-sans text-sm leading-6 text-white/90">{room.tone}</p></div></Link>)}</div></div></section>

      <section id="booking-engine" className="bg-[#e7ddcf] py-24 md:py-32"><div className="mx-auto max-w-[1320px] px-5 md:px-10"><BookingRequestForm /></div></section>
    </div>
  )
}
