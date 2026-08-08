import { getVehicleById } from "@/lib/actions/admin";
import EditVehicleForm from "@/components/admin/EditVehicleForm";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditVehiclePage({ params }: Props) {
  const { id } = await params;

  const vehicle = await getVehicleById(id);

  const supabase = await createClient();

const { data: images, error: imagesError } = await supabase
  .from("vehicle_images")
  .select("id, vehicle_id, image_url, sort_order")
  .eq("vehicle_id", id)
  .order("sort_order", { ascending: true });

if (imagesError) {
  console.error("ERROR LOADING VEHICLE IMAGES:", imagesError);
}

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-2xl text-white">
          Vehicle not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-8 py-12">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-4xl font-bold text-white">
          Edit Vehicle
        </h1>

       <EditVehicleForm
  vehicle={vehicle}
  images={images ?? []}
/>

      </div>
    </main>
  );
}