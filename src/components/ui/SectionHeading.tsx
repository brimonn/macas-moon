"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/i18n/LanguageProvider";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow mb-3 text-olive-700">
          {t(eyebrow)}
        </p>
      ) : null}
      <h2
        id={id}
        className="heading-section text-ink"
      >
        {t(title)}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed font-normal text-muted sm:text-lg">
          {t(description)}
        </p>
      ) : null}
    </div>
  );
}
