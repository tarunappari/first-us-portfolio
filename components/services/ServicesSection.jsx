"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/services/ServicesSection.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const ServicesSection = () => {
  const router = useRouter()

  const handleLearnMore = (serviceId) => {
    router.push(`/services/${serviceId}`)
  }

  const services = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with enterprise-grade security, automated deployment, and 99.9% uptime guarantee.',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', '24/7 Monitoring'],
      icon: '☁️'
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Full-stack web and mobile applications built with cutting-edge technologies and modern frameworks.',
      features: ['React/Next.js', 'Mobile Apps', 'API Development', 'Database Design'],
      icon: '💻'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions protecting your digital assets with advanced threat detection.',
      features: ['Threat Detection', 'Compliance Audit', 'Security Training', 'Incident Response'],
      icon: '🛡️'
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'Intelligent automation solutions leveraging machine learning to optimize business processes.',
      features: ['ML Models', 'Process Automation', 'Data Analytics', 'AI Integration'],
      icon: '🤖'
    },
    {
      id: 'it-staffing',
      title: 'IT Staffing Solutions',
      description: 'Expert IT professionals and dedicated development teams to scale your technology initiatives.',
      features: ['Skilled Developers', 'Project Teams', 'Staff Augmentation', 'Remote Teams'],
      icon: '👥'
    },
    {
      id: 'strategic-consulting',
      title: 'Strategic Consulting',
      description: 'Technology strategy and digital transformation consulting to drive business growth and innovation.',
      features: ['Digital Strategy', 'Tech Roadmap', 'Architecture Review', 'Innovation Labs'],
      icon: '📊'
    }
  ]

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Our Expertise</span>
            <h2 className={styles.sectionTitle}>
              Comprehensive IT Solutions for
              <span className={styles.gradientText}> Modern Businesses</span>
            </h2>
            <p className={styles.sectionDescription}>
              From cloud infrastructure to AI automation, we deliver end-to-end technology solutions 
              that transform how your business operates and competes in the digital landscape.
            </p>
          </div>
        </GsapFadeIn>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <GsapFadeIn
              key={service.id}
              effect="slide-up"
              duration={0.8}
              delay={0.4 + (index * 0.1)}
            >
              <div className={`${styles.serviceCard} ${styles[service.id]}`}>
                <div className={styles.serviceVisual}>
                  <div className={styles.visualContainer}>
                    {/* Service Icon */}
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    {/* Dynamic visual content based on service ID */}
                    <div className={styles[`${service.id}Visual`]}></div>
                  </div>
                </div>

                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <div className={styles.serviceFeatures}>
                    {service.features.map((feature, idx) => (
                      <span key={idx} className={styles.feature}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    className={styles.serviceButton}
                    onClick={() => handleLearnMore(service.id)}
                  >
                    <span>Learn More</span>
                    <div className={styles.buttonIcon}>→</div>
                  </button>
                </div>

                <div className={styles.cardGlow}></div>
              </div>
            </GsapFadeIn>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gridPattern}></div>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
      </div>
    </section>
  )
}

export default ServicesSection
