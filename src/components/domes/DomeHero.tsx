"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Dome } from "@/types/dome";
import { useLanguage } from "@/i18n/LanguageProvider";

type DomeHeroProps = {
  dome: Dome;
};

export function DomeHero({ dome }: DomeHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden">
      <Image
        src={dome.heroImage}
        alt={dome.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1320px] flex-col justify-end px-5 pb-16 sm:px-8 lg:justify-center lg:px-10 lg:pb-0">
        <div className="max-w-2xl pt-28 text-warm-white">
          <p className="eyebrow mb-4 text-sand-300">
            {t(dome.category)}
          </p>
          <h1 className="heading-display">
            {t(dome.heroTitle)}
          </h1>
          <p className="hero-subtitle mt-5 max-w-lg text-sand-100">
            {t(dome.heroSubtitle)}
          </p>
          <div className="mt-9">
            <Button href={`/reservar?domo=${dome.slug}`} size="lg">
              Reservar este domo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
