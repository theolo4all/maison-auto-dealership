import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden bg-black">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[180px] font-black tracking-tight text-yellow-500/10 md:text-[280px]">
          MAISON
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Maison Auto Dealership
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          Premium Pre-Owned Vehicles
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Browse quality inspected vehicles at competitive prices with
          financing options available.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/inventory"
            className="w-full rounded-md bg-yellow-500 px-8 py-3 text-center font-semibold text-black transition hover:bg-yellow-400 sm:w-auto"
          >
            Browse Inventory
          </Link>

          <Link
            href="/contact"
            className="w-full rounded-md border border-white px-8 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}