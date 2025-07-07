import PerformanceOptimizer from "@/components/animations/PerformanceOptimizer";
import Footer from "@/components/common/Footer";
import { MainNavbar } from "@/components/common/Navbar";
import AboutHero from "@/components/about/AboutHero";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import ClientLogoStrip from "@/components/about/ClientLogoStrip";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CTASection from "@/components/about/CTASection";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full">
      <MainNavbar />
      <PerformanceOptimizer>
        <AboutHero />
        <MissionVisionValues />
        <CompanyTimeline />
        <ClientLogoStrip />
        <WhyChooseUs />
        <CTASection />
        <Footer />
      </PerformanceOptimizer>
    </div>
  );
};

export default About;
