"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function updateVehicle(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  const { error } = await supabase
    .from("vehicles")
    .update({
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

      status: formData.get("status"),

      featured: formData.get("featured") === "on",

      description: formData.get("description"),
    })
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Unable to update vehicle.");
  }

  redirect("/admin/vehicles");
}