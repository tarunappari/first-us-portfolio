import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import styles from "@/styles/landingpage/About.module.scss";
import GsapFadeIn from "@/components/animations/GsapFadeIn";
import { LampContainer } from "../ui/lampLight";
import { motion } from "framer-motion";

const LandingAbout = () => {
  return (
    <div
      className={`h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md ${styles.aboutContainer}`}
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
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          We’re a purpose-driven IT consulting firm that partners with ambitious
          leaders to turn vision into reality. Where others offer services,
        </motion.h1>
        <GsapFadeIn effect="zoom-in" duration={1.5} delay={0.5}>
          <h1 className="textGradient clash">we deliver outcomes.</h1>
        </GsapFadeIn>
        <div className="w-[40rem] h-40 mt-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="#050505"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute bgBlack inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </LampContainer>
      {/* <GsapFadeIn effect="zoom-in" duration={1.25} delay={0.2}>
        <h1 className=" text-center text-white relative z-20">
          We’re a purpose-driven IT consulting firm that partners with ambitious
          leaders to turn vision into reality. Where others offer services,
        </h1>
      </GsapFadeIn>
      <GsapFadeIn effect="zoom-in" duration={1.5} delay={0.5}>
        <h1 className="textGradient clash">we deliver outcomes.</h1>
      </GsapFadeIn> */}
    </div>
  );
};

export default LandingAbout;
