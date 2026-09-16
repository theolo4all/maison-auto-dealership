"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" && session) {
        setReady(true);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setReady(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleUpdatePassword(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Password updated successfully.");

    await supabase.auth.signOut();

    setTimeout(() => {
      router.push("/admin/login");
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl bg-zinc-900 p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-white">
          Reset Admin Password
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Create a new password for your Maison Auto admin account.
        </p>

        {!ready ? (
          <div className="mt-6 rounded-lg bg-zinc-800 p-4 text-sm text-zinc-300">
            Waiting for password recovery session...
          </div>
        ) : (
          <form onSubmit={handleUpdatePassword} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                New Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-yellow-500"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-yellow-500"
                placeholder="Confirm new password"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-900/30 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {message && (
              <div className="rounded-lg bg-green-900/30 p-3 text-sm text-green-400">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-yellow-500 px-4 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading ? "Updating Password..." : "Update Password"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}