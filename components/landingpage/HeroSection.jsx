"use client"
import React from 'react'
import styles from '@/styles/landingpage/HeroSection.module.scss'
import Lottie from 'lottie-react';
import bot from '@/public/assets/lottie/ai.json'
import { SplineSceneBasic } from '../ui/spline-demo';
import { ContainerTextFlip } from '../ui/container-text-flip';
import GsapFadeIn from '@/components/animations/GsapFadeIn';



const HeroSection = () => {
    return (
        <div className={styles.containerHero}>
            <div className={styles.content}>
                <GsapFadeIn effect="slide-left" duration={1} delay={0.2}>
                    <h1>Empowering Your Business with </h1>
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
