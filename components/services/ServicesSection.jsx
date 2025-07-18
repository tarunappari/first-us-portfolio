"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
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
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Full-stack web and mobile applications built with cutting-edge technologies and modern frameworks.',
      features: ['React/Next.js', 'Mobile Apps', 'API Development', 'Database Design'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions protecting your digital assets with advanced threat detection.',
      features: ['Threat Detection', 'Compliance Audit', 'Security Training', 'Incident Response'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'Intelligent automation solutions leveraging machine learning to optimize business processes.',
      features: ['ML Models', 'Process Automation', 'Data Analytics', 'AI Integration'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'it-staffing',
      title: 'IT Staffing Solutions',
      description: 'Expert IT professionals and dedicated development teams to scale your technology initiatives.',
      features: ['Skilled Developers', 'Project Teams', 'Staff Augmentation', 'Remote Teams'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'strategic-consulting',
      title: 'Strategic Consulting',
      description: 'Technology strategy and digital transformation consulting to drive business growth and innovation.',
      features: ['Digital Strategy', 'Tech Roadmap', 'Architecture Review', 'Innovation Labs'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center'
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
                    {/* Service Image */}
                    <div className={styles.serviceImageContainer}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        className={styles.serviceImage}
                        priority={index < 3}
                      />
                    </div>
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
