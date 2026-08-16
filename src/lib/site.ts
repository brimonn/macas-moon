const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/50684915764";
const whatsappSeparator = whatsappUrl.includes("?") ? "&" : "?";
const reservationMessage =
  "Hola, quisiera consultar la disponibilidad en Macas Moon.";

export const site = {
  name: "Macas Moon Glamping",
  shortName: "Macas Moon",
  location: {
    area: "Monteverde",
    province: "Puntarenas",
    country: "Costa Rica",
    mapsUrl:
      "https://www.google.com/maps/place/Macas+Moon+Glamping/@10.3342648,-84.8540335,17z/data=!4m6!3m5!1s0x8fa01b00010bd2c1:0x46f1f988a6642100!8m2!3d10.3342648!4d-84.8540335!16s%2Fg%2F11y367hsc5",
  },
  contact: {
    whatsappUrl,
    reservationWhatsappUrl: `${whatsappUrl}${whatsappSeparator}text=${encodeURIComponent(reservationMessage)}`,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@macasmoon.com",
    instagram: "https://instagram.com/macasmoon",
    facebook: "https://facebook.com/macasmoon",
  },
  checkIn: "Desde las 3:00 p. m.",
  checkOut: "Hasta las 11:00 a. m.",
  arrival: "Check-in autónomo",
  logo: "/assets/Macamoon_logo_transparent_trimmed.webp",
} as const;
