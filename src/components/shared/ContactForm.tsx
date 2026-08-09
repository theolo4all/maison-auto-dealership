"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/lib/actions/contact";

const initialState: InquiryState = {
  success: false,
  error: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitInquiry,
    initialState
  );

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-500/50 bg-green-900/20 p-8 text-center">
        <div className="mb-3 text-4xl">✓</div>

        <h2 className="text-2xl font-bold text-green-400">
          Message Sent Successfully!
        </h2>

        <p className="mt-3 text-gray-300">
          Thank you for contacting Maison Auto Dealership.
          We&apos;ll get back to you shortly.
        </p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            First Name
          </label>

          <input
            id="first_name"
            name="first_name"
            required
            placeholder="First Name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label
            htmlFor="last_name"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Last Name
          </label>

          <input
            id="last_name"
            name="last_name"
            required
            placeholder="Last Name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          required
          placeholder="How can we help?"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Enter your message..."
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
        />
      </div>

      {state.error && (
        <div className="rounded-lg border border-red-500/50 bg-red-900/20 p-4">
          <p className="font-medium text-red-400">
            {state.error}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}