"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from '@/styles/about/CompanyTimeline.module.scss'

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full font-sans md:px-10 ${styles.journeySection}`}
      ref={containerRef}
    >
      <div className={`mx-auto py-20 px-4 md:px-8 lg:px-10 ${styles.infoContainer}`}>
        <h2 className={`${styles.sectionTitle} textGradient`}>
          Our Journey Starts Here
        </h2>
        <p className={styles.sectionSubtitle}>
          From today&apos;s foundation to tomorrow&apos;s innovation - building the future of IT consulting.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-r from-[#00a8cc] to-[#0077be] flex items-center justify-center shadow-lg shadow-[#00a8cc]/30">
                <div className="h-4 w-4 rounded-full bg-white border-2 border-[#00a8cc]/30" />
              </div>
              <h2 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#00a8cc] font-clash">
                {item.title}
              </h2>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#00a8cc] font-clash">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#00a8cc] via-[#0077be] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
