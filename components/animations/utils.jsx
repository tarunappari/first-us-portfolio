import Head from 'next/head';
import { useRef } from 'react';
import GsapFadeIn, { useStaggeredReveal, useGsapTimeline, usePinnedSection } from '@/components/GsapFadeIn';

export default function GsapDemoPage() {
  // Staggered list
  const serviceRefs = useRef([]);
  useStaggeredReveal(serviceRefs);

  // Timeline
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  useGsapTimeline([headingRef.current, subTextRef.current, buttonRef.current]);

  // Pinned
  const pinnedRef = useRef(null);
  usePinnedSection(pinnedRef);

  return (
    <>
      <Head>
        <title>GSAP Demo | MK Digital</title>
      </Head>
      <main>
        {/* Timeline Section */}
        <section style={{ padding: '5rem 2rem', background: '#eaf2ff' }}>
          <h1 ref={headingRef} style={{ fontSize: '2.5rem' }}>Powering IT Innovation</h1>
          <p ref={subTextRef} style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
            Discover how our tech expertise can help scale your business.
          </p>
          <button ref={buttonRef} style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>Explore Services</button>
        </section>

        {/* Staggered List Section */}
        <section style={{ padding: '4rem 2rem', background: '#fff' }}>
          <h2 style={{ textAlign: 'center' }}>Our Core Services</h2>
          <ul style={{ listStyle: 'none', padding: 0, maxWidth: '600px', margin: '2rem auto', lineHeight: '2.2rem' }}>
            {['Cloud Computing', 'Cybersecurity', 'DevOps Automation', 'Custom Development'].map((item, i) => (
              <li key={i} ref={(el) => (serviceRefs.current[i] = el)} style={{ opacity: 0, fontSize: '1.25rem' }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Pinned Hero Section */}
        <section
          ref={pinnedRef}
          style={{
            height: '100vh',
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '3rem' }}>Your Vision. Our Expertise.</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '500px' }}>Scroll-driven transformation powered by GSAP & ScrollTrigger</p>
        </section>

        {/* Extra GsapFadeIn Components */}
        <section style={{ padding: '4rem 2rem' }}>
          <GsapFadeIn effect="zoom-in">
            <h2 style={{ textAlign: 'center' }}>Ready to Get Started?</h2>
          </GsapFadeIn>
          <GsapFadeIn effect="slide-up" delay={0.3}>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>Contact us today and let’s build something great.</p>
          </GsapFadeIn>
        </section>
      </main>
    </>
  );
}




// const HeroSection = () => {
//   return (
//     <section className={styles.hero}>
//       <GsapFadeIn direction="left" delay={0.1}>
//         <h1>Unlock Your Potential</h1>
//       </GsapFadeIn>
//       <GsapFadeIn direction="right" delay={0.3}>
//         <p>Guiding Your Success Journey Through Expertise and Innovation</p>
//       </GsapFadeIn>

//       1️⃣ Basic Slide-In Heading
//       <GsapFadeIn effect="slide-left">
//         <h1>Welcome to MK Digital Dynamics</h1>
//       </GsapFadeIn>

//       2️⃣ Zoom-In on Scroll
//       <GsapFadeIn effect="zoom-in" delay={0.3}>
//         <p className="subheading">We turn ideas into tech success.</p>
//       </GsapFadeIn>

//       3️⃣ Skew-In Card Effect
//       <GsapFadeIn effect="skew" duration={1.2}>
//         <div className={styles.card}>Custom Software Solutions</div>
//       </GsapFadeIn>

//       Flip-In Service Title
//       <GsapFadeIn effect="flip" delay={0.5}>
//         <h3>Cloud Migration Experts</h3>
//       </GsapFadeIn>
//     </section>
//   );
// };