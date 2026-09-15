import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"

const links = [
  ["The Riad", "/riad"],
  ["Rooms", "/rooms"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const

export function Footer() {
  return (
    <footer className="bg-midnight-blue text-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.4fr_.6fr_1fr] lg:gap-20">
          <div>
            <Link href="/" className="font-serif text-4xl font-light tracking-[0.1em]">DAR TEN</Link>
            <p className="mt-6 max-w-sm font-sans text-sm leading-7 text-cream/60">An intimate six-room guesthouse in Lakssour, at the heart of the Marrakech medina.</p>
            <Link href="/book" className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-cream/35 font-sans text-xs uppercase tracking-[0.18em] hover:border-cream">Book your stay <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <nav aria-label="Footer navigation">
            <p className="mb-6 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-saffron-gold">Explore</p>
            <ul className="space-y-4">{links.map(([name, href]) => <li key={name}><Link href={href} className="font-serif text-2xl font-light text-cream/80 transition-colors hover:text-white">{name}</Link></li>)}</ul>
          </nav>
          <address className="not-italic">
            <p className="mb-6 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-saffron-gold">Find us</p>
            <div className="space-y-5 font-sans text-sm leading-6 text-cream/65">
              <p className="flex gap-4"><FontAwesomeIcon icon={faLocationDot} className="mt-1 size-3 text-terracotta" /><span>10 derb Moulay El Ghali<br />Lakssour, Medina, Marrakech</span></p>
              <a href="tel:+212524390708" className="flex min-h-11 items-center gap-4 transition-colors hover:text-white"><FontAwesomeIcon icon={faPhone} className="size-3 text-terracotta" />+212 524 39 07 08</a>
              <a href="mailto:riad.darten@gmail.com" className="flex min-h-11 items-center gap-4 transition-colors hover:text-white"><FontAwesomeIcon icon={faEnvelope} className="size-3 text-terracotta" />riad.darten@gmail.com</a>
              <a href="https://www.instagram.com/riaddarten/" target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-4 transition-colors hover:text-white"><FontAwesomeIcon icon={faInstagram} className="size-4 text-terracotta" />@riaddarten</a>
            </div>
          </address>
        </div>
        <div className="flex flex-col gap-5 pt-7 font-sans text-[0.65rem] uppercase tracking-[0.14em] text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Riad Dar Ten</p>
          <div className="flex gap-6"><Link href="/privacy" className="hover:text-cream">Privacy</Link><Link href="/terms" className="hover:text-cream">Terms</Link></div>
        </div>
      </div>
    </footer>
  )
}
