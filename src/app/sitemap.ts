import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { SERVICES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseEntries: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/#sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/#trayectoria`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE.url}/#servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/#filosofia`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/#contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
  ];
  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/#servicio-${s.id}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...baseEntries, ...serviceEntries];
}
