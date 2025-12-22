import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'Seguros', href: '#seguros', submenu: true },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <>
      {/* Top bar */}
      <div style={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%)',
        color: 'white',
        padding: '0.75rem 0',
        fontSize: '0.875rem'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="tel:+573156851089" style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Phone size={16} />
              <span>+57 (315) 685-1089</span>
            </a>
            <a href="mailto:andres.arenas@comercialcolombiana.com" style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Mail size={16} />
              <span>andres.arenas@comercialcolombiana.com</span>
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'white' }}>🔗 LinkedIn</a>
            <a href="#" style={{ color: 'white' }}>📷 Instagram</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Comercial Colombiana
            <div style={{
              fontSize: '0.75rem',
              fontWeight: '500',
              color: '#F59E0B',
              WebkitTextFillColor: '#F59E0B'
            }}>
              Servicio Seguro desde 1970
            </div>
          </div>

          {/* Desktop menu */}
          <div style={{
            display: 'none',
            gap: '2rem',
            alignItems: 'center'
          }} className="desktop-menu">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: '#1F2937',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  transition: 'color 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = '#06B6D4'}
                onMouseLeave={(e) => e.target.style.color = '#1F2937'}
              >
                {item.name}
              </a>
            ))}
            <a href="#contacto" className="btn btn-primary" style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.9375rem'
            }}>
              Hablar con Experto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1.125rem',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #F3F4F6'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contacto" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Hablar con Experto
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
