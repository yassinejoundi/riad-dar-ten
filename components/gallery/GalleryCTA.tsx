"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export function GalleryCTA() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
            Ready to Experience It <br className="hidden sm:block" />
            <span className="italic text-terracotta">in Person?</span>
          </h2>
          
          <p className="text-gray-600 font-sans text-lg md:text-xl max-w-2xl mx-auto">
            Turn these images into memories. Book your stay at Riad Dar Ten today.
          </p>

          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 px-10 py-8 text-xl font-sans tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 gap-3"
          >
            <Link href="/book">
              <CalendarCheck size={24} />
              Book Your Stay
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
