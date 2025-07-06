import PerformanceOptimizer from "@/components/animations/PerformanceOptimizer";
import Footer from "@/components/common/Footer";
import { MainNavbar } from "@/components/common/Navbar";
import Herosection from "@/components/services/Herosection";
import ServicesSection from "@/components/services/ServicesSection";
import IndustryExpertise from "@/components/services/IndustryExpertise";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import CallToAction from "@/components/services/CallToAction";
import React from "react";

const page = () => {
  return (
    <div className="relative w-full">
      <MainNavbar />
      <PerformanceOptimizer>
        <Herosection />
        <ServicesSection />
        <IndustryExpertise />
        <WhyChooseUs />
        <CallToAction />
        <Footer />
      </PerformanceOptimizer>
    </div>
  );
};

export default page;
