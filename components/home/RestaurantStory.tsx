import Image from "next/image"

export function RestaurantStory() {
  return (
    <section id="story" className="scroll-mt-20 overflow-hidden bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24">
          <div className="relative min-h-[34rem] md:min-h-[46rem]">
            <div className="absolute inset-y-0 left-0 w-[86%] overflow-hidden">
              <Image
                src="/assets/images/restaurant/story-chef.png"
                alt="A Dar Ten chef finishing roasted aubergine with saffron oil"
                fill
                sizes="(max-width: 1024px) 86vw, 46vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-8 right-0 max-w-[14rem] bg-midnight-blue p-6 text-cream md:bottom-12 md:max-w-[17rem] md:p-8">
              <p className="font-accent text-2xl italic leading-snug md:text-3xl">
                “The memory stays. The plate moves forward.”
              </p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-saffron-gold">
                Our kitchen philosophy
              </p>
            </div>
          </div>

          <div className="lg:py-12">
            <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
              Rooted here · Made now
            </p>
            <h2 className="max-w-xl text-balance font-serif text-[clamp(3.25rem,6vw,6rem)] font-light leading-[0.92] tracking-[-0.035em] text-midnight-blue">
              Old recipes.<br />A restless <em className="font-light text-terracotta">spirit.</em>
            </h2>
            <div className="mt-9 max-w-xl space-y-5 text-pretty font-sans text-base leading-7 text-midnight-blue/75 md:text-lg md:leading-8">
              <p>
                Dar Ten begins with the food we grew up around: smoke from the
                brazier, citrus preserved through winter, bread torn and shared.
                We keep those memories close, then let the season lead.
              </p>
              <p>
                Our menu is cooked daily with produce from medina markets and
                small farms beyond Marrakech. Familiar flavours arrive with a
                lighter hand, built for a long evening at the table.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-y border-midnight-blue/15 py-6">
              <div>
                <dt className="font-sans text-xs uppercase tracking-[0.17em] text-midnight-blue/60">Produce</dt>
                <dd className="mt-2 font-serif text-xl font-light md:text-2xl">Local</dd>
              </div>
              <div className="border-x border-midnight-blue/15 px-5">
                <dt className="font-sans text-xs uppercase tracking-[0.17em] text-midnight-blue/60">Menu</dt>
                <dd className="mt-2 font-serif text-xl font-light md:text-2xl">Seasonal</dd>
              </div>
              <div className="pl-5">
                <dt className="font-sans text-xs uppercase tracking-[0.17em] text-midnight-blue/60">Cooking</dt>
                <dd className="mt-2 font-serif text-xl font-light md:text-2xl">By fire</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
