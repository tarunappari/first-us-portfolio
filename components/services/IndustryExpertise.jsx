"use client"
import React from 'react'
import styles from '@/styles/services/IndustryExpertise.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const IndustryExpertise = () => {
  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: '🏥',
      description: 'HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.',
      expertise: ['Electronic Health Records', 'Telemedicine Platforms', 'Medical Device Integration', 'Patient Management Systems'],
      projects: '50+ Healthcare Projects',
      compliance: 'HIPAA Certified'
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: '💰',
      description: 'Reliable and scalable fintech solutions built for performance and compliance.',
      expertise: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Blockchain Solutions'],
      projects: '75+ Fintech Projects',
      compliance: 'SOX & PCI DSS'
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: '🛍️',
      description: 'Omnichannel retail solutions driving customer engagement and sales.',
      expertise: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'],
      projects: '100+ Retail Solutions',
      compliance: 'PCI Compliant'
    },
    {
      id: 'saas',
      name: 'SaaS & Technology',
      icon: '☁️',
      description: 'Scalable cloud-native applications for modern software companies.',
      expertise: ['Multi-tenant Architecture', 'API Development', 'Microservices', 'DevOps Automation'],
      projects: '200+ SaaS Products',
      compliance: 'SOC 2 Type II'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Industry 4.0 solutions for smart manufacturing and supply chain.',
      expertise: ['IoT Integration', 'Supply Chain Management', 'Quality Control Systems', 'Predictive Maintenance'],
      projects: '40+ Manufacturing Systems',
      compliance: 'ISO 27001'
    },
    {
      id: 'education',
      name: 'Education & EdTech',
      icon: '🎓',
      description: 'Digital learning platforms and educational management systems.',
      expertise: ['Learning Management Systems', 'Student Information Systems', 'Virtual Classrooms', 'Assessment Tools'],
      projects: '60+ EdTech Solutions',
      compliance: 'FERPA Compliant'
    }
  ]

  return (
    <section className={styles.industryExpertise}>
      <div className={styles.container}>
        <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Industry Expertise
              <span className={styles.gradientText}> Across Sectors</span>
            </h2>
            <p className={styles.sectionDescription}>
              Deep domain knowledge and proven track record across diverse industries, 
              delivering tailored solutions that meet specific regulatory and business requirements.
            </p>
          </div>
        </GsapFadeIn>

        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <GsapFadeIn 
              key={industry.id} 
              effect="slide-up" 
              duration={1} 
              delay={0.4 + (index * 0.1)}
            >
              <div className={`${styles.industryCard} ${styles[industry.id]}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <div className={styles.industryInfo}>
                    <h3 className={styles.industryName}>{industry.name}</h3>
                    <div className={styles.industryStats}>
                      <span className={styles.projects}>{industry.projects}</span>
                      <span className={styles.compliance}>{industry.compliance}</span>
                    </div>
                  </div>
                </div>

                <p className={styles.industryDescription}>{industry.description}</p>

                <div className={styles.expertiseList}>
                  <h4 className={styles.expertiseTitle}>Core Expertise</h4>
                  <div className={styles.expertiseTags}>
                    {industry.expertise.map((skill, idx) => (
                      <span key={idx} className={styles.expertiseTag}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button className={styles.learnMoreBtn}>
                    <span>View Case Studies</span>
                    <div className={styles.btnIcon}>→</div>
                  </button>
                </div>

                {/* Background Visual Elements */}
                <div className={styles.cardVisual}>
                  <div className={styles[`${industry.id}Visual`]}></div>
                </div>
              </div>
            </GsapFadeIn>
          ))}
        </div>

        <GsapFadeIn effect="slide-up" duration={1} delay={1.2}>
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Don't See Your Industry?</h3>
            <p className={styles.ctaDescription}>
              We adapt our expertise to serve businesses across all sectors. 
              Let's discuss how we can help transform your industry-specific challenges.
            </p>
            <button className={styles.ctaButton}>
              <span>Discuss Your Industry</span>
              <div className={styles.ctaIcon}>💬</div>
            </button>
          </div>
        </GsapFadeIn>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  )
}

export default IndustryExpertise
