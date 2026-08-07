import Link from "next/link";
import { getVehicles } from "@/lib/actions/admin";
import VehicleTable from "@/components/admin/VehicleTable";

export default async function VehiclesPage() {
  const vehicles = await getVehicles();

  return (
    <main className="min-h-screen bg-black px-8 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">
            Vehicles
          </h1>

          <Link
            href="/admin/vehicles/new"
            className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Add Vehicle
          </Link>
        </div>

        <VehicleTable vehicles={vehicles} />
      </div>
    </main>
  );
}