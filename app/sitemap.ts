import type { MetadataRoute } from "next"
import { rooms } from "@/lib/rooms"

const baseUrl = "https://riaddarten.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/riad",
    "/rooms",
    "/gallery",
    "/book",
    "/contact",
    "/brand-identity",
    "/privacy",
    "/terms",
    ...rooms.map((room) => `/rooms/${room.slug}`),
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}

