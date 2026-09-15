"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "The Riad", href: "/riad" },
  { name: "Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-500",
        scrolled || isOpen
          ? "border-midnight-blue/10 bg-cream/95 py-3 backdrop-blur-md"
          : "border-white/20 bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50 leading-none" aria-label="Riad Dar Ten home">
            <span
              className={cn(
                "font-serif text-[1.7rem] font-light tracking-[0.16em] transition-colors md:text-3xl",
                scrolled || isOpen ? "text-midnight-blue" : "text-white"
              )}
            >
              DAR TEN
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "py-3 font-sans text-xs font-medium uppercase tracking-[0.16em] transition-colors",
                  scrolled
                    ? "text-midnight-blue hover:text-terracotta"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="border border-terracotta bg-terracotta px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-deep-spice"
            >
              Book your stay
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "relative z-50 flex size-11 items-center justify-center transition-colors",
                scrolled || isOpen
                  ? "text-midnight-blue hover:text-terracotta"
                  : "text-white hover:text-white"
              )}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[69px] z-40 overflow-y-auto overscroll-contain bg-cream transition-[transform,visibility] duration-500 ease-out lg:hidden",
          isOpen ? "visible translate-x-0" : "invisible translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto flex min-h-full w-full max-w-md flex-col items-stretch justify-start gap-2 px-5 pb-8 pt-8 sm:items-center sm:justify-center sm:gap-4 sm:py-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="flex min-h-14 items-center border-b border-midnight-blue/15 font-serif text-3xl font-light text-midnight-blue transition-colors hover:text-terracotta sm:min-h-16 sm:border-0 sm:text-4xl"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="mt-5 flex min-h-12 w-full items-center justify-center bg-terracotta px-8 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-deep-spice sm:w-auto"
          >
            Book your stay
          </Link>
        </div>
      </div>
    </nav>
  )
}
