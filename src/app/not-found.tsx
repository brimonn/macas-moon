import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-cream pt-24">
      <Container className="py-20 text-center">
        <h1 className="heading-section text-ink">Página no encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          El camino se perdió entre las nubes. Volvamos al refugio.
        </p>
        <div className="mt-8">
          <Button href="/" size="lg">
            Ir al inicio
          </Button>
        </div>
      </Container>
    </section>
  );
}
