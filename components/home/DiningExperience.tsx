import Image from "next/image"

const details = [
  ["01", "Courtyard", "Dinner beneath the olive tree, held by candlelight and the sound of water."],
  ["02", "Rooftop", "Blue-hour tables open to the medina skyline and the distant Atlas Mountains."],
  ["03", "Ritual", "Mint tea poured slowly, small sweets passed around, and no reason to rush."],
] as const

export function DiningExperience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-terracotta">An evening at Dar Ten</p>
            <h2 className="max-w-4xl text-balance font-serif text-[clamp(3.4rem,7vw,7.25rem)] font-light leading-[0.88] tracking-[-0.04em] text-midnight-blue">
              Come for dinner.<br /><em className="font-light text-terracotta">Stay for the night air.</em>
            </h2>
          </div>
          <p className="max-w-md text-pretty font-sans text-base leading-7 text-midnight-blue/70 md:text-lg md:leading-8 lg:pb-2">
            Seats are few by design. Service follows the pace of the table,
            moving from the cool courtyard to the rooftop as Marrakech turns
            from gold to blue.
          </p>
        </div>

        <figure className="mt-14 md:mt-20">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[16/8.2]">
            <Image
              src="/assets/images/restaurant/rooftop-dining.png"
              alt="Candlelit rooftop tables overlooking Marrakech and the Atlas Mountains"
              fill
              sizes="(max-width: 768px) 100vw, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 flex justify-between gap-6 font-sans text-[0.62rem] uppercase tracking-[0.17em] text-midnight-blue/55">
            <span>Rooftop · Blue hour</span>
            <span>Marrakech, Morocco</span>
          </figcaption>
        </figure>

        <div className="mt-20 grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-24 md:mt-28">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] overflow-hidden lg:mx-0">
            <Image
              src="/assets/images/restaurant/ritual-tea.png"
              alt="Fresh mint tea poured beside warm Moroccan pastries"
              fill
              sizes="(max-width: 1024px) 90vw, 35vw"
              className="object-cover"
            />
          </div>
          <div className="border-t border-midnight-blue/15">
            {details.map(([number, title, description]) => (
              <article key={title} className="grid grid-cols-[2.25rem_1fr] gap-5 border-b border-midnight-blue/15 py-7 md:grid-cols-[3rem_11rem_1fr] md:gap-8 md:py-9">
                <p className="pt-1 font-sans text-[0.62rem] tracking-[0.17em] text-terracotta">{number}</p>
                <h3 className="font-serif text-2xl font-light md:text-3xl">{title}</h3>
                <p className="col-start-2 text-pretty font-sans text-sm leading-6 text-midnight-blue/65 md:col-start-3 md:text-base md:leading-7">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
