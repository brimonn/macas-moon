import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { monteverdePlaces } from "@/data/monteverdePlaces";

const featuredPlaces = monteverdePlaces.slice(0, 3);

export function MonteverdeSection() {
  return (
    <section className="bg-sand-200">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Cerca de Macas Moon"
            title="Descubre Monteverde"
            description="Naturaleza, café y aventura a pocos minutos de los domos."
            className="max-w-2xl"
          />
          <Button href="#experiencias" variant="outline" className="w-fit shrink-0">
            Ver todas las experiencias
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {featuredPlaces.map((place) => (
            <article
              key={place.id}
              className="group relative min-h-64 overflow-hidden rounded-[24px] bg-olive-900 shadow-soft"
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/90 via-olive-900/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-warm-white sm:p-6">
                <p className="eyebrow text-sand-300">{place.category}</p>
                <h3 className="heading-card mt-2 text-2xl">{place.name}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-sand-100">
                  <MapPin className="h-4 w-4" strokeWidth={1.6} />
                  {place.travelTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
