import type { MetadataRoute } from "next";
import { domes } from "@/data/domes";
import { siteUrl } from "@/lib/site";

const staticPaths = ["/", "/nosotros", "/galeria", "/experiencias", "/reservar"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
    })),
    ...domes.map((dome) => ({
      url: `${siteUrl}/domos/${dome.slug}`,
      lastModified,
    })),
  ];
}
