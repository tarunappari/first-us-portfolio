'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/about/CompanyTimeline.module.scss';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
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

export default CompanyTimeline;
