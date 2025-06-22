"use client"
import React from 'react'
import styles from '@/styles/landingpage/HeroSection.module.scss'
import Lottie from 'lottie-react';
import bot from '@/public/assets/lottie/ai.json'
import { SplineSceneBasic } from '../ui/spline-demo';
import { ContainerTextFlip } from '../ui/container-text-flip';



const HeroSection = () => {
    return (
        <div className={styles.containerHero}>
            <div className={styles.content}>
                <h1>Empowering Your Business with </h1>
                <ContainerTextFlip />
                <p>Empowering business growth through strategic IT solutions.</p>
            </div>
            <div className={styles.rightContainer}>
                <SplineSceneBasic />
            </div>
            {/* <div className={styles.rightContainer}>
                <Lottie loop={true} animationData={bot}  />
            </div> */}
        </div>
    )
}

export default HeroSection;
