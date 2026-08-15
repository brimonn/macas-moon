import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { unsplash } from "@/lib/images";
import { site } from "@/lib/site";

export function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-24 bg-warm-white">
      <Container className="py-24 sm:py-32">
        <SectionHeading title="Estamos en Monteverde" />
        <div className="mt-12 overflow-hidden rounded-[28px] border border-border-soft bg-sand-50">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[460px]">
            <Image
              src={unsplash("photo-1464822759023-fed622ff2c3b")}
              alt="Montañas alrededor de Monteverde, Costa Rica"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-olive-900/25" />
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-warm-white text-olive-700 shadow-soft">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="mt-3 rounded-full bg-warm-white/95 px-4 py-1.5 text-sm font-semibold text-ink">
                Macas Moon
              </span>
            </div>
          </div>
          <div className="grid gap-6 px-6 py-7 sm:px-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="heading-card text-2xl text-ink">Monteverde</p>
              <p className="mt-1 text-muted">Puntarenas, Costa Rica</p>
            </div>
            <div className="md:justify-self-end">
              <Button href={site.location.mapsUrl} variant="outline">
                Cómo llegar
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
