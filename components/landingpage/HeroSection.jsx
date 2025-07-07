"use client"
import React from 'react'
import styles from '@/styles/landingpage/HeroSection.module.scss'
import { SplineSceneBasic } from '../ui/spline-demo';
import { ContainerTextFlip } from '../ui/container-text-flip';
import GsapFadeIn from '@/components/animations/GsapFadeIn';



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
                <SplineSceneBasic />
            </div>
        </div>
    )
}

export default HeroSection;
