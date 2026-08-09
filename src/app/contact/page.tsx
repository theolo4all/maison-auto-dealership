import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/shared/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-white">
              Contact Us
            </h1>

            <p className="mt-4 text-lg text-gray-400">
              Have a question about a vehicle or our services?
              Send us a message and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}