"use server";

import { createClient } from "@/lib/supabase/server";

export type InquiryState = {
  success: boolean;
  error: string;
};

export async function submitInquiry(
  _previousState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const supabase = await createClient();

  const vehicleIdValue = formData.get("vehicle_id");

  const data = {
    first_name: String(formData.get("first_name") ?? "").trim(),
    last_name: String(formData.get("last_name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),

    vehicle_id:
      vehicleIdValue && String(vehicleIdValue).trim() !== ""
        ? String(vehicleIdValue).trim()
        : null,
  };

  const { error } = await supabase
    .from("contacts")
    .insert(data);

  if (error) {
    console.error("Inquiry submission error:", error);

    return {
      success: false,
      error: "Unable to send your message. Please try again.",
    };
  }

  return {
    success: true,
    error: "",
  };
}