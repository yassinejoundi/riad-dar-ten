"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RiadCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-8">
          Experience Dar Ten
        </h2>
        <p className="text-gray-600 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Discover the magic of Marrakech from the comfort of your own private
          sanctuary.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-sans tracking-wide"
          >
            <Link href="/rooms">View Rooms</Link>
          </Button>
          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-sans tracking-wide"
          >
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
