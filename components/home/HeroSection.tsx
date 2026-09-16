import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[46rem] h-[100svh] overflow-hidden bg-midnight-blue text-white">
      <Image
        src="/assets/images/restaurant/hero-courtyard.png"
        alt="A candlelit dinner table in the Dar Ten courtyard"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,17,.88)_0%,rgba(13,20,17,.57)_42%,rgba(13,20,17,.08)_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,20,17,.5)_0%,transparent_45%,rgba(13,20,17,.18)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 md:px-10 md:pb-16 lg:pb-20">
        <div className="max-w-4xl">
          <p className="mb-6 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/80">
            Contemporary Moroccan table · Marrakech
          </p>
          <h1 className="max-w-3xl text-balance font-serif text-[clamp(3.8rem,8.5vw,8rem)] font-light leading-[0.84] tracking-[-0.045em]">
            Morocco,<br />served in a <em className="font-light text-desert-sand">new light.</em>
          </h1>
          <p className="mt-7 max-w-xl text-pretty font-sans text-base leading-7 text-white/85 md:text-lg md:leading-8">
            A seasonal expression of Moroccan cooking, gathered around one
            courtyard table in the heart of the medina.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="#reserve"
              className="group inline-flex min-h-12 items-center gap-3 bg-terracotta px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-deep-spice"
            >
              Reserve a table
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="#menu"
              className="group inline-flex min-h-12 items-center gap-3 border-b border-white/50 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:border-white"
            >
              Explore the menu
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex max-w-xl flex-wrap gap-x-10 gap-y-3 border-t border-white/25 pt-5 font-sans text-[0.7rem] uppercase tracking-[0.16em] text-white/75 md:absolute md:bottom-16 md:right-10 md:mt-0 md:w-[22rem]">
          <span>Dinner · Tue–Sun</span>
          <span>From 6:30 pm</span>
        </div>
      </div>
    </section>
  )
}
