import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const images = ["riaddarten-01.png", "riaddarten-02.png", "riaddarten-04.png", "riaddarten-05.png"]

export function InstagramFeed() {
  return <section className="bg-cream py-24 md:py-32"><div className="mx-auto max-w-[1320px] px-5 md:px-10"><div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[.24em] text-terracotta">Life at Dar Ten</p><h2 className="font-serif text-4xl font-light md:text-6xl">Follow the daily story.</h2></div><Link href="https://www.instagram.com/riaddarten/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-3 self-start font-sans text-xs uppercase tracking-[.18em] hover:text-terracotta md:self-auto"><FontAwesomeIcon icon={faInstagram} className="size-4" />@riaddarten</Link></div><div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">{images.map((image, index) => <Link key={image} href="https://www.instagram.com/riaddarten/" target="_blank" rel="noreferrer" className={`relative overflow-hidden ${index % 2 ? "aspect-[4/5]" : "aspect-square"}`} aria-label="View Riad Dar Ten on Instagram"><Image src={`/assets/images/home/instagram/${image}`} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-[1.035]" /></Link>)}</div></div></section>
}
