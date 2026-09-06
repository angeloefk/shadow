import React, { useState, useEffect } from 'react';
import { Sparkles, Disc, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ currentRoute = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (currentRoute !== 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('/');
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/');
    }
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Commands', href: '#commands' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(11, 14, 20, 0.88)' : 'rgba(11, 14, 20, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Logo */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
              position: 'relative',
              border: '2px solid rgba(139, 92, 246, 0.5)',
              flexShrink: 0,
            }}
          >
            <img
              src="/shadow-avatar.webp"
              alt="Shadow Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://cdn.discordapp.com/avatars/1352679776036589648/a_2b85e7ea42101ad3e3160c98880f3598.webp?size=1024';
              }}
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                SHADOW<span style={{ color: '#A78BFA' }}>MUSIC</span>
              </span>
              {currentRoute === 'terms' && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    background: 'rgba(139, 92, 246, 0.25)',
                    border: '1px solid rgba(139, 92, 246, 0.5)',
                    color: '#C4B5FD',
                    letterSpacing: '0.04em'
                  }}
                >
                  TERMS
                </span>
              )}
              {currentRoute === 'privacy' && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    background: 'rgba(6, 182, 212, 0.25)',
                    border: '1px solid rgba(6, 182, 212, 0.5)',
                    color: '#67E8F9',
                    letterSpacing: '0.04em'
                  }}
                >
                  PRIVACY
                </span>
              )}
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#94A3B8',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-ctas" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=3147776"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '9px 20px', fontSize: '0.875rem' }}
          >
            <Sparkles size={16} />
            <span>Add to Discord</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 14, 20, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#CBD5E1',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={18} color="#8B5CF6" />
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Sparkles size={18} />
              <span>Add Shadow to Discord</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .desktop-ctas { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
