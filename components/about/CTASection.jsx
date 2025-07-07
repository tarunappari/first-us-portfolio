'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import styles from '@/styles/about/CTASection.module.scss';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CTASection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const section = sectionRef.current;
      const content = contentRef.current;
      const button = buttonRef.current;
      
      // Animate content with fade-in and slide-up
      if (content) {
        gsap.fromTo(content, 
          {
            opacity: 0,
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
      
      // Animate button with slight delay
      if (button) {
        gsap.fromTo(button, 
          {
            opacity: 0,
            y: 20,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  }, []);

  return (
    <section className={styles.ctaSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.ctaContent} ref={contentRef}>
          <h2 className={styles.ctaHeading}>
            Ready to Transform Your Business?
          </h2>
          <p className={styles.ctaSubheading}>
            Let's discuss how our expertise can drive your success. Get in touch with our team today and discover the difference professional IT consulting can make.
          </p>
          
          <Link href="/contact" className={styles.ctaButton} ref={buttonRef}>
            <span className={styles.buttonText}>Start Your Journey</span>
            <div className={styles.buttonGlow}></div>
            <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/>
              <path d="M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gradientOrb3}></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
