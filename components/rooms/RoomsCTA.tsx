"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarCheck, MessageCircleQuestion } from "lucide-react"
import { motion } from "motion/react"

export function RoomsCTA() {
  return (
    <section className="relative py-24 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/rooms/cta-background.jpg"
          alt="Riad Dar Ten Courtyard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
            Your Sanctuary Awaits
          </h2>
          <p className="text-gray-200 font-sans text-lg md:text-xl leading-relaxed">
            Whether you’re ready to secure your stay or have questions about
            accommodations, our team is here to ensure your Moroccan experience
            is perfect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {/* Booking Option */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta mx-auto mb-4">
                <CalendarCheck size={24} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">
                Ready to Reserve?
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Check availability and book your preferred room directly for the
                best rates.
              </p>
              <Button
                asChild
                className="w-full bg-primary text-white hover:bg-primary/90 py-6 text-lg font-sans tracking-wide"
              >
                <Link href="/book">Book Now</Link>
              </Button>
            </motion.div>

            {/* Contact Option */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta mx-auto mb-4">
                <MessageCircleQuestion size={24} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">
                Have Questions?
              </h3>
              <p className="font-sans text-gray-600 mb-6">
                Need help choosing a room or planning your special occasion? Let
                us assist you.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white py-6 text-lg font-sans tracking-wide"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
