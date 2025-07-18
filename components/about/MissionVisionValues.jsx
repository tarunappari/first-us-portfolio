"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/about/MissionVisionValues.module.scss";
import InteractiveSelector from "@/components/ui/interactive-selector";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MissionVisionValues = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cards = cardsRef.current;

      // GSAP fade-in animation on scroll
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const companyValues = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Empowering businesses through technology and sustainable growth.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", // mission / vision - business meeting
    },
    {
      id: 2,
      title: "Business Ethics",
      description: "Upholding integrity and doing the right thing always.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80", // business ethics / handshake
    },
    {
      id: 3,
      title: "Innovation",
      description: "Driving value through bold ideas and new technologies.",
      img: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=800&q=80", // innovation / tech
    },
    {
      id: 4,
      title: "Sustainability",
      description: "Creating impact through eco-conscious solutions.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80", // green / sustainability
    },
    {
      id: 5,
      title: "Inclusion & Diversity",
      description: "Celebrating unique perspectives and experiences.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80", // diverse team
    },
    {
      id: 6,
      title: "Responsible AI",
      description: "Building trusted, ethical AI solutions.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", // AI / technology - tech background
    },
    {
      id: 7,
      title: "Workforce Transparency",
      description: "Building trust through openness and clarity.",
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80", // transparency / report - business documents
    },
    {
      id: 8,
      title: "Corporate Citizenship",
      description: "Creating positive impact in communities worldwide.",
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80", // social work / volunteering - helping hands
    },
  ];

  return (
    <section className={styles.mvvSection} ref={sectionRef}>
      {/* Enhanced Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.glowingOrb1}></div>
        <div className={styles.glowingOrb2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Foundation</h2>
          <p className={styles.sectionSubtitle}>
            The principles that drive our commitment to excellence and innovation
          </p>
        </div>

        {/* Interactive Values Selector */}
        <div className="mt-1 mb-2">
          <InteractiveSelector values={companyValues} />
        </div>

      </div>
    </section>
  );
};

export default MissionVisionValues;
