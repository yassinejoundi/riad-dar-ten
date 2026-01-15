"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Riad", href: "/riad" },
  { name: "Rooms & Suites", href: "/rooms" },
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
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1
              className={cn(
                "font-serif text-2xl md:text-3xl font-semibold tracking-wider transition-colors",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              RIAD DAR TEN
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors font-sans text-sm font-medium uppercase tracking-wide",
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
              className="bg-terracotta text-white px-6 py-2.5 rounded-sm font-sans text-sm font-semibold tracking-wide hover:bg-deep-spice transition-colors duration-300"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "transition-colors p-2",
                scrolled
                  ? "text-midnight-blue hover:text-terracotta"
                  : "text-white hover:text-white"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-cream/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "0", height: "100vh" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-midnight-blue hover:text-terracotta transition-colors p-2"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-midnight-blue hover:text-terracotta transition-colors font-serif text-2xl font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-terracotta text-white px-8 py-3 rounded-sm font-sans text-lg font-semibold tracking-wide hover:bg-deep-spice transition-colors duration-300"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  )
}
