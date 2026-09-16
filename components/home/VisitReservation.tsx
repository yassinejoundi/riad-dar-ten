import { ArrowUpRight, Clock3, MapPin } from "lucide-react"

export function VisitReservation() {
  return (
    <section id="visit" className="scroll-mt-20 bg-tadelakt-green text-white">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:pr-20">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white">Find our door</p>
          <h2 className="text-balance font-serif text-[clamp(3.5rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.035em]">
            Hidden in the medina.<br /><em className="font-light text-desert-sand">Worth finding.</em>
          </h2>
          <p className="mt-8 max-w-lg text-pretty font-sans text-base leading-7 text-white md:text-lg md:leading-8">
            Dar Ten is in Lakssour, a short walk from Jemaa el-Fna. Our team can
            meet you at the nearest drop-off point and guide you through the last
            turns of the medina.
          </p>

          <div className="mt-12 divide-y divide-white/20 border-y border-white/20">
            <div className="grid grid-cols-[2.5rem_1fr] gap-4 py-6">
              <MapPin className="mt-1 size-4 text-desert-sand" aria-hidden="true" />
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white">Address</p>
                <address className="mt-2 font-serif text-2xl font-light not-italic">10 Derb Moulay El Ghali<br />Lakssour, Marrakech</address>
              </div>
            </div>
            <div className="grid grid-cols-[2.5rem_1fr] gap-4 py-6">
              <Clock3 className="mt-1 size-4 text-desert-sand" aria-hidden="true" />
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white">Dinner</p>
                <p className="mt-2 font-serif text-2xl font-light">Tuesday–Sunday · 6:30–11:00 pm</p>
              </div>
            </div>
          </div>

          <a href="https://www.google.com/maps/search/?api=1&query=10+Derb+Moulay+El+Ghali+Lakssour+Marrakech" target="_blank" rel="noreferrer" className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-white/40 font-sans text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:border-white">
            Get directions
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <div id="reserve" className="scroll-mt-20 bg-terracotta px-5 py-24 md:px-10 md:py-32 lg:flex lg:flex-col lg:justify-center lg:px-20">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Reservations</p>
          <h2 className="max-w-xl text-balance font-serif text-[clamp(3.5rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.035em]">
            Your table is<br /><em className="font-light text-desert-sand">almost set.</em>
          </h2>
          <p className="mt-8 max-w-lg text-pretty font-sans text-base leading-7 text-white/90 md:text-lg md:leading-8">
            Send your preferred date, time, party size and any dietary needs.
            We will reply personally to confirm your table.
          </p>
          <a href="mailto:riad.darten@gmail.com?subject=Table%20reservation%20at%20Dar%20Ten" className="group mt-10 inline-flex min-h-14 w-fit items-center gap-4 bg-cream px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-midnight-blue transition-colors hover:bg-white">
            Request a table
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/25 pt-6 font-sans text-xs text-white/90">
            <a href="tel:+212524390708" className="flex min-h-11 items-center transition-colors hover:text-white">+212 524 39 07 08</a>
            <a href="mailto:riad.darten@gmail.com" className="flex min-h-11 items-center transition-colors hover:text-white">riad.darten@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
