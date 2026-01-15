"use client"

import Image from "next/image"
import { Coffee, UtensilsCrossed, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react"

export function DiningExperience() {
  const diningOptions = [
    {
      icon: Coffee,
      title: "Morning Awakening",
      subtitle: "Breakfast Service",
      details: [
        "Rich Continental Breakfast included",
        "Served on the Patio or Rooftop Terrace",
        "Available from 8:30 AM to 10:30 AM",
        "Freshly squeezed juices & Moroccan pancakes",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "The Flavor of Morocco",
      subtitle: "Restaurant",
      details: [
        "Authentic home-cooked Moroccan cuisine",
        "Lunch and Dinner service available",
        "Family-friendly atmosphere",
        "Tagines, Couscous, and Pastilla specialties",
      ],
    },
    {
      icon: Clock,
      title: "Anytime Delights",
      subtitle: "All Day Service",
      details: [
        "Light meals and snacks available",
        "Traditional Mint Tea ritual",
        "Refreshments by the pool",
      ],
    },
  ]

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-2">
              Taste the Tradition
            </h2>
            <p className="text-gray-600 font-sans text-lg mb-10">
              At Riad Dar Ten, every meal is a celebration of Moroccan culinary
              heritage, prepared with fresh local ingredients and love.
            </p>

            <div className="space-y-8">
              {diningOptions.map((option, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-terracotta border border-desert-sand">
                      <option.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-primary mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm font-bold text-terracotta uppercase tracking-wider mb-2">
                      {option.subtitle}
                    </p>
                    <ul className="space-y-2">
                      {option.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 font-sans text-sm flex items-start"
                        >
                          <span className="mr-2 text-terracotta">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 grid grid-cols-2 gap-4 sticky top-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/images/riad/food/breakfast-01.png"
                alt="Moroccan Tea Time"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md mt-8">
              <Image
                src="/assets/images/riad/food/breakfast-02.png"
                alt="Dining Atmosphere"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md col-span-2">
              <Image
                src="/assets/images/riad/food/breakfast-03.png"
                alt="Delicious Moroccan Feast"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
