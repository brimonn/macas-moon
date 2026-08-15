"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import type { Dome } from "@/types/dome";

export function AmenitiesSection({ dome }: { dome: Dome }) {
  const [open, setOpen] = useState(false);
  const preview = dome.amenities.slice(0, 8);

  return (
    <section className="bg-cream">
      <Container className="py-24 sm:py-28">
        <SectionHeading title="Todo lo que necesitas para tu estadía" />
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {preview.map((amenity) => {
            const Icon = icons[amenity.icon];
            return (
              <li key={amenity.id} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-olive-500" strokeWidth={1.5} />
                <span className="text-sm font-medium text-ink">{amenity.label}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-10">
          <Button variant="outline" onClick={() => setOpen(true)}>
            Ver todas las amenidades
          </Button>
        </div>
      </Container>
      <Modal open={open} onClose={() => setOpen(false)} title="Amenidades" size="md">
        <ul className="grid gap-5 sm:grid-cols-2">
          {dome.amenities.map((amenity) => {
            const Icon = icons[amenity.icon];
            return (
              <li key={amenity.id} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-olive-500" strokeWidth={1.5} />
                <span className="text-sm font-medium text-ink">{amenity.label}</span>
              </li>
            );
          })}
        </ul>
      </Modal>
    </section>
  );
}
