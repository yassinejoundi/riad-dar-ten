"use client"

import Image from "next/image"
import { Sun, Coffee, Moon, Camera } from "lucide-react"

export function RooftopTerrace() {
  const features = [
    {
      icon: Camera,
      title: "Panoramic Views",
      description: "Overlooking the Ksour district and Medina rooftops",
    },
    {
      icon: Coffee,
      title: "Breakfast Service",
      description: "Start your day with fresh local flavors outdoors",
    },
    {
      icon: Sun,
      title: "Sunbathing Area",
      description: "Soak up the warm Marrakech sun in privacy",
    },
    {
      icon: Moon,
      title: "Evening Relaxation",
      description: "Unwind under the stars with peaceful ambiance",
    },
  ]

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images Grid */}
          <div className="order-1 grid grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/images/home/cta-background.png"
                alt="Rooftop terrace view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/images/home/instagram/riaddarten-01.png"
                alt="Breakfast on the terrace"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg col-span-2 mt-4">
              <Image
                src="/assets/images/home/hero-background.png"
                alt="Sunset relaxation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              Sunrise to Sunset, <br />
              <span className="italic text-terracotta">Above the Medina</span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed text-lg mb-10">
              Ascend to our rooftop terrace, a sky-high sanctuary that offers a
              breathtaking perspective of Marrakech. From the golden hues of
              dawn to the vibrant colors of sunset, this open-air haven is the
              perfect place to disconnect and observe the rhythm of the city
              from above.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-terracotta shadow-sm">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="font-serif text-xl text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-sans">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
