"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/careers/LifeAtCompany.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LifeAtCompany = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const imageGridRef = useRef(null);

  const cultureHighlights = [
    {
      id: 1,
      title: "Innovation First",
      description:
        "We encourage creative thinking and provide the freedom to explore new technologies and methodologies.",
    },
    {
      id: 2,
      title: "Continuous Learning",
      description:
        "Access to training programs, conferences, and certifications to keep your skills cutting-edge.",
    },
    {
      id: 3,
      title: "Work-Life Harmony",
      description:
        "Flexible schedules, remote work options, and wellness programs that support your personal life.",
    },
    {
      id: 4,
      title: "Collaborative Environment",
      description:
        "Open communication, cross-functional teams, and a culture where every voice is heard and valued.",
    },
  ];

  const teamImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1695067058684-da5a90013c57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Team collaboration session",
      title: "Collaborative Workspace",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Innovation lab with latest technology",
      title: "Innovation Lab",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Team meeting and brainstorming",
      title: "Team Meetings",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1626196607758-266f19558d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Remote work setup",
      title: "Remote Flexibility",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Learning and development session",
      title: "Learning & Development",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const section = sectionRef.current;
      const leftColumn = leftColumnRef.current;
      const rightColumn = rightColumnRef.current;
      const imageGrid = imageGridRef.current;

      // Animate left column (text content)
      if (leftColumn) {
        gsap.fromTo(
          leftColumn,
          {
            opacity: 0,
            x: -80,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate right column (image grid)
      if (rightColumn) {
        gsap.fromTo(
          rightColumn,
          {
            opacity: 0,
            x: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate individual images with stagger
      if (imageGrid) {
        const images = imageGrid.querySelectorAll(`.${styles.imageItem}`);
        gsap.fromTo(
          images,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageGrid,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Floating animation for background elements
      gsap.to(`.${styles.floatingElement}`, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(6, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 4,
          from: "random",
        },
      });
    }
  }, []);

  return (
    <section className={styles.lifeAtCompanySection} ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div
          className={`${styles.gradientOrb1} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.gradientOrb2} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.techPattern} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.glowingLine1} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.glowingLine2} ${styles.floatingElement}`}
        ></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column - Text Content */}
          <div className={styles.leftColumn} ref={leftColumnRef}>
            <div className={styles.textContent}>
              <div className={styles.badge}>
                <span className={styles.badgeText}>Our Culture</span>
                <div className={styles.badgeGlow}></div>
              </div>

              <h2 className={styles.sectionTitle}>
                Life at <span className={styles.gradientText}>FirstUS</span>
              </h2>

              <p className={styles.sectionDescription}>
                Join a dynamic team where innovation meets collaboration. We
                foster an environment where creativity thrives, learning never
                stops, and every team member contributes to shaping the future
                of technology.
              </p>

              <div className={styles.highlightsList}>
                {cultureHighlights.map((highlight, index) => (
                  <div key={highlight.id} className={styles.highlightItem}>
                    <div className={styles.highlightIcon}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </div>
                    <div className={styles.highlightContent}>
                      <h4 className={styles.highlightTitle}>
                        {highlight.title}
                      </h4>
                      <p className={styles.highlightDescription}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.ctaButton}>
                <a href="#open-positions" className={styles.joinButton}>
                  <span className={styles.buttonText}>Join Our Team</span>
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
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className={styles.rightColumn} ref={rightColumnRef}>
            <div className={styles.imageGrid} ref={imageGridRef}>
              {teamImages.map((image, index) => (
                <div key={image.id} className={styles.imageItem}>
                  <div className={styles.imagePlaceholder}>
                    <img src={image.src} alt="img" />
                  </div>
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageTitle}>{image.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtCompany;
