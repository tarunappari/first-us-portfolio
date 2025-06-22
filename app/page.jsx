import {MainNavbar} from '@/components/common/Navbar';
import About from '@/components/landingpage/About';
import HeroSection from '@/components/landingpage/HeroSection';
import Services from '@/components/landingpage/Services';

export default function Home() {
  return (
    <div className='relative w-full'>
      <MainNavbar />
      <HeroSection />
      <About />
      <Services />
    </div>
  );
}
