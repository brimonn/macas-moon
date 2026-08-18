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

type Translate = (text: string) => string;

export function submitReservationRequest(
  payload: ReservationRequest,
  t: Translate = (text) => text,
): ReservationResult {
  const selectedDome = domes.find((dome) => dome.slug === payload.domeSlug);
  const lines = [
    t("Hola, quisiera consultar la disponibilidad en Macas Moon."),
    "",
    `${t("Domo")}: ${selectedDome ? t(selectedDome.name) : payload.domeSlug}`,
    `${t("Llegada")}: ${payload.checkIn}`,
    `${t("Salida")}: ${payload.checkOut}`,
    `${t("Huéspedes")}: ${payload.guests}`,
    "",
    `${t("Nombre")}: ${payload.name}`,
    `${t("Correo")}: ${payload.email}`,
    `${t("Teléfono")}: ${payload.phone}`,
    payload.message ? `${t("Mensaje")}: ${payload.message}` : "",
  ].filter(Boolean);

  const separator = site.contact.whatsappUrl.includes("?") ? "&" : "?";
  const whatsappUrl = `${site.contact.whatsappUrl}${separator}text=${encodeURIComponent(
    lines.join("\n"),
  )}`;

  return { ok: true, whatsappUrl };
}
