import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/hero-background.png"
          alt="Riad Dar Ten Courtyard"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 animate-fade-in-up">
          Begin Your Marrakech Story
        </h2>
        <p className="font-sans text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-up delay-100">
          Limited rooms, unlimited memories
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
          <Link href="/book">
            <Button 
              size="lg" 
              className="bg-terracotta hover:bg-terracotta/90 text-white font-sans text-lg px-8 py-6 h-auto"
            >
              Check Availability
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-sans text-lg px-8 py-6 h-auto bg-transparent"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
