"use client"

import { Check } from "lucide-react"

export function RoomsOverview() {
  const commonFeatures = [
    "En-suite Tadelakt Bathroom",
    "Air Conditioning & Heating",
    "Free High-Speed WiFi",
    "Luxury Bedding",
    "Safe Deposit Box",
    "Daily Housekeeping",
  ]

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4 block">
            The Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-8">
            A Symphony of Spices and Serenity
          </h2>
          <div className="prose prose-lg text-gray-600 font-sans leading-relaxed mx-auto">
            <p className="mb-6">
              At Riad Dar Ten, our six rooms are designed to be personal
              retreats from the vibrant energy of Marrakech. Drawing inspiration
              from the legendary spice routes that once crossed Morocco, each
              room is named after a precious spice Vanilla, Chocolate, Cinnamon
              (Canelle), Nutmeg (Muscade), Saffron (Safran), and Paprika.
            </p>
            <p>
              While the names evoke rich flavors, the design aesthetic remains
              calm and contemporary. We have chosen a palette of soothing
              neutrals, creams, and earthy tones to create a restful atmosphere.
              Every room features authentic Moroccan craftsmanship, from
              hand-polished Tadelakt walls to intricate cedar woodwork,
              seamlessly blended with modern comforts.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-desert-sand/30 animate-fade-in-up delay-100">
          <h3 className="font-serif text-2xl text-primary mb-8 text-center">
            Included in Every Stay
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {commonFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-start"
              >
                <div className="w-6 h-6 rounded-full bg-terracotta flex items-center justify-center text-white mr-3 flex-shrink-0 shadow-sm">
                  <Check size={14} />
                </div>
                <span className="text-gray-600 font-sans">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
