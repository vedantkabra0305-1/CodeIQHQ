import CtaSection from "@/components/sections/cta";
import HeroSection from "@/components/sections/home/hero";
import PortfolioOverview from "@/components/sections/home/portfolio-overview";
import ServicesOverview from "@/components/sections/home/services-overview";
import Testimonials from "@/components/sections/home/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <PortfolioOverview />
      <Testimonials />
      <CtaSection />
    </>
  );
}
