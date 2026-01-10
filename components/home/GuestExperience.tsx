import Image from "next/image"
import { Star, Instagram } from "lucide-react"
import Link from "next/link"

const instagramPhotos = [
  "/assets/images/home/instagram/riaddarten-01.png",
  "/assets/images/home/instagram/riaddarten-02.png",
  "/assets/images/home/instagram/riaddarten-03.png",
  "/assets/images/home/instagram/riaddarten-04.png",
  "/assets/images/home/instagram/riaddarten-05.png",
  "/assets/images/home/instagram/riaddarten-06.png",
]

export function GuestExperience() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Testimonial Column */}
          <div className="flex flex-col justify-center animate-fade-in-up">
            <span className="text-sm font-sans font-bold uppercase tracking-widest text-terracotta mb-4 block">
              Guest Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-12">
              Moments to Remember
            </h2>

            <div className="relative">
              {/* Decorative Quote Mark */}
              <div className="absolute -top-10 -left-6 text-9xl text-desert-sand/20 font-serif leading-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10">
                <p className="font-serif text-2xl md:text-3xl text-muted-foreground italic leading-relaxed mb-8">
                  &ldquo;An absolute gem in the medina. The atmosphere is
                  magical, the staff incredibly warm, and the attention to
                  detail is stunning. A perfect romantic escape.&rdquo;
                </p>

                <div className="flex items-center space-x-1 text-saffron-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>

                <cite className="not-italic">
                  <span className="block font-sans font-bold text-primary text-lg">
                    Sarah & James
                  </span>
                  <span className="block font-sans text-sm text-muted-foreground">
                    London, UK
                  </span>
                </cite>
              </blockquote>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg border border-desert-sand/30">
              <div className="flex items-center">
                <span className="text-2xl mr-4 flex-shrink-0">💑</span>
                <p className="font-sans text-primary font-medium">
                  Couples especially love the location - they rated it{" "}
                  <span className="font-bold">9.6</span> for a two-person trip.
                </p>
              </div>
            </div>
          </div>

          {/* Instagram Feed Column */}
          <div className="animate-fade-in-up delay-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-primary">
                Follow Our Journey
              </h3>
              <Link
                href="https://instagram.com/riaddarten"
                target="_blank"
                className="flex items-center text-sm font-sans font-semibold uppercase tracking-widest text-terracotta hover:text-deep-spice transition-colors"
              >
                <Instagram size={18} className="mr-2" />
                @riaddarten
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {instagramPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md group cursor-pointer"
                >
                  <Image
                    src={photo}
                    alt={`Riad Dar Ten Instagram ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Instagram className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
