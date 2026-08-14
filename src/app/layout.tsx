import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maisonauto.ca"),

  title: {
    default: "Maison Auto Dealership | Quality Pre-Owned Vehicles",
    template: "%s | Maison Auto Dealership",
  },

  description:
    "Maison Auto Dealership offers quality pre-owned vehicles at competitive prices, with financing options available.",

  alternates: {
    canonical: "https://maisonauto.ca",
  },

  openGraph: {
    type: "website",
    url: "https://maisonauto.ca",
    siteName: "Maison Auto Dealership",
    title: "Maison Auto Dealership | Quality Pre-Owned Vehicles",
    description:
      "Browse quality pre-owned vehicles at competitive prices with financing options available.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
