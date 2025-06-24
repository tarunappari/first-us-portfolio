import React from 'react';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
  IconMapPin
} from '@tabler/icons-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "IT Staffing Solutions",
    "Software Development",
    "AI Integration",
    "Cybersecurity",
    "Cloud Infrastructure",
    "Industry Expertise"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <IconBrandFacebook className="w-5 h-5" />,
      href: "https://facebook.com",
      color: "hover:text-blue-500"
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitter className="w-5 h-5" />,
      href: "https://twitter.com",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--black)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Gradient line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(31,83,198,0.3)] via-[rgba(0,212,255,0.3)] to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgba(31,83,198,1)] to-[rgba(0,212,255,1)] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-clash">First Us</h3>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="group flex items-center gap-3 text-white/60 hover:text-white/80 transition-all duration-300">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <IconMail className="w-4 h-4" />
                </div>
                <span className="text-sm white">contact@firstus.tech</span>
              </div>
              <div className="group flex items-center gap-3 text-white/60 hover:text-white/80 transition-all duration-300">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <IconPhone className="w-4 h-4" />
                </div>
                <span className="text-sm white">+1 (646) 555-0123</span>
              </div>
              <div className="group flex items-center gap-3 text-white/60 hover:text-white/80 transition-all duration-300">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <IconMapPin className="w-4 h-4" />
                </div>
                <span className="text-sm white">Manhattan, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[rgba(31,83,198,1)] to-[rgba(0,212,255,1)] rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group text-white/60 hover:text-white transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white group-hover:w-2 transition-all duration-300"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[rgba(2,0,36,1)] to-[rgba(31,83,198,1)] rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-white/60 hover:text-white transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white group-hover:w-2 transition-all duration-300"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Stay Connected
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[rgba(0,212,255,1)] to-[rgba(31,83,198,1)] rounded-full"></div>
            </h4>

            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-white/60 text-sm mb-4">
                Get the latest tech insights and industry updates.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-[rgba(31,83,198,1)] to-[rgba(0,212,255,1)] text-white rounded-lg hover:from-[rgba(31,83,198,0.8)] hover:to-[rgba(0,212,255,0.8)] transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/60 text-sm mb-4">Follow our journey</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group text-white/60 ${social.color} transition-all duration-300 p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-white/50 text-sm">
                © {currentYear} First Us. All rights reserved.
              </p>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-white/50 hover:text-white/80 transition-all duration-300 text-sm hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white/80 transition-all duration-300 text-sm hover:underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;