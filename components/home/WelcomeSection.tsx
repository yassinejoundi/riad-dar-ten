"use client"

import Image from "next/image"
import { BedDouble, Heart, MapPin, Waves } from "lucide-react"
import { motion } from "motion/react"

const stats = [
  {
    icon: BedDouble,
    label: "6 Exclusive Rooms",
    value: "Intimate",
  },
  {
    icon: Heart,
    label: "9.6 Couple Rating",
    value: "Romantic",
  },
  {
    icon: MapPin,
    label: "5 Min to Jemaâ El Fna",
    value: "Central",
  },
  {
    icon: Waves,
    label: "Traditional Tadelakt Pool",
    value: "Relaxing",
  },
]

export function WelcomeSection() {
  return (
    <section className="py-24 bg-cream text-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4">
              Discover Our Sanctuary
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
              Welcome to Dar Ten
            </h3>

            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-lg">
              <p>
                Nestled in the vibrant heart of the Medina, Riad Dar Ten offers
                an oasis of calm amidst the bustling energy of Marrakech. Our
                intimate sanctuary features just six exclusive rooms, ensuring a
                personalized and tranquil experience where every guest feels
                like family.
              </p>
              <p>
                Designed with a harmonious blend of traditional Moroccan
                craftsmanship and contemporary comfort, our riad is the perfect
                retreat for couples seeking a romantic getaway. Relax by our
                traditional tadelakt pool, enjoy the serene courtyard, or take
                in the stunning views from our rooftop terrace.
              </p>
              <p>
                Located just a 5-minute walk from the famous Jemaâ El Fna
                square, you are perfectly positioned to explore the wonders of
                the Red City while having a peaceful haven to return to.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-desert-sand/30">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-full shadow-sm text-terracotta">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-medium text-primary">
                      {stat.label}
                    </p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="order-1 lg:order-2 relative h-[600px] w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-terracotta/10 rounded-t-full rounded-b-lg transform rotate-3 scale-105 z-0" />
            <div className="relative h-full w-full rounded-t-full rounded-b-lg overflow-hidden shadow-2xl z-10">
              <Image
                src="/assets/images/home/welcome.png"
                alt="Riad Dar Ten Courtyard and Pool"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl z-20 hidden md:block max-w-xs">
              <p className="font-accent text-2xl text-terracotta italic text-center">
                &quot;An unforgettable escape in the heart of Marrakech.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
