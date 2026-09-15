import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBreadSlice, faLeaf, faMugHot } from "@fortawesome/free-solid-svg-icons"

const breakfast = [[faBreadSlice, "Moroccan breads and pancakes"], [faLeaf, "Fresh, local ingredients"], [faMugHot, "Coffee and traditional mint tea"]] as const

export function DiningExperience() {
  return (
    <section className="bg-[#e7ddcf] py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24">
          <div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">At the table</p><h2 className="mb-8 text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Morning begins with something homemade.</h2><p className="mb-10 max-w-lg text-pretty font-sans text-base leading-7 text-midnight-blue/75 md:text-lg md:leading-8">Breakfast is prepared in the house and served where the morning feels best, in the courtyard or up on the terrace. Dinner can also be arranged to discover Houda&apos;s home cooking.</p><ul className="divide-y divide-midnight-blue/15 border-y border-midnight-blue/15">{breakfast.map(([icon, label]) => <li key={label} className="flex items-center gap-4 py-5 font-sans text-base text-midnight-blue/80"><FontAwesomeIcon icon={icon} className="size-4 text-terracotta" />{label}</li>)}</ul></div>
          <div className="grid grid-cols-2 gap-3 md:gap-4"><div className="relative col-span-2 aspect-[16/9]"><Image src="/assets/images/riad/food/breakfast-03.png" alt="Homemade breakfast served at Riad Dar Ten" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div><div className="relative aspect-square"><Image src="/assets/images/riad/food/breakfast-01.png" alt="Fresh Moroccan breakfast dishes" fill sizes="30vw" className="object-cover" /></div><div className="relative aspect-square"><Image src="/assets/images/riad/food/breakfast-02.png" alt="Breakfast table prepared for guests" fill sizes="30vw" className="object-cover" /></div></div>
        </div>
      </div>
    </section>
  )
}
