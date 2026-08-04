"use client";

import { useState } from "react";

type Image = {
  image_url: string;
};

type Props = {
  images: Image[];
  vehicleName: string;
};

export default function VehicleGallery({
  images,
  vehicleName,
}: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div>

      <img
        src={images[selected]?.image_url}
        alt={vehicleName}
        className="w-full rounded-xl object-cover"
      />

      <div className="mt-4 flex gap-3 overflow-x-auto">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`overflow-hidden rounded-lg border-2 transition

              ${
                selected === index
                  ? "border-yellow-400"
                  : "border-transparent"
              }
            `}
          >

            <img
              src={image.image_url}
              alt=""
              className="h-20 w-28 object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}