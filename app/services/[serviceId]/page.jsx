import React from 'react'
import { MainNavbar } from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ServiceDetail from '@/components/services/ServiceDetail'
import PerformanceOptimizer from '@/components/animations/PerformanceOptimizer'

// Generate static params for all service pages
export async function generateStaticParams() {
  return [
    { serviceId: 'cloud-infrastructure' },
    { serviceId: 'custom-software' },
    { serviceId: 'cybersecurity' },
    { serviceId: 'ai-automation' },
    { serviceId: 'it-staffing' },
    { serviceId: 'strategic-consulting' }
  ]
}

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const serviceMetadata = {
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure Services | Professional IT Solutions',
      description: 'Scalable cloud infrastructure solutions with enterprise-grade security, automated deployment, and 99.9% uptime guarantee.'
    },
    'custom-software': {
      title: 'Custom Software Development | Web & Mobile Apps',
      description: 'Full-stack web and mobile applications built with cutting-edge technologies and modern frameworks.'
    },
    'cybersecurity': {
      title: 'Cybersecurity & Compliance Services | Advanced Protection',
      description: 'Comprehensive security solutions protecting your digital assets with advanced threat detection and compliance management.'
    },
    'ai-automation': {
      title: 'AI & Automation Solutions | Intelligent Business Optimization',
      description: 'Leverage artificial intelligence and automation to streamline operations, reduce costs, and unlock new opportunities.'
    },
    'it-staffing': {
      title: 'IT Staffing Solutions | Expert Technology Professionals',
      description: 'Access top-tier IT talent to accelerate your projects and fill skill gaps with flexible, scalable teams.'
    },
    'strategic-consulting': {
      title: 'Strategic Technology Consulting | Digital Transformation',
      description: 'Navigate digital transformation with expert guidance and data-driven technology decisions for business growth.'
    }
  }

  const metadata = serviceMetadata[params.serviceId] || {
    title: 'Service Details | Professional IT Solutions',
    description: 'Comprehensive IT services and solutions for modern businesses.'
  }

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
    },
  }
}

const ServiceDetailPage = ({ params }) => {
  return (
    <div className="relative w-full">
      <MainNavbar />
      <PerformanceOptimizer>
        <ServiceDetail serviceId={params.serviceId} />
        <Footer />
      </PerformanceOptimizer>
    </div>
  )
}

export default ServiceDetailPage
