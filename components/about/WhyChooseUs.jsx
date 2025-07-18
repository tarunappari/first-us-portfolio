"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/about/WhyChooseUs.module.scss";
import AccentureCard from "../common/AccentureCard";
import { Shield, TrendingUp, Users, Zap, Target, Award } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Function to render icons based on iconType
  const renderIcon = (iconType) => {
    const iconProps = {
      size: 32,
      className: styles.cardIcon
    };

    switch (iconType) {
      case 'shield':
        return <Shield {...iconProps} />;
      case 'growth':
        return <TrendingUp {...iconProps} />;
      case 'team':
        return <Users {...iconProps} />;
      case 'innovation':
        return <Zap {...iconProps} />;
      case 'target':
        return <Target {...iconProps} />;
      case 'award':
        return <Award {...iconProps} />;
      default:
        return <Shield {...iconProps} />;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cards = cardsRef.current;

      // Animate cards with staggered fade-in and slide-up
      cards.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }
  }, []);

  const trustFeatures = [
    {
      iconType: "shield",
      title:
        "We transform possibilities through innovation and human creativity.",
      description:
        "Our commitment extends beyond transactions. By measuring customer satisfaction across 10 key areas, we fine-tune our approach to create lasting impact.",
      highlight: "98% Client Satisfaction",
      cardType: "primary",
    },
    {
      iconType: "growth",
      title: "Solutions That Scale Beyond Us",
      description:
        "By understanding your goals, tailoring solutions, and working side by side, we ensure momentum continues long after our job is done.",
      highlight: "Long-term Partnership",
      cardType: "secondary",
    },
    {
      iconType: "team",
      title: "Leading with Expertise and Purpose",
      description:
        "We lead with technical excellence, build strategic relationships, and create environments where innovation and collaboration thrive.",
      highlight: "Expert Leadership",
      cardType: "accent",
    },
  ];

  return (
    <section className={styles.whyChooseSection} ref={sectionRef}>
      <div className={styles.whyChooseUsInfoContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
          <p className={styles.sectionSubtitle}>
            We’ve redefined consulting by making people our priority — yours and
            ours. We start by understanding your core purpose, then craft
            tailored, end-to-end solutions. With a team of top-tier strategists,
            engineers, and collaborators, we turn insight into measurable,
            lasting results.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {trustFeatures.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardIconContainer}>
                  {renderIcon(item.iconType)}
                </div>
                <h3 className={`${styles.cardTitle} textGradient`}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
        {/* <div className={styles.cardsGrid}>
          {trustFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`${styles.trustCard}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {index === 0 && (
                <AccentureCard
                  title={feature.title}
                  description={feature.description}
                />
              )}
              {index === 1 && (
                <AccentureCard
                  title={feature.title}
                  description={feature.description}
                  pattern="pattern2"
                  colorTheme="blue"
                />
              )}
              {index === 2 && (
                <AccentureCard
                  title={feature.title}
                  description={feature.description}
                  pattern="pattern3"
                  colorTheme="purple"
                />
              )}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
