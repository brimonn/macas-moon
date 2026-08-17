"use client";

import { useState } from "react";
import { ArrowRight, Clock3, KeyRound, LogOut } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { houseRules } from "@/data/houseRules";
import { site } from "@/lib/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const facts = [
  { icon: Clock3, label: "Check-in", value: site.checkIn },
  { icon: LogOut, label: "Check-out", value: site.checkOut },
  { icon: KeyRound, label: "Llegada", value: site.arrival },
];

export function StayInfoSection() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="home-screen bg-olive-50">
      <Container className="home-screen-inner py-16 sm:py-20 lg:py-0">
        <SectionHeading title="Antes de tu estadía" className="shrink-0" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:mt-8">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-[24px] bg-warm-white px-6 py-8">
              <fact.icon className="h-6 w-6 text-olive-500" strokeWidth={1.5} />
              <p className="eyebrow mt-5 text-olive-700">
                {t(fact.label)}
              </p>
              <p className="heading-card mt-2 text-2xl text-ink">{t(fact.value)}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-olive-700 transition-colors duration-200 hover:text-olive-900 lg:mt-6"
        >
          {t("Ver reglas del alojamiento")}
          <ArrowRight className="h-4 w-4" />
        </button>
      </Container>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Reglas del alojamiento"
        size="md"
        headerClassName="py-[18px] sm:py-4"
      >
        <ul className="max-sm:divide-y max-sm:divide-border-soft/55 sm:space-y-6">
          {houseRules.map((rule) => (
            <li key={rule.id} className="max-sm:py-[22px] max-sm:first:pt-0 max-sm:last:pb-0">
              <h3 className="font-semibold text-ink">{t(rule.title)}</h3>
              <p className="mt-1.5 text-sm leading-[1.55] text-muted sm:leading-relaxed">
                {t(rule.text)}
              </p>
            </li>
          ))}
        </ul>
      </Modal>
    </section>
  );
}
