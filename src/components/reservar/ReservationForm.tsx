"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { domes } from "@/data/domes";
import { submitReservationRequest } from "@/lib/reservations";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import dePhoneLabels from "react-phone-number-input/locale/de";
import enPhoneLabels from "react-phone-number-input/locale/en";
import esPhoneLabels from "react-phone-number-input/locale/es";
import frPhoneLabels from "react-phone-number-input/locale/fr";
import "react-phone-number-input/style.css";

type ReservationFormProps = {
  initialDome?: string;
};

function formatDateInput(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(isoDate: string, days: number) {
  const date = new Date(`${isoDate}T12:00:00`);
  date.setDate(date.getDate() + days);
  return formatDateInput(date);
}

function isoToDisplay(iso: string) {
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

function displayToIso(value: string) {
  const match = value.trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return "";
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return "";
  }
  return formatDateInput(date);
}

function maskDate(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  const day = digits.slice(0, 2);
  const month = digits.slice(2, 4);
  const year = digits.slice(4, 8);
  if (digits.length <= 2) return day;
  if (digits.length <= 4) return `${day}/${month}`;
  return `${day}/${month}/${year}`;
}

function DateField({
  label,
  value,
  min,
  fieldClass,
  required,
  onChange,
}: {
  label: string;
  value: string;
  min: string;
  fieldClass: string;
  required?: boolean;
  onChange: (iso: string) => void;
}) {
  const [text, setText] = useState(isoToDisplay(value));

  useEffect(() => {
    setText(isoToDisplay(value));
  }, [value]);

  function commit(nextText: string) {
    const iso = displayToIso(nextText);
    if (!iso || iso < min) {
      setText(isoToDisplay(value));
      return;
    }
    onChange(iso);
  }

  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <span className={cn("relative block", fieldClass, "pr-12 focus-within:border-olive-500")}>
        <input
          required={required}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="dd/mm/yyyy"
          value={text}
          onChange={(event) => setText(maskDate(event.target.value))}
          onBlur={() => commit(text)}
          className="date-field-input w-full appearance-none border-0 bg-transparent p-0 shadow-none outline-none ring-0"
        />
        <Calendar
          className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-ink"
          strokeWidth={1.7}
          aria-hidden="true"
        />
        <input
          type="date"
          min={min}
          value={value}
          tabIndex={-1}
          aria-hidden="true"
          onChange={(event) => onChange(event.target.value)}
          className="absolute top-1/2 right-3 h-7 w-7 -translate-y-1/2 cursor-pointer opacity-0"
        />
      </span>
    </label>
  );
}

export function ReservationForm({ initialDome }: ReservationFormProps) {
  const { t, language } = useLanguage();
  const selectedDefault = domes.some((dome) => dome.slug === initialDome)
    ? initialDome
    : "";
  const domeLocked = Boolean(selectedDefault);

  const [domeSlug, setDomeSlug] = useState(selectedDefault ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  const selectedDome = useMemo(
    () => domes.find((dome) => dome.slug === domeSlug),
    [domeSlug],
  );

  const maxGuests = selectedDome?.capacity ?? 4;
  const today = formatDateInput(new Date());
  const minCheckIn = addDays(today, 1);
  const minCheckOut = checkIn ? addDays(checkIn, 1) : addDays(minCheckIn, 1);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (checkIn < minCheckIn || checkOut <= checkIn) return;
    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError(t("Ingresa un número de teléfono válido."));
      return;
    }
    const result = submitReservationRequest({
      domeSlug,
      checkIn,
      checkOut,
      guests: Number(guests),
      name,
      email,
      phone,
      message,
    }, t, language);
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
        {domeLocked && selectedDome ? (
          <input
            readOnly
            value={t(selectedDome.name)}
            className={`${fieldClass} cursor-default bg-sand-50`}
            aria-readonly="true"
          />
        ) : (
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
        )}
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <DateField
          label={t("Fecha de llegada")}
          value={checkIn}
          min={minCheckIn}
          required
          fieldClass={fieldClass}
          onChange={(nextCheckIn) => {
            setCheckIn(nextCheckIn);
            if (checkOut && nextCheckIn && checkOut <= nextCheckIn) {
              setCheckOut(addDays(nextCheckIn, 1));
            }
          }}
        />
        <DateField
          label={t("Fecha de salida")}
          value={checkOut}
          min={minCheckOut}
          required
          fieldClass={fieldClass}
          onChange={setCheckOut}
        />
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
        <div>
          <span className="text-sm font-medium text-ink">{t("Teléfono")}</span>
          <PhoneInput
            international
            defaultCountry="CR"
            countryCallingCodeEditable={false}
            flags={flags}
            labels={
              language === "en"
                ? enPhoneLabels
                : language === "de"
                  ? dePhoneLabels
                  : language === "fr"
                    ? frPhoneLabels
                    : esPhoneLabels
            }
            value={phone}
            onChange={(value) => {
              setPhone(value);
              if (phoneError) setPhoneError("");
            }}
            className={cn("phone-input", phoneError && "phone-input-error")}
            numberInputProps={{
              name: "phone",
              autoComplete: "tel",
              inputMode: "tel",
              "aria-invalid": Boolean(phoneError),
              "aria-describedby": phoneError ? "reservation-phone-error" : undefined,
            }}
          />
          {phoneError ? (
            <span id="reservation-phone-error" className="mt-1.5 block text-xs text-olive-800">
              {phoneError}
            </span>
          ) : null}
        </div>
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
