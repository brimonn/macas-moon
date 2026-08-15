"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { domes } from "@/data/domes";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

function HashLink({
  hash,
  className,
  children,
  onClick,
}: {
  hash: `#${string}`;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const href = pathname === "/" ? hash : `/${hash}`;

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [domesOpen, setDomesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState<"ES" | "EN">("ES");
  const [activePath, setActivePath] = useState(pathname);
  const domeMenuId = useId();
  const langMenuId = useId();
  const domeWrapRef = useRef<HTMLDivElement>(null);
  const langWrapRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const domeMatch = pathname.match(/^\/domos\/([^/]+)/);
  const isDomePage = Boolean(domeMatch);
  const currentSlug = domeMatch?.[1];
  const overlay = isHome || isDomePage;
  const solid = !overlay || scrolled || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (activePath !== pathname) {
    setActivePath(pathname);
    setMobileOpen(false);
    setDomesOpen(false);
    setLangOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (domeWrapRef.current && !domeWrapRef.current.contains(event.target as Node)) {
        setDomesOpen(false);
      }
      if (langWrapRef.current && !langWrapRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDomesOpen(false);
        setLangOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = cn(
    "nav-underline pb-0.5 text-[0.9rem] font-semibold tracking-wide transition-colors duration-300",
    solid ? "text-ink" : "text-warm-white",
  );

  const cta = isDomePage
    ? { href: `/reservar?domo=${currentSlug}`, label: "Reservar" }
    : { href: isHome ? "#domos" : "/#domos", label: "Elegir domo" };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        solid
          ? "bg-warm-white/92 shadow-[0_8px_24px_rgba(36,39,32,0.04)] backdrop-blur-[6px]"
          : "bg-transparent",
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-warm-white focus:px-4 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Container className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          className={cn(
            "relative flex items-center rounded-full transition-colors duration-300",
            !solid && "bg-warm-white/88 px-2.5 py-1.5 backdrop-blur-sm",
          )}
          aria-label={`${site.name}, ir al inicio`}
        >
          <Image
            src={site.logo}
            alt={site.name}
            width={148}
            height={48}
            className="h-10 w-auto object-contain lg:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {isDomePage ? (
            <div className="relative" ref={domeWrapRef}>
              <button
                type="button"
                className={cn(linkClass, "inline-flex items-center gap-1")}
                aria-expanded={domesOpen}
                aria-controls={domeMenuId}
                onClick={() => {
                  setDomesOpen((open) => !open);
                  setLangOpen(false);
                }}
              >
                Domos
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", domesOpen && "rotate-180")} />
              </button>
              {domesOpen ? (
                <div
                  id={domeMenuId}
                  role="menu"
                  className="absolute left-0 top-full mt-3 min-w-[240px] rounded-2xl border border-border-soft bg-warm-white p-2 shadow-soft"
                >
                  {domes.map((dome) => (
                    <Link
                      key={dome.slug}
                      href={`/domos/${dome.slug}`}
                      role="menuitem"
                      className="block rounded-xl px-3 py-2.5 text-sm text-ink transition-colors duration-200 hover:bg-olive-50"
                    >
                      {dome.category === "ESCAPADA PARA DOS"
                        ? "Escapada para dos"
                        : "Más espacio para compartir"}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <HashLink hash="#domos" className={linkClass}>
              Domos
            </HashLink>
          )}

          <HashLink hash="#experiencia" className={linkClass}>
            Experiencia
          </HashLink>
          <HashLink hash="#ubicacion" className={linkClass}>
            Ubicación
          </HashLink>

          <div className="relative" ref={langWrapRef}>
            <button
              type="button"
              className={cn(linkClass, "inline-flex items-center gap-1")}
              aria-expanded={langOpen}
              aria-controls={langMenuId}
              aria-label="Seleccionar idioma"
              onClick={() => {
                setLangOpen((open) => !open);
                setDomesOpen(false);
              }}
            >
              {language}
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", langOpen && "rotate-180")} />
            </button>
            {langOpen ? (
              <div
                id={langMenuId}
                role="menu"
                className="absolute right-0 top-full mt-3 min-w-[160px] rounded-2xl border border-border-soft bg-warm-white p-2 shadow-soft"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-ink hover:bg-olive-50"
                  onClick={() => {
                    setLanguage("ES");
                    setLangOpen(false);
                  }}
                >
                  Español
                  {language === "ES" ? <span className="text-olive-500">●</span> : null}
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-muted hover:bg-sand-50"
                  onClick={() => {
                    setLanguage("EN");
                    setLangOpen(false);
                  }}
                >
                  English
                  <span className="text-[0.65rem] tracking-wider text-plum-600 uppercase">Pronto</span>
                </button>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <Button href={cta.href} size="md">
              {cta.label}
            </Button>
          </div>
          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
              solid ? "text-ink hover:bg-sand-100" : "bg-warm-white/88 text-ink",
            )}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <div className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-cream lg:hidden">
          <nav className="flex min-h-[calc(100svh-4.5rem)] flex-col px-6 py-10" aria-label="Móvil">
            <div className="flex flex-col gap-6 text-3xl font-semibold text-ink">
              {isDomePage ? (
                <div>
                  <p className="mb-3 text-3xl">Domos</p>
                  <div className="flex flex-col gap-3 font-sans text-lg text-muted">
                    {domes.map((dome) => (
                      <Link key={dome.slug} href={`/domos/${dome.slug}`} className="hover:text-olive-700">
                        {dome.category === "ESCAPADA PARA DOS"
                          ? "Escapada para dos"
                          : "Más espacio para compartir"}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <HashLink hash="#domos" onClick={() => setMobileOpen(false)}>
                  Domos
                </HashLink>
              )}
              <HashLink hash="#experiencia" onClick={() => setMobileOpen(false)}>
                Experiencia
              </HashLink>
              <HashLink hash="#ubicacion" onClick={() => setMobileOpen(false)}>
                Ubicación
              </HashLink>
            </div>
            <div className="mt-10 flex gap-3 text-sm">
              <button
                type="button"
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  language === "ES" ? "bg-olive-500 text-white" : "bg-white text-ink",
                )}
                onClick={() => setLanguage("ES")}
              >
                Español
              </button>
              <button
                type="button"
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  language === "EN" ? "bg-olive-500 text-white" : "bg-white text-muted",
                )}
                onClick={() => setLanguage("EN")}
              >
                English · Pronto
              </button>
            </div>
            <div className="mt-auto pt-12 pb-8">
              <Button href={cta.href} size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                {cta.label}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
