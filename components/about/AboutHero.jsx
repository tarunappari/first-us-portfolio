"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/about/AboutHero.module.scss";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.aboutHero}>
      {/* Futuristic Background */}
      <div className={styles.backgroundLayer}>
        <div className={styles.geometricShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
        <div className={styles.glowingLines}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.title} ${isVisible ? styles.visible : ""}`}>
            More Than Just IT
          </h1>

          <p className={styles.description}>
            Firstus IT is a dynamic team of strategists, developers, AI
            engineers, and consultants. We help businesses navigate digital
            transformation through AI solutions, system modernization, and tech
            staffing—delivering innovation, efficiency, and results. Our mission
            is to empower organizations with future-ready technology that drives
            growth and adaptability.
          </p>

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.number}>500+</span>
              <span className={styles.label}>Projects</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.number}>10+</span>
              <span className={styles.label}>Years</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.number}>99%</span>
              <span className={styles.label}>Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
