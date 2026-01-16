"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/contact/hero-background.png"
          alt="Riad Dar Ten entrance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8">
        <motion.div
          className="mb-6 text-sm font-sans text-gray-200 flex items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-100">Contact</span>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-stretch">
          <motion.div
            className="space-y-4 text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md">
              We&apos;re Here to Help
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-100 max-w-xl drop-shadow-sm">
              Let&apos;s plan your perfect Marrakech escape, tailored to the way
              you like to travel.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/60 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-serif text-2xl text-primary mb-4">
              Get in touch
            </h2>
            <div className="space-y-4 font-sans text-sm text-gray-700">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500 mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/212660215700"
                  className="text-primary hover:text-terracotta transition-colors"
                >
                  +212 6 60 21 57 00
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500 mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@riaddarten.com"
                  className="text-primary hover:text-terracotta transition-colors break-all"
                >
                  info@riaddarten.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500 mb-1">
                  Address
                </p>
                <p className="text-gray-700">
                  Riad Dar Ten
                  <br />
                  Marrakech Medina, Morocco
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500 mb-1">
                  Check-in
                </p>
                <p className="text-gray-700">
                  From 14:00 · Flexible on request
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
