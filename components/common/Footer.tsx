import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-midnight-blue text-cream pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl text-saffron-gold">
              Riad Dar Ten
            </h2>
            <p className="font-sans text-white/80 leading-relaxed">
              Where tradition meets tranquility in the heart of Marrakech. An
              intimate sanctuary for your soul.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-white/70 hover:text-terracotta transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-terracotta transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl text-saffron-gold mb-6">
              Explore
            </h3>
            <ul className="space-y-3 font-sans text-white/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-terracotta transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/riad"
                  className="hover:text-terracotta transition-colors"
                >
                  The Riad
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-terracotta transition-colors"
                >
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-terracotta transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-terracotta transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Rooms (Replaces Newsletter) */}
          <div>
            <h3 className="font-serif text-xl text-saffron-gold mb-6">
              Our Rooms
            </h3>
            <ul className="space-y-3 font-sans text-white/80">
              <li>
                <Link
                  href="/rooms/vanilla"
                  className="hover:text-terracotta transition-colors"
                >
                  Vanilla Double Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/chocolate"
                  className="hover:text-terracotta transition-colors"
                >
                  Chocolate Double Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/canelle"
                  className="hover:text-terracotta transition-colors"
                >
                  Canelle Double Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/muscade"
                  className="hover:text-terracotta transition-colors"
                >
                  Muscade Double Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/safran"
                  className="hover:text-terracotta transition-colors"
                >
                  Safran Double Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/paprika"
                  className="hover:text-terracotta transition-colors"
                >
                  Paprika Double Room
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-saffron-gold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 font-sans text-white/80">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-3 mt-1 text-terracotta flex-shrink-0"
                />
                <span>
                  10 derb Moulay El Ghali (Lakssour, Médina)
                  <br />
                  40000 Marrakech
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-3 mt-1 text-terracotta flex-shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <span>+212 524 39 07 08</span>
                  <span>+212 660 21 57 00</span>
                  <span>+33 667 15 88 15</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-3 text-terracotta flex-shrink-0"
                />
                <span>info@riaddarten.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 font-sans">
          <p>&copy; {currentYear} Riad Dar Ten. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-0">
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <span className="hidden md:inline mx-2 text-white/20">|</span>
            <p className="mt-2 md:mt-0">
              Created by{" "}
              <Link
                href="https://www.yassinejoundi.com"
                target="_blank"
                className="text-white font-medium hover:text-terracotta transition-colors"
              >
                Yassine Joundi
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
