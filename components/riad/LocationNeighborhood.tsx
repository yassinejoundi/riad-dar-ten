import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faLocationDot, faPersonWalking } from "@fortawesome/free-solid-svg-icons"

export function LocationNeighborhood() {
  return (
    <section className="bg-midnight-blue py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-saffron-gold">Lakssour, the medina</p><h2 className="mb-8 text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Close to everything. A world apart.</h2><p className="max-w-lg text-pretty font-sans text-base leading-7 text-cream/75 md:text-lg md:leading-8">Dar Ten is tucked into Lakssour, just two minutes on foot from Jemaa el-Fna and within easy walking distance of the souks. The city is immediate; the house remains peaceful.</p><div className="my-8 flex flex-col gap-4 border-y border-cream/15 py-6 font-sans text-base text-cream/80 sm:flex-row sm:gap-8"><span><FontAwesomeIcon icon={faPersonWalking} className="mr-3 text-terracotta" />2 min to Jemaa el-Fna</span><span><FontAwesomeIcon icon={faLocationDot} className="mr-3 text-terracotta" />10 derb Moulay El Ghali</span></div><Link href="/contact" className="group inline-flex min-h-11 items-center gap-3 border-b border-cream/40 font-sans text-xs uppercase tracking-[.18em] hover:border-cream">Plan your arrival <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link></div>
        <div className="min-h-[520px] overflow-hidden border-[10px] border-cream/10"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2133549842956!2d-7.9932132238420035!3d31.628008241815227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee428df5384f%3A0xa47e07166af7acc9!2sRiad%20Dar%20Ten!5e0!3m2!1sen!2s!4v1768066932953!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0, minHeight: 520 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map showing Riad Dar Ten in the Marrakech medina" /></div>
      </div>
    </section>
  )
}
