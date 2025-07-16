"use client";
import React from "react";
import Image from "next/image";

export const TestimonialsColumn = (props) => {
  const { className, testimonials, duration = 10 } = props;

  return (
    <div className={className}>
      <div
        className="flex flex-col gap-6 pb-6 animate-scroll"
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationName: 'scroll-up'
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/20 max-w-xs w-full" key={i}>
                  <div className="text-white/90 text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                      quality={60}
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-white/60">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
};
