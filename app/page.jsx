"use client";
import { Suspense, lazy } from "react";
import { MainNavbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/landingpage/HeroSection";
import PerformanceOptimizer from "@/components/animations/PerformanceOptimizer";
import Services from "@/components/landingpage/Services";
import { TextParallaxContentExample } from "@/components/common/ScrollTrigger";
import ImageScroll from "@/components/landingpage/ImageScroll";

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

export default function Home() {
  return (
    <div className="relative">
      <MainNavbar />
      <PerformanceOptimizer>
        <HeroSection />
        <ImageScroll />
        <TextParallaxContentExample />
        <Services />
        {/* <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense> */}
        {/* <Suspense fallback={<SectionLoader />}>
          <InfoGrid />
        </Suspense> */}
        {/* <Suspense fallback={<SectionLoader />}>
          <TextParallaxContentExample />
        </Suspense> */}
        <Footer />
      </PerformanceOptimizer>
    </div>
  );
}
