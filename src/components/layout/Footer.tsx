import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { domes } from "@/data/domes";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-olive-900 text-sand-100">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex rounded-2xl bg-warm-white/95 px-3 py-2">
            <Image
              src={site.logo}
              alt={site.name}
              width={150}
              height={48}
              className="h-11 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-300">
            Un refugio entre las montañas de Monteverde.
          </p>
        </div>

        <div>
          <p className="eyebrow text-sand-400">Domos</p>
          <ul className="mt-4 space-y-3 text-sm">
            {domes.map((dome) => (
              <li key={dome.slug}>
                <Link href={`/domos/${dome.slug}`} className="transition-colors duration-200 hover:text-white">
                  {dome.category === "ESCAPADA PARA DOS"
                    ? "Domo 2 · Escapada para dos"
                    : "Domo 1 · Más espacio para compartir"}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-sand-400">Explora</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/experiencias" className="transition-colors duration-200 hover:text-white">
                Experiencias
              </Link>
            </li>
            <li>
              <Link href="/#resenas" className="transition-colors duration-200 hover:text-white">
                Reseñas
              </Link>
            </li>
            <li>
              <Link href="/#ubicacion" className="transition-colors duration-200 hover:text-white">
                Ubicación
              </Link>
            </li>
            <li>
              <Link href="/#domos" className="transition-colors duration-200 hover:text-white">
                Elegir domo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-sand-400">Contacto</p>
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
