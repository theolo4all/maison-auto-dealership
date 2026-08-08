"use server";

import { createClient } from "@/lib/supabase/server";

export async function deleteVehicleImage(imageId: string) {
  const supabase = await createClient();

  // 1. Get the image record
  const { data: image, error: fetchError } = await supabase
    .from("vehicle_images")
    .select("id, image_url")
    .eq("id", imageId)
    .single();

  if (fetchError || !image) {
    throw new Error("Vehicle image not found.");
  }

  console.log("IMAGE URL:", image.image_url);

  // 2. Extract bucket name and storage path from the Supabase public URL
  const match = image.image_url.match(
    /\/storage\/v1\/object\/public\/([^/]+)\/(.+)$/
  );

  if (!match) {
    throw new Error(
      `Could not determine storage path from URL: ${image.image_url}`
    );
  }

  const bucketName = match[1];
  const storagePath = decodeURIComponent(match[2]);

  console.log("STORAGE BUCKET:", bucketName);
  console.log("STORAGE PATH:", storagePath);

  // 3. Delete the actual file from Supabase Storage
  const { error: storageError } = await supabase.storage
    .from(bucketName)
    .remove([storagePath]);

  if (storageError) {
    console.error("STORAGE DELETE ERROR:", storageError);
    throw new Error(storageError.message);
  }

  // 4. Delete the database record
  const { error: deleteError } = await supabase
    .from("vehicle_images")
    .delete()
    .eq("id", imageId);

  if (deleteError) {
    console.error("DATABASE DELETE ERROR:", deleteError);
    throw new Error(deleteError.message);
  }

  return { success: true };
}