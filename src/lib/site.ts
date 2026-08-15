export const site = {
  name: "Macas Moon Glamping",
  shortName: "Macas Moon",
  location: {
    area: "Monteverde",
    province: "Puntarenas",
    country: "Costa Rica",
    mapsUrl: "https://maps.google.com/?q=Monteverde,+Puntarenas,+Costa+Rica",
  },
  contact: {
    whatsappUrl:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/50600000000",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@macasmoon.com",
    instagram: "https://instagram.com/macasmoon",
    facebook: "https://facebook.com/macasmoon",
  },
  checkIn: "Desde las 3:00 p. m.",
  checkOut: "Hasta las 11:00 a. m.",
  arrival: "Check-in autónomo",
  logo: "/assets/Macamoon_logo_transparent_trimmed.png",
} as const;
