import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export function RoomsCTA() {
  return (
    <section className="relative min-h-[680px] overflow-hidden text-white"><Image src="/assets/images/rooms/cta-background.jpg" alt="Riad Dar Ten courtyard" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-black/65" /><div className="relative mx-auto flex min-h-[680px] max-w-[1320px] items-center justify-center px-5 py-24 text-center md:px-10"><div className="max-w-3xl"><p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[.26em] text-white/90">Your room in Marrakech</p><h2 className="text-balance font-serif text-6xl font-light leading-[1.02] md:text-8xl">Which door will<br/><em>be yours?</em></h2><p className="mx-auto mb-10 mt-7 max-w-lg text-pretty font-sans text-base leading-7 text-white/90">Check your dates or speak with us if you would like help choosing your room.</p><div className="flex flex-col items-center justify-center gap-5 sm:flex-row"><Link href="/book" className="group inline-flex min-h-12 items-center gap-3 bg-terracotta px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[.18em] hover:bg-deep-spice">Check availability <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link><Link href="/contact" className="inline-flex min-h-11 items-center border-b border-white/50 font-sans text-xs uppercase tracking-[.18em] hover:border-white">Ask us a question</Link></div></div></div></section>
  )
}
