import { unsplash } from "@/lib/images";

export type PlaceCategory =
  | "Naturaleza"
  | "Gastronomía"
  | "Café"
  | "Aventura"
  | "Mirador";

export type MonteverdePlace = {
  id: string;
  name: string;
  category: PlaceCategory;
  description: string;
  image: string;
  travelTime: string;
  mapsUrl: string;
};

export const monteverdePlaces: MonteverdePlace[] = [
  {
    id: "bosque-nuboso",
    name: "Reserva Bosque Nuboso",
    category: "Naturaleza",
    description:
      "Caminos entre musgo, nubes bajas y el silencio húmedo que define a Monteverde.",
    image: unsplash("photo-1511497584788-876760111969"),
    travelTime: "18 min en carro",
    mapsUrl: "https://maps.google.com/?q=Reserva+Bosque+Nuboso+Monteverde",
  },
  {
    id: "soda-cerro",
    name: "Soda El Cerro",
    category: "Gastronomía",
    description:
      "Comida casera, café recién hecho y la conversación tranquila de pueblo de montaña.",
    image: unsplash("photo-1414235077428-338989a2e8c0"),
    travelTime: "12 min en carro",
    mapsUrl: "https://maps.google.com/?q=Santa+Elena+Monteverde+restaurantes",
  },
  {
    id: "cafe-bruma",
    name: "Café Bruma",
    category: "Café",
    description:
      "Un tostado local para quedarse un rato, mirar el verde y planear el resto del día.",
    image: unsplash("photo-1495474472287-4d71bcdd2085"),
    travelTime: "10 min en carro",
    mapsUrl: "https://maps.google.com/?q=cafe+Monteverde+Costa+Rica",
  },
  {
    id: "puentes-dosel",
    name: "Puentes en el dosel",
    category: "Aventura",
    description:
      "Caminar entre las copas de los árboles y ver Monteverde desde otra altura.",
    image: unsplash("photo-1551632811-561732d1e306"),
    travelTime: "20 min en carro",
    mapsUrl: "https://maps.google.com/?q=sky+walk+Monteverde",
  },
  {
    id: "mirador-nubes",
    name: "Mirador de las nubes",
    category: "Mirador",
    description:
      "Un punto alto para ver el golfo a lo lejos, cuando el clima abre un claro.",
    image: unsplash("photo-1506905925346-21bda4d32df4"),
    travelTime: "15 min en carro",
    mapsUrl: "https://maps.google.com/?q=mirador+Monteverde+Puntarenas",
  },
];
