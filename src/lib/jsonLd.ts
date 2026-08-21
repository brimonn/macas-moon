import type { Dome } from "@/types/dome";
import { site, sitePhone, siteUrl } from "@/lib/site";
import { domes } from "@/data/domes";

const OG_IMAGE = "/assets/domo2/IMG_7051.webp";
const LODGING_DESCRIPTION =
  "Glamping en Monteverde, Costa Rica: los domos de Macas Moon ofrecen naturaleza, tranquilidad y comodidad entre las montañas del bosque nuboso.";

export function absoluteUrl(path: string) {
  const base = siteUrl.replace(/\/$/, "");
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function mapsGeo() {
  const match = site.location.mapsUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (!match) return undefined;
  return {
    "@type": "GeoCoordinates",
    latitude: Number(match[1]),
    longitude: Number(match[2]),
  };
}

function lodgingId() {
  return `${absoluteUrl("/")}#lodging`;
}

function accommodationId(slug: string) {
  return `${absoluteUrl(`/domos/${slug}`)}#accommodation`;
}

function amenityFeatures(dome: Dome) {
  return dome.amenities.map((amenity) => ({
    "@type": "LocationFeatureSpecification",
    name: amenity.label,
  }));
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: site.shortName,
    url: absoluteUrl("/"),
  };
}

export function lodgingBusinessJsonLd() {
  const geo = mapsGeo();

  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": lodgingId(),
    name: site.name,
    url: absoluteUrl("/"),
    description: LODGING_DESCRIPTION,
    image: [absoluteUrl(OG_IMAGE)],
    logo: absoluteUrl(site.logo),
    telephone: sitePhone.e164,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.area,
      addressRegion: site.location.province,
      addressCountry: "CR",
    },
    ...(geo ? { geo } : {}),
    sameAs: [site.contact.instagram, site.contact.tiktok],
    numberOfRooms: domes.length,
    containsPlace: domes.map((dome) => ({
      "@type": "Accommodation",
      "@id": accommodationId(dome.slug),
      name: dome.name,
      url: absoluteUrl(`/domos/${dome.slug}`),
      image: absoluteUrl(dome.heroImage),
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: dome.capacity,
      },
    })),
  };
}

export function accommodationJsonLd(dome: Dome) {
  return {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "@id": accommodationId(dome.slug),
    name: dome.name,
    url: absoluteUrl(`/domos/${dome.slug}`),
    description: dome.shortDescription,
    image: absoluteUrl(dome.heroImage),
    numberOfBathroomsTotal: dome.bathrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: dome.capacity,
    },
    amenityFeature: amenityFeatures(dome),
    containedInPlace: {
      "@type": "LodgingBusiness",
      "@id": lodgingId(),
      name: site.name,
      url: absoluteUrl("/"),
    },
  };
}
