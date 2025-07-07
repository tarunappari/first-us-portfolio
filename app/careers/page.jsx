import PerformanceOptimizer from '@/components/animations/PerformanceOptimizer'
import CareerHero from '@/components/careers/CareerHero'
import WhyWorkWithUs from '@/components/careers/WhyWorkWithUs'
import LifeAtCompany from '@/components/careers/LifeAtCompany'
import FinalCTABanner from '@/components/careers/FinalCTABanner'
import Footer from '@/components/common/Footer'
import { MainNavbar } from '@/components/common/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="relative w-full">
          <MainNavbar />
          <PerformanceOptimizer>
            <CareerHero />
            <WhyWorkWithUs />
            <LifeAtCompany />
            <FinalCTABanner />
            <Footer />
          </PerformanceOptimizer>
        </div>
  )
}

export default page
