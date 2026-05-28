import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <HowItWorks />
      <CTASection />
    </main>
  )
}

function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      textAlign: 'center', padding: '0 2rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div className="orb" style={{ width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(200,120,26,0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="orb" style={{ width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(232,151,58,0.07) 0%, transparent 70%)', top: '15%', right: '10%' }} />
      <div className="orb" style={{ width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(200,120,26,0.05) 0%, transparent 70%)', bottom: '20%', left: '8%' }} />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(200, 120, 26, 0.07)',
          border: '1px solid rgba(200, 120, 26, 0.18)',
          borderRadius: '100px', padding: '6px 16px',
          marginBottom: '2rem', position: 'relative', zIndex: 1,
        }}
      >
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent)', display: 'inline-block' }}
        />
        <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--accent)', fontFamily: 'var(--font-display)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Custom coded web projects
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)', fontWeight: '800',
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          lineHeight: '1.04', letterSpacing: '-0.03em',
          maxWidth: '900px', color: 'var(--text)',
          marginBottom: '1.5rem', position: 'relative', zIndex: 1,
        }}
      >
        Web projects built
        <br />
        <span className="text-glow">to impress.</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: 'var(--text-2)', maxWidth: '500px',
          lineHeight: '1.75', marginBottom: '2.5rem',
          fontWeight: '300', position: 'relative', zIndex: 1,
        }}
      >
        Custom coded portfolios, blogs, shops, and more — built fast, built right, and built to be completely yours.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}
      >
        <Link to="/services" style={{ textDecoration: 'none' }}>
          <button className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px', letterSpacing: '0.01em' }}>
            Browse Services
          </button>
        </Link>
        <Link to="/custom" style={{ textDecoration: 'none' }}>
          <button className="btn-ghost" style={{ padding: '14px 32px', fontSize: '15px' }}>
            Get a Quote
          </button>
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
      >
        <span style={{ fontSize: '10px', color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  )
}

function ServicesPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        <span className="section-label">What I Build</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', color: 'var(--text)' }}>
          Pick your project type
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        style={{ textAlign: 'center', marginTop: '2.5rem' }}
      >
        <Link to="/services" style={{ textDecoration: 'none' }}>
          <span style={{
            color: 'var(--accent)', fontSize: '14px', fontWeight: '500',
            fontFamily: 'var(--font-display)',
            borderBottom: '1px solid rgba(200,120,26,0.3)', paddingBottom: '2px',
            cursor: 'pointer',
          }}>
            View full service details →
          </span>
        </Link>
      </motion.div>
    </section>
  )
}

function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const steps = [
    { num: '01', title: 'Choose a service', desc: 'Browse the available project types and pick what fits your needs.' },
    { num: '02', title: 'Submit your request', desc: 'Fill out a quick form with your details and any specific requirements.' },
    { num: '03', title: 'I build it', desc: "You'll get a preview domain to review progress before anything is finalized." },
    { num: '04', title: "It's yours", desc: 'Final delivery includes full source code, repo access, and complete handoff.' },
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(to bottom, transparent, rgba(200,120,26,0.025), transparent)',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
    }}>
      <div ref={ref} style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-label">The Process</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.02em', marginBottom: '3.5rem' }}>
            Simple from start to finish
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', textAlign: 'left' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '2.8rem', color: 'rgba(200,120,26,0.13)', marginBottom: '0.75rem', letterSpacing: '-0.04em' }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.65', fontWeight: '300' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div style={{
          background: 'linear-gradient(135deg, rgba(200,120,26,0.07) 0%, rgba(200,120,26,0.02) 100%)',
          border: '1px solid rgba(200,120,26,0.14)',
          borderRadius: '24px',
          padding: 'clamp(3rem, 6vw, 5rem)',
          maxWidth: '680px', margin: '0 auto',
          position: 'relative', overflow: 'hidden',
        }}>
          <div className="orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(200,120,26,0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <span className="section-label" style={{ position: 'relative', zIndex: 1 }}>Ready to build?</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: '1.1', position: 'relative', zIndex: 1 }}>
            Let's make something<br /><span className="text-glow">worth showing off.</span>
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.7', fontWeight: '300', position: 'relative', zIndex: 1 }}>
            Choose a service and submit your request — I'll handle everything from there.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <Link to="/services" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>Start a Project</button>
            </Link>
            <Link to="/custom" style={{ textDecoration: 'none' }}>
              <button className="btn-ghost" style={{ padding: '14px 32px', fontSize: '15px' }}>Request a Quote</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
