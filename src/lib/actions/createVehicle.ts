"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createVehicle(formData: FormData) {
  const supabase = await createClient();

  // -----------------------
  // Insert Vehicle
  // -----------------------

  const { data: vehicle, error } = await supabase
    .from("vehicles")
    .insert({
      year: Number(formData.get("year")),
      make: formData.get("make"),
      model: formData.get("model"),
      price: Number(formData.get("price")),
      mileage: Number(formData.get("mileage")),

      transmission: formData.get("transmission"),
      fuel_type: formData.get("fuel_type"),
      engine: formData.get("engine"),

      exterior_color: formData.get("exterior_color"),
      interior_color: formData.get("interior_color"),
      body_style: formData.get("body_style"),

      vin: formData.get("vin"),

      description: formData.get("description"),

      featured: formData.get("featured") === "on",

      status: formData.get("status"),
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Unable to create vehicle.");
  }

  // -----------------------
  // Upload Images
  // -----------------------

  const files = formData.getAll("images") as File[];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file || file.size === 0) continue;

    const filename = `${vehicle.id}-${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("vehicles")
      .upload(filename, file);

if (uploadError) {
  console.log("========== STORAGE ERROR ==========");
  console.dir(uploadError, { depth: null });
  console.log("===================================");

  throw new Error(uploadError.message);
}

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("vehicles")
      .getPublicUrl(filename);

    await supabase.from("vehicle_images").insert({
      vehicle_id: vehicle.id,
      image_url: publicUrl,
      sort_order: i,
    });
  }

  redirect("/admin/vehicles");
}