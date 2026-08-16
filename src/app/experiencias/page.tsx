import type { Metadata } from "next";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";

export const metadata: Metadata = {
  title: "Experiencias en Monteverde",
  description:
    "Descubre tours, naturaleza, gastronomía y lugares para visitar durante tu estadía en Macas Moon.",
};

export default function ExperiencesPage() {
  return <ExperiencesSection />;
}
