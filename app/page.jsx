import {MainNavbar} from '@/components/common/Navbar';
import HeroSection from '@/components/landingpage/HeroSection';
import LandingAbout from '@/components/landingpage/LandingAbout';
import Services from '@/components/landingpage/Services';
import Testimonials from '@/components/landingpage/Testimonials';

export default function Home() {
  return (
    <div className='relative w-full'>
      <MainNavbar />
      <HeroSection />
      <LandingAbout />
      <Services />
      <Testimonials />
    </div>
  );
}
