"use client"
import React from 'react'
import styles from '@/styles/landingpage/Services.module.scss'
import { HoverEffect } from "../ui/card-hover-effect";
import {
  IconUsers,
  IconCode,
  IconBrain,
  IconShield,
  IconCloud,
  IconBuilding,
} from "@tabler/icons-react";

const servicesData = [
  {
    title: "End-to-End IT Staffing Solutions",
    description: "Flexible hiring models for contract, permanent, and project-based tech roles.",
    icon: <IconUsers className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Custom Software Development",
    description: "Tailored web, mobile, and enterprise applications to meet unique business needs.",
    icon: <IconCode className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Artificial Intelligence Integration",
    description: "AI-powered solutions to automate workflows, enhance decision-making, and drive innovation.",
    icon: <IconBrain className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Cybersecurity & Risk Management",
    description: "Comprehensive security services including threat detection, compliance, and data protection.",
    icon: <IconShield className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Scalable IT Infrastructure",
    description: "Cloud migration, DevOps, and managed IT services to support business growth.",
    icon: <IconCloud className="w-8 h-8 text-cyan-500" />,
  },
  {
    title: "Industry-Specific Expertise",
    description: "Solutions designed for industries like finance, healthcare, retail, and tech.",
    icon: <IconBuilding className="w-8 h-8 text-orange-500" />,
  },
];


const Services = () => {
  return (
    <div className={styles.servicesContainer} >
      <h1>What we can do <span className='textGradient clash'>for you?</span></h1>
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={servicesData} />
      </div>
    </div>
  )
}

export default Services;