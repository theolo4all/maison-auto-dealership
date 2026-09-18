"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const [error, setError] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResetMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  async function handleForgotPassword() {
    setError("");
    setResetMessage("");

    if (!email) {
      setError("Please enter your email address first.");
      return;
    }

    setResetLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://maisonauto.ca/admin/reset-password",
    });

    setResetLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setResetMessage(
      "Password reset email sent. Please check your inbox."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-xl bg-zinc-900 p-8 shadow-xl">

        <h1 className="mb-2 text-3xl font-bold text-white">
          Admin Login
        </h1>

        <p className="mb-8 text-gray-400">
          Maison Auto Dealership
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-yellow-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-yellow-500"
            required
          />

          <div className="text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              disabled={resetLoading}
              className="text-sm text-yellow-500 hover:text-yellow-400 disabled:opacity-50"
            >
              {resetLoading
                ? "Sending reset email..."
                : "Forgot Password?"}
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {resetMessage && (
            <p className="text-sm text-green-400">
              {resetMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

      </div>
    </main>
  );
}