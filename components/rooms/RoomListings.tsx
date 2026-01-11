"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  DoorOpen,
  Bath,
  Mountain,
  Wifi,
  Wind,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    id: "vanilla",
    name: "Vanilla Double Room",
    spice: "Vanilla Cream",
    color: "bg-[#F3E5AB]",
    textColor: "text-[#B8860B]",
    image: "/assets/images/home/rooms/vanilla-double-room.png",
    bed: "1 Queen Bed",
    features: [
      { icon: BedDouble, label: "1 Queen Bed" },
      { icon: DoorOpen, label: "Private Terrace" },
      { icon: Bath, label: "Tadelakt Bathroom" },
      { icon: Mountain, label: "Courtyard Views" },
    ],
    description:
      "A sanctuary of softness, the Vanilla room wraps you in warm cream tones and subtle textures. The delicate play of light against the Tadelakt walls creates a soothing atmosphere, perfect for unwinding after a day in the souks.",
    amenities: [
      "Air Conditioning",
      "Free WiFi",
      "Safe Deposit Box",
      "Hairdryer",
    ],
  },
  {
    id: "chocolate",
    name: "Chocolate Double Room",
    spice: "Dark Chocolate",
    color: "bg-[#3E2723]",
    textColor: "text-[#5D4037]",
    image: "/assets/images/home/rooms/chocolate-double-room.png",
    bed: "1 Full Bed",
    features: [
      { icon: BedDouble, label: "1 Full Bed" },
      { icon: DoorOpen, label: "Seating Area" },
      { icon: Bath, label: "En-suite Bathroom" },
      { icon: Wifi, label: "High-Speed WiFi" },
    ],
    description:
      "Rich, grounding, and sophisticated. The Chocolate room uses deep brown accents to create a cozy, intimate cocoon. The contrast between the dark wood furniture and the light walls highlights the traditional Moroccan craftsmanship.",
    amenities: ["Heating", "Toiletries", "Daily Housekeeping", "Wake-up Service"],
  },
  {
    id: "canelle",
    name: "Canelle Double Room",
    spice: "Cinnamon Bark",
    color: "bg-[#D2691E]",
    textColor: "text-[#A0522D]",
    image: "/assets/images/home/rooms/canelle-double-room.png",
    bed: "1 Queen Bed",
    features: [
      { icon: BedDouble, label: "1 Queen Bed" },
      { icon: Wind, label: "Air Conditioned" },
      { icon: Bath, label: "Private Bathroom" },
      { icon: Mountain, label: "Pool View" },
    ],
    description:
      "Warm and inviting, the Canelle room embodies the spicy warmth of cinnamon. Earthy orange and terracotta tones blend seamlessly with the traditional décor, offering a vibrant yet relaxing energy.",
    amenities: [
      "Air Conditioning",
      "Free WiFi",
      "Safe Deposit Box",
      "Hairdryer",
    ],
  },
  {
    id: "muscade",
    name: "Muscade Double Room",
    spice: "Nutmeg Spice",
    color: "bg-[#8A6642]",
    textColor: "text-[#6D4C41]",
    image: "/assets/images/home/rooms/muscade-double-room.png",
    bed: "1 Queen Bed",
    features: [
      { icon: BedDouble, label: "1 Queen Bed" },
      { icon: DoorOpen, label: "Patio Access" },
      { icon: Bath, label: "Tadelakt Shower" },
      { icon: Wifi, label: "Free WiFi" },
    ],
    description:
      "Elegant and understated, the Muscade room features rich earthy tones inspired by nutmeg. The subtle interplay of textures and the calm color palette make it a perfect retreat for those seeking tranquility.",
    amenities: ["Heating", "Toiletries", "Daily Housekeeping", "Wake-up Service"],
  },
  {
    id: "safran",
    name: "Safran Double Room",
    spice: "Saffron Gold",
    color: "bg-[#F4C430]",
    textColor: "text-[#F57F17]",
    image: "/assets/images/home/rooms/safran-double-room.png",
    bed: "1 Queen Bed",
    features: [
      { icon: BedDouble, label: "1 Queen Bed" },
      { icon: DoorOpen, label: "Sunny Ambience" },
      { icon: Bath, label: "Private Bathroom" },
      { icon: Mountain, label: "Terrace Access" },
    ],
    description:
      "Radiant and cheerful, the Safran room captures the golden glow of Morocco's most precious spice. Yellow accents bring a touch of sunshine indoors, creating a bright and uplifting space to start your day.",
    amenities: [
      "Air Conditioning",
      "Free WiFi",
      "Safe Deposit Box",
      "Hairdryer",
    ],
  },
  {
    id: "paprika",
    name: "Paprika Double Room",
    spice: "Paprika Red",
    color: "bg-[#C64B3C]",
    textColor: "text-[#B71C1C]",
    image: "/assets/images/home/rooms/paprika-double-room.png",
    bed: "1 Queen Bed",
    features: [
      { icon: BedDouble, label: "1 Queen Bed" },
      { icon: Wind, label: "Climate Control" },
      { icon: Bath, label: "En-suite Shower" },
      { icon: Wifi, label: "Work Desk" },
    ],
    description:
      "Bold and passionate, the Paprika room uses warm red-orange accents to create a vibrant atmosphere. It's a space that energizes the senses while providing all the comforts needed for a restful stay.",
    amenities: ["Heating", "Toiletries", "Daily Housekeeping", "Wake-up Service"],
  },
];

export function RoomListings() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 space-y-32">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className={`font-serif font-bold ${room.textColor}`}>
                  {room.spice}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
                  {room.name}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm font-sans text-gray-600">
                  {room.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-cream px-3 py-1.5 rounded-md"
                    >
                      <feature.icon size={16} className="mr-2 text-terracotta" />
                      {feature.label}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 font-sans leading-relaxed text-lg">
                {room.description}
              </p>

              <div>
                <h4 className="font-serif text-xl text-primary mb-4">
                  Room Amenities
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-terracotta/10 flex items-center justify-center mr-2 text-terracotta">
                        <Check size={12} />
                      </div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-sans tracking-wide"
                >
                  <Link href="/book">Check Availability</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-sans tracking-wide"
                >
                  <Link href={`/rooms/${room.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
