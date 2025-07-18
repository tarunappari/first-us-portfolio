"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "./container-text-flip";
import GsapFadeIn from "../animations/GsapFadeIn";
import styles from '@/styles/landingpage/HeroSection.module.scss'

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(0,168,204,0.2)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,168,204,0.3),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "First Us",
  title1 = "Transform Your Business",
  title2 = "with IT Excellence",
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 2.8 + i * 0.3, // Start after shapes animation completes (2.4s + buffer)
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a8cc]/[0.08] via-transparent to-[#0077be]/[0.08] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#00a8cc]/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.3}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#0077be]/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.5}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#004d7a]/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.7}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#00a8cc]/[0.2]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.9}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#0077be]/[0.2]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Loading indicator - visible during shape animation */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.6, duration: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00a8cc] rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-[#0077be] rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-[#004d7a] rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </motion.div>

          <div className={styles.content}>
            <GsapFadeIn effect="slide-left" duration={1} delay={0.2}>
              <h1>
                <span className="textGradient">Empowering</span> Your Business
                with{" "}
              </h1>
            </GsapFadeIn>
            <ContainerTextFlip />
            <GsapFadeIn effect="slide-left" duration={1} delay={0.5}>
              <p>Empowering business growth through strategic IT solutions.</p>
            </GsapFadeIn>
          </div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00a8cc] to-[#0077be] text-white font-semibold rounded-full hover:from-[#0077be] hover:to-[#004d7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-satoshi"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#00a8cc]/30 text-white font-semibold rounded-full hover:border-[#00a8cc] hover:bg-[#00a8cc]/10 transition-all duration-300 font-satoshi"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none" />
    </motion.div>
  );
}

export { HeroGeometric };
