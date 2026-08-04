"use client";

import { useState } from "react";
import { submitInquiry } from "@/lib/actions/contact";

type Props = {
  vehicleId: string;
  vehicleName: string;
};

export default function VehicleInquiryForm({
  vehicleId,
  vehicleName,
}: Props) {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    try {
      await submitInquiry(formData);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="mt-16 rounded-2xl bg-zinc-900 p-8">
      <h2 className="text-3xl font-bold text-white">
        Interested in this vehicle?
      </h2>

      <p className="mt-2 text-gray-400">
        Send us an inquiry about the{" "}
        <span className="font-semibold text-yellow-400">
          {vehicleName}
        </span>
        .
      </p>

      {success ? (
        <div className="mt-8 rounded-lg border border-green-500 bg-green-900/20 p-5">
          <p className="font-semibold text-green-400">
            Thank you!
          </p>

          <p className="mt-1 text-gray-300">
            Your inquiry has been sent. We'll contact you shortly.
          </p>
        </div>
      ) : (
        <form action={handleSubmit} className="mt-8 space-y-5">
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

          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="first_name"
              required
              placeholder="First Name"
              className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
            />

            <input
              name="last_name"
              required
              placeholder="Last Name"
              className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          <textarea
            name="message"
            rows={6}
            placeholder={`Hi, I'm interested in the ${vehicleName}. Please contact me.`}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-yellow-400"
          />

          <button
            type="submit"
            className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Send Inquiry
          </button>
        </form>
      )}
    </section>
  );
}