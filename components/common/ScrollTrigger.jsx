import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AccentureCard from "@/components/common/AccentureCard";
import LandingAbout from "../landingpage/LandingAbout";

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
];

export const TextParallaxContentExample = () => {
  return (
    <div >
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for all of us."
      ></TextParallaxContent>
      {/* <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      ></TextParallaxContent> */}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky z-0 h-[100vh] top-0"
      style={{
        opacity,
      }}
    >
      <LandingAbout />
    </motion.div>
  );
};


const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [5050, -2450]);
  const opacity = useTransform(scrollYProgress, [1, 1, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col gap-10 items-center justify-center text-white"
    >
      <div>
        <div>
          {cardData.map((card, index) => (
            <AccentureCard
              key={index}
              title={card.title}
              description={card.description}
              pattern={card.pattern}
              colorTheme={card.colorTheme}
              // lottieData={sampleLottieData}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
