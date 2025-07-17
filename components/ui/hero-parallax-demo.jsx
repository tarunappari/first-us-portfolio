"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

// IT Consultancy focused products for demo
export const itConsultancyProducts = [
  {
    title: "Cloud Infrastructure Solutions",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Custom Software Development",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "AI & Machine Learning Integration",
    link: "/services", 
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Cybersecurity & Risk Management",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Enterprise Digital Transformation",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Data Analytics & Business Intelligence",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Mobile App Development",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "DevOps & Automation",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "IT Staffing & Consulting",
    link: "/careers",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Blockchain & Web3 Solutions",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "IoT & Smart Systems",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Quality Assurance & Testing",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "System Integration Services",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Technical Support & Maintenance",
    link: "/contact",
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Digital Strategy Consulting",
    link: "/about",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=center",
  },
];

export function HeroParallaxDemo() {
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <HeroParallax products={itConsultancyProducts} />
      </div>
    </div>
  );
}
