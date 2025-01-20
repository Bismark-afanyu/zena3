import TrustHeroSection from "@/components/trust/landing";
import TrustLevels from "@/components/trust/trust-levels";
import TrustTestimonialSection from "@/components/trust/trust-testimonies";
import VerifyProviderSection from "@/components/trust/verify-provider";

export default function Trust() {
  return (
    <div>
      <TrustHeroSection />
      <TrustLevels />
      <TrustTestimonialSection />
      {/* <VerifyProviderSection/> */}
    </div>
  );
}
