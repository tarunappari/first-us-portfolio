"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/services/ServiceDetail.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const ServiceDetail = ({ serviceId }) => {
  const router = useRouter()

  const serviceDetails = {
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      icon: '☁️',
      subtitle: 'Scalable, Secure, and Reliable Cloud Solutions',
      description: 'Transform your business with enterprise-grade cloud infrastructure that scales with your needs. Our comprehensive cloud solutions provide the foundation for digital transformation, ensuring high availability, security, and performance.',
      keyBenefits: [
        'Reduce infrastructure costs by up to 40%',
        '99.9% uptime guarantee with redundant systems',
        'Auto-scaling to handle traffic spikes',
        'Enterprise-grade security and compliance',
        '24/7 monitoring and support'
      ],
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration of your existing infrastructure to the cloud with minimal downtime.',
          features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
        },
        {
          name: 'Multi-Cloud Strategy',
          description: 'Leverage multiple cloud providers for optimal performance and cost efficiency.',
          features: ['AWS Integration', 'Azure Services', 'Google Cloud Platform', 'Hybrid Solutions']
        },
        {
          name: 'DevOps & Automation',
          description: 'Streamline your development and deployment processes with automated CI/CD pipelines.',
          features: ['Infrastructure as Code', 'Automated Deployments', 'Container Orchestration', 'Monitoring & Logging']
        }
      ],
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Ansible'],
      caseStudy: {
        title: 'E-commerce Platform Transformation',
        challenge: 'A growing e-commerce company was struggling with server crashes during peak shopping seasons and high infrastructure costs.',
        solution: 'We migrated their infrastructure to AWS with auto-scaling groups, implemented CDN for faster content delivery, and set up monitoring systems.',
        results: ['60% reduction in infrastructure costs', '99.9% uptime during Black Friday', '50% faster page load times', 'Zero downtime deployments']
      },
      pricing: {
        starter: { name: 'Cloud Assessment', price: '$2,500', features: ['Infrastructure Audit', 'Migration Roadmap', 'Cost Analysis', 'Security Review'] },
        professional: { name: 'Cloud Migration', price: '$15,000+', features: ['Complete Migration', '3 Months Support', 'Training Sessions', 'Documentation'] },
        enterprise: { name: 'Managed Cloud', price: 'Custom', features: ['24/7 Management', 'Dedicated Team', 'SLA Guarantee', 'Ongoing Optimization'] }
      }
    },
    'custom-software': {
      title: 'Custom Software Development',
      icon: '💻',
      subtitle: 'Tailored Solutions for Your Unique Business Needs',
      description: 'Build powerful, scalable applications that drive your business forward. Our expert development team creates custom software solutions using cutting-edge technologies and best practices.',
      keyBenefits: [
        'Fully customized to your business requirements',
        'Scalable architecture for future growth',
        'Modern, responsive user interfaces',
        'Integration with existing systems',
        'Ongoing maintenance and support'
      ],
      services: [
        {
          name: 'Web Applications',
          description: 'Full-stack web applications built with modern frameworks and technologies.',
          features: ['React/Next.js Frontend', 'Node.js/Python Backend', 'Database Design', 'API Development']
        },
        {
          name: 'Mobile Applications',
          description: 'Native and cross-platform mobile apps for iOS and Android.',
          features: ['React Native', 'Flutter Development', 'Native iOS/Android', 'App Store Deployment']
        },
        {
          name: 'Enterprise Software',
          description: 'Complex business applications with advanced features and integrations.',
          features: ['CRM Systems', 'ERP Solutions', 'Workflow Automation', 'Third-party Integrations']
        }
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'React Native', 'Flutter', 'PostgreSQL', 'MongoDB'],
      caseStudy: {
        title: 'Healthcare Management System',
        challenge: 'A healthcare provider needed a comprehensive system to manage patient records, appointments, and billing across multiple locations.',
        solution: 'We developed a cloud-based healthcare management system with role-based access, real-time synchronization, and HIPAA compliance.',
        results: ['40% reduction in administrative time', '99% data accuracy improvement', 'HIPAA compliant security', 'Seamless multi-location sync']
      },
      pricing: {
        starter: { name: 'MVP Development', price: '$25,000+', features: ['Core Features', '3 Months Development', 'Basic Testing', 'Deployment'] },
        professional: { name: 'Full Application', price: '$75,000+', features: ['Complete Solution', 'Advanced Features', 'Comprehensive Testing', '6 Months Support'] },
        enterprise: { name: 'Enterprise Solution', price: 'Custom', features: ['Complex Integrations', 'Dedicated Team', 'Ongoing Development', 'Priority Support'] }
      }
    },
    'cybersecurity': {
      title: 'Cybersecurity & Compliance',
      icon: '🛡️',
      subtitle: 'Protect Your Digital Assets with Advanced Security',
      description: 'Safeguard your business from cyber threats with comprehensive security solutions. Our cybersecurity experts implement multi-layered protection strategies to keep your data and systems secure.',
      keyBenefits: [
        'Advanced threat detection and prevention',
        'Compliance with industry standards',
        'Real-time security monitoring',
        'Incident response and recovery',
        'Employee security training'
      ],
      services: [
        {
          name: 'Security Assessment',
          description: 'Comprehensive evaluation of your current security posture and vulnerabilities.',
          features: ['Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment', 'Compliance Audit']
        },
        {
          name: 'Security Implementation',
          description: 'Deploy robust security measures to protect your infrastructure and data.',
          features: ['Firewall Configuration', 'Endpoint Protection', 'Access Controls', 'Encryption Solutions']
        },
        {
          name: 'Compliance Management',
          description: 'Ensure your organization meets industry regulations and standards.',
          features: ['GDPR Compliance', 'HIPAA Requirements', 'SOC 2 Certification', 'ISO 27001 Standards']
        }
      ],
      technologies: ['Fortinet', 'Palo Alto', 'CrowdStrike', 'Splunk', 'Okta', 'Azure AD', 'AWS Security', 'Qualys'],
      caseStudy: {
        title: 'Financial Services Security Overhaul',
        challenge: 'A financial services company needed to enhance their security posture to meet regulatory requirements and protect sensitive customer data.',
        solution: 'We implemented a comprehensive security framework with multi-factor authentication, endpoint detection, and 24/7 monitoring.',
        results: ['Zero security incidents in 18 months', '100% compliance with regulations', '90% reduction in false positives', 'Enhanced customer trust']
      },
      pricing: {
        starter: { name: 'Security Audit', price: '$5,000', features: ['Vulnerability Assessment', 'Security Report', 'Recommendations', 'Basic Training'] },
        professional: { name: 'Security Implementation', price: '$25,000+', features: ['Complete Security Setup', 'Monitoring Tools', 'Staff Training', '6 Months Support'] },
        enterprise: { name: 'Managed Security', price: 'Custom', features: ['24/7 Monitoring', 'Incident Response', 'Compliance Management', 'Dedicated Team'] }
      }
    },
    'ai-automation': {
      title: 'AI & Automation',
      icon: '🤖',
      subtitle: 'Intelligent Solutions for Business Optimization',
      description: 'Leverage artificial intelligence and automation to streamline operations, reduce costs, and unlock new opportunities. Our AI solutions are designed to integrate seamlessly with your existing workflows.',
      keyBenefits: [
        'Automate repetitive tasks and processes',
        'Improve decision-making with data insights',
        'Reduce operational costs by up to 50%',
        'Enhance customer experience with AI',
        'Scale operations without increasing headcount'
      ],
      services: [
        {
          name: 'Process Automation',
          description: 'Automate business processes to improve efficiency and reduce human error.',
          features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Report Generation']
        },
        {
          name: 'Machine Learning',
          description: 'Build predictive models and intelligent systems for better business outcomes.',
          features: ['Predictive Analytics', 'Recommendation Systems', 'Fraud Detection', 'Customer Segmentation']
        },
        {
          name: 'AI Integration',
          description: 'Integrate AI capabilities into your existing applications and systems.',
          features: ['Chatbots & Virtual Assistants', 'Natural Language Processing', 'Computer Vision', 'Voice Recognition']
        }
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS ML', 'Power Automate', 'UiPath'],
      caseStudy: {
        title: 'Manufacturing Process Optimization',
        challenge: 'A manufacturing company wanted to reduce defects and optimize production schedules using their historical data.',
        solution: 'We developed ML models for predictive maintenance and quality control, plus automated scheduling systems.',
        results: ['30% reduction in defects', '25% improvement in efficiency', '$2M annual cost savings', '95% prediction accuracy']
      },
      pricing: {
        starter: { name: 'AI Consultation', price: '$3,000', features: ['Use Case Analysis', 'Feasibility Study', 'ROI Projection', 'Implementation Plan'] },
        professional: { name: 'AI Implementation', price: '$50,000+', features: ['Custom AI Solution', 'Model Training', 'Integration', '6 Months Support'] },
        enterprise: { name: 'AI Platform', price: 'Custom', features: ['Multiple AI Solutions', 'Dedicated Team', 'Ongoing Optimization', 'Advanced Analytics'] }
      }
    },
    'it-staffing': {
      title: 'IT Staffing Solutions',
      icon: '👥',
      subtitle: 'Expert IT Professionals for Your Projects',
      description: 'Access top-tier IT talent to accelerate your projects and fill skill gaps. Our staffing solutions provide flexible, scalable teams that integrate seamlessly with your organization.',
      keyBenefits: [
        'Access to pre-vetted IT professionals',
        'Flexible engagement models',
        'Reduced hiring time and costs',
        'Scalable team augmentation',
        'Specialized expertise on demand'
      ],
      services: [
        {
          name: 'Staff Augmentation',
          description: 'Extend your team with skilled professionals who work as part of your organization.',
          features: ['Developers & Engineers', 'Project Managers', 'DevOps Specialists', 'QA Engineers']
        },
        {
          name: 'Dedicated Teams',
          description: 'Complete development teams dedicated to your projects with full accountability.',
          features: ['Full-Stack Teams', 'Agile Methodology', 'Direct Communication', 'Flexible Scaling']
        },
        {
          name: 'Project-Based',
          description: 'Complete project delivery with our experienced teams and proven methodologies.',
          features: ['End-to-End Delivery', 'Fixed Timeline', 'Quality Assurance', 'Post-Launch Support']
        }
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', '.NET', 'PHP', 'Mobile Development'],
      caseStudy: {
        title: 'Fintech Startup Acceleration',
        challenge: 'A fintech startup needed to rapidly scale their development team to meet investor milestones and market demands.',
        solution: 'We provided a dedicated team of 8 developers, including frontend, backend, and mobile specialists.',
        results: ['50% faster development cycle', 'Successfully met all milestones', '40% cost savings vs hiring', 'Seamless team integration']
      },
      pricing: {
        starter: { name: 'Individual Expert', price: '$4,000/month', features: ['1 Specialist', 'Part-time/Full-time', 'Direct Communication', 'Flexible Terms'] },
        professional: { name: 'Small Team', price: '$15,000/month', features: ['3-5 Professionals', 'Team Lead Included', 'Agile Process', 'Weekly Reports'] },
        enterprise: { name: 'Dedicated Team', price: 'Custom', features: ['8+ Professionals', 'Project Manager', 'Quality Assurance', 'Full Accountability'] }
      }
    },
    'strategic-consulting': {
      title: 'Strategic Consulting',
      icon: '📊',
      subtitle: 'Technology Strategy for Business Growth',
      description: 'Navigate digital transformation with expert guidance. Our strategic consulting services help you make informed technology decisions that drive business growth and competitive advantage.',
      keyBenefits: [
        'Data-driven technology decisions',
        'Digital transformation roadmap',
        'Competitive advantage through technology',
        'Risk mitigation and compliance',
        'ROI optimization and cost reduction'
      ],
      services: [
        {
          name: 'Digital Strategy',
          description: 'Comprehensive digital transformation planning and execution roadmap.',
          features: ['Current State Assessment', 'Future State Vision', 'Transformation Roadmap', 'Change Management']
        },
        {
          name: 'Technology Architecture',
          description: 'Design scalable, secure, and efficient technology architectures.',
          features: ['System Architecture', 'Integration Planning', 'Scalability Design', 'Security Framework']
        },
        {
          name: 'Innovation Labs',
          description: 'Explore emerging technologies and their potential impact on your business.',
          features: ['Technology Research', 'Proof of Concepts', 'Innovation Workshops', 'Future Planning']
        }
      ],
      technologies: ['Enterprise Architecture', 'Cloud Platforms', 'AI/ML', 'IoT', 'Blockchain', 'Analytics', 'Automation'],
      caseStudy: {
        title: 'Retail Chain Digital Transformation',
        challenge: 'A traditional retail chain needed to compete with e-commerce giants and modernize their operations.',
        solution: 'We developed a comprehensive digital strategy including omnichannel experience, inventory optimization, and customer analytics.',
        results: ['35% increase in online sales', '20% improvement in inventory turnover', 'Unified customer experience', 'Future-ready technology stack']
      },
      pricing: {
        starter: { name: 'Strategy Assessment', price: '$10,000', features: ['Current State Analysis', 'Strategic Recommendations', 'Technology Roadmap', 'Executive Presentation'] },
        professional: { name: 'Transformation Plan', price: '$50,000+', features: ['Detailed Strategy', 'Implementation Plan', 'Change Management', '6 Months Guidance'] },
        enterprise: { name: 'Ongoing Advisory', price: 'Custom', features: ['Dedicated Advisor', 'Quarterly Reviews', 'Continuous Optimization', 'Executive Support'] }
      }
    }
  }

  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <div className={styles.notFound}>
        <h1>Service Not Found</h1>
        <button onClick={() => router.push('/services')} className={styles.backButton}>
          Back to Services
        </button>
      </div>
    )
  }

  return (
    <div className={styles.serviceDetail}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
            <div className={styles.heroContent}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h1 className={styles.title}>{service.title}</h1>
              <p className={styles.subtitle}>{service.subtitle}</p>
              <p className={styles.description}>{service.description}</p>
            </div>
          </GsapFadeIn>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <GsapFadeIn effect="slide-up" duration={1} delay={0.4}>
            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <div className={styles.benefitsList}>
              {service.keyBenefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>✓</div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </GsapFadeIn>
        </div>
      </section>

      {/* Services Offered */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <GsapFadeIn effect="slide-up" duration={1} delay={0.6}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <div className={styles.servicesGrid}>
              {service.services.map((item, index) => (
                <div key={index} className={styles.serviceItem}>
                  <h3 className={styles.serviceName}>{item.name}</h3>
                  <p className={styles.serviceDesc}>{item.description}</p>
                  <div className={styles.featuresList}>
                    {item.features.map((feature, idx) => (
                      <span key={idx} className={styles.feature}>{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GsapFadeIn>
        </div>
      </section>

      {/* Technologies */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <GsapFadeIn effect="slide-up" duration={1} delay={0.8}>
            <h2 className={styles.sectionTitle}>Technologies We Use</h2>
            <div className={styles.techGrid}>
              {service.technologies.map((tech, index) => (
                <div key={index} className={styles.techItem}>{tech}</div>
              ))}
            </div>
          </GsapFadeIn>
        </div>
      </section>

      {/* Case Study */}
      <section className={styles.caseStudySection}>
        <div className={styles.container}>
          <GsapFadeIn effect="slide-up" duration={1} delay={1}>
            <h2 className={styles.sectionTitle}>Case Study</h2>
            <div className={styles.caseStudy}>
              <h3 className={styles.caseTitle}>{service.caseStudy.title}</h3>
              <div className={styles.caseContent}>
                <div className={styles.caseItem}>
                  <h4>Challenge</h4>
                  <p>{service.caseStudy.challenge}</p>
                </div>
                <div className={styles.caseItem}>
                  <h4>Solution</h4>
                  <p>{service.caseStudy.solution}</p>
                </div>
                <div className={styles.caseItem}>
                  <h4>Results</h4>
                  <ul>
                    {service.caseStudy.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </GsapFadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <GsapFadeIn effect="slide-up" duration={1} delay={1.2}>
            <h2 className={styles.sectionTitle}>Pricing Plans</h2>
            <div className={styles.pricingGrid}>
              {Object.values(service.pricing).map((plan, index) => (
                <div key={index} className={styles.pricingCard}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <div className={styles.planPrice}>{plan.price}</div>
                  <ul className={styles.planFeatures}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <button className={styles.planButton}>Get Started</button>
                </div>
              ))}
            </div>
          </GsapFadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <GsapFadeIn effect="slide-up" duration={1} delay={1.4}>
            <div className={styles.ctaContent}>
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how we can help transform your business with {service.title.toLowerCase()}.</p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryCta}>Contact Us</button>
                <button onClick={() => router.push('/services')} className={styles.secondaryCta}>
                  Back to Services
                </button>
              </div>
            </div>
          </GsapFadeIn>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
