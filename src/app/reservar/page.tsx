import type { Metadata } from "next";
import { ReservationForm } from "@/components/reservar/ReservationForm";
import { Container } from "@/components/ui/Container";
import { getDome } from "@/data/domes";

export const metadata: Metadata = {
  title: "Solicita tu reserva",
  description:
    "Solicita tu estadía en Macas Moon Glamping. Te contactaremos para confirmar disponibilidad en Monteverde.",
};

type ReservarPageProps = {
  searchParams: Promise<{ domo?: string }>;
};

export default async function ReservarPage({ searchParams }: ReservarPageProps) {
  const { domo } = await searchParams;
  const selected = domo ? getDome(domo) : undefined;

  return (
    <section className="bg-sand-50 pt-28 pb-24 sm:pt-32">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-olive-700">
            Macas Moon Glamping
          </p>
          <h1 className="heading-section mt-3 text-ink">Solicita tu reserva</h1>
          <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted">
            Cuéntanos las fechas y el espacio que te gustaría. Revisamos disponibilidad y te
            escribimos para continuar.
          </p>
          {selected ? (
            <p className="mt-6 text-sm text-olive-800">
              Estás solicitando: <span className="font-semibold">{selected.name}</span>
            </p>
          ) : null}
        </div>
        <div className="rounded-[28px] border border-border-soft bg-warm-white p-6 shadow-soft sm:p-8">
          <ReservationForm initialDome={domo} />
        </div>
      </Container>
    </section>
  );
}
