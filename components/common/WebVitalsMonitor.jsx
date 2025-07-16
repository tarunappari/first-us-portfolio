"use client";
import { useEffect } from 'react';

const WebVitalsMonitor = () => {
  useEffect(() => {
    // Only run in production for performance monitoring
    if (process.env.NODE_ENV !== 'production') return;

    const reportWebVitals = (metric) => {
      // You can send this data to your analytics service
      console.log(`${metric.name}: ${metric.value}`);
      
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Dynamic import of web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    }).catch(() => {
      // Fallback manual implementation
      if ('PerformanceObserver' in window) {
        // LCP Observer
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
            id: 'manual-lcp'
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            reportWebVitals({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              id: 'manual-fid'
            });
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS Observer
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            id: 'manual-cls'
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    });

    // Monitor resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.transferSize > 100000) { // Resources larger than 100KB
          console.warn(`Large resource detected: ${entry.name} (${Math.round(entry.transferSize / 1024)}KB)`);
        }
      }
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn(`Long task detected: ${entry.duration}ms`);
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }

    return () => {
      // Cleanup observers
      if (resourceObserver) resourceObserver.disconnect();
    };
  }, []);

  return null;
};

export default WebVitalsMonitor;
