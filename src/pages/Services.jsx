import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <main style={{ paddingTop: '64px' }}>
      {/* Header */}
      <section style={{ padding: '5rem 2rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: '500px', height: '400px', background: 'radial-gradient(circle, rgba(200,120,26,0.08) 0%, transparent 70%)', top: '0', left: '50%', transform: 'translateX(-50%)' }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span className="section-label">Services</span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: '800',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            letterSpacing: '-0.03em', color: 'var(--text)',
            marginBottom: '1.25rem', lineHeight: '1.05',
          }}>
            Everything I build,<br />
            <span className="text-glow">all in one place.</span>
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', maxWidth: '460px', margin: '0 auto', lineHeight: '1.75', fontWeight: '300' }}>
            Pick a service, fill out the form, and I'll get to work. You get a preview domain before anything goes live.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section ref={ref} style={{ padding: '2rem 2rem 8rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
