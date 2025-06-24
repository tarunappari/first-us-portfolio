"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PerformanceOptimizer = ({ children }) => {
  useEffect(() => {
    // Performance optimizations for GSAP and ScrollTrigger
    
    // 1. Optimize ScrollTrigger settings for better performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true, // Ignore resize events on mobile for better performance
    });

    // 2. Set up efficient scroll handling
    ScrollTrigger.defaults({
      toggleActions: "play none none none", // Only play once, no reverse
      once: true, // Animate only once
      start: "top 85%",
      end: "bottom 15%",
      fastScrollEnd: true, // Optimize for fast scrolling
    });

    // 3. Optimize GSAP settings for performance
    gsap.config({
      force3D: true, // Force hardware acceleration
      nullTargetWarn: false, // Reduce console warnings
    });

    // 4. Batch DOM reads and writes
    ScrollTrigger.batch("[data-animate]", {
      onEnter: (elements) => {
        gsap.fromTo(elements,
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            overwrite: "auto" // Prevent animation conflicts
          }
        );
      },
      once: true, // Animate only once
      // Removed onLeave and onEnterBack for one-time animation
    });

    // 5. Optimize images and media for better performance
    const optimizeMedia = () => {
      // Lazy load images that are not in viewport
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // 6. Debounce resize events for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // 7. Optimize scroll events
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Custom scroll optimizations can go here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize media optimization
    optimizeMedia();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Add performance hints to the document
  useEffect(() => {
    // Add resource hints for better loading performance
    const addResourceHints = () => {
      const head = document.head;
      
      // DNS prefetch for external resources
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      head.appendChild(dnsPrefetch);

      // Preconnect for critical resources
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.gstatic.com';
      preconnect.crossOrigin = 'anonymous';
      head.appendChild(preconnect);
    };

    addResourceHints();
  }, []);

  return (
    <div style={{ 
      willChange: 'auto', // Let browser optimize
      contain: 'layout style paint', // CSS containment for better performance
    }}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer;
