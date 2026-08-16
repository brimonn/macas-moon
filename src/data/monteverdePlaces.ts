import { unsplash } from "@/lib/images";

export type PlaceCategory =
  | "Naturaleza"
  | "Gastronomía"
  | "Café"
  | "Aventura";

export type MonteverdePlace = {
  id: string;
  name: string;
  category: PlaceCategory;
  description: string;
  image: string;
  highlight: string;
  websiteUrl: string;
};

export const monteverdePlaces: MonteverdePlace[] = [
  {
    id: "bosque-nuboso",
    name: "Reserva Bosque Nuboso",
    category: "Naturaleza",
    description:
      "Senderos y caminatas para conocer uno de los ecosistemas más singulares de Costa Rica.",
    image: "/assets/otros/bosque-nuboso.webp",
    highlight: "Bosque nuboso y senderos",
    websiteUrl: "https://cloudforestmonteverde.com/es/",
  },
  {
    id: "treetopia-park",
    name: "Treetopia Park",
    category: "Aventura",
    description:
      "Puentes colgantes, teleférico y tirolesas para recorrer el dosel del bosque.",
    image: "/assets/otros/hanging-bridges-monteverde.webp",
    highlight: "Puentes, teleférico y canopy",
    websiteUrl: "https://treetopiapark.com/",
  },
  {
    id: "extremo-canopy",
    name: "Extremo Canopy",
    category: "Aventura",
    description:
      "Canopy, salto bungee, columpio Tarzán y experiencias de adrenalina entre el bosque.",
    image: unsplash("photo-1500530855697-b586d89ba3ee"),
    highlight: "Canopy y aventura extrema",
    websiteUrl: "https://monteverdeextremo.com/",
  },
  {
    id: "selvatura-park",
    name: "Selvatura Park",
    category: "Aventura",
    description:
      "Aventura y naturaleza en el bosque nuboso con canopy, puentes y recorridos para explorar.",
    image: "/assets/otros/hanging-bridges-monteverde.webp",
    highlight: "Aventura en el bosque nuboso",
    websiteUrl: "https://www.selvatura.com/",
  },
  {
    id: "tour-cafe",
    name: "Tour de Café Monteverde",
    category: "Café",
    description:
      "Conoce el proceso del café de Monteverde, desde la finca hasta la taza.",
    image: unsplash("photo-1495474472287-4d71bcdd2085"),
    highlight: "Cultura y degustación de café",
    websiteUrl: "https://cafedemonteverde.com/tour/",
  },
  {
    id: "kapi-kapi",
    name: "Kapi Kapi Restaurante",
    category: "Gastronomía",
    description:
      "Una opción para disfrutar una cena especial y sabores de alta calidad en Monteverde.",
    image: unsplash("photo-1414235077428-338989a2e8c0"),
    highlight: "Cena de alta calidad",
    websiteUrl: "https://www.kapikapirestaurante.com/",
  },
];
