"use client";

// 📁 Usage Summary:
//checkout demo-gsap.jsx for usage

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🔄 Single Fade-In Wrapper Component
const GsapFadeIn = ({
  children,
  effect = "fade", // animation type
  delay = 0,
  duration = 1,
  easing = "power2.out",
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    let fromVars = { opacity: 0 };
    let toVars = { opacity: 1 };

    switch (effect) {
      case "slide-left":
        fromVars.x = -50;
        toVars.x = 0;
        break;
      case "slide-right":
        fromVars.x = 50;
        toVars.x = 0;
        break;
      case "slide-up":
        fromVars.y = 50;
        toVars.y = 0;
        break;
      case "slide-down":
        fromVars.y = -50;
        toVars.y = 0;
        break;
      case "zoom-in":
        fromVars.scale = 0.8;
        toVars.scale = 1;
        break;
      case "flip":
        fromVars.rotateY = 90;
        toVars.rotateY = 0;
        break;
      case "skew":
        fromVars.skewY = 10;
        toVars.skewY = 0;
        break;
      default:
        fromVars.opacity = 0;
        toVars.opacity = 1;
    }

    gsap.fromTo(
      el,
      { ...fromVars },
      {
        ...toVars,
        duration,
        delay,
        ease: easing,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [effect, delay, duration, easing]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
};

export default GsapFadeIn;

//
// 🔁 Staggered Reveal Hook
//
export const useStaggeredReveal = (itemsRef, options = {}) => {
  useEffect(() => {
    if (!itemsRef.current || !Array.isArray(itemsRef.current)) return;

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: itemsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...options.trigger,
        },
      }
    );
  }, [itemsRef, options]);
};

//
// ⏱️ Timeline Scroll Animation Hook
//
export const useGsapTimeline = (targets = [], config = {}) => {
  useEffect(() => {
    if (!targets.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: targets[0],
        start: "top 80%",
        toggleActions: "play none none reverse",
        ...config.trigger,
      },
    });

    // Animate each in sequence
    tl.from(targets[0], { opacity: 0, y: 40, duration: 0.8 });
    if (targets[1]) tl.from(targets[1], { opacity: 0, x: -40, duration: 0.8 }, "-=0.4");
    if (targets[2]) tl.from(targets[2], { opacity: 0, scale: 0.8, duration: 0.8 }, "-=0.4");
  }, [targets, config]);
};

//
// 📌 Pinned Section Hook (Parallax)
//
export const usePinnedSection = (sectionRef) => {
  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=1000",
      pin: true,
      pinSpacing: true,
      scrub: true,
    });
  }, [sectionRef]);
};
