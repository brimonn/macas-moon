"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { domes } from "@/data/domes";
import { submitReservationRequest } from "@/lib/reservations";
import { useLanguage } from "@/i18n/LanguageProvider";

type ReservationFormProps = {
  initialDome?: string;
};

export function ReservationForm({ initialDome }: ReservationFormProps) {
  const { t } = useLanguage();
  const selectedDefault = domes.some((dome) => dome.slug === initialDome)
    ? initialDome
    : "";

  const [domeSlug, setDomeSlug] = useState(selectedDefault ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  const selectedDome = useMemo(
    () => domes.find((dome) => dome.slug === domeSlug),
    [domeSlug],
  );

  const maxGuests = selectedDome?.capacity ?? 4;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = submitReservationRequest({
      domeSlug,
      checkIn,
      checkOut,
      guests: Number(guests),
      name,
      email,
      phone,
      message,
    }, t);
    setSubmittedUrl(result.whatsappUrl);
    window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
  }

  if (submittedUrl) {
    return (
      <div className="rounded-[24px] border border-border-soft bg-olive-50 px-6 py-10 text-center sm:px-10">
        <p className="heading-card text-3xl text-ink">{t("Continúa tu solicitud en WhatsApp.")}</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          {t("Abrimos una conversación con los datos que completaste. Revisa el mensaje y presiona enviar para solicitar disponibilidad.")}
        </p>
        <Button href={submittedUrl} size="lg" className="mt-6">
          Abrir WhatsApp nuevamente
        </Button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-border bg-warm-white px-4 py-3 text-ink outline-none transition-colors duration-200 focus:border-olive-500";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-ink">{t("Domo seleccionado")}</span>
        <select
          required
          value={domeSlug}
          onChange={(event) => setDomeSlug(event.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            {t("Elige un domo")}
          </option>
          {domes.map((dome) => (
            <option key={dome.slug} value={dome.slug}>
              {t(dome.name)}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">{t("Fecha de llegada")}</span>
          <input
            required
            type="date"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">{t("Fecha de salida")}</span>
          <input
            required
            type="date"
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-ink">{t("Huéspedes")}</span>
        <input
          required
          type="number"
          min={1}
          max={maxGuests}
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          className={fieldClass}
        />
        {selectedDome ? (
          <span className="mt-1 block text-xs text-muted">{t("Máximo {count} en este domo.", { count: maxGuests })}</span>
        ) : null}
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">{t("Nombre completo")}</span>
        <input
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">{t("Correo electrónico")}</span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">{t("Teléfono")}</span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-ink">{t("Mensaje adicional")}</span>
        <textarea
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </label>

      <p className="rounded-2xl bg-sand-50 px-4 py-3 text-sm leading-relaxed text-muted">
        {t("Esta solicitud no confirma automáticamente tu reserva. Nos pondremos en contacto contigo para verificar disponibilidad y continuar con el proceso.")}
      </p>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Enviar solicitud por WhatsApp
      </Button>
    </form>
  );
}
