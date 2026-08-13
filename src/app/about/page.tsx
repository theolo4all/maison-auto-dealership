import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
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
              About Maison Auto Dealership
            </p>

            <h1 className="text-5xl font-bold md:text-6xl">
              Driven by Quality & Trust
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
              At Maison Auto Dealership, we are committed to providing quality
              pre-owned vehicles at competitive prices while delivering a
              straightforward and professional buying experience.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
                Our Story
              </p>

              <h2 className="text-4xl font-bold">
                A Dealership Built Around Customers
              </h2>

              <p className="mt-6 leading-relaxed text-gray-400">
                Maison Auto Dealership was created with a simple goal: to make
                purchasing a quality pre-owned vehicle easier, more transparent,
                and more comfortable for our customers.
              </p>

              <p className="mt-5 leading-relaxed text-gray-400">
                We carefully select vehicles with a focus on quality, value,
                reliability, and affordability. Our team is committed to helping
                customers find a vehicle that fits both their lifestyle and
                budget.
              </p>
            </div>

            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-10">
              <img
                src="/images/logo.png"
                alt="Maison Auto Dealership"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
                What Matters To Us
              </p>

              <h2 className="text-4xl font-bold">
                Our Commitment
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 bg-black p-8">
                <h3 className="text-2xl font-semibold text-yellow-500">
                  Quality
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  We focus on sourcing vehicles that offer quality, reliability,
                  and value for our customers.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-black p-8">
                <h3 className="text-2xl font-semibold text-yellow-500">
                  Transparency
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  We believe customers deserve a clear and straightforward
                  vehicle-buying experience.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-black p-8">
                <h3 className="text-2xl font-semibold text-yellow-500">
                  Customer Service
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  We are committed to treating every customer with respect and
                  providing support throughout the buying process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Find Your Next Vehicle
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Explore our current inventory and discover a vehicle that works for
            you.
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