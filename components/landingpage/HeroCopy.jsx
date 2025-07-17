"use client"
import React, { Suspense, lazy } from 'react'
import styles from '@/styles/landingpage/HeroSection.module.scss'
import { ContainerTextFlip } from '../ui/container-text-flip';
import GsapFadeIn from '@/components/animations/GsapFadeIn';

// Lazy load heavy 3D component
const SplineSceneBasic = lazy(() => import('../ui/spline-demo').then(module => ({ default: module.SplineSceneBasic })));

// Loading placeholder for Spline
const SplineLoader = () => (
  <div className={styles.splineLoader}>
    <div className="animate-pulse bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg w-full h-full flex items-center justify-center">
      <div className="text-white/60">Loading 3D Scene...</div>
    </div>
  </div>
);



const HeroSection = () => {
    return (
        <div className={styles.containerHero}>
            {/* Futuristic Background Elements */}
            <div className={styles.backgroundElements}>
                <div className={styles.gridOverlay}></div>
                <div className={styles.glowOrb1}></div>
                <div className={styles.glowOrb2}></div>
                <div className={styles.glowOrb3}></div>
                <div className={styles.scanLine}></div>
                <div className={styles.techLines}>
                    <div className={styles.techLine1}></div>
                    <div className={styles.techLine2}></div>
                    <div className={styles.techLine3}></div>
                </div>
                <div className={styles.floatingParticles}>
                    <div className={styles.particle1}></div>
                    <div className={styles.particle2}></div>
                    <div className={styles.particle3}></div>
                    <div className={styles.particle4}></div>
                    <div className={styles.particle5}></div>
                </div>
                <div className={styles.circuitPattern}></div>
                <div className={styles.dataStream}></div>
            </div>

            <div className={styles.content}>
                <GsapFadeIn effect="slide-left" duration={1} delay={0.2}>
                    <h1><span className='textGradient'>Empowering</span>  Your Business with </h1>
                </GsapFadeIn>
                <ContainerTextFlip />
                <GsapFadeIn effect="slide-left" duration={1} delay={0.5}>
                    <p>Empowering business growth through strategic IT solutions.</p>
                </GsapFadeIn>

            </div>

            <div className={styles.rightContainer}>
                <Suspense fallback={<SplineLoader />}>
                    <SplineSceneBasic />
                </Suspense>
            </div>
        </div>
    )
}

export default HeroSection;
