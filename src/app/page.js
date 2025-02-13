"use client"

import HeroSection from "@/components/home/hero-section";
import ServiceCategory from "@/components/home/service-category";
import WhyTrustZenaSection from "@/components/home/why-trust-zena-section";
import Support from "@/components/home/support";
import { IoLogoWhatsapp } from "react-icons/io";
import dynamic from "next/dynamic";


const ClientOnlyComingSoon = dynamic(
  () => import("@/components/provider/comingsoon"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div 
    
    // className="relative pb-20"
    >
      {/* Page Content */}
      {/* <HeroSection />
      <WhyTrustZenaSection />
      <ServiceCategory />
      <Support /> */}
     <ClientOnlyComingSoon />


      {/* <a
        href="https://wa.me/<YOUR_PHONE_NUMBER>"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-28 right-6 bg-white text-primary p-4 rounded-full shadow-lg hover:bg-primary transition-all duration-300 z-50"
      >
        <IoLogoWhatsapp className="w-10 h-10" />
      </a> */}
    </div>
  );
}
