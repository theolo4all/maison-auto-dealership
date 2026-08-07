import AddVehicleForm from "@/components/admin/AddVehicleForm";

export default function NewVehiclePage() {
  return (
    <main className="min-h-screen bg-black px-8 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold text-white">
          Add Vehicle
        </h1>

        <AddVehicleForm />
      </div>
    </main>
  );
}