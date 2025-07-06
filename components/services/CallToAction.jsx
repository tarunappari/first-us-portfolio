'use client';

import { useState } from 'react';
import styles from '../../styles/services/CallToAction.module.scss';

const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);

  const ctaFeatures = [
    {
      icon: '🚀',
      title: 'Free Consultation',
      description: 'Get expert advice tailored to your business needs'
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description: 'We respond within 24 hours to all inquiries'
    },
    {
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Tailored technology solutions for your industry'
    },
    {
      icon: '🛡️',
      title: 'Guaranteed Results',
      description: '100% satisfaction guarantee on all projects'
    }
  ];

  const handleGetStarted = () => {
    // Add your contact form or navigation logic here
    console.log('Get Started clicked');
  };

  const handleScheduleCall = () => {
    // Add your scheduling logic here
    console.log('Schedule Call clicked');
  };

  return (
    <section className={styles.callToAction}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Main CTA Content */}
        <div className={styles.ctaContent}>
          <div className={styles.ctaHeader}>
            <div className={styles.handshakeIcon}>
              <div className={styles.iconGlow}></div>
              <span className={styles.mainIcon}>🤝</span>
            </div>
            
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your Business?
            </h2>
            
            <p className={styles.ctaDescription}>
              Join 500+ successful companies who have accelerated their growth with our 
              cutting-edge technology solutions. Let's build something extraordinary together.
            </p>
          </div>

          {/* CTA Features Grid */}
          <div className={styles.featuresGrid}>
            {ctaFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={styles.featureCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.featureIcon}>
                  <span>{feature.icon}</span>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryButton}
              onClick={handleGetStarted}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className={styles.buttonText}>Get Started Today</span>
              <div className={styles.buttonIcon}>
                <span>🚀</span>
              </div>
              <div className={styles.buttonGlow}></div>
            </button>

            <button 
              className={styles.secondaryButton}
              onClick={handleScheduleCall}
            >
              <span className={styles.buttonText}>Schedule a Call</span>
              <div className={styles.buttonIcon}>
                <span>📞</span>
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⭐</span>
              <span className={styles.trustText}>5-Star Rated</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🏆</span>
              <span className={styles.trustText}>Award Winning</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🔒</span>
              <span className={styles.trustText}>Secure & Compliant</span>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className={styles.successStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Support Available</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
