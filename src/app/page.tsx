import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedVehicles from "@/components/home/FeaturedVehicles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedVehicles />
    </>
  );
}