import type { MetadataRoute } from "next";

const BASE = "https://dheerajshrivastav.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/projects/dappdrop`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
