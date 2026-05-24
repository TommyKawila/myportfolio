"use server";

import { redirect } from "next/navigation";
import { signIn, signOut, signUp } from "@/services/supabaseService";
import type { AuthFormState } from "@/types/auth";

export async function loginAction(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirectTo") ?? "/dashboard");

  if (!email || !password) {
    return { error: "Email and password are required.", success: "" };
  }

  const result = await signIn(email, password);

  if (result.error) {
    console.error("[loginAction]", result.error);
    return { error: result.error, success: "", debug: result.error };
  }

  redirect(redirectTo);
}

export async function registerAction(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email and password are required.", success: "" };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters.", success: "" };
  }

  const result = await signUp(email, password);

  if (result.data === null) {
    console.error("[registerAction] Supabase rejected sign-up:", result.error);
    return { error: result.error, success: "", debug: result.error };
  }

  const success = result.hint ?? "Account created. You can sign in now.";

  return { error: "", success, debug: "" };
}

export async function logoutAction(): Promise<void> {
  await signOut();
  redirect("/login");
}
