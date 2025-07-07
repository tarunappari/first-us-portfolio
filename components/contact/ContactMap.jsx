'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/contact/ContactMap.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactMap = () => {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const infoRef = useRef(null);

  const offices = [
    {
      id: 1,
      name: 'Headquarters',
      address: '123 Tech Street, Digital City, DC 12345',
      phone: '+1 (555) 123-4567',
      email: 'hello@firstusit.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      type: 'primary'
    },
    {
      id: 2,
      name: 'Development Center',
      address: '456 Innovation Ave, Tech Valley, TV 67890',
      phone: '+1 (555) 987-6543',
      email: 'dev@firstusit.com',
      hours: 'Mon-Fri: 8:00 AM - 7:00 PM',
      type: 'secondary'
    },
    {
      id: 3,
      name: 'Client Services',
      address: '789 Business Blvd, Enterprise City, EC 54321',
      phone: '+1 (555) 456-7890',
      email: 'support@firstusit.com',
      hours: 'Mon-Sun: 24/7 Support',
      type: 'support'
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const section = sectionRef.current;
      const map = mapRef.current;
      const info = infoRef.current;

      // Animate map
      if (map) {
        gsap.fromTo(map,
          {
            opacity: 0,
            scale: 0.9,
            y: 30
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate office cards
      if (info) {
        const cards = info.querySelectorAll(`.${styles.officeCard}`);
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: info,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  }, []);

  return (
    <section className={styles.contactMapSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Visit Our
            <span className={styles.gradientText}> Offices</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            We have multiple locations to serve you better. Find the office nearest to you.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Map Container */}
          <div className={styles.mapContainer} ref={mapRef}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className={styles.mapTitle}>Interactive Map</h3>
              <p className={styles.mapDescription}>
                Explore our office locations and find the best route to reach us.
              </p>
              <div className={styles.mapFeatures}>
                <div className={styles.mapFeature}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                  <span>3 Office Locations</span>
                </div>
                <div className={styles.mapFeature}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                  <span>Flexible Hours</span>
                </div>
                <div className={styles.mapFeature}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 2v4"/>
                    <path d="M16 2v4"/>
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <path d="M3 10h18"/>
                  </svg>
                  <span>Schedule a Visit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className={styles.officeInfo} ref={infoRef}>
            {offices.map((office) => (
              <div key={office.id} className={`${styles.officeCard} ${styles[office.type]}`}>
                <div className={styles.officeHeader}>
                  <div className={styles.officeIcon}>
                    {office.type === 'primary' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9,22 9,12 15,12 15,22"/>
                      </svg>
                    )}
                    {office.type === 'secondary' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    )}
                    {office.type === 'support' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className={styles.officeName}>{office.name}</h3>
                </div>

                <div className={styles.officeDetails}>
                  <div className={styles.officeDetail}>
                    <div className={styles.detailIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <span className={styles.detailText}>{office.address}</span>
                  </div>

                  <div className={styles.officeDetail}>
                    <div className={styles.detailIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <span className={styles.detailText}>{office.phone}</span>
                  </div>

                  <div className={styles.officeDetail}>
                    <div className={styles.detailIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <span className={styles.detailText}>{office.email}</span>
                  </div>

                  <div className={styles.officeDetail}>
                    <div className={styles.detailIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <span className={styles.detailText}>{office.hours}</span>
                  </div>
                </div>

                <div className={styles.officeActions}>
                  <a href="#" className={styles.actionButton}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                    Get Directions
                  </a>
                  <a href="#" className={styles.actionButton}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 2v4"/>
                      <path d="M16 2v4"/>
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <path d="M3 10h18"/>
                    </svg>
                    Schedule Visit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
