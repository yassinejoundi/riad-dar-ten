import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons"

const photos = ["riaddarten-01.png", "riaddarten-04.png", "riaddarten-06.png"]

export function GuestExperience() {
  return (
    <section className="bg-[#e7ddcf] py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24">
          <div>
            <FontAwesomeIcon icon={faQuoteLeft} className="mb-8 size-6 text-terracotta" />
            <blockquote className="font-serif text-4xl font-light leading-[1.15] text-midnight-blue md:text-6xl">“A haven of peace in the middle of the Medina.”</blockquote>
            <div className="mt-8 flex gap-1 text-terracotta" aria-label="Five out of five stars">{Array.from({ length: 5 }).map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="size-3" />)}</div>
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-midnight-blue/60">Guest review · Booking.com</p>
          </div>
          <div>
            <div className="grid grid-cols-3 items-end gap-2 md:gap-4">
              {photos.map((photo, index) => <div key={photo} className={`relative overflow-hidden ${index === 1 ? "aspect-[3/5]" : "aspect-[3/4]"}`}><Image src={`/assets/images/home/instagram/${photo}`} alt={`A glimpse of life at Riad Dar Ten ${index + 1}`} fill sizes="33vw" className="object-cover" /></div>)}
            </div>
            <Link href="https://www.instagram.com/riaddarten/" target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-3 font-sans text-xs uppercase tracking-[0.18em] text-midnight-blue transition-colors hover:text-terracotta"><FontAwesomeIcon icon={faInstagram} className="size-4" /> Follow @riaddarten</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
