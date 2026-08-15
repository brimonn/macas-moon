import { unsplash } from "@/lib/images";
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

const romanticGallery: GalleryImage[] = [
  {
    src: unsplash("photo-1449158743715-0a90ebb4d4d6"),
    alt: "Domo romántico iluminado al atardecer entre el bosque",
    category: "exterior",
  },
  {
    src: unsplash("photo-1522771739844-6a9f6d5f14af"),
    alt: "Habitación íntima con cama vestida en tonos cálidos",
    category: "habitacion",
  },
  {
    src: unsplash("photo-1540555700478-4be289fbecef"),
    alt: "Jacuzzi privado rodeado de vegetación",
    category: "jacuzzi",
  },
  {
    src: unsplash("photo-1556912173-46c336c7fd55"),
    alt: "Cocina compacta de madera con luz natural",
    category: "cocina",
  },
  {
    src: unsplash("photo-1470770841072-f978cf4d019e"),
    alt: "Terraza del domo con vista al bosque de Monteverde",
    category: "exterior",
  },
  {
    src: unsplash("photo-1552321554-5fefe8c9ef14"),
    alt: "Baño privado con acabados cálidos y agua caliente",
    category: "bano",
  },
  {
    src: unsplash("photo-1419242902214-272b3f66ee7a"),
    alt: "Cielo estrellado sobre las montañas de Monteverde",
    category: "vistas",
  },
  {
    src: unsplash("photo-1510798831971-5953656ade9c"),
    alt: "Interior acogedor del domo con luz de atardecer",
    category: "habitacion",
  },
  {
    src: unsplash("photo-1584622650111-993a426fbf0a"),
    alt: "Momento de descanso en el jacuzzi al aire libre",
    category: "jacuzzi",
  },
  {
    src: unsplash("photo-1448375240586-882707db888b"),
    alt: "Bosque nublado alrededor del alojamiento",
    category: "vistas",
  },
  {
    src: unsplash("photo-1556909114-f6e7ad7d3136"),
    alt: "Detalles de la cocina para preparar un desayuno tranquilo",
    category: "cocina",
  },
  {
    src: unsplash("photo-1600566752355-35792bedcfea"),
    alt: "Detalle del baño con toallas y luz suave",
    category: "bano",
  },
];

const amplioGallery: GalleryImage[] = [
  {
    src: unsplash("photo-1521401830884-6c03c1c87ebb"),
    alt: "Domo amplio abierto hacia el bosque de Monteverde",
    category: "exterior",
  },
  {
    src: unsplash("photo-1600210492486-724fe5c67fb0"),
    alt: "Espacio interior amplio con luz natural",
    category: "habitacion",
  },
  {
    src: unsplash("photo-1584622650111-993a426fbf0a"),
    alt: "Jacuzzi con vista hacia la vegetación",
    category: "jacuzzi",
  },
  {
    src: unsplash("photo-1556909114-f6e7ad7d3136"),
    alt: "Cocina amplia para compartir comidas",
    category: "cocina",
  },
  {
    src: unsplash("photo-1478131143081-80f7f84ca84d"),
    alt: "Terraza amplia entre árboles y montaña",
    category: "exterior",
  },
  {
    src: unsplash("photo-1600566753190-17f0baa2a6c3"),
    alt: "Baño luminoso con acabados naturales",
    category: "bano",
  },
  {
    src: unsplash("photo-1464822759023-fed622ff2c3b"),
    alt: "Vistas de montaña desde los alrededores del domo",
    category: "vistas",
  },
  {
    src: unsplash("photo-1616594039964-ae9021a400a0"),
    alt: "Zona de descanso con dos ambientes para dormir",
    category: "habitacion",
  },
  {
    src: unsplash("photo-1540555700478-4be289fbecef"),
    alt: "Jacuzzi para disfrutar al aire libre",
    category: "jacuzzi",
  },
  {
    src: unsplash("photo-1511497584788-876760111969"),
    alt: "Bosque nublado de Monteverde al amanecer",
    category: "vistas",
  },
  {
    src: unsplash("photo-1556912173-46c336c7fd55"),
    alt: "Cocina lista para preparar y compartir",
    category: "cocina",
  },
  {
    src: unsplash("photo-1552321554-5fefe8c9ef14"),
    alt: "Baño con agua caliente y luz natural",
    category: "bano",
  },
];

