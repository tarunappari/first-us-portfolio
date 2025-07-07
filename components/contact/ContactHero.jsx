'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/contact/ContactHero.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactHero = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightFormRef = useRef(null);
  const backgroundRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'AI & Machine Learning',
    'DevOps & Infrastructure',
    'Digital Transformation',
    'Cybersecurity',
    'Data Analytics',
    'Other'
  ];

  const budgetRanges = [
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+',
    'Let\'s Discuss'
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const section = sectionRef.current;
      const leftContent = leftContentRef.current;
      const rightForm = rightFormRef.current;
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

      // Animate left content
      if (leftContent) {
        gsap.fromTo(leftContent,
          {
            opacity: 0,
            x: -50,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            delay: 0.5,
            ease: "power2.out"
          }
        );
      }

      // Animate right form
      if (rightForm) {
        gsap.fromTo(rightForm,
          {
            opacity: 0,
            x: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            delay: 0.7,
            ease: "power2.out"
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  return (
    <section className={styles.contactHeroSection} ref={sectionRef}>
      {/* Futuristic Background Elements */}
      <div className={styles.backgroundElements} ref={backgroundRef}>
        <div className={`${styles.techGrid} ${styles.floatingElement}`}></div>
        <div className={`${styles.glowOrb1} ${styles.floatingElement}`}></div>
        <div className={`${styles.glowOrb2} ${styles.floatingElement}`}></div>
        <div className={`${styles.glowOrb3} ${styles.floatingElement}`}></div>
        <div className={`${styles.circuitLines} ${styles.floatingElement}`}></div>
        <div className={`${styles.dataStream} ${styles.floatingElement}`}></div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.leftContent} ref={leftContentRef}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>Get in Touch</span>
              <div className={styles.badgeGlow}></div>
            </div>

            <h1 className={styles.heroTitle}>
              Let's Build Something
              <span className={styles.gradientText}> Amazing Together</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Ready to transform your business with cutting-edge technology solutions?
              Our team of experts is here to help you navigate the digital landscape
              and achieve your goals.
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>Email Us</h3>
                  <p className={styles.methodText}>hello@firstusit.com</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>Call Us</h3>
                  <p className={styles.methodText}>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>Visit Us</h3>
                  <p className={styles.methodText}>123 Tech Street, Digital City</p>
                </div>
              </div>
            </div>

            <div className={styles.responseTime}>
              <div className={styles.responseIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <span className={styles.responseText}>We typically respond within 24 hours</span>
            </div>
          </div>

          {/* Right Form */}
          <div className={styles.rightForm} ref={rightFormRef}>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Start Your Project</h2>
                <p className={styles.formSubtitle}>Tell us about your vision and let's create something extraordinary together.</p>
              </div>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  <span className={styles.buttonText}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className={styles.buttonGlow}></div>
                  {!isSubmitting && (
                    <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14"/>
                      <path d="M12 5l7 7-7 7"/>
                    </svg>
                  )}
                  {isSubmitting && (
                    <div className={styles.spinner}></div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
