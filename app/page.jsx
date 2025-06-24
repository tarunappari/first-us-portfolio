import {MainNavbar} from '@/components/common/Navbar';
import HeroSection from '@/components/landingpage/HeroSection';
import InfoGrid from '@/components/landingpage/InfoGrid';
import LandingAbout from '@/components/landingpage/LandingAbout';
import Services from '@/components/landingpage/Services';
import Testimonials from '@/components/landingpage/Testimonials';

export default function Home() {
  return (
    <div className='relative w-full'>
      <MainNavbar />
      <HeroSection />
      <LandingAbout />
      <InfoGrid />
      <Services />
      <Testimonials />
    </div>
  );
}
