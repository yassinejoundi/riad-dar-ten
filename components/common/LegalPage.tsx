import type { ReactNode } from "react"
import Link from "next/link"

type LegalSection = {
  title: string
  content: ReactNode
}

type LegalPageProps = {
  eyebrow: string
  title: string
  introduction: string
  sections: LegalSection[]
  note: ReactNode
}

function sectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function LegalPage({ eyebrow, title, introduction, sections, note }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-cream text-midnight-blue">
      <header className="relative overflow-hidden bg-midnight-blue px-5 pb-20 pt-36 text-cream md:px-10 md:pb-28 md:pt-44">
        <div aria-hidden="true" className="absolute -right-20 top-16 size-72 rounded-full border border-cream/10 md:size-[28rem]" />
        <div aria-hidden="true" className="absolute -right-8 top-28 size-48 rounded-full border border-terracotta/40 md:size-80" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-saffron">{eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-cream/75 md:text-lg md:leading-8">{introduction}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-24">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="border-b border-midnight-blue/20 pb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">On this page</p>
          <nav aria-label={`${title} sections`} className="mt-4">
            <ol className="space-y-1">
              {sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#${sectionId(section.title)}`} className="group flex min-h-11 items-center gap-3 py-2 font-sans text-sm leading-5 text-midnight-blue/65 transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
                    <span className="font-serif text-lg text-terracotta/70" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl">
          {sections.map((section, index) => (
            <section id={sectionId(section.title)} key={section.title} className="scroll-mt-28 border-t border-midnight-blue/15 py-10 first:border-t-0 first:pt-0 md:py-14">
              <div className="mb-5 flex items-baseline gap-4">
                <span className="font-serif text-xl text-terracotta" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">{section.title}</h2>
              </div>
              <div className="space-y-5 font-sans text-base leading-8 text-midnight-blue/75 [&_a]:font-semibold [&_a]:text-midnight-blue [&_a]:underline [&_a]:decoration-terracotta [&_a]:underline-offset-4 [&_li]:pl-2 [&_ul]:ml-5 [&_ul]:list-[square] [&_ul]:space-y-2 [&_ul]:marker:text-terracotta">
                {section.content}
              </div>
            </section>
          ))}

          <div className="mt-4 border-l-2 border-saffron bg-midnight-blue/[0.04] px-6 py-5 font-sans text-sm leading-6 text-midnight-blue/65">{note}</div>
          <div className="mt-12 flex flex-wrap gap-6 border-t border-midnight-blue/15 pt-8 font-sans text-sm font-semibold">
            <Link href="/contact" className="underline decoration-terracotta underline-offset-4 hover:text-terracotta">Contact the riad</Link>
            <Link href="/book" className="underline decoration-terracotta underline-offset-4 hover:text-terracotta">Request a stay</Link>
          </div>
        </article>
      </div>
    </main>
  )
}
