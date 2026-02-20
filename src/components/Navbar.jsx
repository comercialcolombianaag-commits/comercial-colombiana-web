import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Quiénes somos', href: '/quienes-somos' },
    {
      name: 'Nuestros seguros',
      href: '#',
      submenu: [
        {
          name: 'Seguros para Personas',
          href: '/seguros-para-personas',
          hasSubmenu: true,
          items: [
            { name: 'Seguro de Autos', href: '/portafolio-de-seguros#segurocarros' },
            { name: 'Seguro de Hogar', href: '/portafolio-de-seguros#SEGURO-DE-HOGAR' },
            { name: 'Seguro de Salud', href: '/portafolio-de-seguros#SEGURO-DE-VIDA-Y-SALUD' },
            { name: 'Seguro de Vida', href: '/portafolio-de-seguros#SEGURO-DE-VIDA' },
            { name: 'Seguros para Bicicletas y Patinetas', href: '/portafolio-de-seguros#SEGURO-DE-BICICLETAS' },
            { name: 'Seguros para Ahorro y Futuro', href: '/portafolio-de-seguros#SEGURO-DE-AHORRO' },
            { name: 'Seguros para Educación', href: '/portafolio-de-seguros#SEGURO-EDUCATIVO' },
            { name: 'Seguro para Mascotas', href: '/portafolio-de-seguros#SEGURO-PARA-MASCOTAS' },
            { name: 'Seguros Exequiales', href: '/portafolio-de-seguros#SEGURO-EXEQUIAL' }
          ]
        },
        {
          name: 'Seguros para Empresas',
          href: '/seguros-para-empresas',
          hasSubmenu: true,
          items: [
            { name: 'Seguro de Cumplimiento Individual', href: '/portafolio-de-seguros#SEGURO-DE-CUMPLIMIENTO' },
            { name: 'Responsabilidad Civil Empresarial', href: '/portafolio-de-seguros#SEGURO-DE-RESPONSABILIDAD-CIVIL-EMPRESARIAL' },
            { name: 'Accidentes Laborales y Personales', href: '/portafolio-de-seguros#ACCIDENTES-LABORALES' },
            { name: 'Vida Grupo Empresarial', href: '/portafolio-de-seguros#VIDA-GRUPO-EMPRESARIAL' },
            { name: 'Infraestructura y Equipos', href: '/portafolio-de-seguros#INFRAESTRUCTURA-Y-EQUIPOS' },
            { name: 'Cumplimiento en Contratos y Proyectos', href: '/portafolio-de-seguros#CUMPLIMIENTO-EN-CONTRATOS-Y-PROYECTOS' },
            { name: 'Seguros para beneficios empresariales', href: '/portafolio-de-seguros#SEGURO-DE-PLAN-DE-BENEFICIOS-PARA-EMPRESA' },
            { name: 'Seguros para directivos', href: '/portafolio-de-seguros#SEGURO-DE-DIRECTORES-Y-ADMINISTRADORES' },
            { name: 'Seguros contra infidelidad y manejo', href: '/portafolio-de-seguros#SEGURO-DE-INFIDELIDAD-Y-RIESGOS-FINANCIEROS' },
            { name: 'Seguros para riesgos cibernéticos', href: '/portafolio-de-seguros#SEGURO-DE-RIESGOS-CIBERNETICOS' },
            { name: 'Opción de otros seguros', href: '/portafolio-de-seguros#OTROS-SEGUROS-EMPRESARIALES' }
          ]
        },
        { name: 'Acompañamiento en Siniestros', href: '/acompanamiento-en-siniestros' },
        { name: 'Asesoría Integral en Seguros', href: '/asesoria-integral-en-seguros' },
        { name: 'Atención a Fondos de Empleados y Educación', href: '/atencion-a-fondos-y-educacion' }
      ]
    },
    { name: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <>
      {/* Top bar */}
      <div style={{
        background: isScrolled ? 'rgba(0, 59, 113, 0.95)' : 'linear-gradient(135deg, rgba(0, 59, 113, 0.98) 0%, rgba(0, 31, 63, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        padding: '0.625rem 0',
        fontSize: '0.875rem',
        borderBottom: '1px solid rgba(74, 144, 226, 0.2)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(74, 144, 226, 0.6), transparent)',
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
              e.currentTarget.style.color = '#4A90E2';
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
              e.currentTarget.style.color = '#4A90E2';
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
                 e.currentTarget.style.color = '#4A90E2';
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
              e.currentTarget.style.color = '#4A90E2';
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

      {/* Main navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: isScrolled ? '0.75rem 0' : '1rem 0',
        borderBottom: isScrolled ? '1px solid rgba(74, 144, 226, 0.15)' : '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="/inicio" style={{
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
            {menuItems.map((item, index) => (
              <div 
                key={index}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubmenu(null);
                }}
              >
                
                  href={item.href}
                  style={{
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9375rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    background: activeDropdown === index ? 'rgba(74, 144, 226, 0.1)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#0066CC';
                    e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeDropdown !== index) {
                      e.currentTarget.style.color = '#1F2937';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                </a>

                {item.submenu && activeDropdown === index && (
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
                    minWidth: '280px',
                    border: '1px solid rgba(74, 144, 226, 0.2)',
                    animation: 'fadeInDown 0.2s ease',
                    zIndex: 1001
                  }}>
                    {item.submenu.map((subItem, subIndex) => (
                      <div 
                        key={subIndex}
                        style={{ position: 'relative' }}
                        onMouseEnter={() => subItem.hasSubmenu && setActiveSubmenu(subIndex)}
                      >
                        
                          href={subItem.href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.75rem 1rem',
                            color: '#1F2937',
                            textDecoration: 'none',
                            borderRadius: '0.5rem',
                            fontSize: '0.9375rem',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
                            e.currentTarget.style.color = '#0066CC';
                            e.currentTarget.style.paddingLeft = '1.25rem';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#1F2937';
                            e.currentTarget.style.paddingLeft = '1rem';
                          }}
                        >
                          {subItem.name}
                          {subItem.hasSubmenu && <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', opacity: 0.5 }} />}
                        </a>

                        {subItem.hasSubmenu && activeSubmenu === subIndex && (
                          <div style={{
                            position: 'absolute',
                            left: '100%',
                            top: '0',
                            marginLeft: '0.5rem',
                            background: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '0.75rem',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                            padding: '0.5rem',
                            minWidth: '300px',
                            maxHeight: '500px',
                            overflowY: 'auto',
                            border: '1px solid rgba(74, 144, 226, 0.2)',
                            animation: 'fadeInRight 0.2s ease'
                          }}>
                            {subItem.items.map((nestedItem, nestedIndex) => (
                              
                                key={nestedIndex}
                                href={nestedItem.href}
                                style={{
                                  display: 'block',
                                  padding: '0.75rem 1rem',
                                  color: '#1F2937',
                                  textDecoration: 'none',
                                  borderRadius: '0.5rem',
                                  fontSize: '0.875rem',
                                  fontWeight: '500',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
                                  e.currentTarget.style.color = '#0066CC';
                                  e.currentTarget.style.paddingLeft = '1.25rem';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'transparent';
                                  e.currentTarget.style.color = '#1F2937';
                                  e.currentTarget.style.paddingLeft = '1rem';
                                }}
                              >
                                {nestedItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a href="/contacto" style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)',
              color: 'white',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(0, 102, 204, 0.3)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              marginLeft: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 102, 204, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 102, 204, 0.3)';
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'scanner 3s ease-in-out infinite'
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>Contacto</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'block',
              background: 'rgba(74, 144, 226, 0.1)',
              border: '1px solid rgba(74, 144, 226, 0.3)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              padding: '0.625rem',
              transition: 'all 0.3s ease'
            }}
            className="mobile-menu-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(74, 144, 226, 0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isMobileMenuOpen ? <X size={24} color="#0066CC" /> : <Menu size={24} color="#0066CC" />}
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
            borderTop: '1px solid rgba(74, 144, 226, 0.2)',
            maxHeight: 'calc(100vh - 150px)',
            overflowY: 'auto'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {menuItems.map((item, index) => (
                
                  key={index}
                  href={item.href}
                  style={{
                    color: '#1F2937',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.0625rem',
                    padding: '0.875rem 1rem',
                    borderRadius: '0.75rem',
                    borderBottom: '1px solid rgba(74, 144, 226, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
                    e.currentTarget.style.paddingLeft = '1.5rem';
                    e.currentTarget.style.color = '#0066CC';
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
              <a href="/contacto" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)',
                color: 'white',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                marginTop: '0.5rem',
                boxShadow: '0 4px 15px rgba(0, 102, 204, 0.3)'
              }}>
                Contacto
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
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
