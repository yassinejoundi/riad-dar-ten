"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for Instagram posts since we don't have a live API connection
// In a real app, this would be fetched from the Instagram Basic Display API
const INSTAGRAM_POSTS = [
  {
    id: 1,
    src: "/assets/images/home/rooms/vanilla-double-room.png",
    likes: 124,
    comments: 8,
  },
  {
    id: 2,
    src: "/assets/images/home/instagram/riaddarten-01.png",
    likes: 256,
    comments: 14,
  },
  {
    id: 3,
    src: "/assets/images/home/instagram/riaddarten-02.png",
    likes: 189,
    comments: 11,
  },
  {
    id: 4,
    src: "/assets/images/home/rooms/paprika-double-room.png",
    likes: 145,
    comments: 6,
  },
  {
    id: 5,
    src: "/assets/images/gallery/hero-background.png",
    likes: 312,
    comments: 22,
  },
  {
    id: 6,
    src: "/assets/images/perferct-for/authentic-stay.png",
    likes: 98,
    comments: 4,
  },
  {
    id: 7,
    src: "/assets/images/home/rooms/vanilla-double-room.png",
    likes: 167,
    comments: 9,
  },
  {
    id: 8,
    src: "/assets/images/home/instagram/riaddarten-04.png",
    likes: 203,
    comments: 15,
  },
  {
    id: 9,
    src: "/assets/images/home/instagram/riaddarten-05.png",
    likes: 178,
    comments: 12,
  },
  {
    id: 10,
    src: "/assets/images/home/rooms/paprika-double-room.png",
    likes: 134,
    comments: 7,
  },
  {
    id: 11,
    src: "/assets/images/gallery/hero-background.png",
    likes: 289,
    comments: 19,
  },
  {
    id: 12,
    src: "/assets/images/perferct-for/authentic-stay.png",
    likes: 112,
    comments: 5,
  },
]

export function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-terracotta mb-2">
            <Instagram size={24} />
            <span className="font-sans font-medium uppercase tracking-widest text-sm">
              Social Media
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
            Follow Our Daily Story
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/riaddarten"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={post.src}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Heart size={20} fill="currentColor" />
                  <span className="font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} fill="currentColor" />
                  <span className="font-bold">{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-sans tracking-wide gap-3"
          >
            <Link
              href="https://www.instagram.com/riaddarten"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
              @riaddarten
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
