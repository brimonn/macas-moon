import type { Amenity, Dome, GalleryImage } from "@/types/dome";

const sharedAmenities: Amenity[] = [
  { id: "kitchen", label: "Cocina equipada", icon: "utensils" },
  { id: "wifi", label: "Wi-Fi", icon: "wifi" },
  { id: "parking", label: "Estacionamiento", icon: "car" },
  { id: "coffee", label: "Cafetera", icon: "coffee" },
  { id: "ac", label: "Aire acondicionado", icon: "snowflake" },
  { id: "tv", label: "Televisión", icon: "tv" },
  { id: "hot-water", label: "Agua caliente", icon: "droplets" },
  { id: "microwave", label: "Microondas", icon: "microwave" },
  { id: "fridge", label: "Refrigeradora", icon: "refrigerator" },
  { id: "hairdryer", label: "Secadora de cabello", icon: "wind" },
  { id: "toiletries", label: "Amenidades de baño", icon: "sparkles" },
  { id: "nature", label: "Entorno de bosque", icon: "trees" },
];

const dome1Gallery: GalleryImage[] = [
  { src: "/assets/domo1/IMG_5501.webp", alt: "Domo 1 rodeado de naturaleza", category: "vistas" },
  { src: "/assets/domo1/IMG_5477.webp", alt: "Terraza y exterior del Domo 1", category: "exterior" },
  { src: "/assets/domo1/IMG_5479.webp", alt: "Habitación principal del Domo 1", category: "habitacion" },
  { src: "/assets/domo1/IMG_5481.webp", alt: "Interior y comedor del Domo 1", category: "habitacion" },
  { src: "/assets/domo1/IMG_5482.webp", alt: "Baño completo del Domo 1", category: "bano" },
  { src: "/assets/domo1/IMG_5483.webp", alt: "Cocina equipada del Domo 1", category: "cocina" },
  { src: "/assets/domo1/IMG_5484.webp", alt: "Muebles y fregadero de la cocina del Domo 1", category: "cocina" },
  { src: "/assets/domo1/IMG_5494.webp", alt: "Detalle de la cocina del Domo 1", category: "cocina" },
  { src: "/assets/domo1/IMG_5495.webp", alt: "Jacuzzi y terraza del Domo 1", category: "jacuzzi" },
  { src: "/assets/domo1/IMG_5500.webp", alt: "Cama del Domo 1", category: "habitacion" },
];

const dome2Gallery: GalleryImage[] = [
  { src: "/assets/domo2/IMG_7051.webp", alt: "Domo 2 entre las montañas de Monteverde", category: "vistas" },
  { src: "/assets/domo2/IMG_7050.webp", alt: "Vista aérea de los domos entre el bosque", category: "vistas" },
  { src: "/assets/domo2/IMG_7052.webp", alt: "Domo 2 rodeado de vegetación", category: "vistas" },
  { src: "/assets/domo2/IMG_7055.webp", alt: "Terraza y jacuzzi del Domo 2", category: "exterior" },
  { src: "/assets/domo2/IMG_7056.webp", alt: "Exterior privado del Domo 2", category: "exterior" },
  { src: "/assets/domo2/IMG_7061.webp", alt: "Jacuzzi del Domo 2 con vista a la naturaleza", category: "jacuzzi" },
  { src: "/assets/domo2/IMG_7066.webp", alt: "Cocina equipada del Domo 2", category: "cocina" },
  { src: "/assets/domo2/IMG_7067.webp", alt: "Cocina y ventana panorámica del Domo 2", category: "cocina" },
  { src: "/assets/domo2/IMG_7068.webp", alt: "Habitación del Domo 2", category: "habitacion" },
  { src: "/assets/domo2/IMG_7076.webp", alt: "Ducha del baño del Domo 2", category: "bano" },
  { src: "/assets/domo2/IMG_7078.webp", alt: "Baño completo del Domo 2", category: "bano" },
  { src: "/assets/domo2/IMG_7079.webp", alt: "Lavamanos del baño del Domo 2", category: "bano" },
  { src: "/assets/domo2/IMG_7080.webp", alt: "Espejo y lavamanos del Domo 2", category: "bano" },
  { src: "/assets/domo2/IMG_7081.webp", alt: "Amenidades de baño del Domo 2", category: "bano" },
  { src: "/assets/domo2/IMG_7085.webp", alt: "Estación de café del Domo 2", category: "cocina" },
  { src: "/assets/domo2/IMG_7087.webp", alt: "Comedor del Domo 2", category: "cocina" },
  { src: "/assets/domo2/IMG_7092.webp", alt: "Toallas preparadas en el Domo 2", category: "bano" },
  { src: "/assets/domo2/IMG_7098.webp", alt: "Jacuzzi privado del Domo 2", category: "jacuzzi" },
];

