import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/styles/landingpage/ClientLogos.module.scss";

const ClientLogos = () => {
  const stripRef = useRef(null);
  const logoContainerRef = useRef(null);

  // Sample client/partner logos - you can replace these with actual client logos
  const clientLogos = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/200px-Google_%22G%22_logo.svg.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/200px-Amazon_icon.svg.png",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/200px-Apple_logo_grey.svg.png",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png",
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/200px-Salesforce.com_logo.svg.png",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && logoContainerRef.current) {
      const container = logoContainerRef.current;
      const logos = container.children;

      // Set up infinite scroll animation
      const totalWidth = container.scrollWidth / 2; // Divide by 2 because we duplicate

      gsap.set(container, { x: 0 });

      // Create infinite scroll animation
      gsap.to(container, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });

      // Add hover pause functionality
      const handleMouseEnter = () => {
        gsap.to(container, { timeScale: 0.1, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(container, { timeScale: 1, duration: 0.3 });
      };

      if (stripRef.current) {
        stripRef.current.addEventListener("mouseenter", handleMouseEnter);
        stripRef.current.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (stripRef.current) {
          stripRef.current.removeEventListener("mouseenter", handleMouseEnter);
          stripRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }
  }, []);

  return (
    <section className={styles.logoStripSection} ref={stripRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          
        </div>

        <div className={styles.logoStrip}>
          <div className={styles.logoContainer} ref={logoContainerRef}>
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div key={`first-${index}`} className={styles.logoItem}>
                <div className={styles.logoPlaceholder}>
                  <img
                    src={client.logo}
                    alt={`logo`}
                    className={styles.logoImage}
                  />
                  <div className={styles.logoGlow}></div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div key={`second-${index}`} className={styles.logoItem}>
                <div className={styles.logoPlaceholder}>
                  <img
                    src={client.logo}
                    alt={`logo`}
                    className={styles.logoImage}
                  />
                  <div className={styles.logoGlow}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.gradientOverlay}>
          <div className={styles.gradientLeft}></div>
          <div className={styles.gradientRight}></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
