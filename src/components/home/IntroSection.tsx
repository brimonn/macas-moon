import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntroSection() {
  return (
    <section id="introduccion" className="bg-sand-50">
      <Container className="py-24 sm:py-32">
        <SectionHeading
          title="Una forma diferente de vivir Monteverde"
          description="Dos domos en medio del bosque, pensados para bajar el ritmo, mirar las nubes y quedarse un rato en silencio."
          className="max-w-3xl"
        />
        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          <FeatureIcon
            name="leaf"
            label="Naturaleza"
            text="Rodeado de bosque, aire fresco y tranquilidad."
          />
          <FeatureIcon
            name="home"
            label="Refugio"
            text="Un espacio creado para desconectar del ritmo cotidiano."
          />
          <FeatureIcon
            name="mountain"
            label="Monteverde"
            text="Vive uno de los destinos naturales más especiales de Costa Rica."
          />
        </div>
      </Container>
    </section>
  );
}
