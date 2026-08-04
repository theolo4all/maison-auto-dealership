"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitInquiry(formData: FormData) {
  const supabase = await createClient();

  const data = {
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    vehicle_id: formData.get("vehicle_id") as string,
  };

  const { error } = await supabase
    .from("contacts")
    .insert(data);

  if (error) {
    console.error(error);
    throw new Error("Unable to send inquiry.");
  }

  return {
    success: true,
  };
}