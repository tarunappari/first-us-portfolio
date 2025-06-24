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
    if (!el) return;

    // Performance optimization: use will-change
    el.style.willChange = "transform, opacity";

    let fromVars = { opacity: 0 };
    let toVars = { opacity: 1 };

    switch (effect) {
      case "slide-left":
        fromVars.x = -50; // Reduced distance for smoother animation
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
        fromVars.scale = 0.9; // Less dramatic scale for better performance
        toVars.scale = 1;
        break;
      case "flip":
        fromVars.rotateY = 45; // Reduced rotation for smoother animation
        toVars.rotateY = 0;
        break;
      case "skew":
        fromVars.skewY = 5; // Reduced skew for better performance
        toVars.skewY = 0;
        break;
      default:
        fromVars.opacity = 0;
        toVars.opacity = 1;
    }

    const animation = gsap.fromTo(
      el,
      { ...fromVars },
      {
        ...toVars,
        duration,
        delay,
        ease: easing,
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Start earlier for smoother experience
          end: "bottom 15%",
          toggleActions: "play none none none", // Only play once, no reverse
          once: true, // Animate only once
          fastScrollEnd: true, // Performance optimization
        },
        onComplete: () => {
          // Remove will-change after animation completes
          el.style.willChange = "auto";
        }
      }
    );

    // Cleanup function
    return () => {
      animation.kill();
      if (el) el.style.willChange = "auto";
    };
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

    const items = itemsRef.current.filter(item => item !== null);
    if (items.length === 0) return;

    // Performance optimization: set will-change on all items
    items.forEach(item => {
      if (item) item.style.willChange = "transform, opacity";
    });

    const animation = gsap.fromTo(
      items,
      { opacity: 0, y: 20 }, // Reduced distance for smoother animation
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.6, // Total stagger duration
          from: "start",
          ease: "power2.out"
        },
        ease: "power2.out",
        duration: 0.6, // Slightly faster for better perceived performance
        scrollTrigger: {
          trigger: items[0],
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none none", // Only play once, no reverse
          once: true, // Animate only once
          fastScrollEnd: true,
          ...options.trigger,
        },
        onComplete: () => {
          // Remove will-change after animation completes
          items.forEach(item => {
            if (item) item.style.willChange = "auto";
          });
        }
      }
    );

    // Cleanup function
    return () => {
      animation.kill();
      items.forEach(item => {
        if (item) item.style.willChange = "auto";
      });
    };
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
        toggleActions: "play none none none", // Only play once, no reverse
        once: true, // Animate only once
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
