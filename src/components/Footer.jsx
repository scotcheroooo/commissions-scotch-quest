import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 2rem' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px',
            background: 'linear-gradient(135deg, #C8781A, #E8973A)',
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: '800',
            color: '#07060A', fontFamily: 'var(--font-display)',
          }}>B</div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '14px', color: 'var(--text-2)' }}>
            Butterscotch Development
          </span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { to: '/services', label: 'Services' },
            { to: '/reviews', label: 'Reviews' },
            { to: '/custom', label: 'Get a Quote' },
          ].map(link => (
            <Link key={link.to} to={link.to} style={{
              fontSize: '13px', color: 'var(--text-3)', textDecoration: 'none', transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text-2)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
            >{link.label}</Link>
          ))}
        </div>

        <p style={{ fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} Butterscotch Development
        </p>
      </div>
    </footer>
  )
}
