"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/careers/WhyWorkWithUs.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyWorkWithUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const whyWorkData = [
    {
      id: 1,
      iconType: "people",
      title: "Culture That Puts People First",
      description:
        "Be your true self every day. We embrace authenticity, build real connections, and empower impact within teams and communities.",
    },
    {
      id: 2,
      iconType: "target",
      title: "Purpose in Every Role",
      description:
        "Do meaningful work that inspires you. Explore diverse career paths and grow your skills while making a real difference.",
    },
    {
      id: 3,
      iconType: "growth",
      title: "Grow Beyond Limits",
      description:
        "Curiosity drives growth at First Us IT. We support your journey with flexible learning, coaching, and mentorship.",
    },
    {
      id: 4,
      iconType: "award",
      title: "Rewarding What You Achieve",
      description:
        "Your contributions matter. Earn competitive, performance-based pay and share in the company’s long-term success.",
    },
    {
      id: 5,
      iconType: "health",
      title: "Well-being at the Core",
      description:
        "We support your full well-being—mental, physical, emotional, financial, and social—so you can truly thrive.",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cards = cardsRef.current;

      // Animate cards with stagger effect
      cards.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
              rotationY: 15,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.2,
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

      // Floating animation for background elements
      gsap.to(`.${styles.floatingElement}`, {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-3, 3)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 3,
          from: "random",
        },
      });
    }
  }, []);

  return (
    <section className={styles.whyWorkSection} ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div
          className={`${styles.floatingShape1} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.floatingShape2} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.floatingShape3} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.glowingOrb1} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.glowingOrb2} ${styles.floatingElement}`}
        ></div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Human-Driven. Future-Focused.</h2>
          <p className={styles.sectionSubtitle}>
            At First Us IT, we lead with people and purpose. By blending
            technical expertise with a deep understanding of our clients’ needs,
            we turn bold visions into smart, sustainable solutions. Together, we
            build what's next.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {whyWorkData.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.cardIcon}>
                <div className={styles.iconContainer}>
                  {item.iconType === "people" && (
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6" />
                      <path d="M23 11v2" />
                      <path d="M17 11v2" />
                    </svg>
                  )}
                  {item.iconType === "target" && (
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  )}
                  {item.iconType === "growth" && (
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M7 12l4-4 4 4 6-6" />
                      <circle cx="7" cy="12" r="1" />
                      <circle cx="11" cy="8" r="1" />
                      <circle cx="15" cy="12" r="1" />
                      <circle cx="21" cy="6" r="1" />
                    </svg>
                  )}
                  {item.iconType === "award" && (
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                    </svg>
                  )}
                  {item.iconType === "health" && (
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" />
                    </svg>
                  )}
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
