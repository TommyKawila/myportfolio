import { logoutAction } from "@/app/actions/auth";

export default function SignOutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="inline-flex h-10 items-center rounded-lg border border-slate-700 px-4 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-900"
      >
        Sign out
      </button>
    </form>
  );
}
