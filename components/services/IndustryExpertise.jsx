"use client"
import React from 'react'
import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from '@/components/ui/animated-slideshow'
import styles from '@/styles/services/IndustryExpertise.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const IndustryExpertise = () => {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare & Medical',
      name: 'Healthcare',
      description: 'HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.',
      expertise: ['Electronic Health Records', 'Telemedicine Platforms', 'Medical Device Integration', 'Patient Management Systems'],
      projects: '50+ Healthcare Projects',
      compliance: 'HIPAA Certified',
      imageUrl: 'https://media.istockphoto.com/id/1327568875/photo/healthcare-business-graph-data-and-growth-insurance-healthcare-doctor-analyzing-medical-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yc-ZO1Ny0A33TqvaeczOFa0pWQpYn76UkAeqSPUdzfw='
    },
    {
      id: 'finance',
      title: 'Financial Services',
      name: 'Financial Services',
      description: 'Reliable and scalable fintech solutions built for performance and compliance.',
      expertise: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Blockchain Solutions'],
      projects: '75+ Fintech Projects',
      compliance: 'SOX & PCI DSS',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      name: 'Retail & E-commerce',
      description: 'Omnichannel retail solutions driving customer engagement and sales.',
      expertise: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'],
      projects: '100+ Retail Solutions',
      compliance: 'PCI Compliant',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 'saas',
      title: 'SaaS & Technology',
      name: 'SaaS & Technology',
      description: 'Scalable cloud-native applications for modern software companies.',
      expertise: ['Multi-tenant Architecture', 'API Development', 'Microservices', 'DevOps Automation'],
      projects: '200+ SaaS Products',
      compliance: 'SOC 2 Type II',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & IoT',
      name: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart manufacturing and supply chain.',
      expertise: ['IoT Integration', 'Supply Chain Management', 'Quality Control Systems', 'Predictive Maintenance'],
      projects: '40+ Manufacturing Systems',
      compliance: 'ISO 27001',
      imageUrl: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 'education',
      title: 'Education & EdTech',
      name: 'Education & EdTech',
      description: 'Digital learning platforms and educational management systems.',
      expertise: ['Learning Management Systems', 'Student Information Systems', 'Virtual Classrooms', 'Assessment Tools'],
      projects: '60+ EdTech Solutions',
      compliance: 'FERPA Compliant',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center'
    }
  ]

  return (
    <section className={styles.industryExpertise}>
      {/* Background Grid */}
      <div className={styles.backgroundGrid}></div>

      <div className={styles.container}>
        <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Industry Expertise
              <span className={styles.gradientText}>
                Across Sectors
              </span>
            </h2>
          </div>
        </GsapFadeIn>

        <GsapFadeIn effect="fade" duration={1.2} delay={0.4}>
          <div className={styles.slideshowContainer}>
            <HoverSlider className="min-h-[200px] flex items-center justify-center">
              <div className="w-full">
                <div className={styles.slideshowContent}>
                  {/* Industry Titles */}
                  <div className={styles.industryTitles}>
                    {industries.map((industry, index) => (
                      <div key={industry.title} className="group">
                        <TextStaggerHover
                          index={index}
                          className={styles.industryTitle}
                          text={industry.title}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Image Slideshow */}
                  <div className={styles.imageContainer}>
                    <HoverSliderImageWrap className={styles.imageWrapper}>
                      {industries.map((industry, index) => (
                        <div key={industry.id} className="relative">
                          <HoverSliderImage
                            index={index}
                            imageUrl={industry.imageUrl}
                            alt={industry.title}
                            className={styles.industryImage}
                            loading="eager"
                            decoding="async"
                          />
                          {/* Image Overlay with Industry Info */}
                          {/* <div className={styles.imageOverlay}>
                            <div className={styles.overlayContent}>
                              <h4 className={styles.overlayTitle}>{industry.name}</h4>
                              <p className={styles.overlayDescription}>{industry.description}</p>
                              <div className={styles.expertiseTags}>
                                {industry.expertise.slice(0, 2).map((skill, idx) => (
                                  <span key={idx} className={styles.expertiseTag}>
                                    {skill}
                                  </span>
                                ))}
                                {industry.expertise.length > 2 && (
                                  <span className={styles.moreTag}>
                                    +{industry.expertise.length - 2} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div> */}
                        </div>
                      ))}
                    </HoverSliderImageWrap>
                  </div>
                </div>
              </div>
            </HoverSlider>
          </div>
        </GsapFadeIn>

        <GsapFadeIn effect="slide-up" duration={1} delay={1.2}>
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Don't See Your Industry?</h3>
            <p className={styles.ctaDescription}>
              We adapt our expertise to serve businesses across all sectors.
              Let's discuss how we can help transform your industry-specific challenges.
            </p>
            <button className={styles.ctaButton}>
              <span>Discuss Your Industry</span>
              <span className={styles.ctaIcon}>💬</span>
            </button>
          </div>
        </GsapFadeIn>
      </div>
    </section>
  )
}

export default IndustryExpertise
