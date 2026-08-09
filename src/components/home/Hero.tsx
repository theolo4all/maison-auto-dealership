import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[650px] items-center justify-center overflow-hidden bg-black">
      {/* Background Logo */}
      <Image
        src="/images/logo.png"
        alt="Maison Auto Dealership"
        fill
        priority
        className="object-contain opacity-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          Premium Pre-Owned Vehicles
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Browse quality inspected vehicles at competitive prices with
          financing options available.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Browse Inventory */}
          <Link
            href="/inventory"
            className="w-full rounded-md bg-yellow-500 px-8 py-3 text-center font-medium text-black transition hover:bg-yellow-400 sm:w-auto"
          >
            Browse Inventory
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            className="w-full rounded-md border border-white bg-transparent px-8 py-3 text-center font-medium text-white transition hover:bg-white hover:text-black sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}