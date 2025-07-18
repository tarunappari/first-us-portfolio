// "use client"
// import React, { Suspense, lazy } from 'react'
// import styles from '@/styles/landingpage/HeroSection.module.scss'
// import { ContainerTextFlip } from '../ui/container-text-flip';
// import GsapFadeIn from '@/components/animations/GsapFadeIn';

// // Lazy load heavy 3D component
// const SplineSceneBasic = lazy(() => import('../ui/spline-demo').then(module => ({ default: module.SplineSceneBasic })));

// // Loading placeholder for Spline
// const SplineLoader = () => (
//   <div className={styles.splineLoader}>
//     <div className="animate-pulse bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg w-full h-full flex items-center justify-center">
//       <div className="text-white/60">Loading 3D Scene...</div>
//     </div>
//   </div>
// );



// const HeroSection = () => {
//     return (
//         <div className={styles.containerHero}>
//             {/* Futuristic Background Elements */}
//             <div className={styles.backgroundElements}>
//                 <div className={styles.gridOverlay}></div>
//                 <div className={styles.glowOrb1}></div>
//                 <div className={styles.glowOrb2}></div>
//                 <div className={styles.glowOrb3}></div>
//                 <div className={styles.scanLine}></div>
//                 <div className={styles.techLines}>
//                     <div className={styles.techLine1}></div>
//                     <div className={styles.techLine2}></div>
//                     <div className={styles.techLine3}></div>
//                 </div>
//                 <div className={styles.floatingParticles}>
//                     <div className={styles.particle1}></div>
//                     <div className={styles.particle2}></div>
//                     <div className={styles.particle3}></div>
//                     <div className={styles.particle4}></div>
//                     <div className={styles.particle5}></div>
//                 </div>
//                 <div className={styles.circuitPattern}></div>
//                 <div className={styles.dataStream}></div>
//             </div>

            // <div className={styles.content}>
            //     <GsapFadeIn effect="slide-left" duration={1} delay={0.2}>
            //         <h1><span className='textGradient'>Empowering</span>  Your Business with </h1>
            //     </GsapFadeIn>
            //     <ContainerTextFlip />
            //     <GsapFadeIn effect="slide-left" duration={1} delay={0.5}>
            //         <p>Empowering business growth through strategic IT solutions.</p>
            //     </GsapFadeIn>
            // </div>

//             <div className={styles.rightContainer}>
//                 <Suspense fallback={<SplineLoader />}>
//                     <SplineSceneBasic />
//                 </Suspense>
//             </div>
//         </div>
//     )
// }

// export default HeroSection;




"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

// IT Consultancy related products/services with Unsplash images
export const itConsultancyProducts = [
  {
    title: "Cloud Infrastructure Solutions",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Custom Software Development",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "AI & Machine Learning Integration",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Cybersecurity & Risk Management",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Enterprise Digital Transformation",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Data Analytics & Business Intelligence",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Mobile App Development",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "DevOps & Automation",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "IT Staffing & Consulting",
    link: "/careers",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Blockchain & Web3 Solutions",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "IoT & Smart Systems",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Quality Assurance & Testing",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "System Integration Services",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Technical Support & Maintenance",
    link: "/contact",
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Digital Strategy Consulting",
    link: "/about",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=center",
  },
];

const HeroSection = () => {
  return (
    <div className="w-full">
      <HeroParallax products={itConsultancyProducts} />
    </div>
  );
};

export default HeroSection;

