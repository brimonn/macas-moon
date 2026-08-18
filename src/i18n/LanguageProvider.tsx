"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { catalog } from "./catalog";

export type Language = "es" | "en" | "fr" | "de";

export const languageOptions: Array<{ code: Language; label: string; short: string }> = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "Inglés", short: "EN" },
  { code: "fr", label: "Francés", short: "FR" },
  { code: "de", label: "Alemán", short: "DE" },
];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string, values?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("macas-moon-language");
    if (saved === "es" || saved === "en" || saved === "fr" || saved === "de") {
      // Restoring browser-only persisted state after hydration is intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("macas-moon-language", nextLanguage);
  }, []);

  const t = useCallback(
    (text: string, values?: Record<string, string | number>) => {
      const translated = language === "es" ? text : (catalog[text]?.[language] ?? text);
      if (!values) return translated;
      return Object.entries(values).reduce(
        (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
        translated,
      );
    },
    [language],
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function TranslatedText({
  children,
  values,
}: {
  children: string;
  values?: Record<string, string | number>;
}) {
  const { t } = useLanguage();
  return <>{t(children, values)}</>;
}
