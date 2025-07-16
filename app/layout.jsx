import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/_globals.scss";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CriticalResourceLoader from "@/components/common/CriticalResourceLoader";
import WebVitalsMonitor from "@/components/common/WebVitalsMonitor";
import ServiceWorkerRegistration from "@/components/common/ServiceWorkerRegistration";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata = {
  title: "First Us - Leading IT Solutions & Technology Services",
  description: "Transform your business with First Us's comprehensive IT solutions including custom software development, AI integration, cybersecurity, cloud infrastructure, and IT staffing services.",
  keywords: "IT solutions, software development, AI integration, cybersecurity, cloud services, IT staffing, digital transformation",
  authors: [{ name: "First Us" }],
  creator: "First Us",
  publisher: "First Us",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://first-us.vercel.app',
    title: 'First Us - Leading IT Solutions & Technology Services',
    description: 'Transform your business with comprehensive IT solutions including custom software development, AI integration, and cybersecurity services.',
    siteName: 'First Us',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Us - Leading IT Solutions & Technology Services',
    description: 'Transform your business with comprehensive IT solutions including custom software development, AI integration, and cybersecurity services.',
  },

};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegistration />
        <CriticalResourceLoader />
        <WebVitalsMonitor />
        <SpeedInsights />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
