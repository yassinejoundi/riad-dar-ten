import Link from "next/link"
import { Instagram } from "lucide-react"

const links = [
  ["Our story", "/#story"],
  ["Menu", "/#menu"],
  ["The table", "/#experience"],
  ["Visit", "/#visit"],
] as const

export function Footer() {
  return (
    <footer className="bg-midnight-blue text-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-14 border-b border-cream/15 pb-14 md:grid-cols-[1.2fr_.8fr_.8fr] md:gap-16">
          <div>
            <Link href="/" className="inline-block" aria-label="Dar Ten restaurant home">
              <span className="block font-serif text-4xl font-light tracking-[0.15em]">DAR TEN</span>
              <span className="mt-1 block font-sans text-[0.55rem] uppercase tracking-[0.3em] text-cream/55">Kitchen · Marrakech</span>
            </Link>
            <p className="mt-7 max-w-sm text-pretty font-serif text-2xl font-light leading-8 text-cream/75">
              Moroccan memory, seasonal ingredients, one intimate table.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-saffron-gold">Explore</p>
            <ul className="space-y-1">
              {links.map(([name, href]) => (
                <li key={name}><Link href={href} className="flex min-h-11 items-center font-sans text-sm text-cream/70 transition-colors hover:text-white">{name}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-saffron-gold">Keep close</p>
            <a href="https://www.instagram.com/riaddarten/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-3 font-sans text-sm text-cream/70 transition-colors hover:text-white">
              <Instagram className="size-4 text-terracotta" aria-hidden="true" />
              @riaddarten
            </a>
            <p className="mt-8 font-sans text-xs leading-6 text-cream/55">Dinner Tuesday–Sunday<br />6:30–11:00 pm</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 font-sans text-[0.62rem] uppercase tracking-[0.14em] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dar Ten Marrakech</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="flex min-h-11 items-center transition-colors hover:text-cream">Privacy</Link>
            <Link href="/terms" className="flex min-h-11 items-center transition-colors hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
