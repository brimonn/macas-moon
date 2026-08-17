"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { domes } from "@/data/domes";
import { languageOptions, useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const orderedDomes = [...domes].sort((a, b) => b.capacity - a.capacity);
const faqItems = [
  {
    question: "¿Qué tan lejos estamos de Monteverde?",
    answer: "Nos encontramos a 10 minutos en auto del centro.",
  },
  {
    question: "¿Ofrecen servicios de comida?",
    answer: "No, pero Monteverde ofrece múltiples restaurantes de calidad para su comodidad.",
  },
] as const;

function HashLink({
  hash,
  className,
  children,
  onClick,
  ariaLabel,
}: {
  hash: `#${string}`;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const pathname = usePathname();
  const href = pathname === "/" ? hash : `/${hash}`;

  return (
    <Link href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [domesOpen, setDomesOpen] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const domeMenuId = useId();
  const experiencesMenuId = useId();
  const faqMenuId = useId();
  const langMenuId = useId();
  const domeWrapRef = useRef<HTMLDivElement>(null);
  const experiencesWrapRef = useRef<HTMLDivElement>(null);
  const faqWrapRef = useRef<HTMLDivElement>(null);
  const langWrapRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const domeMatch = pathname.match(/^\/domos\/([^/]+)/);
  const isDomePage = Boolean(domeMatch);
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
    setExperiencesOpen(false);
    setFaqOpen(false);
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
      if (experiencesWrapRef.current && !experiencesWrapRef.current.contains(event.target as Node)) {
        setExperiencesOpen(false);
      }
      if (faqWrapRef.current && !faqWrapRef.current.contains(event.target as Node)) {
        setFaqOpen(false);
      }
      if (langWrapRef.current && !langWrapRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDomesOpen(false);
        setExperiencesOpen(false);
        setFaqOpen(false);
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
    "nav-underline pb-0.5 text-[0.9rem] font-medium tracking-[0.04em] transition-colors duration-300",
    solid ? "text-ink" : "text-warm-white",
  );

  const cta = {
    href: site.contact.reservationWhatsappUrl,
    label: "Reserva ahora",
  };

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        solid
          ? "bg-sand-50/94 shadow-[0_8px_24px_rgba(36,39,32,0.04)] backdrop-blur-[6px]"
          : "bg-transparent",
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-warm-white focus:px-4 focus:py-2"
      >
        {t("Saltar al contenido")}
      </a>
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-4">
        <HashLink
          hash="#inicio"
          className="relative flex items-center"
          ariaLabel={`${site.name}, ir al inicio`}
          onClick={() => {
            setMobileOpen(false);
            if (pathname === "/") {
              document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <Image
            src={solid ? site.logo : site.logoLight}
            alt={site.name}
            width={148}
            height={48}
            className={cn(
              "h-9 w-auto object-contain sm:h-10 lg:h-11",
              !solid && "hero-logo-light",
            )}
            priority
          />
        </HashLink>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7" aria-label="Principal">
          <HashLink hash="#inicio" className={linkClass}>
            {t("Inicio")}
          </HashLink>

          <div className="relative" ref={domeWrapRef}>
            <button
              type="button"
              className={cn(linkClass, "inline-flex items-center gap-1")}
              aria-expanded={domesOpen}
              aria-controls={domeMenuId}
              onClick={() => {
                setDomesOpen((open) => !open);
                setExperiencesOpen(false);
                setFaqOpen(false);
                setLangOpen(false);
              }}
            >
              {t("Domos")}
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", domesOpen && "rotate-180")} />
            </button>
            {domesOpen ? (
              <div
                id={domeMenuId}
                role="menu"
                className="absolute left-0 top-full mt-3 min-w-[280px] rounded-2xl border border-sand-300 bg-sand-50 p-2 shadow-soft"
              >
                {orderedDomes.map((dome) => (
                  <Link
                    key={dome.slug}
                    href={`/domos/${dome.slug}`}
                    role="menuitem"
                    onClick={() => setDomesOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm text-ink transition-colors duration-200 hover:bg-sand-200"
                  >
                    <span className="block font-semibold">
                      {t(dome.capacity === 4 ? "Domo 1 · Amplio" : "Domo 2 · Romántico")}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {t("Hasta {count} huéspedes", { count: dome.capacity })}
                    </span>
                  </Link>
                ))}
                <HashLink
                  hash="#domos"
                  onClick={() => setDomesOpen(false)}
                  className="mt-1 block border-t border-sand-300 px-3 pt-3 pb-2 text-xs font-bold tracking-wide text-olive-700 uppercase"
                >
                  {t("Comparar ambos domos")}
                </HashLink>
              </div>
            ) : null}
          </div>

          <Link href="/nosotros" className={linkClass}>
            {t("Nosotros")}
          </Link>

          <div className="relative" ref={experiencesWrapRef}>
            <div className="inline-flex items-center gap-1">
              <HashLink
                hash="#monteverde"
                className={linkClass}
                onClick={() => setExperiencesOpen(false)}
              >
                {t("Experiencias")}
              </HashLink>
              <button
                type="button"
                className={cn(
                  "rounded-full p-0.5 transition-colors duration-300",
                  solid ? "text-ink hover:bg-sand-200" : "text-warm-white hover:bg-white/10",
                )}
                aria-label={t("Todas las experiencias")}
                aria-expanded={experiencesOpen}
                aria-controls={experiencesMenuId}
                onClick={() => {
                  setExperiencesOpen((open) => !open);
                  setDomesOpen(false);
                  setFaqOpen(false);
                  setLangOpen(false);
                }}
              >
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", experiencesOpen && "rotate-180")} />
              </button>
            </div>
            {experiencesOpen ? (
              <div
                id={experiencesMenuId}
                role="menu"
                className="absolute left-0 top-full mt-3 min-w-[250px] rounded-2xl border border-sand-300 bg-sand-50 p-2 shadow-soft"
              >
                <Link
                  href="/experiencias"
                  onClick={() => setExperiencesOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sand-200"
                >
                  {t("Todas las experiencias")}
                </Link>
              </div>
            ) : null}
          </div>
          <HashLink hash="#resenas" className={linkClass}>
            {t("Reseñas")}
          </HashLink>
          <HashLink hash="#ubicacion" className={linkClass}>
            {t("Ubicación")}
          </HashLink>

          <div className="relative" ref={faqWrapRef}>
            <button
              type="button"
              className={cn(linkClass, "inline-flex items-center gap-1")}
              aria-expanded={faqOpen}
              aria-controls={faqMenuId}
              onClick={() => {
                setFaqOpen((open) => !open);
                setDomesOpen(false);
                setExperiencesOpen(false);
                setLangOpen(false);
              }}
            >
              {t("FAQ")}
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", faqOpen && "rotate-180")} />
            </button>
            {faqOpen ? (
              <div
                id={faqMenuId}
                className="absolute right-0 top-full mt-3 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-sand-300 bg-sand-50 p-5 text-ink shadow-soft"
              >
                <p className="eyebrow text-olive-700">{t("Preguntas frecuentes")}</p>
                <dl className="mt-4 space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={item.question} className={cn(index > 0 && "border-t border-sand-300 pt-4")}>
                      <dt className="text-sm font-bold">{t(item.question)}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted">{t(item.answer)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
          </div>

          <div className="relative" ref={langWrapRef}>
            <button
              type="button"
              className={cn(linkClass, "inline-flex items-center gap-1")}
              aria-expanded={langOpen}
              aria-controls={langMenuId}
              aria-label={t("Seleccionar idioma")}
              onClick={() => {
                setLangOpen((open) => !open);
                setDomesOpen(false);
                setExperiencesOpen(false);
                setFaqOpen(false);
              }}
            >
              {language.toUpperCase()}
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", langOpen && "rotate-180")} />
            </button>
            {langOpen ? (
              <div
                id={langMenuId}
                role="menu"
                className="absolute right-0 top-full mt-3 min-w-[160px] rounded-2xl border border-border-soft bg-warm-white p-2 shadow-soft"
              >
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    role="menuitem"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-ink hover:bg-olive-50"
                    onClick={() => {
                      setLanguage(option.code);
                      setLangOpen(false);
                    }}
                  >
                    {t(option.label)}
                    {language === option.code ? <span className="text-olive-500">●</span> : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden xl:block">
            <Button href={cta.href} size="md">
              {cta.label}
            </Button>
          </div>
          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full xl:hidden",
              solid ? "text-ink hover:bg-sand-100" : "bg-warm-white/88 text-ink",
            )}
            aria-label={t(mobileOpen ? "Cerrar menú" : "Abrir menú")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>
    </header>

      {mobileOpen ? (
        <div className="fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto bg-cream xl:hidden">
          <nav className="flex min-h-[calc(100svh-var(--header-h))] flex-col px-5 py-8 sm:px-6 sm:py-10" aria-label="Móvil">
            <div className="flex flex-col gap-5 text-[1.65rem] leading-tight font-semibold text-ink sm:gap-6 sm:text-3xl">
              <HashLink hash="#inicio" className="min-h-11 py-1" onClick={() => setMobileOpen(false)}>
                {t("Inicio")}
              </HashLink>
              <div>
                <p className="mb-3">{t("Domos")}</p>
                <div className="flex flex-col gap-3 font-sans text-base text-muted sm:text-lg">
                  {orderedDomes.map((dome) => (
                    <Link
                      key={dome.slug}
                      href={`/domos/${dome.slug}`}
                      className="min-h-11 py-1 hover:text-olive-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(dome.capacity === 4 ? "Domo 1 · Amplio" : "Domo 2 · Romántico")}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/nosotros" className="min-h-11 py-1" onClick={() => setMobileOpen(false)}>
                {t("Nosotros")}
              </Link>
              <div>
                <button
                  type="button"
                  className="flex min-h-11 w-full items-center justify-between py-1 text-left"
                  aria-expanded={faqOpen}
                  aria-controls={`${faqMenuId}-mobile`}
                  onClick={() => setFaqOpen((open) => !open)}
                >
                  {t("FAQ")}
                  <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", faqOpen && "rotate-180")} />
                </button>
                {faqOpen ? (
                  <dl
                    id={`${faqMenuId}-mobile`}
                    className="mt-3 space-y-4 rounded-2xl border border-sand-300 bg-sand-50 p-5 font-sans text-base font-normal"
                  >
                    {faqItems.map((item, index) => (
                      <div key={item.question} className={cn(index > 0 && "border-t border-sand-300 pt-4")}>
                        <dt className="font-bold text-ink">{t(item.question)}</dt>
                        <dd className="mt-1 leading-relaxed text-muted">{t(item.answer)}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
              <div>
                <HashLink
                  hash="#monteverde"
                  className="mb-3 block"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("Experiencias")}
                </HashLink>
                <div className="flex flex-col gap-3 font-sans text-base text-muted sm:text-lg">
                  <Link href="/experiencias" className="min-h-11 py-1" onClick={() => setMobileOpen(false)}>
                    {t("Todas las experiencias")}
                  </Link>
                </div>
              </div>
              <HashLink hash="#resenas" className="min-h-11 py-1" onClick={() => setMobileOpen(false)}>
                {t("Reseñas")}
              </HashLink>
              <HashLink hash="#ubicacion" className="min-h-11 py-1" onClick={() => setMobileOpen(false)}>
                {t("Ubicación")}
              </HashLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-sm">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  className={cn(
                    "min-h-11 rounded-full px-4 py-2 text-sm font-semibold",
                    language === option.code ? "bg-olive-500 text-white" : "bg-white text-ink",
                  )}
                  onClick={() => setLanguage(option.code)}
                >
                  {option.short}
                </button>
              ))}
            </div>
            <div className="mt-auto pt-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
              <Button href={cta.href} size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                {cta.label}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
