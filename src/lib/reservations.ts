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
};

export async function submitReservationRequest(
  payload: ReservationRequest,
): Promise<ReservationResult> {
  // Futuro: Server Action / API → Supabase → correo de confirmación.
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { ok: true };
}
