import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Maison Auto Dealership"
            width={180}
            height={70}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-white md:flex">
          <Link href="/">Home</Link>
          <Link href="/inventory">Inventory</Link>
          <Link href="/financing">Financing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
          View Inventory
        </Button>

      </div>
    </header>
  );
}