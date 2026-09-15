export type Room = {
  slug: string
  name: string
  tone: string
  image: string
  description: string
  accent: string
}

export const rooms: Room[] = [
  { slug: "vanilla", name: "Vanilla", tone: "Soft, luminous and quietly composed", image: "/assets/images/home/rooms/vanilla-double-room.png", description: "Warm cream tones and filtered light give Vanilla an easy, restful character after a day in the medina.", accent: "#d2b98b" },
  { slug: "chocolate", name: "Chocolate", tone: "Deep, intimate and grounded", image: "/assets/images/home/rooms/chocolate-double-room.png", description: "Rich natural tones and dark timber create a private, cocooning atmosphere with a distinctly Moroccan warmth.", accent: "#765142" },
  { slug: "canelle", name: "Canelle", tone: "Warm, earthy and welcoming", image: "/assets/images/home/rooms/canelle-double-room.png", description: "Cinnamon-inspired colour and tactile finishes bring warmth to this calm double room.", accent: "#ad6748" },
  { slug: "muscade", name: "Muscade", tone: "Understated, tactile and serene", image: "/assets/images/home/rooms/muscade-double-room.png", description: "A measured palette of nutmeg and earth makes Muscade a quiet retreat from Marrakech's vivid streets.", accent: "#80634d" },
  { slug: "safran", name: "Safran", tone: "Sunlit, expressive and uplifting", image: "/assets/images/home/rooms/safran-double-room.png", description: "Golden accents catch the Marrakech light, bringing an open and optimistic mood to Safran.", accent: "#b58b35" },
  { slug: "paprika", name: "Paprika", tone: "Vibrant, warm and full of character", image: "/assets/images/home/rooms/paprika-double-room.png", description: "Red-earth accents and Moroccan details give Paprika a spirited identity without sacrificing calm.", accent: "#9f493d" },
]

export const roomAmenities = [
  "Double accommodation",
  "Private bathroom",
  "Wi-Fi",
  "Daily housekeeping",
  "Heating",
  "Access to the courtyard and rooftop",
]

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug)
}
