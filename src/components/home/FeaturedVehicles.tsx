import Link from "next/link";
import { getFeaturedVehicles } from "@/lib/actions/vehicles";

export default async function FeaturedVehicles() {
  const vehicles = await getFeaturedVehicles();

  return (
    <section className="bg-zinc-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured Vehicles
          </h2>

          <p className="mt-4 text-gray-400">
            Hand-picked quality vehicles currently available.
          </p>
        </div>

        {vehicles.length === 0 ? (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-12 text-center">
            <h3 className="text-2xl font-semibold text-white">
              No Featured Vehicles Yet
            </h3>

            <p className="mt-3 text-gray-400">
              Featured vehicles will appear here once they are added from the
              admin dashboard.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-yellow-500/50"
              >
                <div className="overflow-hidden">
                  <img
                    src={
                      vehicle.image_url || "/images/placeholder-car.jpg"
                    }
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {vehicle.mileage.toLocaleString()} km
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-bold text-yellow-400">
                      ${Number(vehicle.price).toLocaleString()}
                    </p>

                    <Link
                      href={`/inventory/${vehicle.id}`}
                      className="rounded-md border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/inventory"
            className="inline-block rounded-md bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            View All Inventory
          </Link>
        </div>
      </div>
    </section>
  );
}