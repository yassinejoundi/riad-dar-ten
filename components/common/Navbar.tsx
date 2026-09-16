"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Our story", href: "/#story" },
  { name: "Menu", href: "/#menu" },
  { name: "The table", href: "/#experience" },
  { name: "Visit", href: "/#visit" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
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

  const solid = scrolled || isOpen

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-300",
          solid
            ? "border-midnight-blue/10 bg-cream/95 py-3 backdrop-blur-md"
            : "border-white/20 bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="relative z-50" aria-label="Dar Ten restaurant home">
            <span className={cn("block font-serif text-2xl font-light tracking-[0.16em] transition-colors md:text-[1.7rem]", solid ? "text-midnight-blue" : "text-white")}>DAR TEN</span>
            <span className={cn("mt-0.5 block font-sans text-[0.625rem] uppercase tracking-[0.25em] transition-colors", solid ? "text-midnight-blue/65" : "text-white/70")}>Kitchen · Marrakech</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={cn("flex min-h-11 items-center font-sans text-xs font-medium uppercase tracking-[0.16em] transition-colors", solid ? "text-midnight-blue hover:text-terracotta" : "text-white/85 hover:text-white")}>{link.name}</Link>
            ))}
            <Link href="/#reserve" className="inline-flex min-h-11 items-center bg-terracotta px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-deep-spice">Reserve</Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={cn("relative z-50 flex size-11 items-center justify-center lg:hidden", solid ? "text-midnight-blue" : "text-white")}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={cn("fixed inset-x-0 bottom-0 top-[73px] z-40 overflow-y-auto overscroll-contain bg-cream transition-[transform,visibility] duration-300 lg:hidden", isOpen ? "visible translate-x-0" : "invisible translate-x-full")}
      >
        <div className="mx-auto flex min-h-full max-w-md flex-col justify-center px-5 py-10">
          {navLinks.map((link, index) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="flex min-h-16 items-center gap-5 border-b border-midnight-blue/15 font-serif text-3xl font-light text-midnight-blue">
              <span className="font-sans text-xs tracking-[0.15em] text-terracotta">0{index + 1}</span>{link.name}
            </Link>
          ))}
          <Link href="/#reserve" onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1} className="mt-8 flex min-h-12 items-center justify-center bg-terracotta px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white">Reserve a table</Link>
        </div>
      </nav>
    </>
  )
}
