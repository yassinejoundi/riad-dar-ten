"use client"

import { Landmark, Utensils, MapPin } from "lucide-react"
import { motion } from "motion/react"

const experiences = [
  {
    icon: Landmark,
    title: "Authentic Architecture",
    description:
      "Immerse yourself in a space where traditional Moroccan design meets modern comfort. Every corner reflects the timeless artistry of local craftsmanship.",
  },
  {
    icon: Utensils,
    title: "Culinary Journey",
    description:
      "Savor the flavors of Morocco with our rooftop breakfasts and light meals. Experience authentic dining under the open sky or in our intimate courtyard.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Explore the magic of Marrakech with ease. We are situated just a short walk from the vibrant Jemaâ El Fna square and major medina attractions.",
  },
]

export function FeaturedExperiences() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-2 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            An Unforgettable Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-lg bg-white border border-desert-sand/30 hover:shadow-lg hover:border-terracotta/30 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta/10 text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-terracotta transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
