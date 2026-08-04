import { getInventory } from "@/lib/actions/inventory";
import InventoryCard from "@/components/inventory/InventoryCard";

type Props = {
  searchParams: Promise<{
    search?: string;
    make?: string;
  }>;
};

export default async function InventoryPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const vehicles = await getInventory({
    search: params.search,
    make: params.make,
  });

  return (
    <main className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-10 text-center text-5xl font-bold text-white">
          Inventory
        </h1>

        {/* Search & Filters */}

        <form
          className="mb-12 flex flex-col gap-4 md:flex-row"
          action="/inventory"
        >
          <input
            type="text"
            name="search"
            placeholder="Search by make or model..."
            defaultValue={params.search ?? ""}
            className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-400"
          />

          <select
            name="make"
            defaultValue={params.make ?? ""}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
          >
            <option value="">All Makes</option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Audi">Audi</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Kia">Kia</option>
            <option value="Mazda">Mazda</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Nissan">Nissan</option>
            <option value="Chevrolet">Chevrolet</option>
          </select>

          <button
            type="submit"
            className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Search
          </button>
        </form>

        {vehicles.length === 0 ? (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-12 text-center">
            <h2 className="text-2xl font-semibold text-white">
              No vehicles found
            </h2>

            <p className="mt-3 text-gray-400">
              Try changing your filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <InventoryCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}