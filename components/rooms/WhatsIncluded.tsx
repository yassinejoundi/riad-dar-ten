"use client"

import {
  Sun,
  Bath,
  Droplets,
  Palette,
  Wifi,
  Sparkles,
  ThermometerSun,
  Key,
} from "lucide-react"

export function WhatsIncluded() {
  const features = [
    {
      icon: Sun,
      label: "Private Terrace",
      description: "With courtyard views",
    },
    {
      icon: Bath,
      label: "Tadelakt Bathroom",
      description: "Handcrafted tradition",
    },
    {
      icon: Droplets,
      label: "Premium Toiletries",
      description: "Argan oil infused",
    },
    {
      icon: Palette,
      label: "Neutral Décor",
      description: "Contemporary & calm",
    },
    {
      icon: Wifi,
      label: "Free WiFi",
      description: "High-speed access",
    },
    {
      icon: Sparkles,
      label: "Daily Housekeeping",
      description: "Immaculate service",
    },
    {
      icon: ThermometerSun,
      label: "Heating",
      description: "For winter nights",
    },
    {
      icon: Key,
      label: "Full Access",
      description: "To all riad facilities",
    },
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            In Every Room
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-terracotta shadow-md mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-terracotta group-hover:text-white">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">
                {feature.label}
              </h3>
              <p className="font-sans text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
