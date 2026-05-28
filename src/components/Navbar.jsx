import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/reviews', label: 'Reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 2rem', height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(7, 6, 5, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200, 120, 26, 0.08)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div whileHover={{ opacity: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px', height: '32px',
              background: 'linear-gradient(135deg, #C8781A, #E8973A)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '15px', fontWeight: '800',
              color: '#07060A',
              fontFamily: 'var(--font-display)',
              boxShadow: '0 0 20px rgba(200, 120, 26, 0.35)',
              flexShrink: 0,
            }}>B</div>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: '700',
              fontSize: '15px', color: 'var(--text)', letterSpacing: '-0.01em',
            }}>
              Butterscotch<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {links.map(link => (
            <Link key={link.to} to={link.to} style={{
              fontFamily: 'var(--font-body)', fontWeight: '400', fontSize: '14px',
              color: location.pathname === link.to ? 'var(--accent)' : 'var(--text-2)',
              textDecoration: 'none', transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = location.pathname === link.to ? 'var(--accent)' : 'var(--text-2)'}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ padding: '9px 20px', fontSize: '13px', letterSpacing: '0.02em' }}>
              Start a Project
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text)', borderRadius: '2px', transformOrigin: 'center' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text)', borderRadius: '2px' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text)', borderRadius: '2px', transformOrigin: 'center' }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0,
              background: 'rgba(7, 6, 5, 0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)', padding: '1.5rem 2rem',
              zIndex: 99, display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {links.map(link => (
              <Link key={link.to} to={link.to} style={{ color: 'var(--text-2)', textDecoration: 'none', fontSize: '16px', fontFamily: 'var(--font-body)' }}>
                {link.label}
              </Link>
            ))}
            <Link to="/services" style={{ textDecoration: 'none', marginTop: '0.5rem' }}>
              <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '14px', width: '100%' }}>
                Start a Project
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
