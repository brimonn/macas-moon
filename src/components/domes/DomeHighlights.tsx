import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dome } from "@/types/dome";

export function DomeHighlights({ dome }: { dome: Dome }) {
  return (
    <section className="bg-cream">
      <Container className="py-24 sm:py-28">
        <SectionHeading title={dome.conceptTitle} description={dome.longDescription} />
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {dome.highlights.map((item, index) => (
            <div key={item.title} className="max-w-sm">
              <p className="eyebrow text-olive-600">
                0{index + 1}
              </p>
              <h3 className="heading-card mt-3 text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
