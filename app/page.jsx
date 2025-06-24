import {MainNavbar} from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/landingpage/HeroSection';
import ClientLogos from '@/components/landingpage/ClientLogos';
import InfoGrid from '@/components/landingpage/InfoGrid';
import LandingAbout from '@/components/landingpage/LandingAbout';
import Services from '@/components/landingpage/Services';
import Testimonials from '@/components/landingpage/Testimonials';

export default function Home() {
  return (
    <div className='relative w-full'>
      <MainNavbar />
      <HeroSection />
      <ClientLogos />
      <LandingAbout />
      <InfoGrid />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
