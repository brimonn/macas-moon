"use client";

import { useState } from "react";
import { ArrowRight, Clock3, KeyRound, LogOut } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { houseRules } from "@/data/houseRules";
import { site } from "@/lib/site";

const facts = [
  { icon: Clock3, label: "Check-in", value: site.checkIn },
  { icon: LogOut, label: "Check-out", value: site.checkOut },
  { icon: KeyRound, label: "Llegada", value: site.arrival },
];

export function StayInfoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-olive-50">
      <Container className="py-24 sm:py-32">
        <SectionHeading title="Antes de tu estadía" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-[24px] bg-warm-white px-6 py-8">
              <fact.icon className="h-6 w-6 text-olive-500" strokeWidth={1.5} />
              <p className="eyebrow mt-5 text-olive-700">
                {fact.label}
              </p>
              <p className="heading-card mt-2 text-2xl text-ink">{fact.value}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-olive-700 transition-colors duration-200 hover:text-olive-900"
        >
          Ver reglas del alojamiento
          <ArrowRight className="h-4 w-4" />
        </button>
      </Container>
      <Modal open={open} onClose={() => setOpen(false)} title="Reglas del alojamiento" size="md">
        <ul className="space-y-6">
          {houseRules.map((rule) => (
            <li key={rule.id}>
              <h3 className="font-semibold text-ink">{rule.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{rule.text}</p>
            </li>
          ))}
        </ul>
      </Modal>
    </section>
  );
}
