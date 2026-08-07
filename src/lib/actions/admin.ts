import { createClient } from "@/lib/supabase/server";

export async function getVehicles() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  const { data: images } = await supabase
    .from("vehicle_images")
    .select("*");

  return (data ?? []).map((vehicle) => ({
    ...vehicle,
    image_url:
      images?.find((img) => img.vehicle_id === vehicle.id)?.image_url ??
      "/images/placeholder-car.jpg",
  }));
}

export async function getVehicleById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}