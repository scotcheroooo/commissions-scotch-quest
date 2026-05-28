import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const badges = {
  amber: { bg: 'rgba(200, 120, 26, 0.12)', color: '#E8973A', border: 'rgba(200, 120, 26, 0.25)' },
  green: { bg: 'rgba(52, 211, 153, 0.08)', color: '#34D399', border: 'rgba(52, 211, 153, 0.2)' },
}

export default function ServiceCard({ service }) {
  const ref = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  const badge = badges[service.badgeColor] || badges.amber

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        position: 'relative',
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'rgba(200, 120, 26, 0.22)' : 'var(--border)'}`,
        borderRadius: '16px',
        padding: '1.75rem',
        overflow: 'hidden',
        cursor: 'default',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Spotlight */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(200, 120, 26, 0.06), transparent 40%)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div style={{
            width: '42px', height: '42px',
            background: 'rgba(200, 120, 26, 0.09)',
            border: '1px solid rgba(200, 120, 26, 0.12)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px',
          }}>
            {service.emoji}
          </div>
          {service.badge && (
            <span style={{
              fontSize: '11px', fontWeight: '600',
              padding: '4px 10px', borderRadius: '100px',
              fontFamily: 'var(--font-display)', letterSpacing: '0.04em',
              background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`,
            }}>
              {service.badge}
            </span>
          )}
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.15rem', color: 'var(--text)', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>
          {service.name}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: '500', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
          {service.tagline}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.65', fontWeight: '300', marginBottom: '1.25rem', flex: 1 }}>
          {service.description}
        </p>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
          {service.features.map(f => (
            <span key={f} style={{
              fontSize: '11px', color: 'var(--text-2)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '6px', padding: '3px 9px',
            }}>{f}</span>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: '1rem', borderTop: '1px solid var(--border)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.05rem', color: 'var(--text)' }}>
              {service.price}
            </div>
            {service.priceNote && (
              <div style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '2px' }}>{service.priceNote}</div>
            )}
          </div>
          <Link to={service.isCustom ? '/custom' : `/services/${service.slug}`} style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ x: 3 }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--accent)', fontSize: '13px', fontWeight: '600',
                fontFamily: 'var(--font-display)',
                display: 'flex', alignItems: 'center', gap: '4px',
              }}
            >
              {service.isCustom ? 'Get a Quote' : 'Learn More'} →
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
