"use client"

import {
  Wifi,
  Waves,
  Sun,
  Tv,
  Clock,
  ThermometerSun,
  Car,
  Plane,
  Map,
  Baby,
  ConciergeBell,
  Shirt,
  DoorOpen,
  Bath,
  Sparkles,
  Brush,
} from "lucide-react"

export function AmenitiesServices() {
  const categories = [
    {
      title: "Facilities",
      items: [
        { icon: Waves, label: "Outdoor swimming pool" },
        { icon: Sun, label: "Rooftop terrace" },
        { icon: Tv, label: "Modern living room with LCD TV" },
        { icon: Wifi, label: "Free WiFi throughout" },
        { icon: Clock, label: "24-hour reception" },
        { icon: ThermometerSun, label: "Heating" },
        { icon: Car, label: "Parking" },
      ],
    },
    {
      title: "Services",
      items: [
        { icon: Plane, label: "Airport shuttle" },
        { icon: Map, label: "Organized tours" },
        { icon: Baby, label: "Babysitting available" },
        { icon: ConciergeBell, label: "Concierge assistance" },
        { icon: Shirt, label: "Laundry service" },
      ],
    },
    {
      title: "In-Room",
      items: [
        { icon: DoorOpen, label: "Private terrace areas" },
        { icon: Bath, label: "Tadelakt bathrooms" },
        { icon: Sparkles, label: "Free toiletries" },
        { icon: Brush, label: "Daily housekeeping" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-[#EEE3D6]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Every Detail Considered
          </h2>
          <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
            We've curated a comprehensive range of amenities to ensure your stay
            is as comfortable and effortless as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-desert-sand/30 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-serif text-2xl text-primary mb-6 border-b border-terracotta/20 pb-3 inline-block pr-8">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-white mr-3 shadow-sm border border-terracotta">
                      <item.icon size={16} />
                    </span>
                    <span className="font-sans text-sm md:text-base">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
