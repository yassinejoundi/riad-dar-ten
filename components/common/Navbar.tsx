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

  return (
    <nav
      className={cn(
        "fixed z-50 w-full border-b transition-all duration-500",
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
                  "py-3 font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] transition-colors",
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
              className="border border-terracotta bg-terracotta px-6 py-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-deep-spice"
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
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream transition-transform duration-500 ease-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="font-serif text-4xl font-light text-midnight-blue transition-colors hover:text-terracotta"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="mt-5 bg-terracotta px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-deep-spice"
          >
            Book your stay
          </Link>
        </div>
      </div>
    </nav>
  )
}
