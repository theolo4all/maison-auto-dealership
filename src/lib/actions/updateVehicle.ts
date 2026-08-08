"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function updateVehicle(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  if (!id) {
    throw new Error("Vehicle ID is missing.");
  }

  console.log("UPDATING VEHICLE:", {
    id,
    year: Number(formData.get("year")),
    price: Number(formData.get("price")),
    mileage: Number(formData.get("mileage")),
  });

  // ----------------------------------------
  // 1. UPDATE VEHICLE INFORMATION
  // ----------------------------------------

  const { data, error } = await supabase
    .from("vehicles")
    .update({
      year: Number(formData.get("year")),
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      price: Number(formData.get("price")),
      mileage: Number(formData.get("mileage")),

      transmission: formData.get("transmission") as string,
      fuel_type: formData.get("fuel_type") as string,
      engine: formData.get("engine") as string,

      exterior_color: formData.get("exterior_color") as string,
      interior_color: formData.get("interior_color") as string,
      body_style: formData.get("body_style") as string,

      vin: formData.get("vin") as string,

      status: formData.get("status") as string,

      featured: formData.get("featured") === "on",

      description: formData.get("description") as string,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("UPDATE VEHICLE ERROR:", error);
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Vehicle was not updated.");
  }

  console.log("VEHICLE UPDATED SUCCESSFULLY:", data.id);

  // ----------------------------------------
  // 2. GET PHOTOS FROM FORM
  // ----------------------------------------

  const imageFiles = formData
    .getAll("images")
    .filter(
      (file): file is File =>
        file instanceof File && file.size > 0
    );

  console.log("PHOTOS SELECTED:", imageFiles.length);

  // If no photos were selected, we're done.
  if (imageFiles.length === 0) {
    redirect("/admin/vehicles");
  }

  // ----------------------------------------
  // 3. GET CURRENT HIGHEST SORT ORDER
  // ----------------------------------------

  const { data: existingImages, error: existingImagesError } =
    await supabase
      .from("vehicle_images")
      .select("sort_order")
      .eq("vehicle_id", id)
      .order("sort_order", { ascending: false })
      .limit(1);

  if (existingImagesError) {
    console.error(
      "GET EXISTING IMAGES ERROR:",
      existingImagesError
    );

    throw new Error(existingImagesError.message);
  }

  const startingSortOrder =
    existingImages && existingImages.length > 0
      ? (existingImages[0].sort_order ?? 0) + 1
      : 0;

  // ----------------------------------------
  // 4. UPLOAD EACH PHOTO
  // ----------------------------------------

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];

    const extension =
      file.name.split(".").pop()?.toLowerCase() || "jpg";

    const fileName = `${crypto.randomUUID()}.${extension}`;

    const storagePath = `${id}/${fileName}`;

    console.log("UPLOADING PHOTO:", storagePath);

    const { error: uploadError } = await supabase.storage
      .from("vehicle-images")
      .upload(storagePath, file, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("PHOTO UPLOAD ERROR:", uploadError);
      throw new Error(uploadError.message);
    }

    // ----------------------------------------
    // 5. GET PUBLIC URL
    // ----------------------------------------

    const { data: publicUrlData } = supabase.storage
      .from("vehicle-images")
      .getPublicUrl(storagePath);

    const imageUrl = publicUrlData.publicUrl;

    console.log("PHOTO URL:", imageUrl);

    // ----------------------------------------
    // 6. SAVE PHOTO IN vehicle_images
    // ----------------------------------------

    const { error: imageInsertError } = await supabase
      .from("vehicle_images")
      .insert({
        vehicle_id: id,
        image_url: imageUrl,
        sort_order: startingSortOrder + i,
      });

    if (imageInsertError) {
      console.error(
        "VEHICLE IMAGE DATABASE ERROR:",
        imageInsertError
      );

      throw new Error(imageInsertError.message);
    }

    console.log(
      "PHOTO SAVED SUCCESSFULLY:",
      startingSortOrder + i
    );
  }

  console.log("VEHICLE UPDATE COMPLETE:", id);

  redirect("/admin/vehicles");
}