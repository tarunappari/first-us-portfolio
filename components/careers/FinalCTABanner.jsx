"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import styles from "@/styles/careers/FinalCTABanner.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FinalCTABanner = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const section = sectionRef.current;
      const content = contentRef.current;
      const buttons = buttonsRef.current;
      const background = backgroundRef.current;

      // Animate background elements
      if (background) {
        gsap.fromTo(
          background.children,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -15,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 2,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }

      // Animate main content
      if (content) {
        gsap.fromTo(
          content,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate CTA buttons
      if (buttons) {
        gsap.fromTo(
          buttons.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Continuous floating animation for background elements
      gsap.to(`.${styles.floatingElement}`, {
        y: "random(-25, 25)",
        x: "random(-20, 20)",
        rotation: "random(-8, 8)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 3,
          from: "random",
        },
      });

      // Pulsing animation for glow elements
      gsap.to(`.${styles.pulsingGlow}`, {
        scale: "random(1.1, 1.3)",
        opacity: "random(0.3, 0.7)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });
    }
  }, []);

  return (
    <section className={styles.ctaBannerSection} ref={sectionRef}>
      {/* Futuristic Background Elements */}
      <div className={styles.backgroundElements} ref={backgroundRef}>
        <div className={`${styles.techGrid} ${styles.floatingElement}`}></div>
        <div
          className={`${styles.glowOrb1} ${styles.floatingElement} ${styles.pulsingGlow}`}
        ></div>
        <div
          className={`${styles.glowOrb2} ${styles.floatingElement} ${styles.pulsingGlow}`}
        ></div>
        <div
          className={`${styles.glowOrb3} ${styles.floatingElement} ${styles.pulsingGlow}`}
        ></div>
        <div
          className={`${styles.circuitLines} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.hexagonPattern} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.dataStream1} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.dataStream2} ${styles.floatingElement}`}
        ></div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.ctaContent} ref={contentRef}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Ready to Join?</span>
            <div className={styles.badgeGlow}></div>
          </div>

          <h2 className={styles.ctaTitle}>
            <span className={styles.gradientText}>Create the future </span>
            you’ve always imagined.
          </h2>

          <p className={styles.ctaDescription}>
            Take the next step in your career journey.
          </p>

          <div className={styles.ctaButtons} ref={buttonsRef}>
            <Link href="/careers/apply" className={styles.primaryButton}>
              <span className={styles.buttonText}>Apply Now</span>
              <div className={styles.buttonGlow}></div>
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link href="/contact" className={styles.tertiaryButton}>
              <span className={styles.buttonText}>Get in Touch</span>
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className={styles.trustText}>
                Secure Application Process
              </span>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <span className={styles.trustText}>Quick Response Time</span>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className={styles.trustText}>Personal Career Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTABanner;
