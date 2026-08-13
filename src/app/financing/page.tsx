import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function FinancingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-[180px] font-bold tracking-widest text-yellow-500">
              MAISON
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Maison Auto Dealership
            </p>

            <h1 className="text-5xl font-bold md:text-6xl">
              Financing Made Simple
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              We offer flexible financing options to help make your next
              vehicle purchase easier and more affordable.
            </p>
          </div>
        </section>

        {/* Financing Options */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Financing Options</h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Whether you have excellent credit, are rebuilding your credit,
              or are purchasing your first vehicle, we can help you explore
              your financing options.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Option 1 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black">
                1
              </div>

              <h3 className="text-2xl font-semibold">
                Flexible Financing
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Explore financing solutions designed around your budget and
                individual circumstances.
              </p>
            </div>

            {/* Option 2 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black">
                2
              </div>

              <h3 className="text-2xl font-semibold">
                Credit Options
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Financing options may be available for a range of credit
                situations. We will help you understand the options available
                to you.
              </p>
            </div>

            {/* Option 3 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black">
                3
              </div>

              <h3 className="text-2xl font-semibold">
                Simple Process
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                Our goal is to make the financing process straightforward,
                transparent, and convenient from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-y border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold">How It Works</h2>

              <p className="mt-4 text-gray-400">
                Getting started is simple.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black">
                  1
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Choose Your Vehicle
                </h3>

                <p className="mt-3 text-gray-400">
                  Browse our inventory and find a vehicle that fits your needs
                  and budget.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black">
                  2
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Discuss Financing
                </h3>

                <p className="mt-3 text-gray-400">
                  Contact us to discuss your financing needs and available
                  options.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black">
                  3
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Drive Away
                </h3>

                <p className="mt-3 text-gray-400">
                  Once everything is finalized, you can get behind the wheel
                  of your next vehicle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Find Your Next Vehicle?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Browse our current inventory or contact Maison Auto Dealership to
            discuss your financing options.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/inventory"
              className="rounded-md bg-yellow-500 px-8 py-3 font-medium text-black transition hover:bg-yellow-400"
            >
              Browse Inventory
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white px-8 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}