"use client";
import React from "react";
import AccentureCard from "@/components/common/AccentureCard";
import styles from "./test.module.scss";
import { TextParallaxContentExample } from "@/components/common/ScrollTrigger";

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
    <div className="mx-auto relative h-dvh">
      <ImmersiveScrollGallery />
    </div>
  );
};
export default TestPage;
