import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { 
      name: 'Seguros', 
      href: '#seguros',
      submenu: [
        { name: 'Para Personas', href: '#personas' },
        { name: 'Para Empresas', href: '#empresas' },
        { name: 'Fondos de Empleados', href: '#fondos' }
      ]
    },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <>
      {/* Top bar con glassmorphism */}
      <div style={{
        background: isScrolled ? 'rgba(30, 58, 138, 0.95)' : 'linear-gradient(135deg, rgba(30, 58, 138, 0.98) 0%, rgba(6, 182, 212, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        padding: '0.625rem 0',
        fontSize: '0.875rem',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Línea animada en la parte inferior */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), transparent)',
          animation: 'slideLineTopBar 3s ease-in-out infinite'
        }} />

        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="tel:+573156851089" style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F59E0B';
              e.currentTarget.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              <Phone size={16} />
              <span>+57 (315) 685-1089</span>
            </a>
            <a href="mailto:andres.arenas@comercialcolombiana.com" style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F59E0B';
              e.currentTarget.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              <Mail size={16} />
              <span>andres.arenas@comercialcolombiana.com</span>
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/company/comercial-colombiana-agencia-de-seguros" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 color: 'white',
                 textDecoration: 'none',
                 fontSize: '0.875rem',
                 transition: 'all 0.3s ease',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '0.375rem'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.color = '#F59E0B';
                 e.currentTarget.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.color = 'white';
                 e.currentTarget.style.transform = 'translateY(0)';
               }}>
              🔗 LinkedIn
            </a>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F59E0B';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              📷 Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar con glassmorphism tech */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.92)' 
          : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 1px rgba(6, 182, 212, 0.3)' 
          : '0 2px 8px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: isScrolled ? '0.75rem 0' : '1rem 0',
        borderBottom: isScrolled ? '1px solid rgba(6, 182, 212, 0.15)' : '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <a href="#inicio" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img 
              src="/Logo-CCL.png" 
              alt="Comercial Colombiana" 
              style={{
                height: isScrolled ? '50px' : '60px',
                width: 'auto',
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
              }}
            />
          </a>

          {/* Desktop menu */}
          <div style={{
            display: 'none',
            gap: '0.5rem',
            alignItems: 'center'
          }} className="desktop-menu">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  style={{
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9375rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    background: activeDropdown === item.name ? 'rgba(6, 182, 212, 0.08)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#06B6D4';
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeDropdown !== item.name) {
                      e.currentTarget.style.color = '#1F2937';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                </a>

                {/* Dropdown submenu */}
                {item.submenu && activeDropdown === item.name && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '0.75rem',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                    padding: '0.5rem',
                    minWidth: '220px',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    animation: 'fadeIn 0.2s ease'
                  }}>
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        style={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          color: '#1F2937',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.9375rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                          e.currentTarget.style.color = '#06B6D4';
                          e.currentTarget.style.paddingLeft = '1.25rem';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#1F2937';
                          e.currentTarget.style.paddingLeft = '1rem';
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button con efecto scanner */}
            <a href="#contacto" style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
              color: 'white',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              marginLeft: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.3)';
            }}>
              {/* Efecto scanner */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'scanner 3s ease-in-out infinite'
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>Hablar con Experto</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'block',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              padding: '0.625rem',
              transition: 'all 0.3s ease'
            }}
            className="mobile-menu-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isMobileMenuOpen ? <X size={24} color="#06B6D4" /> : <Menu size={24} color="#06B6D4" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            padding: '1.5rem',
            animation: 'fadeIn 0.3s ease',
            borderTop: '1px solid rgba(6, 182, 212, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.0625rem',
                    padding: '0.875rem 1rem',
                    borderRadius: '0.75rem',
                    borderBottom: '1px solid rgba(6, 182, 212, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)';
                    e.currentTarget.style.paddingLeft = '1.5rem';
                    e.currentTarget.style.color = '#06B6D4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.paddingLeft = '1rem';
                    e.currentTarget.style.color = '#1F2937';
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contacto" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                color: 'white',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                marginTop: '0.5rem',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
              }}>
                Hablar con Experto
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes slideLineTopBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes scanner {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
