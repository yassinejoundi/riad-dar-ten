"use client"

import { MapPin, Footprints, ShieldCheck, Compass } from "lucide-react"

export function LocationNeighborhood() {
  const distances = [
    { label: "Jemaa el-Fnaa Square", time: "5 min walk" },
    { label: "Koutoubia Mosque", time: "10 min walk" },
    { label: "Majorelle Garden", time: "25 min walk / 10 min taxi" },
    { label: "Bahia Palace", time: "15 min walk" },
  ]

  const tips = [
    {
      icon: ShieldCheck,
      title: "Safe & Accessible",
      description:
        "Located in the Ksour district, known as one of the safest and most accessible areas of the Medina. Well-lit streets and close to a taxi drop-off point.",
    },
    {
      icon: Compass,
      title: "Getting Around",
      description:
        "Most attractions are within walking distance. For longer trips, petit taxis are readily available at the nearby Bab Laksour gate.",
    },
  ]

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Narrative Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              The Ksour District: <br />
              <span className="italic text-terracotta">
                Your Marrakech Base
              </span>
            </h2>
            <div className="prose prose-lg text-gray-600 font-sans leading-relaxed mb-8">
              <p>
                Riad Dar Ten is situated in the prestigious{" "}
                <span className="font-bold text-terracotta">
                  Ksour district
                </span>
                , a hidden gem within the Medina walls. Historically home to
                noble families, this neighborhood offers a unique blend of
                authentic local life and serene tranquility.
              </p>
              <p>
                Unlike the labyrinthine depths of the souks, Ksour provides
                straightforward access. You are mere steps away from the vibrant
                energy of Jemaa el-Fnaa, yet far enough to enjoy a peaceful
                night's sleep undisturbed by the city's hum.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-desert-sand/50 shadow-sm mb-8">
              <h3 className="font-serif text-xl text-primary mb-4 flex items-center">
                <Footprints className="mr-2 text-terracotta" size={20} />
                Walking Distances
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {distances.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 rounded-full bg-terracotta mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-800 mr-2">
                      {item.label}:
                    </span>
                    <span className="text-gray-500">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-terracotta shadow-sm border border-desert-sand">
                      <tip.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-sans">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl border-4 border-white relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2133549842956!2d-7.9932132238420035!3d31.628008241815227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee428df5384f%3A0xa47e07166af7acc9!2sRiad%20Dar%20Ten!5e0!3m2!1sen!2s!4v1768066932953!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
