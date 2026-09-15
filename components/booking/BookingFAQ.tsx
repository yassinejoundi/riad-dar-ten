import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const questions = [
  ["Where can I see the price for my dates?", "Live rates and availability are shown in the secure booking engine. Prices can vary by date, room and booking conditions."],
  ["Can I request a particular room?", "Yes. Select an available room when booking, or contact us if you would like help choosing between the six rooms."],
  ["What are the cancellation conditions?", "The exact cancellation and payment terms are displayed before you confirm. Review them carefully because they may vary by rate and date."],
  ["Can you help with arrival in the medina?", "Yes. Contact us with your arrival details and we can help with directions or discuss a transfer."],
] as const

export function BookingFAQ() {
  return (
    <section className="border-b border-saffron-gold/40 bg-midnight-blue py-24 text-cream md:py-36"><div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-saffron-gold">Before you confirm</p><h2 className="text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Useful answers.</h2><p className="mt-6 max-w-sm text-pretty font-sans text-base leading-7 text-cream/75">Need something specific? The house is small enough for a personal conversation.</p><Link href="/contact" className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-cream/40 font-sans text-xs uppercase tracking-[.18em] hover:border-cream">Contact Dar Ten <FontAwesomeIcon icon={faArrowRight} className="size-3 transition-transform group-hover:translate-x-1" /></Link></div><div className="divide-y divide-cream/15 border-t border-cream/15">{questions.map(([question, answer]) => <details key={question} className="group border-b border-cream/15"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-2xl font-light marker:content-none"><span>{question}</span><span className="font-sans text-2xl font-light text-terracotta transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-2xl pb-7 text-pretty font-sans text-base leading-7 text-cream/75">{answer}</p></details>)}</div></div></section>
  )
}
