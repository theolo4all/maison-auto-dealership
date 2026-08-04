import { getFeaturedVehicles } from "@/lib/actions/vehicles";

export default async function FeaturedVehicles() {
  const vehicles = await getFeaturedVehicles();

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {vehicles.map((vehicle) => (

              <div
                key={vehicle.id}
                className="overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition hover:scale-[1.02]"
              >

                {vehicle.image_url ? (
  <img
  src={vehicle.image_url || "/images/placeholder-car.jpg"}
  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
  className="h-56 w-full object-cover"
/>
) : (
<img
  src={vehicle.image_url || "/images/placeholder-car.jpg"}
  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
  className="h-56 w-full object-cover"
/>
)}

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-white">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {vehicle.mileage.toLocaleString()} km
                  </p>

                  <p className="mt-4 text-3xl font-bold text-yellow-400">
                    ${Number(vehicle.price).toLocaleString()}
                  </p>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}