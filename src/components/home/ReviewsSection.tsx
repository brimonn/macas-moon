"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews, reviewSummary } from "@/data/reviews";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  function scrollByCard(direction: -1 | 1) {
    const root = scrollerRef.current;
    if (!root) return;
    const card = root.querySelector("article");
    const amount = card ? card.getBoundingClientRect().width + 24 : 340;
    root.scrollBy({
      left: amount * direction,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  return (
    <section id="experiencia" className="scroll-mt-24 bg-cream">
      <Container className="py-24 sm:py-32">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title={reviewSummary.label} />
          <div className="flex items-center gap-4">
            <div>
              <p className="font-serif text-5xl leading-none font-semibold text-ink">{reviewSummary.rating}</p>
              <p className="mt-2 flex items-center gap-1 text-olive-500" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </p>
            </div>
            <div className="ml-4 hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-warm-white text-ink transition-colors duration-200 hover:bg-olive-50"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-warm-white text-ink transition-colors duration-200 hover:bg-olive-50"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="min-w-[min(100%,20rem)] snap-start rounded-[24px] border border-border-soft bg-warm-white p-7 sm:min-w-[min(100%,22rem)] lg:min-w-[calc((100%-3rem)/3)]"
            >
              <p className="flex gap-1 text-olive-500" aria-hidden="true">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </p>
              <blockquote className="mt-5 font-serif text-xl leading-relaxed font-medium text-ink">
                “{review.quote}”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-olive-800">{review.name}</p>
              <p className="text-sm text-muted">{review.country}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
