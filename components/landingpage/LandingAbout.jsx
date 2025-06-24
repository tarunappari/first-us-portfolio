import React from 'react'
import { SparklesCore } from "@/components/ui/sparkles"
import styles from '@/styles/landingpage/About.module.scss'

const LandingAbout = () => {
  return (
    <div className={`h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md ${styles.aboutContainer}`}>
      <h1 className=" text-center text-white relative z-20">
        We’re a purpose-driven IT consulting firm that partners with ambitious leaders to turn vision into reality. Where others offer services,
      </h1>
      <h1 className='textGradient clash' >
        we deliver outcomes.
      </h1>
      <div className="w-[40rem] h-40 relative">
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
    </div>
  )
}

export default LandingAbout;