"use client";
import { MainNavbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/landingpage/HeroSection";
import ClientLogos from "@/components/landingpage/ClientLogos";
import InfoGrid from "@/components/landingpage/InfoGrid";
import Services from "@/components/landingpage/Services";
import Testimonials from "@/components/landingpage/Testimonials";
import PerformanceOptimizer from "@/components/animations/PerformanceOptimizer";
import { TextParallaxContentExample } from "@/components/common/ScrollTrigger";
import ImageScroll from "@/components/landingpage/ImageScroll";

export default function Home() {
  return (
    <PerformanceOptimizer>
      <MainNavbar />
      <HeroSection />
      <ImageScroll />
      <InfoGrid />
      <TextParallaxContentExample />
      {/* <ClientLogos /> */}
      <Services />
      <Testimonials />
      <Footer />
    </PerformanceOptimizer>
  );
}
