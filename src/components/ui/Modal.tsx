"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg" | "full";
};

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
  size = "lg",
}: ModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-ink/45 transition-opacity duration-300"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-10 flex max-h-[92svh] w-full flex-col overflow-hidden bg-warm-white shadow-soft duration-300",
          size === "full" && "h-[100svh] max-h-[100svh] rounded-none sm:h-auto sm:max-h-[92svh] sm:rounded-[24px]",
          size === "lg" && "rounded-t-[24px] sm:max-w-4xl sm:rounded-[24px]",
          size === "md" && "rounded-t-[24px] sm:max-w-xl sm:rounded-[24px]",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border-soft px-5 py-4 sm:px-8">
          <h2 id={titleId} className="heading-card text-2xl text-ink">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-sand-100"
            aria-label="Cerrar modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">{children}</div>
      </div>
    </div>
  );
}
