"use client"
import React from 'react'
import styles from '@/styles/services/WhyChooseUs.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'
import { Features } from '../ui/features-8'

const WhyChooseUs = () => {

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
          <Features />
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
