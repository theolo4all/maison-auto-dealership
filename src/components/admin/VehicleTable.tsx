"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: number;
  status: string;
  featured: boolean;
  image_url: string;
};

export default function VehicleTable({
  vehicles,
}: {
  vehicles: Vehicle[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800">

      <table className="w-full">

        <thead className="bg-zinc-900">

          <tr>

            <th className="p-4 text-left text-sm text-zinc-400">
              Vehicle
            </th>

            <th className="text-left text-sm text-zinc-400">
              Price
            </th>

            <th className="text-left text-sm text-zinc-400">
              Mileage
            </th>

            <th className="text-left text-sm text-zinc-400">
              Status
            </th>

            <th className="text-left text-sm text-zinc-400">
              Featured
            </th>

            <th className="text-right text-sm text-zinc-400">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle) => (

            <tr
              key={vehicle.id}
              className="border-t border-zinc-800"
            >

              <td className="p-4">

                <div className="flex items-center gap-4">

                  <Image
                    src={vehicle.image_url}
                    alt=""
                    width={80}
                    height={60}
                    className="rounded-lg object-cover"
                  />

                  <div>

                    <div className="font-semibold text-white">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </div>

                  </div>

                </div>

              </td>

              <td className="text-white">
                ${Number(vehicle.price).toLocaleString()}
              </td>

              <td className="text-zinc-300">
                {vehicle.mileage.toLocaleString()} km
              </td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    vehicle.status === "available"
                      ? "bg-green-600/20 text-green-400"
                      : "bg-red-600/20 text-red-400"
                  }`}
                >
                  {vehicle.status}
                </span>

              </td>

              <td className="text-white">
                {vehicle.featured ? "⭐" : "-"}
              </td>

              <td>

                <div className="flex justify-end gap-3">

                  <Link
                    href={`/admin/vehicles/${vehicle.id}`}
                    className="text-yellow-400"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button className="text-red-400">
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}