export const domes: Dome[] = [
  {
    slug: "domo-romantico",
    name: "Macas Moon Domo 2 · Romántico",
    category: "ESCAPADA PARA DOS",
    tagline: "Privacidad, tranquilidad y conexión en pareja.",
    heroTitle: "Una escapada para dos",
    heroSubtitle:
      "Privacidad, naturaleza y noches bajo las estrellas de Monteverde.",
    capacity: 2,
    beds: 1,
    bathrooms: 1,
    heroImage: "/assets/domo2/IMG_7052.webp",
    cardImage: "/assets/domo2/IMG_7055.webp",
    locationImage: "/assets/domo2/IMG_7051.webp",
    shortDescription:
      "Un espacio íntimo entre las montañas de Monteverde, pensado para desconectar y disfrutar en pareja.",
    longDescription:
      "Un refugio íntimo en medio del bosque nuboso de Monteverde. Un lugar para bajar el ritmo, disfrutar de la compañía y vivir una experiencia diferente, rodeados de naturaleza y confort.",
    conceptTitle: "Hecho para desconectar juntos",
    highlights: [
      {
        title: "Un espacio solo para ustedes",
        text: "Un espacio diseñado para disfrutar en pareja, con la tranquilidad y privacidad que necesitas para conectar, conversar y crear momentos especiales lejos del ruido y las distracciones.",
      },
      {
        title: "Jacuzzi privado",
        text: "Relájate en tu jacuzzi privado mientras contemplas el entorno natural. El plan perfecto para disfrutar de una tarde tranquila, una noche bajo las estrellas o simplemente dejar pasar el tiempo.",
      },
      {
        title: "Noches rodeadas de naturaleza",
        text: "Cuando cae la noche, el bosque se transforma. El sonido de la naturaleza, el aire fresco de la montaña y el cielo sobre el domo crean el escenario perfecto para una noche diferente.",
      },
    ],
    stats: [
      { icon: "users", label: "Huéspedes", value: "2 huéspedes" },
      { icon: "bed", label: "Cama", value: "1 cama" },
      { icon: "bath", label: "Baño", value: "1 baño" },
      { icon: "jacuzzi", label: "Jacuzzi", value: "Jacuzzi privado" },
      { icon: "utensils", label: "Cocina", value: "Cocina" },
      { icon: "sun", label: "Terraza", value: "Terraza" },
    ],
    amenities: [
      { id: "jacuzzi", label: "Jacuzzi privado", icon: "jacuzzi" },
      { id: "terrace", label: "Terraza", icon: "sun" },
      ...sharedAmenities,
    ],
    gallery: dome2Gallery,
    spaces: [
      {
        id: "habitacion",
        name: "Habitación",
        description:
          "Un cuarto sereno, con cama cómoda y la vegetación como único vecino. Pensado para despertar despacio.",
        image: "/assets/domo2/IMG_7068.webp",
        layout: "full",
      },
      {
        id: "jacuzzi",
        name: "Jacuzzi",
        description:
          "Un rincón privado para quedarse en silencio, hablar o mirar el bosque mientras el día se apaga.",
        image: "/assets/domo2/IMG_7061.webp",
        layout: "half",
      },
      {
        id: "cocina",
        name: "Cocina",
        description:
          "Lo esencial para un desayuno largo o una cena sencilla, sin salir del domo.",
        image: "/assets/domo2/IMG_7066.webp",
        layout: "half",
      },
      {
        id: "exterior",
        name: "Exterior",
        description:
          "Terraza, aire fresco y la sensación de estar dentro del bosque de Monteverde.",
        image: "/assets/domo2/IMG_7055.webp",
        layout: "wide",
      },
      {
        id: "bano",
        name: "Baño",
        description:
          "Un baño privado, cálido y funcional, con agua caliente después del clima de montaña.",
        image: "/assets/domo2/IMG_7078.webp",
        layout: "half",
      },
    ],
    ctaTitle: "¿Listos para desconectar?",
    ctaText: "Vive Monteverde desde un espacio pensado para dos.",
    preview: {
      guests: "2 huéspedes",
      beds: "1 cama",
      bathrooms: "1 baño",
      extra: "Jacuzzi",
    },
  },
  {
    slug: "domo-amplio",
    name: "Macas Moon Domo 1 · Amplio",
    category: "MÁS ESPACIO PARA COMPARTIR",
    tagline: "Mayor amplitud y comodidad para disfrutar juntos.",
    heroTitle: "Un espacio para compartir",
    heroSubtitle: "Más espacio, más comodidad y Monteverde alrededor.",
    capacity: 4,
    beds: 2,
    bathrooms: 1,
    heroImage: "/assets/domo1/IMG_5501.webp",
    cardImage: "/assets/domo1/IMG_5495.webp",
    locationImage: "/assets/domo1/IMG_5501.webp",
    shortDescription:
      "Un espacio amplio entre naturaleza, pensado para disfrutar Monteverde con mayor comodidad.",
    longDescription:
      "Más aire, más luz y más lugar para estar juntos. El Domo 1 está pensado para quienes viajan en pareja, con amigos o en un pequeño grupo y quieren la calma de Monteverde sin sentirse justos.",
    conceptTitle: "Espacio para disfrutar juntos",
    highlights: [
      {
        title: "Mayor amplitud",
        text: "Un interior más abierto, pensado para quedarse, conversar y descansar con holgura.",
      },
      {
        title: "Hasta 4 huéspedes",
        text: "Dos camas y espacio suficiente para compartir la estadía con quienes elijas.",
      },
      {
        title: "Espacios para compartir",
        text: "Cocina, terraza amplia y rincones para estar juntos después de explorar Monteverde.",
      },
    ],
    stats: [
      { icon: "users", label: "Huéspedes", value: "4 huéspedes" },
      { icon: "bed", label: "Camas", value: "2 camas" },
      { icon: "bath", label: "Baño", value: "1 baño" },
      { icon: "jacuzzi", label: "Jacuzzi", value: "Jacuzzi" },
      { icon: "utensils", label: "Cocina", value: "Cocina" },
      { icon: "sun", label: "Terraza", value: "Terraza amplia" },
    ],
    amenities: [
      { id: "jacuzzi", label: "Jacuzzi", icon: "jacuzzi" },
      { id: "terrace", label: "Terraza amplia", icon: "sun" },
      ...sharedAmenities,
    ],
    gallery: dome1Gallery,
    spaces: [
      {
        id: "habitacion",
        name: "Habitación",
        description:
          "Un ambiente más amplio para descansar, con dos camas y la sensación de espacio que pide un viaje compartido.",
        image: "/assets/domo1/IMG_5479.webp",
        layout: "full",
      },
      {
        id: "jacuzzi",
        name: "Jacuzzi",
        description:
          "Para soltar el día después de caminar, observar aves o simplemente no hacer nada.",
        image: "/assets/domo1/IMG_5495.webp",
        layout: "half",
      },
      {
        id: "cocina",
        name: "Cocina",
        description:
          "Un espacio más cómodo para preparar café, desayunos y comidas sin prisa.",
        image: "/assets/domo1/IMG_5484.webp",
        layout: "half",
      },
      {
        id: "exterior",
        name: "Exterior",
        description:
          "Una terraza amplia para estar afuera, escuchar el bosque y ver pasar las nubes de Monteverde.",
        image: "/assets/domo1/IMG_5477.webp",
        layout: "wide",
      },
      {
        id: "bano",
        name: "Baño",
        description:
          "Baño privado, luminoso y práctico, listo después de un día en la montaña.",
        image: "/assets/domo1/IMG_5482.webp",
        layout: "half",
      },
    ],
    ctaTitle: "¿Listos para compartir Monteverde?",
    ctaText: "Descubre un espacio con más comodidad para disfrutar juntos.",
    preview: {
      guests: "4 huéspedes",
      beds: "2 camas",
      bathrooms: "1 baño",
      extra: "Jacuzzi",
    },
  },
];

export function getDome(slug: string) {
  return domes.find((dome) => dome.slug === slug);
}
