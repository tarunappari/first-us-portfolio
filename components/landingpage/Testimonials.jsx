
"use client"
import React from 'react'
import styles from '@/styles/landingpage/Testimonials.module.scss'
import { CircularTestimonials } from '@/components/ui/circular-testimonials'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const testimonials = [
  {
    quote: "MK Tech's strategy sessions reshaped our digital roadmap. Their insights were sharp and deeply practical.",
    name: "Arjun Mehta",
    designation: "Chief Technology Officer at NetAxis",
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "They helped us migrate our legacy systems with zero downtime. True professionals with a consult-first mindset.",
    name: "Priya Nair",
    designation: "IT Head at FinCore Solutions",
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "From planning to execution, every phase was handled with precision and transparency.",
    name: "Anil Kapoor",
    designation: "Project Manager at CloudNest",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "Their UI/UX consulting drastically improved our customer retention metrics. Couldn’t be happier!",
    name: "Sneha Reddy",
    designation: "Product Owner at InnoSpark",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "The cloud infrastructure they designed scaled perfectly with our traffic surge.",
    name: "Rahul Varma",
    designation: "DevOps Manager at ShopStream",
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "Our cybersecurity posture improved drastically after MK Tech's audit. Very thorough and forward-thinking.",
    name: "Neha Sharma",
    designation: "Cybersecurity Lead at GuardNet",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "Working with them felt like having an extended in-house team. Highly collaborative.",
    name: "Deepak Joshi",
    designation: "Head of IT at SwiftScale",
    src: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "Their agile delivery approach helped us go live weeks ahead of schedule.",
    name: "Tanya Deshmukh",
    designation: "Scrum Master at AgileCore",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "We saw an immediate improvement in our backend performance. These guys know their stuff.",
    name: "Rakesh Menon",
    designation: "Backend Architect at DevWorks",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "MK Tech is a rare mix of technical brilliance and client empathy.",
    name: "Ritika Singh",
    designation: "Business Analyst at VisionSoft",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "They tailored a custom ERP solution that streamlined our internal processes overnight.",
    name: "Siddharth Rao",
    designation: "Operations Head at CoreAxis",
    src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "We saved time, money, and avoided common pitfalls thanks to their consulting expertise.",
    name: "Meera Jain",
    designation: "Co-Founder at ScaleNow",
    src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "Their approach to API integrations saved us weeks of development effort.",
    name: "Ananya Kulkarni",
    designation: "Software Lead at CodeDesk",
    src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "We rely on MK Tech for every big tech decision. Their team is that good.",
    name: "Karan Oberoi",
    designation: "VP Engineering at VertexWave",
    src: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "All timelines were met, and the project was well-documented. It made handovers easy for us.",
    name: "Shruti Pandey",
    designation: "QA Manager at SoftSpark",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2700&auto=format&fit=crop",
  },
  {
    quote: "Their team went above and beyond to ensure everything aligned with our compliance needs.",
    name: "Divya Rao",
    designation: "Compliance Officer at LegalTechy",
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2700&auto=format&fit=crop",
  },
];


const Testimonials = () => {
  return (
    <div className={styles.testimonialContainer}>
      <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
        <h2>What our <span className='textGradient clash'>clients say</span></h2>
      </GsapFadeIn>
      
      <GsapFadeIn effect="fade" duration={1.2} delay={0.4}>
        <div className={`${styles.cardsContainer} flex items-center justify-center mt-8`} >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#f7f7ff",
              designation: "#e1e1e1",
              testimony: "#f1f1f7",
              arrowBackground: "#0582CA",
              arrowForeground: "#141414",
              arrowHoverBackground: "#f7f7ff",
            }}
            fontSizes={{
              name: "28px",
              designation: "20px",
              quote: "20px",
            }}
          />
        </div>
      </GsapFadeIn>
    </div>
  )
}

export default Testimonials
