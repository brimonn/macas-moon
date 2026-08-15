"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { domes } from "@/data/domes";
import { submitReservationRequest } from "@/lib/reservations";

type ReservationFormProps = {
  initialDome?: string;
};

export function ReservationForm({ initialDome }: ReservationFormProps) {
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
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const selectedDome = useMemo(
    () => domes.find((dome) => dome.slug === domeSlug),
    [domeSlug],
  );

  const maxGuests = selectedDome?.capacity ?? 4;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    await submitReservationRequest({
      domeSlug,
      checkIn,
      checkOut,
      guests: Number(guests),
      name,
      email,
      phone,
      message,
    });
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[24px] border border-border-soft bg-olive-50 px-6 py-10 text-center sm:px-10">
        <p className="heading-card text-3xl text-ink">Solicitud enviada correctamente.</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Recibimos tu solicitud. Pronto te escribiremos para confirmar disponibilidad y continuar
          con la reserva.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-border bg-warm-white px-4 py-3 text-ink outline-none transition-colors duration-200 focus:border-olive-500";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-ink">Domo seleccionado</span>
        <select
          required
          value={domeSlug}
          onChange={(event) => setDomeSlug(event.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            Elige un domo
          </option>
          {domes.map((dome) => (
            <option key={dome.slug} value={dome.slug}>
              {dome.name}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">Fecha de llegada</span>
          <input
            required
            type="date"
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Fecha de salida</span>
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
        <span className="text-sm font-medium text-ink">Huéspedes</span>
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
          <span className="mt-1 block text-xs text-muted">Máximo {maxGuests} en este domo.</span>
        ) : null}
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">Nombre completo</span>
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
          <span className="text-sm font-medium text-ink">Correo electrónico</span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Teléfono</span>
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
        <span className="text-sm font-medium text-ink">Mensaje adicional</span>
        <textarea
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </label>

      <p className="rounded-2xl bg-sand-50 px-4 py-3 text-sm leading-relaxed text-muted">
        Esta solicitud no confirma automáticamente tu reserva. Nos pondremos en contacto contigo
        para verificar disponibilidad y continuar con el proceso.
      </p>

      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
        {sending ? "Enviando..." : "Enviar solicitud de reserva"}
      </Button>
    </form>
  );
}
