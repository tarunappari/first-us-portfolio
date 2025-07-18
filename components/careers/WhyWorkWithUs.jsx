"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/careers/WhyWorkWithUs.module.scss";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Users, Target, TrendingUp, Award, Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyWorkWithUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const whyWorkData = [
    {
      Icon: Users,
      name: "Culture That Puts People First",
      description: "Be your true self every day. We embrace authenticity, build real connections, and empower impact within teams and communities.",
      href: "/careers",
      cta: "Join Our Team",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
          alt="Team collaboration"
        />
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Target,
      name: "Purpose in Every Role",
      description: "Do meaningful work that inspires you. Explore diverse career paths and grow your skills while making a real difference.",
      href: "/careers",
      cta: "Explore Roles",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
          alt="Purpose-driven work"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: TrendingUp,
      name: "Grow Beyond Limits",
      description: "Curiosity drives growth at First Us IT. We support your journey with flexible learning, coaching, and mentorship.",
      href: "/careers",
      cta: "Learn More",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          alt="Growth and learning"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Award,
      name: "Rewarding What You Achieve",
      description: "Your contributions matter. Earn competitive, performance-based pay and share in the company’s long-term success.",
      href: "/careers",
      cta: "View Benefits",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
          alt="Achievement and rewards"
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Heart,
      name: "Well-being at the Core",
      description: "We support your full well-being—mental, physical, emotional, financial, and social—so you can truly thrive.",
      href: "/careers",
      cta: "Learn About Benefits",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
          alt="Well-being and health"
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cards = cardsRef.current;

      // Animate cards with stagger effect
      cards.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
              rotationY: 15,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Floating animation for background elements
      gsap.to(`.${styles.floatingElement}`, {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-3, 3)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 3,
          from: "random",
        },
      });
    }
  }, []);

  return (
    <section className={styles.whyWorkSection} ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div
          className={`${styles.floatingShape1} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.floatingShape2} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.floatingShape3} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.glowingOrb1} ${styles.floatingElement}`}
        ></div>
        <div
          className={`${styles.glowingOrb2} ${styles.floatingElement}`}
        ></div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Human-Driven. Future-Focused.</h2>
          <p className={styles.sectionSubtitle}>
            At First Us IT, we lead with people and purpose. By blending
            technical expertise with a deep understanding of our clients’ needs,
            we turn bold visions into smart, sustainable solutions. Together, we
            build what's next.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <BentoGrid className="lg:grid-rows-3">
            {whyWorkData.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
