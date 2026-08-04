import { createClient } from "@/lib/supabase/server";

export async function getFeaturedVehicles() {
  const supabase = await createClient();

  // Get featured vehicles
  const { data: vehicles, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("featured", true)
    .eq("status", "available");

  if (error) {
    console.error("Vehicles Error:", error);
    return [];
  }

  // Get all vehicle images
  const { data: images, error: imageError } = await supabase
    .from("vehicle_images")
    .select("*");

  if (imageError) {
    console.error("Images Error:", imageError);
  }

  // Merge each vehicle with its first image
  return (vehicles ?? []).map((vehicle) => ({
    ...vehicle,
    image_url:
      images?.find((img) => img.vehicle_id === vehicle.id)?.image_url ??
      "/images/placeholder-car.jpg",
  }));
}

export async function getVehicle(id: string) {
  const supabase = await createClient();

  // Get the vehicle
  const { data: vehicle, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !vehicle) {
    console.error("Vehicle Error:", error);
    return null;
  }

  // Get all images for this vehicle
  const { data: images, error: imageError } = await supabase
    .from("vehicle_images")
    .select("*")
    .eq("vehicle_id", id)
    .order("sort_order", { ascending: true });

  if (imageError) {
    console.error("Vehicle Images Error:", imageError);
  }

  return {
    ...vehicle,
    images:
      images && images.length > 0
        ? images
        : [
            {
              image_url: "/images/placeholder-car.jpg",
            },
          ],
  };
}