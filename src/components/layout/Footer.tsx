"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { domes } from "@/data/domes";
import { site } from "@/lib/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-olive-900 text-sand-100">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/#inicio" className="inline-flex items-center">
            <Image
              src={site.logoLight}
              alt={site.name}
              width={170}
              height={54}
              className="h-[3.125rem] w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-300">
            {t("Una estadía entre las montañas de Monteverde.")}
          </p>
        </div>

        <div>
          <p className="eyebrow text-sand-400">{t("Domos")}</p>
          <ul className="mt-4 space-y-3 text-sm">
            {domes.map((dome) => (
              <li key={dome.slug}>
                <Link href={`/domos/${dome.slug}`} className="transition-colors duration-200 hover:text-white">
                  {t(dome.category === "ESCAPADA PARA DOS"
                    ? "Domo 2 · Escapada para dos"
                    : "Domo 1 · Más espacio para compartir")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-sand-400">{t("Explora")}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/experiencias" className="transition-colors duration-200 hover:text-white">
                {t("Experiencias")}
              </Link>
            </li>
            <li>
              <Link href="/#resenas" className="transition-colors duration-200 hover:text-white">
                {t("Reseñas")}
              </Link>
            </li>
            <li>
              <Link href="/#ubicacion" className="transition-colors duration-200 hover:text-white">
                {t("Ubicación")}
              </Link>
            </li>
            <li>
              <Link href="/#domos" className="transition-colors duration-200 hover:text-white">
                {t("Elegir domo")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-sand-400">{t("Contacto")}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="transition-colors duration-200 hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Macas Moon Glamping</p>
          <p>Monteverde, Puntarenas, Costa Rica</p>
        </Container>
      </div>
    </footer>
  );
}
