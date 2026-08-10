"use server";

import { createClient } from "@/lib/supabase/server";

export async function getInquiries() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("contacts")
    .select(`
      id,
      first_name,
      last_name,
      email,
      phone,
      subject,
      message,
      vehicle_id
    `)
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching inquiries:", error);
    throw new Error("Unable to load inquiries.");
  }

  return data;
}