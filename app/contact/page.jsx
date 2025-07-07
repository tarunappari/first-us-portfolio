import PerformanceOptimizer from '@/components/animations/PerformanceOptimizer'
import ContactHero from '@/components/contact/ContactHero'
import ContactMap from '@/components/contact/ContactMap'
import Footer from '@/components/common/Footer'
import { MainNavbar } from '@/components/common/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="relative w-full">
      <MainNavbar />
      <PerformanceOptimizer>
        <ContactHero />
        {/* <ContactMap /> */}
        <Footer />
      </PerformanceOptimizer>
    </div>
  )
}

export default page
