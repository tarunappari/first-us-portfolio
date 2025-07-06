"use client"
import React from 'react'
import ServicesGrid from './ServicesGrid'
import styles from '@/styles/services/ServicesGridDemo.module.scss'

const ServicesGridDemo = () => {
  // Different service data sets for demonstration
  const webServices = [
    {
      title: "Frontend Development",
      description: "Modern React, Vue, and Angular applications with responsive design",
      icon: "⚛️"
    },
    {
      title: "Backend Development", 
      description: "Scalable APIs and server-side solutions with Node.js, Python, and more",
      icon: "🔧"
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web applications with seamless integration",
      icon: "🌐"
    },
    {
      title: "E-commerce Platforms",
      description: "Custom online stores with payment integration and inventory management",
      icon: "🛒"
    }
  ]

  const digitalServices = [
    {
      title: "Digital Marketing",
      description: "SEO, social media, and content marketing strategies",
      icon: "📈"
    },
    {
      title: "Brand Design",
      description: "Logo design, brand identity, and visual communication",
      icon: "🎨"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design for web and mobile applications",
      icon: "📱"
    }
  ]

  const consultingServices = [
    {
      title: "Technology Consulting",
      description: "Strategic technology planning and digital transformation",
      icon: "💡"
    },
    {
      title: "Project Management",
      description: "Agile project delivery and team coordination",
      icon: "📊"
    }
  ]

  const handleServiceClick = (service, index) => {
    console.log(`Clicked on ${service.title} at index ${index}`)
    // You can add navigation, modal opening, or other actions here
  }

  return (
    <div className={styles.demoContainer}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Web Development Services</h2>
        <p className={styles.sectionDesc}>2x2 Grid with Click Handlers</p>
        <ServicesGrid 
          services={webServices}
          columns={2}
          maxWidth="600px"
          animationDelay={0.2}
          staggerDelay={0.1}
          onServiceClick={handleServiceClick}
          className={styles.webServicesGrid}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Digital Services</h2>
        <p className={styles.sectionDesc}>3 Column Layout</p>
        <ServicesGrid 
          services={digitalServices}
          columns={3}
          maxWidth="800px"
          animationDelay={0.5}
          staggerDelay={0.15}
          animationEffect="slide-left"
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Consulting Services</h2>
        <p className={styles.sectionDesc}>2 Column Layout - No Animation</p>
        <ServicesGrid 
          services={consultingServices}
          columns={2}
          maxWidth="500px"
          showAnimation={false}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Default Services</h2>
        <p className={styles.sectionDesc}>Using Default Props</p>
        <ServicesGrid />
      </div>
    </div>
  )
}

export default ServicesGridDemo
