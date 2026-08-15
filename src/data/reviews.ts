export type Review = {
  id: string;
  quote: string;
  name: string;
  country: string;
  rating: 5;
};

export const reviewSummary = {
  rating: "4.9",
  label: "Experiencias de nuestros huéspedes",
};

export const reviews: Review[] = [
  {
    id: "1",
    quote:
      "Dormimos con el sonido del bosque y nos despertamos entre nubes. Fue exactamente la pausa que necesitábamos.",
    name: "Elena M.",
    country: "España",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "El jacuzzi al atardecer y la privacidad del domo hicieron que Monteverde se sintiera todavía más especial.",
    name: "Noah K.",
    country: "Estados Unidos",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Llegamos cansados y en unas horas ya estábamos en silencio, con café y vista al verde. Un refugio de verdad.",
    name: "Camila R.",
    country: "Costa Rica",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Viajamos con amigos y el espacio nos alcanzó para estar juntos sin perder la calma de la montaña.",
    name: "Lucas P.",
    country: "Argentina",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "Monteverde se ve distinto cuando te quedas entre los árboles. Volveríamos solo por las noches estrelladas.",
    name: "Sophie L.",
    country: "Francia",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "Todo se siente cuidado y sereno. No es un hotel: es un lugar para quedarse y bajar el ritmo.",
    name: "Mateo S.",
    country: "México",
    rating: 5,
  },
];
