"use client";

import { Heart, Users, MapPin, Sparkles, Home, Star } from "lucide-react";
import { motion } from "motion/react";

export function DarTenDifference() {
  const highlights = [
    {
      icon: Home,
      title: "Intimate Scale",
      description: "Only 6 exclusive rooms ensuring a private, quiet atmosphere.",
    },
    {
      icon: Heart,
      title: "Couples' Choice",
      description: "Rated 9.6/10 for romance and two-person trips.",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Just 5 minutes from Jemaa el-Fnaa, yet a peaceful sanctuary.",
    },
    {
      icon: Sparkles,
      title: "Authentic Design",
      description: "True Moroccan architecture with traditional craftsmanship.",
    },
    {
      icon: Star,
      title: "Personal Service",
      description: "Tailored attention to make every guest feel special.",
    },
    {
      icon: Users,
      title: "Family Hospitality",
      description: "Warm, genuine care from our family to yours.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#d4a574 1px, transparent 1px), radial-gradient(#d4a574 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            The Dar Ten Difference
          </h2>
          <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
            We believe luxury lies in the details—the quiet moments, the genuine
            smiles, and the feeling of being truly at home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-cream/20 hover:bg-cream/60 border border-desert-sand/40 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-terracotta/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-white flex items-center justify-center text-terracotta shadow-sm group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
