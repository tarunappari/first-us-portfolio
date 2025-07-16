"use client";
import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/landingpage/ImageScroll.module.scss";
import { LampContainer } from "../ui/lampLight";

// Constants
const DEFAULT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const ImageScroll = ({ images = DEFAULT_IMAGES, className = "" }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Transform values
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacitySection2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // Assign scales to images
  const pictures = images.map((img, index) => {
    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];
    return {
      ...img,
      scale: scales[index % 7],
    };
  });

  return (
    <div ref={container} className={`${styles.container} ${className}`}>
      <div className={styles.stickyWrapper}>
        {/* Zooming Images */}
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale, opacity: opacityImage }}
            className={styles.imageWrapper}
          >
            <div className={styles[`image${index + 1}`]}>
              <img
                src={src}
                alt={`Technology showcase ${index + 1}`}
                className={styles.image}
              />
            </div>
          </motion.div>
        ))}

        {/* Content Section */}
        <motion.div
          style={{
            opacity: opacitySection2,
            scale: useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]),
          }}
          className={styles.contentSection}
        >
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Transforming businesses through innovative technology solutions
                that drive growth, efficiency, and competitive advantage in the
                digital age.
            </motion.h1>
          </LampContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageScroll;
