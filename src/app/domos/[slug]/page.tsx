import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AmenitiesSection } from "@/components/domes/AmenitiesSection";
import { DomeCTA } from "@/components/domes/DomeCTA";
import { DomeGallery } from "@/components/domes/DomeGallery";
import { DomeHero } from "@/components/domes/DomeHero";
import { DomeHighlights } from "@/components/domes/DomeHighlights";
import { DomeLocation } from "@/components/domes/DomeLocation";
import { DomeStats } from "@/components/domes/DomeStats";
import { SpacesSection } from "@/components/domes/SpacesSection";
import { domes, getDome } from "@/data/domes";

type DomePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return domes.map((dome) => ({ slug: dome.slug }));
}

export async function generateMetadata({ params }: DomePageProps): Promise<Metadata> {
  const { slug } = await params;
  const dome = getDome(slug);
  if (!dome) return { title: "Domo no encontrado" };

  return {
    title: dome.name,
    description: dome.shortDescription,
    openGraph: {
      title: `${dome.name} | Macas Moon Glamping`,
      description: dome.shortDescription,
      images: [{ url: dome.heroImage, alt: dome.name }],
    },
  };
}

export default async function DomePage({ params }: DomePageProps) {
  const { slug } = await params;
  const dome = getDome(slug);
  if (!dome) notFound();

  return (
    <>
      <DomeHero dome={dome} />
      <DomeStats dome={dome} />
      <DomeHighlights dome={dome} />
      <DomeGallery dome={dome} />
      <AmenitiesSection dome={dome} />
      <SpacesSection dome={dome} />
      <DomeLocation dome={dome} />
      <DomeCTA dome={dome} />
    </>
  );
}
