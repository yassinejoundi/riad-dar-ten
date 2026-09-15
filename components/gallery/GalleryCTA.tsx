import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export function GalleryCTA() {
  return <section className="relative min-h-[680px] overflow-hidden text-white"><Image src="/assets/images/home/cta-background.png" alt="Riad Dar Ten rooftop in warm evening light" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-black/65" /><div className="relative mx-auto flex min-h-[680px] max-w-[1320px] items-center justify-center px-5 py-24 text-center md:px-10"><div className="max-w-3xl"><p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[.26em] text-white/90">Beyond the photographs</p><h2 className="text-balance font-serif text-6xl font-light leading-[1.02] md:text-8xl">See Dar Ten<br/><em>for yourself.</em></h2><p className="mx-auto mb-10 mt-7 max-w-lg text-pretty font-sans text-base leading-7 text-white/90">Choose one of six rooms and make the house part of your Marrakech story.</p><Link href="/book" className="group inline-flex min-h-12 items-center gap-3 bg-terracotta px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[.18em] hover:bg-deep-spice">Check availability <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link></div></div></section>
}
