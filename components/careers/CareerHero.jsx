'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from '@/styles/careers/CareerHero.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CareerHero = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const section = sectionRef.current;
      const content = contentRef.current;
      const button = buttonRef.current;
      const background = backgroundRef.current;

      // Animate background elements
      if (background) {
        gsap.fromTo(background.children,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -10
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power2.out"
          }
        );
      }

      // Animate main content
      if (content) {
        gsap.fromTo(content,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: 0.5,
            ease: "power2.out"
          }
        );
      }

      // Animate CTA button
      if (button) {
        gsap.fromTo(button,
          {
            opacity: 0,
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 1,
            ease: "back.out(1.7)"
          }
        );
      }

      // Floating animation for background elements
      gsap.to(`.${styles.floatingElement}`, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });
    }
  }, []);

  return (
    <section className={styles.heroSection} ref={sectionRef}>
      {/* Futuristic Background Elements */}
      <div className={styles.backgroundElements} ref={backgroundRef}>
        <div className={`${styles.gridPattern} ${styles.floatingElement}`}></div>
        <div className={`${styles.glowOrb1} ${styles.floatingElement}`}></div>
        <div className={`${styles.glowOrb2} ${styles.floatingElement}`}></div>
        <div className={`${styles.glowOrb3} ${styles.floatingElement}`}></div>
        <div className={`${styles.techLines} ${styles.floatingElement}`}></div>
        <div className={`${styles.circuitPattern} ${styles.floatingElement}`}></div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.heroContent} ref={contentRef}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Join Our Team</span>
            <div className={styles.badgeGlow}></div>
          </div>

          <h1 className={styles.heroTitle}>
            Shape the Future of
            <span className={styles.gradientText}> Technology</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Join a team of passionate innovators, problem-solvers, and visionaries.
            Build cutting-edge solutions, grow your career, and make a meaningful
            impact in the world of digital transformation.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Team Members</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Open Positions</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Remote Friendly</div>
            </div>
          </div>

          <div className={styles.ctaButtons} ref={buttonRef}>
            <Link href="#open-positions" className={styles.primaryButton}>
              <span className={styles.buttonText}>View Open Positions</span>
              <div className={styles.buttonGlow}></div>
              <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/>
                <path d="M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <Link href="#company-culture" className={styles.secondaryButton}>
              <span className={styles.buttonText}>Our Culture</span>
              <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
