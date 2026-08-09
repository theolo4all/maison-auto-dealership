import { createClient } from "@/lib/supabase/server";

export default async function InquiriesPage() {
  const supabase = await createClient();

  const { data: inquiries, error } = await supabase
    .from("contacts")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Inquiries Error:", error);

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white">
          Inquiries
        </h1>

        <div className="mt-6 rounded-xl border border-red-800 bg-red-900/20 p-6">
          <p className="text-red-400">
            Unable to load inquiries.
          </p>
        </div>
      </div>
    );
  }

  const vehicleIds = [
    ...new Set(
      (inquiries ?? [])
        .map((inquiry) => inquiry.vehicle_id)
        .filter(Boolean)
    ),
  ];

  let vehicles: any[] = [];

  if (vehicleIds.length > 0) {
    const { data: vehicleData, error: vehicleError } = await supabase
      .from("vehicles")
      .select("id, year, make, model")
      .in("id", vehicleIds);

    if (vehicleError) {
      console.error("Vehicle Lookup Error:", vehicleError);
    } else {
      vehicles = vehicleData ?? [];
    }
  }

  const vehicleMap = new Map(
    vehicles.map((vehicle) => [
      vehicle.id,
      `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
    ])
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Inquiries
        </h1>

        <p className="mt-2 text-gray-400">
          Customer inquiries submitted through your website.
        </p>
      </div>

      {(!inquiries || inquiries.length === 0) ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-12 text-center">
          <h2 className="text-2xl font-semibold text-white">
            No Inquiries Yet
          </h2>

          <p className="mt-3 text-gray-400">
            Customer inquiries will appear here when someone submits
            the contact form.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                {/* Customer Information */}
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {inquiry.first_name} {inquiry.last_name}
                  </h2>

                  <div className="mt-3 space-y-1 text-sm text-gray-400">
                    <p>
                      <span className="text-gray-300">Email:</span>{" "}
                      {inquiry.email}
                    </p>

                    {inquiry.phone && (
                      <p>
                        <span className="text-gray-300">Phone:</span>{" "}
                        {inquiry.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vehicle */}
                <div className="lg:text-right">
                  <p className="text-sm text-gray-500">
                    Vehicle
                  </p>

                  <p className="mt-1 font-semibold text-yellow-400">
                    {vehicleMap.get(inquiry.vehicle_id) ??
                      "General Inquiry"}
                  </p>
                </div>
              </div>

              {/* Subject */}
              {inquiry.subject && (
                <div className="mt-6 border-t border-zinc-800 pt-5">
                  <p className="text-sm text-gray-500">
                    Subject
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {inquiry.subject}
                  </p>
                </div>
              )}

              {/* Message */}
              <div className="mt-5 rounded-lg bg-zinc-800/70 p-5">
                <p className="mb-2 text-sm text-gray-500">
                  Message
                </p>

                <p className="whitespace-pre-wrap text-gray-300">
                  {inquiry.message || "No message provided."}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}