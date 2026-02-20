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
    { name: 'Quiénes somos', href: '/quienes-somos', submenu: null },
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
        { name: 'Acompañamiento en Siniestros', href: '/acompanamiento-en-siniestros', hasSubmenu: false },
        { name: 'Asesoría Integral en Seguros', href: '/asesoria-integral-en-seguros', hasSubmenu: false },
        { name: 'Atención a Fondos de Empleados y Educación', href: '/atencion-a-fondos-y-educacion', hasSubmenu: false }
      ]
    },
    { name: 'Preguntas frecuentes', href: '/preguntas-frecuentes', submenu: null },
    { name: 'Blog', href: '/blog', submenu: null }
  ];

  return (
    <React.Fragment>
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
            }}>
              📷 Instagram
            </a>
          </div>
        </div>
      </div>

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
          }}>
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

          <div style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }} className="desktop-menu">
            <a href="/quienes-somos" style={{
              color: '#1F2937',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              Quiénes somos
            </a>

            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('seguros')}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubmenu(null);
              }}
            >
              <button style={{
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
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}>
                Nuestros seguros
                <ChevronDown size={16} />
              </button>

              {activeDropdown === 'seguros' && (
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
                  zIndex: 1001
                }}>
                  <div onMouseEnter={() => setActiveSubmenu('personas')}>
                    <a href="/seguros-para-personas" style={{
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
                    }}>
                      Seguros para Personas
                      <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', opacity: 0.5 }} />
                    </a>

                    {activeSubmenu === 'personas' && (
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
                        border: '1px solid rgba(74, 144, 226, 0.2)'
                      }}>
                        <a href="/portafolio-de-seguros#segurocarros" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguro de Autos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-HOGAR" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguro de Hogar</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-VIDA-Y-SALUD" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguro de Salud</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-VIDA" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguro de Vida</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-BICICLETAS" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros para Bicicletas y Patinetas</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-AHORRO" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros para Ahorro y Futuro</a>
                        <a href="/portafolio-de-seguros#SEGURO-EDUCATIVO" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros para Educación</a>
                        <a href="/portafolio-de-seguros#SEGURO-PARA-MASCOTAS" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguro para Mascotas</a>
                        <a href="/portafolio-de-seguros#SEGURO-EXEQUIAL" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros Exequiales</a>
                      </div>
                    )}
                  </div>

                  <div onMouseEnter={() => setActiveSubmenu('empresas')}>
                    <a href="/seguros-para-empresas" style={{
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
                    }}>
                      Seguros para Empresas
                      <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', opacity: 0.5 }} />
                    </a>

                    {activeSubmenu === 'empresas' && (
                      <div style={{
                        position: 'absolute',
                        left: '100%',
                        top: '48px',
                        marginLeft: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '0.75rem',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                        padding: '0.5rem',
                        minWidth: '320px',
                        maxHeight: '500px',
                        overflowY: 'auto',
                        border: '1px solid rgba(74, 144, 226, 0.2)'
                      }}>
                        <a href="/portafolio-de-seguros#SEGURO-DE-CUMPLIMIENTO" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguro de Cumplimiento Individual</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-RESPONSABILIDAD-CIVIL-EMPRESARIAL" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Responsabilidad Civil Empresarial</a>
                        <a href="/portafolio-de-seguros#ACCIDENTES-LABORALES" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Accidentes Laborales y Personales</a>
                        <a href="/portafolio-de-seguros#VIDA-GRUPO-EMPRESARIAL" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Vida Grupo Empresarial</a>
                        <a href="/portafolio-de-seguros#INFRAESTRUCTURA-Y-EQUIPOS" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Infraestructura y Equipos</a>
                        <a href="/portafolio-de-seguros#CUMPLIMIENTO-EN-CONTRATOS-Y-PROYECTOS" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Cumplimiento en Contratos y Proyectos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-PLAN-DE-BENEFICIOS-PARA-EMPRESA" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros para beneficios empresariales</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-DIRECTORES-Y-ADMINISTRADORES" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros para directivos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-INFIDELIDAD-Y-RIESGOS-FINANCIEROS" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros contra infidelidad y manejo</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-RIESGOS-CIBERNETICOS" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Seguros para riesgos cibernéticos</a>
                        <a href="/portafolio-de-seguros#OTROS-SEGUROS-EMPRESARIALES" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Opción de otros seguros</a>
                      </div>
                    )}
                  </div>

                  <a href="/acompanamiento-en-siniestros" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Acompañamiento en Siniestros</a>
                  <a href="/asesoria-integral-en-seguros" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Asesoría Integral en Seguros</a>
                  <a href="/atencion-a-fondos-y-educacion" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '500', transition: 'all 0.2s ease' }}>Atención a Fondos de Empleados y Educación</a>
                </div>
              )}
            </div>

            <a href="/preguntas-frecuentes" style={{
              color: '#1F2937',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              Preguntas frecuentes
            </a>

            <a href="/blog" style={{
              color: '#1F2937',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              Blog
            </a>

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
          >
            {isMobileMenuOpen ? <X size={24} color="#0066CC" /> : <Menu size={24} color="#0066CC" />}
          </button>
        </div>

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
            borderTop: '1px solid rgba(74, 144, 226, 0.2)',
            maxHeight: 'calc(100vh - 150px)',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
