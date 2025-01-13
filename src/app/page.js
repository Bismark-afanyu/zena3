import HeroSection from "@/components/home/hero-section";
import WhyTrustZanaSection from "@/components/home/why-trust-zana-section";
import ServiceCategory from "@/components/home/service-category";
import FaqsSection from "@/components/home/faqs-section";
import ReportIssueSection from "@/components/home/report-issue";
import ExploreCategory from "@/components/explore/explore-heading";

export default function Home() {
  return (
    <div>
      {/* <ExploreCategory/> */}

      <HeroSection />
      <WhyTrustZanaSection />
      <ServiceCategory />
      <FaqsSection />
      <ReportIssueSection />
    </div>
  );
}
