import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { monteverdePlaces } from "@/data/monteverdePlaces";
import { cn } from "@/lib/cn";

export function MonteverdeSection() {
  return (
    <section className="bg-warm-white">
      <Container className="py-24 sm:py-32">
        <SectionHeading
          title="Descubre Monteverde"
          description="Más que una estadía. Descubre algunos de nuestros lugares favoritos cerca de los domos."
          className="max-w-3xl"
        />
        <div className="mt-16">
          {monteverdePlaces.map((place, index) => (
            <article
              key={place.id}
              className={cn(
                "grid items-center gap-8 border-border-soft py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14",
                index !== monteverdePlaces.length - 1 && "border-b",
                index % 2 === 1 && "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
              )}
            >
              <div
                className={cn(
                  "relative aspect-[16/11] overflow-hidden rounded-[24px]",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <Badge>{place.category}</Badge>
                <h3 className="heading-card mt-4 text-3xl text-ink">{place.name}</h3>
                <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed font-normal text-muted">
                  {place.description}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-olive-800">
                  <MapPin className="h-4 w-4" strokeWidth={1.6} />
                  {place.travelTime}
                </p>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-olive-700 transition-colors duration-200 hover:text-olive-900"
                >
                  Ver en Maps
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
