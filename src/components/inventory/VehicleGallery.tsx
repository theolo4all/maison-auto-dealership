"use client";

import { useEffect, useState } from "react";

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
  const [isFullscreen, setIsFullscreen] = useState(false);

  const imageCount = images.length;

  function showPrevious() {
    if (imageCount === 0) return;

    setSelected((current) =>
      current === 0 ? imageCount - 1 : current - 1
    );
  }

  function showNext() {
    if (imageCount === 0) return;

    setSelected((current) =>
      current === imageCount - 1 ? 0 : current + 1
    );
  }

  function openFullscreen() {
    if (imageCount === 0) return;
    setIsFullscreen(true);
  }

  function closeFullscreen() {
    setIsFullscreen(false);
  }

  useEffect(() => {
    if (!isFullscreen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }

      if (e.key === "ArrowLeft") {
        showPrevious();
      }

      if (e.key === "ArrowRight") {
        showNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Prevent the page behind the gallery from scrolling.
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isFullscreen, imageCount]);

  if (imageCount === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-zinc-900 text-zinc-500">
        No vehicle photos available.
      </div>
    );
  }

  const currentImage = images[selected]?.image_url;

  return (
    <>
      {/* Main gallery */}
      <div className="relative">
        <button
          type="button"
          onClick={openFullscreen}
          className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl"
          aria-label={`Enlarge ${vehicleName} photo`}
        >
          <img
            src={currentImage}
            alt={vehicleName}
            className="h-auto max-h-[650px] w-full object-cover transition duration-300 group-hover:scale-[1.01]"
          />

          {/* Enlarge icon */}
          <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white opacity-90 shadow-lg transition group-hover:bg-black/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
              />
            </svg>
          </span>
        </button>

        {/* Previous */}
        {imageCount > 1 && (
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-2xl text-white shadow-lg transition hover:bg-black/90"
          >
            &#8592;
          </button>
        )}

        {/* Next */}
        {imageCount > 1 && (
          <button
            type="button"
            onClick={showNext}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-2xl text-white shadow-lg transition hover:bg-black/90"
          >
            &#8594;
          </button>
        )}

        {/* Photo counter */}
        {imageCount > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white">
            {selected + 1} / {imageCount}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {imageCount > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`View photo ${index + 1}`}
              className={`shrink-0 overflow-hidden rounded-lg border-2 transition ${
                selected === index
                  ? "border-yellow-400"
                  : "border-zinc-700 hover:border-zinc-400"
              }`}
            >
              <img
                src={image.image_url}
                alt={`${vehicleName} photo ${index + 1}`}
                className="h-24 w-36 object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen lightbox */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${vehicleName} photo viewer`}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeFullscreen}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
          >
            &times;
          </button>

          {/* Previous */}
          {imageCount > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 md:left-8"
            >
              &#8592;
            </button>
          )}

          {/* Large image */}
          <img
            src={currentImage}
            alt={`${vehicleName} photo ${selected + 1}`}
            className="max-h-[90vh] max-w-[92vw] object-contain"
          />

          {/* Next */}
          {imageCount > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 md:right-8"
            >
              &#8594;
            </button>
          )}

          {/* Counter */}
          {imageCount > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-5 py-2 text-sm text-white">
              {selected + 1} / {imageCount}
            </div>
          )}
        </div>
      )}
    </>
  );
}