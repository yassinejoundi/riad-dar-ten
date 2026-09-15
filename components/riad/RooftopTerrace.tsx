import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const moments = [[faCoffee, "Breakfast in the open air"], [faSun, "A quiet place for afternoon sun"], [faMoon, "Cool evenings above the medina"]] as const

export function RooftopTerrace() {
  return (
    <section className="relative min-h-[760px] overflow-hidden text-white">
      <Image src="/assets/images/gallery/rooftop-terrace.png" alt="Rooftop terrace at Riad Dar Ten" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
      <div className="relative mx-auto flex min-h-[760px] max-w-[1320px] items-center px-5 py-24 md:px-10"><div className="max-w-xl"><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-white/90">Above the rooftops</p><h2 className="mb-8 text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">From first coffee to the last light.</h2><p className="mb-10 text-pretty font-sans text-base leading-7 text-white/90 md:text-lg md:leading-8">The terrace opens a gentler view of Marrakech: terracotta roofs, open sky and the distant outline of the Atlas on clear days.</p><ul className="divide-y divide-white/25 border-y border-white/25">{moments.map(([icon, label]) => <li key={label} className="flex items-center gap-4 py-5 font-sans text-base text-white/90"><FontAwesomeIcon icon={icon} className="size-4 text-saffron-gold" />{label}</li>)}</ul></div></div>
    </section>
  )
}
