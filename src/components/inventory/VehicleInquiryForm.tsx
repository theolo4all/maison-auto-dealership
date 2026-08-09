"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/lib/actions/contact";

type Props = {
  vehicleId: string;
  vehicleName: string;
};

const initialState: InquiryState = {
  success: false,
  error: "",
};

export default function VehicleInquiryForm({
  vehicleId,
  vehicleName,
}: Props) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState
  );

  return (
    <section className="mt-16 rounded-2xl bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        Interested in this vehicle?
      </h2>

      <p className="mt-2 text-gray-400">
        Send us an inquiry about the{" "}
        <span className="font-semibold text-yellow-400">
          {vehicleName}
        </span>
        .
      </p>

      {state.success ? (
        <div className="mt-8 rounded-lg border border-green-500 bg-green-900/20 p-5">
          <p className="font-semibold text-green-400">
            Thank you!
          </p>

          <p className="mt-1 text-gray-300">
            Your inquiry has been sent successfully. We'll contact you
            shortly.
          </p>
        </div>
      ) : (
        <form action={formAction} className="mt-8 space-y-5">
          {/* Vehicle information */}
          <input
            type="hidden"
            name="vehicle_id"
            value={vehicleId}
          />

          <input
            type="hidden"
            name="subject"
            value={`Inquiry about ${vehicleName}`}
          />

          {/* First / Last Name */}
          <div className="grid gap-5 md:grid-cols-2">
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

          {/* Email / Phone */}
          <div className="grid gap-5 md:grid-cols-2">
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
                placeholder="Phone Number"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
              />
            </div>
          </div>

          {/* Message */}
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
              rows={6}
              placeholder={`Hi, I'm interested in the ${vehicleName}. Please contact me.`}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          {/* Error */}
          {state.error && (
            <div className="rounded-lg border border-red-500 bg-red-900/20 p-4">
              <p className="text-red-400">
                {state.error}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      )}
    </section>
  );
}