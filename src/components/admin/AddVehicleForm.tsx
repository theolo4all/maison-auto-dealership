"use client";

import { createVehicle } from "@/lib/actions/createVehicle";

export default function AddVehicleForm() {
  return (
<form
  action={createVehicle}
  encType="multipart/form-data"
  className="space-y-8 rounded-xl bg-zinc-900 p-8"
>

      {/* Basic Information */}

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Year
          </label>
          <input
  type="number"
  name="year"
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
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white">

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
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white">

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
            placeholder="2.0L"
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
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white">

            <option>available</option>

            <option>sold</option>

          </select>

        </div>

        <div className="flex items-center gap-3 pt-8">

          <input
            type="checkbox"
            name="featured"
            className="h-5 w-5"
          />

          <label className="text-white">
            Featured Vehicle
          </label>

        </div>

      </div>

      {/* Images */}

      <div>

        <label className="mb-2 block text-sm text-zinc-400">
          Vehicle Photos
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
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

      </div>

      <button
        type="submit"
        className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400"
      >
        Save Vehicle
      </button>

    </form>
  );
}