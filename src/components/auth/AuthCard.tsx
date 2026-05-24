"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import BrandIcon from "@/components/ui/BrandIcon";
import {
  loginAction,
  registerAction,
} from "@/app/actions/auth";
import { authInitialState, type AuthFormState } from "@/types/auth";

type AuthCardProps = {
  redirectTo: string;
};

const inputClass =
  "mt-1 block h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none ring-zinc-900/5 focus:ring-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50";

function StatusMessage({ state }: { state: AuthFormState }) {
  return (
    <div className="mt-4 min-h-5" aria-live="polite">
      {state.error && (
        <div role="alert" className="space-y-1">
          <p className="text-sm font-medium text-red-600 dark:text-red-400">
            {state.error}
          </p>
          {state.debug && state.debug !== state.error && (
            <p className="break-all text-xs text-red-500/80 dark:text-red-400/80">
              {state.debug}
            </p>
          )}
        </div>
      )}
      {!state.error && state.success && (
        <p role="status" className="text-sm text-emerald-600 dark:text-emerald-400">
          {state.success}
        </p>
      )}
    </div>
  );
}

export default function AuthCard({ redirectTo }: AuthCardProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loginState, loginFormAction, loginPending] = useActionState(
    loginAction,
    authInitialState
  );
  const [registerState, registerFormAction, registerPending] = useActionState(
    registerAction,
    authInitialState
  );

  const isLogin = mode === "login";
  const state = isLogin ? loginState : registerState;
  const pending = isLogin ? loginPending : registerPending;

  useEffect(() => {
    if (state.error) {
      console.error(`[AuthCard] ${isLogin ? "login" : "register"} error:`, state.error);
    }
  }, [state.error, isLogin]);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex h-10 w-10 items-center justify-center">
        <BrandIcon />
      </div>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {isLogin ? "Welcome back" : "Create account"}
      </h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {isLogin
          ? "Sign in to access your dashboard."
          : "Register to manage your portfolio."}
      </p>

      <div
        className="mt-6 grid h-10 grid-cols-2 gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-900"
        role="tablist"
        aria-label="Authentication mode"
      >
        <button
          type="button"
          role="tab"
          aria-selected={isLogin}
          onClick={() => setMode("login")}
          className={`h-8 rounded-md text-sm font-medium transition-colors ${
            isLogin
              ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-950 dark:text-zinc-50"
              : "text-zinc-600 dark:text-zinc-400"
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={!isLogin}
          onClick={() => setMode("register")}
          className={`h-8 rounded-md text-sm font-medium transition-colors ${
            !isLogin
              ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-950 dark:text-zinc-50"
              : "text-zinc-600 dark:text-zinc-400"
          }`}
        >
          Register
        </button>
      </div>

      <div className="mt-6 min-h-[280px]">
        {isLogin ? (
          <form action={loginFormAction} className="space-y-4">
            <input type="hidden" name="redirectTo" value={redirectTo} />
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Password
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {pending ? "Signing in…" : "Sign in"}
            </button>
            <StatusMessage state={state} />
          </form>
        ) : (
          <form action={registerFormAction} className="space-y-4">
            <div>
              <label
                htmlFor="register-email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="register-password"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Password
              </label>
              <input
                id="register-password"
                name="password"
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {pending ? "Creating account…" : "Create account"}
            </button>
            <StatusMessage state={state} />
          </form>
        )}
      </div>

      <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <Link
          href="/"
          className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          Back to home
        </Link>
      </p>
    </div>
  );
}
