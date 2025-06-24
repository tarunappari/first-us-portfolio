import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import GsapFadeIn from '@/components/animations/GsapFadeIn';

const ClientLogos = () => {
  // Sample client/partner logos - you can replace these with actual client logos
  const clients = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png",
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/200px-Salesforce.com_logo.svg.png",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/200px-Adobe_Systems_logo_and_wordmark.svg.png",
    },
  ];

  return (
    <section className="py-16 mx-10 relative" style={{ background: 'var(--black)' }}>
      <GsapFadeIn effect="slide-up" duration={1} delay={0.5}>
        <InfiniteSlider
          duration={30}
          durationOnHover={60}
          gap={80}
          className="py-8"
        >
        {clients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex items-center justify-center min-w-[150px] h-15 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/20 transition-all duration-300 group"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-h-8 max-w-[130px] object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
        </InfiniteSlider>
      </GsapFadeIn>

      {/* Blur/fade effects at start and end */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default ClientLogos;
