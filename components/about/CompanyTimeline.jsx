'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';

const CompanyTimeline = () => {

  const journeySteps = [
    {
      title: 'Today',
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-satoshi">Building Foundation</h3>
          <p className="text-white/80 text-sm md:text-base font-normal mb-8 font-manrope leading-relaxed">
            Establishing our core team and developing cutting-edge solutions with passion and expertise to serve our first clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="Development workspace"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Next',
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-satoshi">Growing Presence</h3>
          <p className="text-white/80 text-sm md:text-base font-normal mb-8 font-manrope leading-relaxed">
            Expanding our service offerings and building strong client relationships while establishing our reputation in the market.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm mb-2">
              <span className="text-[#00a8cc]">✅</span> Cloud Infrastructure Solutions
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm mb-2">
              <span className="text-[#00a8cc]">✅</span> AI & Machine Learning Services
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm mb-2">
              <span className="text-[#00a8cc]">✅</span> Digital Transformation Consulting
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              <span className="text-[#00a8cc]">✅</span> 24/7 Technical Support
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Business growth analytics"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              alt="Client meeting"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Later',
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-satoshi">Market Leadership</h3>
          <p className="text-white/80 text-sm md:text-base font-normal mb-8 font-manrope leading-relaxed">
            Scaling our operations, forming strategic partnerships, and becoming a recognized leader in digital transformation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1729938413350-cfb6fb1c018a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Strategic partnership"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Market leadership"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Future',
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-satoshi">Innovation Pioneer</h3>
          <p className="text-white/80 text-sm md:text-base font-normal mb-8 font-manrope leading-relaxed">
            Leading the industry with AI-powered solutions and emerging technologies, shaping the future of IT consulting.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm mb-2">
              <span className="text-[#00a8cc]">🚀</span> AI-Powered Automation
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm mb-2">
              <span className="text-[#00a8cc]">🚀</span> Quantum Computing Solutions
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm mb-2">
              <span className="text-[#00a8cc]">🚀</span> Blockchain Integration
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              <span className="text-[#00a8cc]">🚀</span> IoT & Edge Computing
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
              alt="AI technology"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt="Future technology"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,168,204,0.2)] border border-[#00a8cc]/20"
            />
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <Timeline data={journeySteps} />
    </div>
  );
};

export default CompanyTimeline;
