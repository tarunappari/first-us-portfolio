'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '@/styles/about/ClientLogoStrip.module.scss';

const ClientLogoStrip = () => {
  const stripRef = useRef(null);
  const logoContainerRef = useRef(null);

  // Client logos data - using placeholder company names for demonstration
  const clientLogos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'DataSystems', logo: 'DS' },
    { name: 'CloudWorks', logo: 'CW' },
    { name: 'DigitalFlow', logo: 'DF' },
    { name: 'NextGen Solutions', logo: 'NGS' },
    { name: 'SmartTech', logo: 'ST' },
    { name: 'FutureSoft', logo: 'FS' },
    { name: 'ProActive', logo: 'PA' },
    { name: 'TechVision', logo: 'TV' },
    { name: 'InnoCore', logo: 'IC' },
    { name: 'DataBridge', logo: 'DB' }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && logoContainerRef.current) {
      const container = logoContainerRef.current;
      const logos = container.children;
      
      // Set up infinite scroll animation
      const totalWidth = container.scrollWidth / 2; // Divide by 2 because we duplicate
      
      gsap.set(container, { x: 0 });
      
      // Create infinite scroll animation
      gsap.to(container, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });

      // Add hover pause functionality
      const handleMouseEnter = () => {
        gsap.to(container, { timeScale: 0.1, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(container, { timeScale: 1, duration: 0.3 });
      };

      if (stripRef.current) {
        stripRef.current.addEventListener('mouseenter', handleMouseEnter);
        stripRef.current.addEventListener('mouseleave', handleMouseLeave);
      }

      return () => {
        if (stripRef.current) {
          stripRef.current.removeEventListener('mouseenter', handleMouseEnter);
          stripRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []);

  return (
    <section className={styles.logoStripSection} ref={stripRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Trusted by Industry Leaders</h2>
          <p className={styles.sectionSubtitle}>
            Partnering with forward-thinking companies to drive digital transformation
          </p>
        </div>

        <div className={styles.logoStrip}>
          <div className={styles.logoContainer} ref={logoContainerRef}>
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div key={`first-${index}`} className={styles.logoItem}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoText}>{client.logo}</span>
                  <div className={styles.logoGlow}></div>
                </div>
                <span className={styles.clientName}>{client.name}</span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div key={`second-${index}`} className={styles.logoItem}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoText}>{client.logo}</span>
                  <div className={styles.logoGlow}></div>
                </div>
                <span className={styles.clientName}>{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.gradientOverlay}>
          <div className={styles.gradientLeft}></div>
          <div className={styles.gradientRight}></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoStrip;
