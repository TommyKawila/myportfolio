"use server";

import { createContactMessage } from "@/services/supabaseService";

type ContactState = { ok: boolean; error: string };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "All fields are required." };
  }

  const result = await createContactMessage({ name, email, message });

  if (result.error) {
    return { ok: false, error: result.error };
  }

  return { ok: true, error: "" };
}
