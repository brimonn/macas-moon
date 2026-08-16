"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { unsplash } from "@/lib/images";
import { useLanguage } from "@/i18n/LanguageProvider";

export function HomeCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative min-h-[70svh]">
        <Image
          src={unsplash("photo-1419242902214-272b3f66ee7a")}
          alt="Cielo estrellado sobre las montañas de Monteverde"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="cta-photo-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1320px] flex-col items-start justify-center px-5 py-24 sm:px-8 lg:px-10">
          <h2 className="heading-display max-w-xl text-warm-white">
            {t("Tu próxima escapada empieza aquí.")}
          </h2>
          <p className="hero-subtitle mt-5 max-w-md text-sand-100">
            {t("Elige el espacio que mejor se siente y empieza a imaginar Monteverde desde el bosque.")}
          </p>
          <div className="mt-8">
            <Button href="#domos" size="lg">
              Elegir domo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
