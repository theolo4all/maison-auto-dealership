import { getVehicle } from "@/lib/actions/vehicles";
import VehicleGallery from "@/components/inventory/VehicleGallery";
import Spec from "@/components/inventory/Spec";
import VehicleInquiryForm from "@/components/inventory/VehicleInquiryForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VehicleDetails({ params }: Props) {
  const { id } = await params;

  const vehicle = await getVehicle(id);

  if (!vehicle) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black">
        <h1 className="text-3xl font-bold text-white">
          Vehicle not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <VehicleGallery
            images={vehicle.images}
            vehicleName={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          />

          {/* Vehicle Info */}
          <div>
            <h1 className="text-5xl font-bold text-white">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>

            <p className="mt-6 text-5xl font-bold text-yellow-400">
              ${Number(vehicle.price).toLocaleString()}
            </p>

            {/* Specifications */}
            <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Vehicle Specifications
              </h2>

              <div className="grid grid-cols-2 gap-5">
                <Spec
                  label="Mileage"
                  value={`${vehicle.mileage.toLocaleString()} km`}
                />

                <Spec
                  label="Transmission"
                  value={vehicle.transmission ?? "N/A"}
                />

                <Spec
                  label="Fuel Type"
                  value={vehicle.fuel_type ?? "N/A"}
                />

                <Spec
                  label="Engine"
                  value={vehicle.engine ?? "N/A"}
                />

                <Spec
                  label="Exterior"
                  value={vehicle.exterior_color ?? "N/A"}
                />

                <Spec
                  label="Interior"
                  value={vehicle.interior_color ?? "N/A"}
                />

                <Spec
                  label="Body Style"
                  value={vehicle.body_style ?? "N/A"}
                />

                <Spec
                  label="VIN"
                  value={vehicle.vin ?? "N/A"}
                />
              </div>
            </div>

           {/* Description */}
<div className="mt-10">
  <h2 className="mb-4 text-2xl font-bold text-white">
    Description
  </h2>

  <p className="leading-8 text-gray-400">
    {vehicle.description}
  </p>
</div>

<VehicleInquiryForm
  vehicleId={vehicle.id}
  vehicleName={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
/>

</div>
        </div>
      </div>
    </main>
  );
}