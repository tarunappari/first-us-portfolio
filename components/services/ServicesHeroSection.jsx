"use client"
import React from 'react'
import styles from '@/styles/services/ServicesHero.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'
import ServicesGrid from './ServicesGrid'

const ServicesHeroSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: "☁️"
    },
    {
      title: "AI Integration",
      description: "Intelligent automation and AI-powered business solutions",
      icon: "🤖"
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
            <span className={styles.badge}>Our Services</span>
          </GsapFadeIn>

          <GsapFadeIn effect="slide-up" duration={1} delay={0.4}>
            <h1 className={styles.title}>
              Transforming Ideas Into
              <span className={styles.gradient}> Digital Excellence</span>
            </h1>
          </GsapFadeIn>

          <GsapFadeIn effect="slide-up" duration={1} delay={0.6}>
            <p className={styles.description}>
              We deliver cutting-edge technology solutions that drive business growth,
              enhance user experiences, and position your company at the forefront of digital innovation.
            </p>
          </GsapFadeIn>

          <GsapFadeIn effect="slide-up" duration={1} delay={0.8}>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                Get Started
                <span className={styles.arrow}>→</span>
              </button>
              <button className={styles.secondaryBtn}>
                View Portfolio
              </button>
            </div>
          </GsapFadeIn>
        </div>

        <ServicesGrid
          services={services}
          animationDelay={1}
          staggerDelay={0.15}
        />
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </div>
  )
}

export default ServicesHeroSection;
