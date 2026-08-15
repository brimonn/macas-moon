import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden">
      <Image
        src="/assets/domo1/IMG_7051.webp"
        alt="Domos de Macas Moon rodeados de vegetación y las montañas de Monteverde"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[32%_52%] sm:object-[38%_55%] lg:object-[42%_58%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,27,19,0.62)_0%,rgba(20,27,19,0.38)_38%,rgba(20,27,19,0.12)_70%,rgba(20,27,19,0.04)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[1320px] flex-col justify-end px-5 pb-24 sm:px-8 lg:justify-center lg:px-10 lg:pb-0">
        <div className="animate-fade-up max-w-3xl pt-28 text-warm-white">
          <p className="eyebrow mb-4 text-sand-300">
            Monteverde, Costa Rica
          </p>
          <h1 className="heading-hero">
            Tu refugio entre las montañas de Monteverde
          </h1>
          <p className="hero-subtitle mt-6 max-w-xl text-sand-100">
            Una experiencia entre naturaleza, tranquilidad y comodidad.
          </p>
          <div className="mt-10">
            <Button href="#domos" size="lg">
              Descubrir los domos
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#introduccion"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-sand-200 sm:flex"
        aria-label="Desplazarse a la siguiente sección"
      >
        <span className="eyebrow text-sand-200">Explorar</span>
        <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
