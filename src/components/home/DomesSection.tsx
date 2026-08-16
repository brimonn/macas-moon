"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bath, BedDouble, Users, Waves } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { domes } from "@/data/domes";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

export function DomesSection() {
  const { t } = useLanguage();

  return (
    <section id="domos" className="scroll-mt-24 bg-sand-100">
      <Container className="py-24 sm:py-32">
        <SectionHeading
          title="Encuentra tu espacio"
          description="Dos formas de vivir Monteverde."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {domes.map((dome, index) => (
            <Link
              key={dome.slug}
              href={`/domos/${dome.slug}`}
              className="group flex flex-col overflow-hidden rounded-[28px] bg-warm-white shadow-soft transition-[box-shadow,transform] duration-300 hover:shadow-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]">
                <Image
                  src={dome.cardImage}
                  alt={dome.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    index === 0
                      ? "bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                      : "bg-gradient-to-t from-olive-900/25 via-transparent to-transparent",
                  )}
                />
              </div>
              <div className="flex flex-[0_0_auto] flex-col gap-4 px-6 py-7 sm:px-8 sm:py-8">
                <Badge tone={index === 0 ? "sand" : "olive"}>{dome.category}</Badge>
                <h3 className="heading-card text-3xl text-ink">{t(dome.name)}</h3>
                <p className="text-[0.98rem] leading-relaxed font-normal text-muted">
                  {t(dome.shortDescription)}
                </p>
                <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-olive-800">
                  <li className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4" strokeWidth={1.6} />
                    {t(dome.preview.guests)}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4" strokeWidth={1.6} />
                    {t(dome.preview.beds)}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Bath className="h-4 w-4" strokeWidth={1.6} />
                    {t(dome.preview.bathrooms)}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Waves className="h-4 w-4" strokeWidth={1.6} />
                    {t(dome.preview.extra)}
                  </li>
                </ul>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-olive-700">
                  {t("Descubrir este domo")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
