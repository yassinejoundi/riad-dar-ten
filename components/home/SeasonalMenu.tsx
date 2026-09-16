import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const dishes = [
  {
    course: "To begin",
    name: "Charred octopus",
    detail: "Green chermoula, confit tomato, preserved lemon",
    price: "190",
  },
  {
    course: "From the fire",
    name: "Atlas lamb",
    detail: "Date glaze, smoked aubergine, toasted almond",
    price: "280",
  },
  {
    course: "From the garden",
    name: "Young courgette",
    detail: "Saffron broth, wild fennel, fermented chilli",
    price: "160",
    note: "Plant-based",
  },
  {
    course: "To finish",
    name: "Orange blossom mille-feuille",
    detail: "Pistachio praline, citrus honey",
    price: "110",
  },
]

export function SeasonalMenu() {
  return (
    <section id="menu" className="scroll-mt-20 bg-midnight-blue py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-24">
          <div className="lg:sticky lg:top-28">
            <p className="mb-6 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-saffron-gold">
              A taste of Dar Ten
            </p>
            <h2 className="max-w-xl text-balance font-serif text-[clamp(3.5rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.035em]">
              Led by the market,<br /><em className="font-light text-terracotta">made for sharing.</em>
            </h2>
            <p className="mt-8 max-w-lg text-pretty font-sans text-base leading-7 text-cream/70 md:text-lg md:leading-8">
              Our menu changes with what arrives each morning. Plates move
              between land, coast and garden, with Moroccan spice used for depth,
              never disguise.
            </p>

            <div className="relative mt-10 aspect-[5/4] overflow-hidden lg:mt-14">
              <Image
                src="/assets/images/restaurant/menu-table.png"
                alt="Octopus, lamb and orange blossom dessert from the Dar Ten menu"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="border-t border-cream/20">
            {dishes.map((dish, index) => (
              <article key={dish.name} className="grid grid-cols-[1fr_auto] gap-6 border-b border-cream/20 py-8 md:py-10">
                <div>
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-saffron-gold">
                    {String(index + 1).padStart(2, "0")} · {dish.course}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-light md:text-4xl">{dish.name}</h3>
                  <p className="mt-2 max-w-xl text-pretty font-sans text-sm leading-6 text-cream/65 md:text-base md:leading-7">{dish.detail}</p>
                  {dish.note && <p className="mt-3 font-sans text-[0.62rem] uppercase tracking-[0.16em] text-desert-sand">{dish.note}</p>}
                </div>
                <p className="font-serif text-xl font-light tabular-nums text-cream/85">
                  <span className="sr-only">Price </span>{dish.price} <span className="font-sans text-[0.58rem] uppercase tracking-wider">MAD</span>
                </p>
              </article>
            ))}

            <div className="mt-9 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-pretty font-sans text-xs leading-5 text-cream/55">
                Sample à la carte menu. Ingredients and dishes change with the season. Tell us about allergies when reserving.
              </p>
              <Link href="#reserve" className="group inline-flex min-h-12 shrink-0 items-center gap-3 bg-terracotta px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-deep-spice">
                Reserve a table
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
