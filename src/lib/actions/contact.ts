"use server";

import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";

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

  const firstName = String(formData.get("first_name") ?? "").trim();
  const lastName = String(formData.get("last_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const data = {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    subject,
    message,
    vehicle_id:
      vehicleIdValue && String(vehicleIdValue).trim() !== ""
        ? String(vehicleIdValue).trim()
        : null,
  };

  // Save inquiry to Supabase
  const { error: insertError } = await supabase
    .from("contacts")
    .insert(data);

  if (insertError) {
    console.error("Inquiry submission error:", insertError);

    return {
      success: false,
      error: "Unable to send your message. Please try again.",
    };
  }

  // Send email through Resend
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error: emailError } = await resend.emails.send({
    from: "Maison Auto Dealership <info@maisonauto.ca>",
    to: [process.env.CONTACT_EMAIL || "info@maisonauto.ca"],
    replyTo: email,
    subject: `Website Inquiry: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, "<br />")}</p>

        <hr />

        <p>
          This message was submitted through the
          <strong>Maison Auto Dealership</strong> website.
        </p>
      </div>
    `,
  });

  if (emailError) {
    console.error("Resend email error:", emailError);

    return {
      success: false,
      error:
        "Your inquiry was received, but we were unable to send the notification email. Please contact us directly.",
    };
  }

  return {
    success: true,
    error: "",
  };
}