import HeroSection from "@/components/home/hero-section";
import ServiceCategory from "@/components/home/service-category";
import WhyTrustZenaSection from "@/components/home/why-trust-zena-section";
import FaqsSection from "@/components/home/faqs-section";
import ReportIssueSection from "@/components/home/report-issue";

export default function Home() {
  return (
    <div>
      {/* <ExploreCategory/> */}

      <HeroSection />
      <WhyTrustZenaSection />
      <ServiceCategory />
      <FaqsSection />
      <ReportIssueSection />
    </div>
  );
}
