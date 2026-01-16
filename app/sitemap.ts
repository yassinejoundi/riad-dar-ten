import type { MetadataRoute } from "next"

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
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}

