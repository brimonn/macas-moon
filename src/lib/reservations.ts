import { domes } from "@/data/domes";
import { site } from "@/lib/site";

export type ReservationRequest = {
  domeSlug: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ReservationResult = {
  ok: true;
  whatsappUrl: string;
};

export function submitReservationRequest(
  payload: ReservationRequest,
): ReservationResult {
  const selectedDome = domes.find((dome) => dome.slug === payload.domeSlug);
  const lines = [
    "Hola, quisiera consultar la disponibilidad en Macas Moon.",
    "",
    `Domo: ${selectedDome?.name ?? payload.domeSlug}`,
    `Llegada: ${payload.checkIn}`,
    `Salida: ${payload.checkOut}`,
    `Huéspedes: ${payload.guests}`,
    "",
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    `Teléfono: ${payload.phone}`,
    payload.message ? `Mensaje: ${payload.message}` : "",
  ].filter(Boolean);

  const separator = site.contact.whatsappUrl.includes("?") ? "&" : "?";
  const whatsappUrl = `${site.contact.whatsappUrl}${separator}text=${encodeURIComponent(
    lines.join("\n"),
  )}`;

  return { ok: true, whatsappUrl };
}
