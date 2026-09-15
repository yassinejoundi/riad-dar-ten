import Image from "next/image"

const details = ["Smooth tadelakt plaster", "Carved Moroccan arches", "Natural wood and woven textiles", "A palette drawn from earth and spice"]

export function ArchitectureDesign() {
  return (
    <section className="bg-midnight-blue py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div><p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[.24em] text-saffron-gold">Architecture & craft</p><h2 className="text-balance font-serif text-5xl font-light leading-[1.02] md:text-7xl">Moroccan tradition, expressed with restraint.</h2></div>
          <p className="max-w-lg text-pretty font-sans text-base leading-7 text-cream/75 lg:justify-self-end">Dar Ten&apos;s character lives in tactile details rather than ornament for ornament&apos;s sake. Soft plaster, geometric tile, timber and linen hold the light differently through the day.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          <div className="relative min-h-[520px] md:col-span-7"><Image src="/assets/images/home/pool-spotlight.png" alt="Tadelakt and carved details around the courtyard pool" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" /></div>
          <div className="flex flex-col justify-between bg-[#2b3732] p-8 md:col-span-5 md:p-12"><p className="font-serif text-3xl font-light leading-snug text-cream/90">“A palette of plaster, earth, wood and water.”</p><ol className="mt-16 divide-y divide-cream/15 border-y border-cream/15">{details.map((detail, i) => <li key={detail} className="flex gap-5 py-5 font-sans text-base text-cream/75"><span className="font-serif text-terracotta">0{i + 1}</span>{detail}</li>)}</ol></div>
        </div>
      </div>
    </section>
  )
}