export const domes: Dome[] = [
  {
    slug: "domo-romantico",
    name: "Macas Moon Romantic Dome",
    category: "ESCAPADA PARA DOS",
    tagline: "Privacidad, tranquilidad y conexión en pareja.",
    heroTitle: "Una escapada para dos",
    heroSubtitle:
      "Privacidad, naturaleza y noches bajo las estrellas de Monteverde.",
    capacity: 2,
    beds: 1,
    bathrooms: 1,
    heroImage: unsplash("photo-1449158743715-0a90ebb4d4d6"),
    cardImage: "/assets/domo1/IMG_7055.webp",
    shortDescription:
      "Un refugio íntimo entre las montañas de Monteverde, pensado para desconectar y disfrutar en pareja.",
    longDescription:
      "Un espacio recogido, silencioso y cercano al bosque. El Romantic Dome está pensado para quienes buscan privacidad, noches despacio y la sensación de estar lejos de todo, sin renunciar al confort de un buen refugio.",
    conceptTitle: "Hecho para desconectar juntos",
    highlights: [
      {
        title: "Privacidad para dos",
        text: "Un entorno íntimo, lejos del ruido, para recuperar el ritmo de la pareja.",
      },
      {
        title: "Jacuzzi privado",
        text: "Agua tibia, bosque alrededor y la calma de Monteverde al caer la tarde.",
      },
      {
        title: "Noches rodeadas de naturaleza",
        text: "Estrellas, viento en los árboles y la quietud de la montaña.",
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
    gallery: romanticGallery,
    spaces: [
      {
        id: "habitacion",
        name: "Habitación",
        description:
          "Un cuarto sereno, con cama cómoda y la vegetación como único vecino. Pensado para despertar despacio.",
        image: unsplash("photo-1522771739844-6a9f6d5f14af"),
        layout: "full",
      },
      {
        id: "jacuzzi",
        name: "Jacuzzi",
        description:
          "Un rincón privado para quedarse en silencio, hablar o mirar el bosque mientras el día se apaga.",
        image: unsplash("photo-1540555700478-4be289fbecef"),
        layout: "half",
      },
      {
        id: "cocina",
        name: "Cocina",
        description:
          "Lo esencial para un desayuno largo o una cena sencilla, sin salir del refugio.",
        image: unsplash("photo-1556912173-46c336c7fd55"),
        layout: "half",
      },
      {
        id: "exterior",
        name: "Exterior",
        description:
          "Terraza, aire fresco y la sensación de estar dentro del bosque de Monteverde.",
        image: unsplash("photo-1470770841072-f978cf4d019e"),
        layout: "wide",
      },
      {
        id: "bano",
        name: "Baño",
        description:
          "Un baño privado, cálido y funcional, con agua caliente después del clima de montaña.",
        image: unsplash("photo-1552321554-5fefe8c9ef14"),
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
    name: "Macas Moon Family Dome",
    category: "MÁS ESPACIO PARA COMPARTIR",
    tagline: "Mayor amplitud y comodidad para disfrutar juntos.",
    heroTitle: "Un espacio para compartir",
    heroSubtitle: "Más espacio, más comodidad y Monteverde alrededor.",
    capacity: 4,
    beds: 2,
    bathrooms: 1,
    heroImage: unsplash("photo-1521401830884-6c03c1c87ebb"),
    cardImage: "/assets/domo2/IMG_5495.webp",
    shortDescription:
      "Un espacio amplio entre naturaleza, pensado para disfrutar Monteverde con mayor comodidad.",
    longDescription:
      "Más aire, más luz y más lugar para estar juntos. El Family Dome está pensado para quienes viajan en pareja, con amigos o en un pequeño grupo y quieren la calma de Monteverde sin sentirse justos.",
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
    gallery: amplioGallery,
    spaces: [
      {
        id: "habitacion",
        name: "Habitación",
        description:
          "Un ambiente más amplio para descansar, con dos camas y la sensación de espacio que pide un viaje compartido.",
        image: unsplash("photo-1616594039964-ae9021a400a0"),
        layout: "full",
      },
      {
        id: "jacuzzi",
        name: "Jacuzzi",
        description:
          "Para soltar el día después de caminar, observar aves o simplemente no hacer nada.",
        image: unsplash("photo-1584622650111-993a426fbf0a"),
        layout: "half",
      },
      {
        id: "cocina",
        name: "Cocina",
        description:
          "Un espacio más cómodo para preparar café, desayunos y comidas sin prisa.",
        image: unsplash("photo-1556909114-f6e7ad7d3136"),
        layout: "half",
      },
      {
        id: "exterior",
        name: "Exterior",
        description:
          "Una terraza amplia para estar afuera, escuchar el bosque y ver pasar las nubes de Monteverde.",
        image: unsplash("photo-1478131143081-80f7f84ca84d"),
        layout: "wide",
      },
      {
        id: "bano",
        name: "Baño",
        description:
          "Baño privado, luminoso y práctico, listo después de un día en la montaña.",
        image: unsplash("photo-1600566753190-17f0baa2a6c3"),
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
