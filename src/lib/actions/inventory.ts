import { createClient } from "@/lib/supabase/server";

type Filters = {
  search?: string;
  make?: string;
};

export async function getInventory(filters?: Filters) {
  const supabase = await createClient();

  let query = supabase
    .from("vehicles")
    .select("*")
    .eq("status", "available")
    .order("created_at", { ascending: false });

  if (filters?.search) {
    query = query.or(
      `make.ilike.%${filters.search}%,model.ilike.%${filters.search}%`
    );
  }

  if (filters?.make) {
    query = query.eq("make", filters.make);
  }

  const { data: vehicles, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  const { data: images } = await supabase
    .from("vehicle_images")
    .select("*");

  return (vehicles ?? []).map((vehicle) => ({
    ...vehicle,
    image_url:
      images?.find((img) => img.vehicle_id === vehicle.id)?.image_url ??
      "/images/placeholder-car.jpg",
  }));
}