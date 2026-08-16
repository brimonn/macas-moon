import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { monteverdePlaces } from "@/data/monteverdePlaces";

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="scroll-mt-24 bg-warm-white">
      <Container className="py-24 sm:py-32">
        <SectionHeading
          eyebrow="Tours y lugares"
          title="Experiencias en Monteverde"
          description="Ideas para explorar el bosque nuboso, descubrir sabores locales y disfrutar la montaña durante tu estadía."
          className="max-w-3xl"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {monteverdePlaces.map((place) => (
            <article
              key={place.id}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-sand-300 bg-sand-50 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge>{place.category}</Badge>
                <h3 className="heading-card mt-4 text-2xl text-ink">{place.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{place.description}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-medium text-olive-800">
                  <MapPin className="h-4 w-4" strokeWidth={1.6} />
                  {place.travelTime}
                </p>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-olive-700 transition-colors hover:text-olive-900"
                >
                  Ver ubicación
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
