"use client";
import { Suspense, lazy } from "react";
import { MainNavbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/landingpage/HeroSection";
import PerformanceOptimizer from "@/components/animations/PerformanceOptimizer";

// Dynamic imports for better code splitting
const ImageScroll = lazy(() => import("@/components/landingpage/ImageScroll"));
const InfoGrid = lazy(() => import("@/components/landingpage/InfoGrid"));
const TextParallaxContentExample = lazy(() => import("@/components/common/ScrollTrigger").then(module => ({ default: module.TextParallaxContentExample })));
const Services = lazy(() => import("@/components/landingpage/Services"));
const Testimonials = lazy(() => import("@/components/landingpage/Testimonials"));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

export default function Home() {
  return (
    <PerformanceOptimizer>
      <MainNavbar />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <ImageScroll />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <InfoGrid />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TextParallaxContentExample />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Footer />
    </PerformanceOptimizer>
  );
}
