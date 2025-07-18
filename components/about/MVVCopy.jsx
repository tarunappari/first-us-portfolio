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



// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CompanyTimeline = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const steps = stepsRef.current;

      // Animate steps with staggered fade-in and slide-up
      steps.forEach((step, index) => {
        if (step) {
          gsap.fromTo(step,
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
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: step,
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

  const journeySteps = [
    {
      phase: 'Today',
      iconType: 'foundation',
      title: 'Building Foundation',
      description: 'Establishing our core team and developing cutting-edge solutions with passion and expertise to serve our first clients.'
    },
    {
      phase: 'Next',
      iconType: 'growth',
      title: 'Growing Presence',
      description: 'Expanding our service offerings and building strong client relationships while establishing our reputation in the market.'
    },
    {
      phase: 'Later',
      iconType: 'shield',
      title: 'Market Leadership',
      description: 'Scaling our operations, forming strategic partnerships, and becoming a recognized leader in digital transformation.'
    },
    {
      phase: 'Future',
      iconType: 'innovation',
      title: 'Innovation Pioneer',
      description: 'Leading the industry with AI-powered solutions and emerging technologies, shaping the future of IT consulting.'
    }
  ];

  return (
    <section className={styles.journeySection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Journey Starts Here</h2>
          <p className={styles.sectionSubtitle}>
            From today's foundation to tomorrow's innovation
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {journeySteps.map((step, index) => (
            <div
              key={step.phase}
              className={styles.step}
              ref={el => stepsRef.current[index] = el}
            >
              <div className={styles.stepIcon}>
                <div className={styles.iconContainer}>
                  {step.iconType === 'foundation' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18"/>
                      <path d="M5 21V7l8-4v18"/>
                      <path d="M19 21V11l-6-4"/>
                    </svg>
                  )}
                  {step.iconType === 'growth' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18"/>
                      <path d="M7 12l4-4 4 4 6-6"/>
                      <circle cx="7" cy="12" r="1"/>
                      <circle cx="11" cy="8" r="1"/>
                      <circle cx="15" cy="12" r="1"/>
                      <circle cx="21" cy="6" r="1"/>
                    </svg>
                  )}
                  {step.iconType === 'shield' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  )}
                  {step.iconType === 'innovation' && (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6"/>
                      <path d="M12 17v6"/>
                      <path d="M4.22 4.22l4.24 4.24"/>
                      <path d="M15.54 15.54l4.24 4.24"/>
                      <path d="M1 12h6"/>
                      <path d="M17 12h6"/>
                      <path d="M4.22 19.78l4.24-4.24"/>
                      <path d="M15.54 8.46l4.24-4.24"/>
                    </svg>
                  )}
                </div>
                <div className={styles.iconGlow}></div>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepPhase}>{step.phase}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < journeySteps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
