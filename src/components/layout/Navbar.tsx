"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-zinc-800 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Maison Auto Dealership"
            width={180}
            height={70}
            priority
            className="h-auto w-[140px] sm:w-[160px] md:w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-white md:flex">
          <Link
            href="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            href="/inventory"
            className="transition hover:text-yellow-400"
          >
            Inventory
          </Link>

          <Link
            href="/financing"
            className="transition hover:text-yellow-400"
          >
            Financing
          </Link>

          <Link
            href="/about"
            className="transition hover:text-yellow-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-yellow-400"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link href="/inventory" className="hidden md:block">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
            View Inventory
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 text-white transition hover:border-yellow-500 hover:text-yellow-400 md:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-black md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-zinc-800 py-4 text-white transition hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              href="/inventory"
              onClick={closeMenu}
              className="border-b border-zinc-800 py-4 text-white transition hover:text-yellow-400"
            >
              Inventory
            </Link>

            <Link
              href="/financing"
              onClick={closeMenu}
              className="border-b border-zinc-800 py-4 text-white transition hover:text-yellow-400"
            >
              Financing
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-zinc-800 py-4 text-white transition hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-4 text-white transition hover:text-yellow-400"
            >
              Contact
            </Link>

            <Link
              href="/inventory"
              onClick={closeMenu}
              className="mt-4"
            >
              <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400">
                View Inventory
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}