import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dome } from "@/types/dome";

export function DomeCTA({ dome }: { dome: Dome }) {
  return (
    <section className="bg-sand-50">
      <Container className="py-24 text-center sm:py-28">
        <h2 className="heading-display text-ink">{dome.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed font-normal text-muted">{dome.ctaText}</p>
        <div className="mt-8">
          <Button href={`/reservar?domo=${dome.slug}`} size="lg">
            Reservar este domo
          </Button>
        </div>
      </Container>
    </section>
  );
}
