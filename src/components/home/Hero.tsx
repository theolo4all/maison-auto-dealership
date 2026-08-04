import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background Image */}
      <Image
        src="/images/logo.png"
        alt="Maison Auto Dealership"
        fill
        className="object-contain opacity-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Premium Pre-Owned Vehicles
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          Browse quality inspected vehicles at competitive prices with
          financing options available.
        </p>

        <div className="flex justify-center gap-4">

          <Button
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400"
          >
            Browse Inventory
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Contact Us
          </Button>

        </div>

      </div>

    </section>
  );
}