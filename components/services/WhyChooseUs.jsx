"use client"
import React from 'react'
import styles from '@/styles/services/WhyChooseUs.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const WhyChooseUs = () => {
  const advantages = [
    {
      id: 'trust',
      title: 'Trusted Expertise',
      subtitle: 'Proven Track Record',
      description: 'Over 500+ successful projects delivered with 99.9% client satisfaction rate. Our certified professionals ensure enterprise-grade security and compliance.',
      icon: '🛡️',
      stats: [
        { label: 'Projects Delivered', value: '500+' },
        { label: 'Client Satisfaction', value: '99.9%' },
        { label: 'Security Certifications', value: '15+' },
        { label: 'Years Experience', value: '10+' }
      ],
      highlights: ['ISO 27001 Certified', 'SOC 2 Compliant', 'GDPR Ready', '24/7 Security Monitoring']
    },
    {
      id: 'growth',
      title: 'Accelerated Growth',
      subtitle: 'Measurable Results',
      description: 'Our solutions drive real business growth with average 40% increase in operational efficiency and 60% faster time-to-market for digital initiatives.',
      icon: '📈',
      stats: [
        { label: 'Efficiency Increase', value: '40%' },
        { label: 'Faster Time-to-Market', value: '60%' },
        { label: 'Cost Reduction', value: '35%' },
        { label: 'ROI Achievement', value: '250%' }
      ],
      highlights: ['Performance Analytics', 'Growth Metrics', 'Business Intelligence', 'Scalable Architecture']
    },
    {
      id: 'collaboration',
      title: 'Expert Team',
      subtitle: 'Collaborative Excellence',
      description: 'Our diverse team of 100+ certified professionals brings together expertise in cutting-edge technologies and agile methodologies.',
      icon: '👥',
      stats: [
        { label: 'Expert Professionals', value: '100+' },
        { label: 'Technology Stacks', value: '25+' },
        { label: 'Agile Teams', value: '20+' },
        { label: 'Global Clients', value: '200+' }
      ],
      highlights: ['Certified Developers', 'Agile Methodology', 'Cross-functional Teams', 'Continuous Learning']
    },
    {
      id: 'speed',
      title: 'Rapid Delivery',
      subtitle: 'Speed & Quality',
      description: 'Fast-track your digital transformation with our optimized development processes, delivering projects 50% faster without compromising quality.',
      icon: '⚡',
      stats: [
        { label: 'Faster Delivery', value: '50%' },
        { label: 'Quality Score', value: '98%' },
        { label: 'On-time Delivery', value: '95%' },
        { label: 'Bug-free Releases', value: '99%' }
      ],
      highlights: ['Agile Sprints', 'CI/CD Pipeline', 'Automated Testing', 'DevOps Integration']
    }
  ]

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose
              <span className={styles.gradientText}> Our Expertise</span>
            </h2>
            <p className={styles.sectionDescription}>
              Partner with industry leaders who deliver exceptional results through proven methodologies, 
              cutting-edge technology, and unwavering commitment to your success.
            </p>
          </div>
        </GsapFadeIn>

        <div className={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <GsapFadeIn 
              key={advantage.id} 
              effect="slide-up" 
              duration={1} 
              delay={0.4 + (index * 0.2)}
            >
              <div className={`${styles.advantageCard} ${styles[advantage.id]}`}>
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <div className={styles.advantageIcon}>{advantage.icon}</div>
                    <div className={styles.iconGlow}></div>
                  </div>
                  <div className={styles.titleContainer}>
                    <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                    <p className={styles.advantageSubtitle}>{advantage.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className={styles.advantageDescription}>{advantage.description}</p>

                {/* Statistics */}
                <div className={styles.statsGrid}>
                  {advantage.stats.map((stat, idx) => (
                    <div key={idx} className={styles.statItem}>
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className={styles.highlightsList}>
                  {advantage.highlights.map((highlight, idx) => (
                    <div key={idx} className={styles.highlightItem}>
                      <div className={styles.highlightIcon}>✓</div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Visual Elements */}
                <div className={styles.cardVisual}>
                  <div className={styles[`${advantage.id}Visual`]}></div>
                </div>
              </div>
            </GsapFadeIn>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingOrb3}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  )
}

export default WhyChooseUs
