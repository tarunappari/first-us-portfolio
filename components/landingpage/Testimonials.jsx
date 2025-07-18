"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

// IT Consultancy testimonials with professional Unsplash images
const testimonials = [
  {
    text: "First Us transformed our entire digital infrastructure. Their cloud migration strategy reduced our operational costs by 60% while improving system performance dramatically.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face",
    name: "Arjun Mehta",
    role: "Chief Technology Officer",
  },
  {
    text: "The cybersecurity audit and implementation was flawless. Their proactive approach to security has given us complete peace of mind and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    name: "Priya Nair",
    role: "IT Security Director",
  },
  {
    text: "Custom software development that perfectly understood our complex requirements. The solution has improved our workflow efficiency by 300%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Rajesh Kumar",
    role: "DevOps Lead",
  },
  {
    text: "AI integration that actually works. First Us didn't just implement technology, they transformed our business processes and decision-making capabilities.",
    image: "https://images.unsplash.com/photo-1644028744915-cbf3b2c1a175?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Maya Patel",
    role: "CEO",
  },
  {
    text: "Zero downtime migration of our legacy systems. The team's professionalism and attention to detail exceeded all expectations. Truly exceptional service.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Vikram Singh",
    role: "CISO",
  },
  {
    text: "Their DevOps implementation reduced our deployment time by 80%. The automation and monitoring solutions have been game-changing for our operations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Anita Sharma",
    role: "Engineering Manager",
  },
  {
    text: "Data analytics platform they built gives us insights we never had before. The real-time dashboards have revolutionized our decision-making process.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Rohit Gupta",
    role: "Data Science Head",
  },
  {
    text: "Mobile app development was professional and timely. User feedback has been overwhelmingly positive, and our customer engagement has increased significantly.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Kavya Iyer",
    role: "Product Manager",
  },
  {
    text: "Their IT consulting helped us scale from startup to enterprise. The strategic guidance and technical expertise have been invaluable to our growth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    name: "Suresh Reddy",
    role: "Founder & CTO",
  },
];

// TestimonialsColumn component adapted for JSX and your brand
const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl border border-[#00a8cc]/20 bg-gradient-to-br from-[#0a0a0a]/90 to-[#1a1a1a]/90 backdrop-blur-xl shadow-2xl shadow-[#00a8cc]/10 max-w-xs w-full hover:border-[#00a8cc]/40 transition-all duration-300"
                  key={i}
                >
                  <div className="text-1xl leading-relaxed font-manrope mb-6">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        width={48}
                        height={48}
                        src={image}
                        alt={name}
                        className="h-12 w-12 rounded-full object-cover border-2 border-[#00a8cc]/30"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-[#00a8cc] rounded-full p-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white font-satoshi">{name}</div>
                      <div className="leading-5 text-[#00a8cc] tracking-tight text-sm font-medium">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

// Split testimonials into columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="py-20 my-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00a8cc]/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00a8cc]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0077be]/10 rounded-full blur-3xl"></div>

      <div className="container z-10 mx-auto px-4 relative">
        {/* Header */}
        <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold tracking-tighter text-white text-center font-clash">
              What our <span className="bg-gradient-to-r from-[#00a8cc] to-[#0077be] bg-clip-text text-transparent textGradient">clients say</span>
            </h2>
            {/* <p className="text-center mt-6 text-white/70 text-lg max-w-2xl font-manrope leading-relaxed">
              Trusted by leading companies worldwide for exceptional IT solutions and transformative digital experiences.
            </p> */}
          </motion.div>
        </GsapFadeIn>

        {/* Testimonials Columns */}
        <GsapFadeIn effect="fade" duration={1.2} delay={0.4}>
          <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </GsapFadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
