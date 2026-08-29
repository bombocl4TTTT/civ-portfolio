import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import AboutCollage from "@/components/AboutCollage";
import ServicesCatalog from "@/components/ServicesCatalog";
import CaseStudiesCollage from "@/components/CaseStudiesCollage";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import TestimonialsPinned from "@/components/TestimonialsPinned";
import FAQAccordion from "@/components/FAQAccordion";
import ContactPostcard from "@/components/ContactPostcard";
import FooterColophon from "@/components/FooterColophon";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#1A1615] relative">
      <HeaderNav />
      <HeroSection />
      <AboutCollage />
      <ServicesCatalog />
      <CaseStudiesCollage />
      <WorkflowTimeline />
      <TestimonialsPinned />
      <FAQAccordion />
      <ContactPostcard />
      <FooterColophon />
    </main>
  );
}
