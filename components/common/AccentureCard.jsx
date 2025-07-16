"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import styles from "@/styles/common/AccentureCard.module.scss";

const AccentureCard = ({
  title,
  description,
  lottieData,
  pattern = "pattern1", // pattern1, pattern2, or pattern3
  colorTheme = "red", // red, blue, or purple
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef();
  const cardRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const backgroundLinesRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      if (isHovered) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isHovered]);

  // GSAP hover animations
  const handleMouseEnter = () => {
    setIsHovered(true);

    // Card lift animation
    gsap.to(cardRef.current, {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
    });

    // Title slide up and fade out
    gsap.to(titleRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Description slide up and fade in
    gsap.fromTo(
      descriptionRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    // Background lines animation based on pattern
    if (backgroundLinesRef.current) {
      const lines = backgroundLinesRef.current.children;

      if (pattern === "pattern1") {
        gsap.to(lines, {
          opacity: 0,
          scale: 0.5,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.inOut",
        });
      } else if (pattern === "pattern2") {
        gsap.to(lines, {
          opacity: 0,
          scale: 0.3,
          rotation: 180,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.inOut",
        });
      } else if (pattern === "pattern3") {
        gsap.to(lines, {
          opacity: 0,
          scaleX: 0,
          x: -50,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.inOut",
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    // Card return animation
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Title slide down and fade in
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Description slide down and fade out
    gsap.to(descriptionRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Background lines return animation
    if (backgroundLinesRef.current) {
      const lines = backgroundLinesRef.current.children;

      if (pattern === "pattern1") {
        gsap.to(lines, {
          opacity: 0.3,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.inOut",
        });
      } else if (pattern === "pattern2") {
        gsap.to(lines, {
          opacity: 0.25,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.inOut",
        });
      } else if (pattern === "pattern3") {
        gsap.to(lines, {
          opacity: 0.2,
          scaleX: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div
        ref={cardRef}
        className={`${styles.card} ${styles[colorTheme]} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Background Lines with different patterns */}
        <div
          ref={backgroundLinesRef}
          className={`${styles.backgroundLines} ${styles[pattern]}`}
        >
          {pattern === "pattern1" && (
            <>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`${styles.line} ${styles[`line${i + 1}`]}`}
                />
              ))}
            </>
          )}

          {pattern === "pattern2" && (
            <>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`${styles.circularLine} ${
                    styles[`circular${i + 1}`]
                  }`}
                />
              ))}
            </>
          )}

          {pattern === "pattern3" && (
            <>
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`${styles.waveLine} ${styles[`wave${i + 1}`]}`}
                />
              ))}
            </>
          )}
        </div>

        {/* Lottie Animation Background */}
        <div className={styles.lottieBackground}>
          <Lottie
            lottieRef={lottieRef}
            animationData={lottieData}
            loop={true}
            autoplay={false}
            style={{
              width: "100%",
              height: "100%",
              opacity: isHovered ? 0.1 : 0.05,
            }}
          />
        </div>

        {/* Content Container */}
        <div className={styles.content}>
          {/* Title Animation */}
          <div className={styles.titleContainer}>
            <h3 ref={titleRef} className={styles.title}>
              {title}
            </h3>
          </div>

          {/* Description Animation */}
          <div
            ref={descriptionRef}
            className={styles.descriptionContainer}
            style={{ opacity: 0 }}
          >
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className={styles.glowEffect}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default AccentureCard;

// test
// Sample Lottie animation data
const sampleLottieData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Sample Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 60, s: [360] },
          ],
        },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [50, 50] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.659, 0.8, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
            },
          ],
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};

const TestPage = () => {
  const cardData = [
    {
      title: "Market Leader in HFS Horizons: Telecom Service Providers, 2025",
      description:
        "Accelerate your business transformation with cutting-edge digital solutions that drive innovation and competitive advantage.",
      pattern: "pattern1",
      colorTheme: "red",
    },
    {
      title: "2024 Microsoft Media and Telco Partner of the Year Award winner",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our comprehensive strategy and implementation services.",
      pattern: "pattern2",
      colorTheme: "blue",
    },
    {
      title: "Databricks CME partner of the year 2024 - 6th year in a row",
      description:
        "Harness the power of artificial intelligence and advanced analytics to unlock insights and automate processes.",
      pattern: "pattern3",
      colorTheme: "purple",
    },
    {
      title: "Cybersecurity Excellence",
      description:
        "Protect your digital assets with enterprise-grade security solutions and proactive threat management.",
      pattern: "pattern1",
      colorTheme: "red",
    },
    {
      title: "Data Engineering Solutions",
      description:
        "Build robust data pipelines and architectures that enable real-time insights and data-driven decision making.",
      pattern: "pattern2",
      colorTheme: "blue",
    },
    {
      title: "DevOps Transformation",
      description:
        "Streamline your development lifecycle with automated CI/CD pipelines and infrastructure as code.",
      pattern: "pattern3",
      colorTheme: "purple",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Accenture-Style Cards</h1>
        <p>Three different patterns with Accenture's signature colors</p>
      </div>

      <div className={styles.cardsGrid}>
        {cardData.map((card, index) => (
          <AccentureCard
            key={index}
            title={card.title}
            description={card.description}
            pattern={card.pattern}
            colorTheme={card.colorTheme}
            lottieData={sampleLottieData}
          />
        ))}
      </div>
    </div>
  );
};
