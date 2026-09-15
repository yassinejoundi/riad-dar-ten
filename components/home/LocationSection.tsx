import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faLocationDot, faPersonWalking } from "@fortawesome/free-solid-svg-icons"

export function LocationSection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="mb-5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-terracotta">In the medina</p>
          <h2 className="font-serif text-5xl font-light leading-none md:text-7xl">Marrakech at the door. Stillness within.</h2>
        </div>
        <div className="lg:pt-12">
          <p className="mb-8 max-w-lg font-sans text-lg leading-8 text-midnight-blue/70">Dar Ten sits in Lakssour, one of the medina&apos;s most central quarters. Step out towards the souks and Jemaa el-Fna; return to cool plaster, shade and the sound of water.</p>
          <div className="mb-8 flex gap-8 border-y border-midnight-blue/15 py-6 font-sans text-sm"><span><FontAwesomeIcon icon={faPersonWalking} className="mr-3 text-terracotta" />2 min to Jemaa el-Fna</span><span><FontAwesomeIcon icon={faLocationDot} className="mr-3 text-terracotta" />Lakssour</span></div>
          <Link href="/contact" className="group inline-flex min-h-11 items-center gap-3 border-b border-midnight-blue/30 font-sans text-xs uppercase tracking-[0.18em] hover:border-midnight-blue">Plan your arrival <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </section>
  )
}
