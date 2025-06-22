"use client";
import { useEffect } from "react";
import Lenis from 'lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // 🔁 Sync Lenis with GSAP
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🔌 Tell ScrollTrigger to use Lenis scroll
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Fix: Use lenis.on("scroll") instead of lenis.update
    ScrollTrigger.addEventListener("refresh", () => {
      lenis.resize(); // Use resize() instead of update()
    });
    
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return null;
}



 // usgae //

//  https://michalsnik.github.io/aos/

// npm install @studio-freight/lenis gsap

// import SmoothScroll from '@/components/SmoothScroll';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <SmoothScroll />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

// components/HeroSection.js
// import { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   const titleRef = useRef(null);

//   useEffect(() => {
//     gsap.from(titleRef.current, {
//       scrollTrigger: {
//         trigger: titleRef.current,
//         start: "top 80%", // when 80% of the element enters the viewport
//       },
//       x: -100,       // move from left
//       opacity: 0,    // fade in
//       duration: 1,   // 1 second animation
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <h1 ref={titleRef} style={{ fontSize: '3rem' }}>Unlock Your Potential</h1>
//     </section>
//   );
// };

// export default HeroSection;


