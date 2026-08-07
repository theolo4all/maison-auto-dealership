"use client";

import { updateVehicle } from "@/lib/actions/updateVehicle";

type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: number;
  transmission: string | null;
  fuel_type: string |null;
  engine: string | null;
  exterior_color: string | null;
  interior_color: string | null;
  body_style: string | null;
  vin: string | null;
  status: string;
  featured: boolean;
  description: string | null;
};

export default function EditVehicleForm({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  return (
    <form
      action={updateVehicle}
      className="space-y-8 rounded-xl bg-zinc-900 p-8"
    >
      <input
        type="hidden"
        name="id"
        value={vehicle.id}
      />

      {/* Basic Information */}

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Year
          </label>

          <input
            type="number"
            name="year"
            defaultValue={vehicle.year}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Make
          </label>

          <input
            type="text"
            name="make"
            defaultValue={vehicle.make}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Model
          </label>

          <input
            type="text"
            name="model"
            defaultValue={vehicle.model}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

      </div>

      {/* Price */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Price
          </label>

          <input
            type="number"
            name="price"
            defaultValue={vehicle.price}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Mileage
          </label>

          <input
            type="number"
            name="mileage"
            defaultValue={vehicle.mileage}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

      </div>

      {/* Specifications */}

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Transmission
          </label>

          <select
            name="transmission"
            defaultValue={vehicle.transmission ?? "Automatic"}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          >
            <option>Automatic</option>
            <option>Manual</option>
            <option>CVT</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Fuel Type
          </label>

          <select
            name="fuel_type"
            defaultValue={vehicle.fuel_type ?? "Gasoline"}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          >
            <option>Gasoline</option>
            <option>Diesel</option>
            <option>Hybrid</option>
            <option>Electric</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Engine
          </label>

          <input
            type="text"
            name="engine"
            defaultValue={vehicle.engine ?? ""}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

      </div>

      {/* Vehicle Details */}

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Exterior Color
          </label>

          <input
            type="text"
            name="exterior_color"
            defaultValue={vehicle.exterior_color ?? ""}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Interior Color
          </label>

          <input
            type="text"
            name="interior_color"
            defaultValue={vehicle.interior_color ?? ""}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Body Style
          </label>

          <input
            type="text"
            name="body_style"
            defaultValue={vehicle.body_style ?? ""}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          />
        </div>

      </div>

      {/* VIN */}

      <div>

        <label className="mb-2 block text-sm text-zinc-400">
          VIN
        </label>

        <input
          type="text"
          name="vin"
          defaultValue={vehicle.vin ?? ""}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

      </div>

      {/* Status */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm text-zinc-400">
            Status
          </label>

          <select
            name="status"
            defaultValue={vehicle.status}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          >
            <option value="available">available</option>
            <option value="sold">sold</option>
          </select>

        </div>

        <div className="flex items-center gap-3 pt-8">

          <input
            type="checkbox"
            name="featured"
            defaultChecked={vehicle.featured}
            className="h-5 w-5"
          />

          <label className="text-white">
            Featured Vehicle
          </label>

        </div>

      </div>

      {/* Current Photos */}

      <div>

        <label className="mb-4 block text-sm text-zinc-400">
          Current Photos
        </label>

        <div className="rounded-lg border border-dashed border-zinc-700 p-8 text-center text-zinc-500">
          Existing photos will appear here.
        </div>

      </div>

      {/* Upload More Photos */}

      <div>

        <label className="mb-2 block text-sm text-zinc-400">
          Upload More Photos
        </label>

        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          className="w-full rounded-lg border border-dashed border-zinc-600 bg-zinc-800 p-5 text-white"
        />

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block text-sm text-zinc-400">
          Description
        </label>

        <textarea
          name="description"
          rows={6}
          defaultValue={vehicle.description ?? ""}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

      </div>

      <button
        type="submit"
        className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black hover:bg-yellow-400"
      >
        Save Changes
      </button>

    </form>
  );
}