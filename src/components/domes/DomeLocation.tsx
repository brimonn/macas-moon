import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { unsplash } from "@/lib/images";

export function DomeLocation() {
  return (
    <section className="bg-olive-50">
      <Container className="grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <h2 className="heading-section text-ink">Entre las montañas de Monteverde</h2>
          <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed font-normal text-muted">
            Los domos están en un entorno de bosque y montaña, a pocos minutos de Santa Elena y de los
            senderos que hacen único a este destino.
          </p>
          <div className="mt-7">
            <Button href="/#ubicacion" variant="outline">
              Ver ubicación
            </Button>
          </div>
        </div>
        <div className="relative min-h-[240px] overflow-hidden rounded-[24px] sm:min-h-[300px]">
          <Image
            src={unsplash("photo-1448375240586-882707db888b")}
            alt="Bosque de Monteverde cerca de Macas Moon"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
