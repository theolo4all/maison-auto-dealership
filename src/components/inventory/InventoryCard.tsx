import Link from "next/link";

type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  mileage: number;
  price: number;
  image_url: string;
};

export default function InventoryCard({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition hover:scale-[1.02]">

      <img
        src={vehicle.image_url}
        alt={`${vehicle.year} ${vehicle.make}`}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold text-white">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>

        <p className="mt-2 text-gray-400">
          {vehicle.mileage.toLocaleString()} km
        </p>

        <p className="mt-4 text-3xl font-bold text-yellow-400">
          ${Number(vehicle.price).toLocaleString()}
        </p>

       <Link
  href={`/inventory/${vehicle.id}`}
  className="mt-6 block rounded-lg bg-yellow-500 py-3 text-center font-semibold text-black transition hover:bg-yellow-400"
>
  View Details
</Link>

      </div>
    </div>
  );
}