"use client"
import React, { useEffect, useRef } from 'react'
import styles from '@/styles/services/Herosection.module.scss'
import GsapFadeIn from '@/components/animations/GsapFadeIn'

const Herosection = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Network nodes and connections
    const nodes = []
    const connections = []
    const nodeCount = 50
    const maxDistance = 150

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach(node => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 168, 204, ${node.opacity})`
        ctx.fill()
      })

      // Draw connections
      connections.length = 0
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0, 168, 204, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className={styles.heroContainer} ref={containerRef}>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className={styles.backgroundCanvas}
      />

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
        <div className={styles.scanLine}></div>
      </div>

      {/* Main Content */}
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⚡</span>
              Future-Ready IT Solutions
            </div>
          </GsapFadeIn>

          <GsapFadeIn effect="slide-up" duration={1} delay={0.4}>
            <h1 className={styles.heroTitle}>
              Transforming Business Through
              <span className={styles.gradientText}> Intelligent Technology</span>
            </h1>
          </GsapFadeIn>

          <GsapFadeIn effect="slide-up" duration={1} delay={0.6}>
            <p className={styles.heroDescription}>
              We architect digital ecosystems that evolve with your business,
              leveraging cutting-edge AI, cloud infrastructure, and data analytics
              to unlock unprecedented growth opportunities.
            </p>
          </GsapFadeIn>

          <GsapFadeIn effect="slide-up" duration={1} delay={0.8}>
            <div className={styles.ctaSection}>
              <button className={styles.primaryCta}>
                <span>Start Your Digital Journey</span>
                <div className={styles.ctaIcon}>→</div>
              </button>
              <button className={styles.secondaryCta}>
                <span>View Case Studies</span>
              </button>
            </div>
          </GsapFadeIn>

          <GsapFadeIn effect="slide-up" duration={1} delay={1}>
            <div className={styles.statsSection}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>99.9%</div>
                <div className={styles.statLabel}>Uptime Guarantee</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Expert Support</div>
              </div>
            </div>
          </GsapFadeIn>
        </div>

        <div className={styles.visualSection}>
          <GsapFadeIn effect="slide-left" duration={1.2} delay={1}>
            <div className={styles.humanSilhouette}>
              {/* Human silhouette with data interface */}
              <div className={styles.silhouetteContainer}>
                <div className={styles.humanFigure}></div>
                <div className={styles.dataInterface}>
                  <div className={styles.dataPanel} style={{ top: '20%', left: '10%' }}>
                    <div className={styles.dataHeader}>Analytics</div>
                    <div className={styles.dataChart}></div>
                  </div>
                  <div className={styles.dataPanel} style={{ top: '50%', right: '15%' }}>
                    <div className={styles.dataHeader}>Performance</div>
                    <div className={styles.dataMetrics}>
                      <div className={styles.metric}></div>
                      <div className={styles.metric}></div>
                      <div className={styles.metric}></div>
                    </div>
                  </div>
                  <div className={styles.dataPanel} style={{ bottom: '25%', left: '20%' }}>
                    <div className={styles.dataHeader}>Network</div>
                    <div className={styles.networkViz}></div>
                  </div>
                </div>
                <div className={styles.connectionLines}>
                  <div className={styles.connectionLine} style={{ top: '30%', left: '40%' }}></div>
                  <div className={styles.connectionLine} style={{ top: '60%', right: '30%' }}></div>
                  <div className={styles.connectionLine} style={{ bottom: '35%', left: '35%' }}></div>
                </div>
              </div>
            </div>
          </GsapFadeIn>
        </div>
      </div>
    </div>
  )
}

export default Herosection;
