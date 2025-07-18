"use client"

import React, { useState, useEffect } from 'react';
import { 
  FaRocket, 
  FaShieldAlt, 
  FaLightbulb, 
  FaLeaf, 
  FaUsers, 
  FaRobot, 
  FaEye, 
  FaHandsHelping 
} from 'react-icons/fa';

const InteractiveSelector = ({ values = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  
  // Default values if none provided
  const defaultValues = [
    {
      id: 1,
      title: "Our Mission",
      description: "Empowering businesses through technology and sustainable growth.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      icon: <FaRocket size={24} className="text-white" />
    },
    {
      id: 2,
      title: "Business Ethics",
      description: "Upholding integrity and doing the right thing always.",
      img: "https://images.unsplash.com/photo-1659019730114-360206c0841b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2glMjBidXNpbmVzcyUyMGV0aGljc3xlbnwwfDB8MHx8fDI%3D",
      icon: <FaShieldAlt size={24} className="text-white" />
    },
    {
      id: 3,
      title: "Innovation",
      description: "Driving value through bold ideas and new technologies.",
      img: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=800&q=80",
      icon: <FaLightbulb size={24} className="text-white" />
    },
    {
      id: 4,
      title: "Sustainability",
      description: "Creating impact through eco-conscious solutions.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      icon: <FaLeaf size={24} className="text-white" />
    },
    {
      id: 5,
      title: "Inclusion & Diversity",
      description: "Celebrating unique perspectives and experiences.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      icon: <FaUsers size={24} className="text-white" />
    }
  ];

  // Map company values to include appropriate icons
  const getIconForValue = (title) => {
    const iconMap = {
      "Our Mission": <FaRocket size={24} className="text-white" />,
      "Business Ethics": <FaShieldAlt size={24} className="text-white" />,
      "Innovation": <FaLightbulb size={24} className="text-white" />,
      "Sustainability": <FaLeaf size={24} className="text-white" />,
      "Inclusion & Diversity": <FaUsers size={24} className="text-white" />,
      "Responsible AI": <FaRobot size={24} className="text-white" />,
      "Workforce Transparency": <FaEye size={24} className="text-white" />,
      "Corporate Citizenship": <FaHandsHelping size={24} className="text-white" />
    };
    return iconMap[title] || <FaRocket size={24} className="text-white" />;
  };

  // Process the values to include icons and proper image URLs
  const processedValues = values.length > 0
    ? values.map(value => ({
        ...value,
        image: value.img?.includes('auto=format') ? value.img : `${value.img}?auto=format&fit=crop&w=800&q=80`,
        icon: getIconForValue(value.title)
      }))
    : defaultValues;

  // Handle image loading errors
  const handleImageError = (e, index) => {
    console.warn(`Image failed to load for option ${index}:`, e.target.src);
    // Set a fallback gradient background
    e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a)';
  };

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];
    
    processedValues.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [processedValues.length]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] font-sans text-white rounded-2xl overflow-hidden"> 

      {/* Options Container */}
      <div className="options flex w-full max-w-[1000px] min-w-[450px] h-[500px] mx-1 items-stretch overflow-hidden relative z-10">
        {processedValues.map((option, index) => (
          <div
            key={option.id || index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'cover' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              cursor: 'pointer',
              backgroundColor: '#1a1a1a',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,168,204,0.3)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#00a8cc] to-[#0077be] backdrop-blur-[10px] shadow-[0_4px_15px_rgba(0,168,204,0.3)] border-2 border-[#00a8cc]/30 flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-lg transition-all duration-700 ease-in-out font-satoshi"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-base text-gray-300 transition-all duration-700 ease-in-out font-manrope"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
