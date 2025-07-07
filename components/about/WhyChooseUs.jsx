'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/about/WhyChooseUs.module.scss';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cards = cardsRef.current;
      
      // Animate cards with staggered fade-in and slide-up
      cards.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, 
            {
              opacity: 0,
              y: 60,
              scale: 0.9
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
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }
  }, []);

  const trustFeatures = [
    {
      iconType: 'shield',
      title: 'Driven by Customer Excellence',
      description: 'Our commitment extends beyond transactions. By measuring customer satisfaction across 10 key areas, we fine-tune our approach to create lasting impact.',
      highlight: '98% Client Satisfaction',
      cardType: 'primary'
    },
    {
      iconType: 'growth',
      title: 'Solutions That Scale Beyond Us',
      description: 'By understanding your goals, tailoring solutions, and working side by side, we ensure momentum continues long after our job is done.',
      highlight: 'Long-term Partnership',
      cardType: 'secondary'
    },
    {
      iconType: 'team',
      title: 'Leading with Expertise and Purpose',
      description: 'We lead with technical excellence, build strategic relationships, and create environments where innovation and collaboration thrive.',
      highlight: 'Expert Leadership',
      cardType: 'accent'
    },
  ];

  return (
    <section className={styles.whyChooseSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
          <p className={styles.sectionSubtitle}>
            We’ve redefined consulting by making people our priority — yours and ours. We start by understanding your core purpose, then craft tailored, end-to-end solutions. With a team of top-tier strategists, engineers, and collaborators, we turn insight into measurable, lasting results.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {trustFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`${styles.trustCard} ${styles[feature.cardType]}`}
              ref={el => cardsRef.current[index] = el}
            >
              <div className={styles.cardIcon}>
                <div className={styles.iconContainer}>
                  {feature.iconType === 'shield' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  )}
                  {feature.iconType === 'growth' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18"/>
                      <path d="M7 12l4-4 4 4 6-6"/>
                      <circle cx="7" cy="12" r="1"/>
                      <circle cx="11" cy="8" r="1"/>
                      <circle cx="15" cy="12" r="1"/>
                      <circle cx="21" cy="6" r="1"/>
                    </svg>
                  )}
                  {feature.iconType === 'team' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                </div>
                <div className={styles.iconGlow}></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
                <div className={styles.cardHighlight}>
                  <span className={styles.highlightBadge}>{feature.highlight}</span>
                </div>
              </div>

              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
