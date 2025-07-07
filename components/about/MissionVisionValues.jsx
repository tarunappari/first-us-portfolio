'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/about/MissionVisionValues.module.scss';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MissionVisionValues = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cards = cardsRef.current;
      
      // GSAP fade-in animation on scroll
      gsap.fromTo(cards, 
        {
          opacity: 0,
          y: 50,
          scale: 0.9
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
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const mvvData = [
    {
      id: 1,
      iconType: 'compass',
      title: 'Our Mission',
      description: 'To empower businesses through innovative technology solutions that drive digital transformation and sustainable growth in an ever-evolving digital landscape.'
    },
    {
      id: 2,
      iconType: 'telescope',
      title: 'Our Vision',
      description: 'To be the leading IT consulting partner that shapes the future of technology, creating seamless digital experiences that transform industries worldwide.'
    },
    {
      id: 3,
      iconType: 'award',
      title: 'Our Values',
      description: 'Innovation, integrity, and excellence guide everything we do. We believe in collaborative partnerships, continuous learning, and delivering exceptional value to our clients.'
    }
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
            The principles that drive our commitment to excellence
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {mvvData.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              ref={el => cardsRef.current[index] = el}
            >
              <div className={styles.cardIcon}>
                <div className={styles.iconContainer}>
                  {item.iconType === 'compass' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
                    </svg>
                  )}
                  {item.iconType === 'telescope' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  )}
                  {item.iconType === 'award' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="7"/>
                      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
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

export default MissionVisionValues;
