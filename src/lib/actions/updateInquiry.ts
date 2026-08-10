"use server";

import { createClient } from "@/lib/supabase/server";

export async function updateInquiryStatus(
  inquiryId: string,
  status: string
) {
  const supabase = await createClient();

  const updateData: {
    status: string;
    contacted_at?: string | null;
  } = {
    status,
  };

  if (status === "Contacted") {
    updateData.contacted_at = new Date().toISOString();
  }

  if (status === "New") {
    updateData.contacted_at = null;
  }

  const { error } = await supabase
    .from("contacts")
    .update(updateData)
    .eq("id", inquiryId);

  if (error) {
    console.error("Update Inquiry Error:", error);
    throw new Error("Unable to update inquiry.");
  }
}