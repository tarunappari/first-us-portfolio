"use client"
import React from 'react'
import styles from '@/styles/services/ServicesGrid.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const ServicesGrid = ({
  services,
  animationDelay = 1,
  staggerDelay = 0.15,
  className = "",
  columns = 2,
  maxWidth = "500px",
  showAnimation = true,
  animationEffect = "slide-up",
  onServiceClick = null
}) => {
  const defaultServices = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: "☁️"
    },
    {
      title: "AI Integration",
      description: "Intelligent automation and AI-powered business solutions",
      icon: "🤖"
    }
  ]

  const servicesToRender = services || defaultServices

  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    maxWidth: maxWidth
  }

  const handleServiceClick = (service, index) => {
    if (onServiceClick) {
      onServiceClick(service, index)
    }
  }

  const ServiceCard = ({ service, index }) => (
    <div
      className={`${styles.serviceCard} ${onServiceClick ? styles.clickable : ''}`}
      onClick={() => handleServiceClick(service, index)}
    >
      <div className={styles.serviceIcon}>{service.icon}</div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDesc}>{service.description}</p>
    </div>
  )

  return (
    <div className={`${styles.visualSection} ${className}`}>
      <div className={styles.servicesGrid} style={gridStyle}>
        {servicesToRender.map((service, index) =>
          showAnimation ? (
            <GsapFadeIn
              key={index}
              effect={animationEffect}
              duration={0.8}
              delay={animationDelay + (index * staggerDelay)}
            >
              <ServiceCard service={service} index={index} />
            </GsapFadeIn>
          ) : (
            <ServiceCard key={index} service={service} index={index} />
          )
        )}
      </div>
    </div>
  )
}

export default ServicesGrid
