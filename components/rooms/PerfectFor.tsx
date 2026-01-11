"use client"

import Image from "next/image"
import { Heart, Star, Map } from "lucide-react"

export function PerfectFor() {
  const items = [
    {
      title: "Couples",
      description:
        "Rated 9.6 by couples for a reason. Enjoy intimacy, peace, and romantic dinners under the stars.",
      image: "/assets/images/home/rooms/vanilla-double-room.png", // Using room image as placeholder
      icon: Star,
      highlight: "9.6/10 Rating",
    },
    {
      title: "Honeymooners",
      description:
        "Begin your new life together in a sanctuary of luxury. Special packages with rose petals and spa treatments.",
      image: "/assets/images/perferct-for/traditional-spa.png", // Romantic atmosphere
      icon: Heart,
      highlight: "Romantic Escape",
    },
    {
      title: "Cultural Travelers",
      description:
        "Immerse yourself in history. Located in the noble Ksour district, steps from the authentic soul of Marrakech.",
      image: "/assets/images/perferct-for/authentic-stay.png", // Authentic architecture
      icon: Map,
      highlight: "Authentic Stay",
    },
  ]

  return (
    <section className="py-24 bg-[#EEE3D6]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Perfect For
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md flex items-center gap-2">
                  <item.icon
                    size={14}
                    className="text-terracotta"
                    fill="currentColor"
                  />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {item.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 text-center relative">
                {/* Overlapping Icon */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-terracotta rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <item.icon size={32} className="text-white" />
                </div>

                <h3 className="font-serif text-2xl text-primary mt-8 mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
