import Link from "next/link";
import { Car, MessageSquare, PlusCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="mb-12">
          <h1 className="text-5xl font-bold">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-gray-400">
            Welcome back to Maison Auto Dealership.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/admin/vehicles"
            className="rounded-xl bg-zinc-900 p-8 transition hover:bg-zinc-800"
          >
            <Car className="mb-4 h-10 w-10 text-yellow-500" />

            <h2 className="text-2xl font-bold">
              Vehicles
            </h2>

            <p className="mt-2 text-gray-400">
              Manage your inventory.
            </p>
          </Link>

          <Link
            href="/admin/inquiries"
            className="rounded-xl bg-zinc-900 p-8 transition hover:bg-zinc-800"
          >
            <MessageSquare className="mb-4 h-10 w-10 text-yellow-500" />

            <h2 className="text-2xl font-bold">
              Inquiries
            </h2>

            <p className="mt-2 text-gray-400">
              View customer inquiries.
            </p>
          </Link>

          <Link
            href="/admin/vehicles/new"
            className="rounded-xl bg-yellow-500 p-8 text-black transition hover:bg-yellow-400"
          >
            <PlusCircle className="mb-4 h-10 w-10" />

            <h2 className="text-2xl font-bold">
              Add Vehicle
            </h2>

            <p className="mt-2">
              Create a new listing.
            </p>
          </Link>

        </div>

      </div>

    </main>
  );
}