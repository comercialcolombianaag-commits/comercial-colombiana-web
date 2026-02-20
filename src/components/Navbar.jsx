import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSegurosDropdown, setShowSegurosDropdown] = useState(false);
  const [showPersonasSubmenu, setShowPersonasSubmenu] = useState(false);
  const [showEmpresasSubmenu, setShowEmpresasSubmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setShowSegurosDropdown(false);
    setShowPersonasSubmenu(false);
    setShowEmpresasSubmenu(false);
  };

  return (
    <React.Fragment>
      {/* Top bar */}
      <div className="top-bar" style={{
        background: isScrolled ? 'rgba(0, 59, 113, 0.95)' : 'linear-gradient(135deg, rgba(0, 59, 113, 0.98) 0%, rgba(0, 31, 63, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        padding: '0.625rem 0',
        fontSize: '0.875rem',
        borderBottom: '1px solid rgba(74, 144, 226, 0.2)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="tel:+573156851089" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} />
              <span>+57 (315) 685-1089</span>
            </a>
            <a href="mailto:andres.arenas@comercialcolombiana.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              <span>andres.arenas@comercialcolombiana.com</span>
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/company/comercial-colombiana-agencia-de-seguros" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>
              🔗 LinkedIn
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>
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
        borderBottom: '1px solid rgba(74, 144, 226, 0.15)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <a href="/inicio" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/Logo-CCL.png" alt="Comercial Colombiana" style={{
              height: isScrolled ? '50px' : '60px',
              width: 'auto',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
            }} />
          </a>

          {/* Desktop menu */}
          <div className="desktop-menu" style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }}>
            
            <a href="/quienes-somos" className="nav-link">Quiénes somos</a>

            {/* Nuestros seguros dropdown */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => setShowSegurosDropdown(true)}
              onMouseLeave={closeAllMenus}
              style={{ position: 'relative' }}
            >
              <button className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#1F2937', fontWeight: '600', fontSize: '0.9375rem', padding: '0.75rem 1.25rem' }}>
                Nuestros seguros
                <ChevronDown size={16} />
              </button>

              {showSegurosDropdown && (
                <div className="dropdown-menu" style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: '0.5rem',
                  background: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                  padding: '0.5rem',
                  minWidth: '280px',
                  border: '1px solid rgba(74, 144, 226, 0.2)',
                  zIndex: 1001
                }}>
                  
                  {/* Seguros para Personas */}
                  <div 
                    className="dropdown-item-wrapper"
                    onMouseEnter={() => setShowPersonasSubmenu(true)}
                    onMouseLeave={() => setShowPersonasSubmenu(false)}
                    style={{ position: 'relative' }}
                  >
                    <a href="/seguros-para-personas" className="dropdown-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      color: '#1F2937',
                      textDecoration: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '0.9375rem',
                      fontWeight: '500'
                    }}>
                      Seguros para Personas
                      <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', opacity: 0.5 }} />
                    </a>

                    {showPersonasSubmenu && (
                      <div className="submenu" style={{
                        position: 'absolute',
                        left: '100%',
                        top: '0',
                        marginLeft: '0.5rem',
                        background: 'white',
                        borderRadius: '0.75rem',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                        padding: '0.5rem',
                        minWidth: '300px',
                        maxHeight: '500px',
                        overflowY: 'auto',
                        border: '1px solid rgba(74, 144, 226, 0.2)'
                      }}>
                        <a href="/portafolio-de-seguros#segurocarros" className="submenu-item">Seguro de Autos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-HOGAR" className="submenu-item">Seguro de Hogar</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-VIDA-Y-SALUD" className="submenu-item">Seguro de Salud</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-VIDA" className="submenu-item">Seguro de Vida</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-BICICLETAS" className="submenu-item">Seguros para Bicicletas y Patinetas</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-AHORRO" className="submenu-item">Seguros para Ahorro y Futuro</a>
                        <a href="/portafolio-de-seguros#SEGURO-EDUCATIVO" className="submenu-item">Seguros para Educación</a>
                        <a href="/portafolio-de-seguros#SEGURO-PARA-MASCOTAS" className="submenu-item">Seguro para Mascotas</a>
                        <a href="/portafolio-de-seguros#SEGURO-EXEQUIAL" className="submenu-item">Seguros Exequiales</a>
                      </div>
                    )}
                  </div>

                  {/* Seguros para Empresas */}
                  <div 
                    className="dropdown-item-wrapper"
                    onMouseEnter={() => setShowEmpresasSubmenu(true)}
                    onMouseLeave={() => setShowEmpresasSubmenu(false)}
                    style={{ position: 'relative' }}
                  >
                    <a href="/seguros-para-empresas" className="dropdown-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      color: '#1F2937',
                      textDecoration: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '0.9375rem',
                      fontWeight: '500'
                    }}>
                      Seguros para Empresas
                      <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', opacity: 0.5 }} />
                    </a>

                    {showEmpresasSubmenu && (
                      <div className="submenu" style={{
                        position: 'absolute',
                        left: '100%',
                        top: '0',
                        marginLeft: '0.5rem',
                        background: 'white',
                        borderRadius: '0.75rem',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                        padding: '0.5rem',
                        minWidth: '320px',
                        maxHeight: '500px',
                        overflowY: 'auto',
                        border: '1px solid rgba(74, 144, 226, 0.2)'
                      }}>
                        <a href="/portafolio-de-seguros#SEGURO-DE-CUMPLIMIENTO" className="submenu-item">Seguro de Cumplimiento Individual</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-RESPONSABILIDAD-CIVIL-EMPRESARIAL" className="submenu-item">Responsabilidad Civil Empresarial</a>
                        <a href="/portafolio-de-seguros#ACCIDENTES-LABORALES" className="submenu-item">Accidentes Laborales y Personales</a>
                        <a href="/portafolio-de-seguros#VIDA-GRUPO-EMPRESARIAL" className="submenu-item">Vida Grupo Empresarial</a>
                        <a href="/portafolio-de-seguros#INFRAESTRUCTURA-Y-EQUIPOS" className="submenu-item">Infraestructura y Equipos</a>
                        <a href="/portafolio-de-seguros#CUMPLIMIENTO-EN-CONTRATOS-Y-PROYECTOS" className="submenu-item">Cumplimiento en Contratos y Proyectos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-PLAN-DE-BENEFICIOS-PARA-EMPRESA" className="submenu-item">Seguros para beneficios empresariales</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-DIRECTORES-Y-ADMINISTRADORES" className="submenu-item">Seguros para directivos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-INFIDELIDAD-Y-RIESGOS-FINANCIEROS" className="submenu-item">Seguros contra infidelidad y manejo</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-RIESGOS-CIBERNETICOS" className="submenu-item">Seguros para riesgos cibernéticos</a>
                        <a href="/portafolio-de-seguros#OTROS-SEGUROS-EMPRESARIALES" className="submenu-item">Opción de otros seguros</a>
                      </div>
                    )}
                  </div>

                  <a href="/acompanamiento-en-siniestros" className="dropdown-item" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '500' }}>Acompañamiento en Siniestros</a>
                  <a href="/asesoria-integral-en-seguros" className="dropdown-item" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '500' }}>Asesoría Integral en Seguros</a>
                  <a href="/atencion-a-fondos-y-educacion" className="dropdown-item" style={{ display: 'block', padding: '0.75rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '500' }}>Atención a Fondos de Empleados y Educación</a>
                </div>
              )}
            </div>

            <a href="/preguntas-frecuentes" className="nav-link">Preguntas frecuentes</a>
            <a href="/blog" className="nav-link">Blog</a>

            <a href="/contacto" className="btn-contacto" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.875rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)',
              color: 'white',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(0, 102, 204, 0.3)',
              marginLeft: '0.5rem'
            }}>
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'block',
              background: 'rgba(74, 144, 226, 0.1)',
              border: '1px solid rgba(74, 144, 226, 0.3)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              padding: '0.625rem'
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
            background: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            padding: '1.5rem',
            borderTop: '1px solid rgba(74, 144, 226, 0.2)',
            maxHeight: 'calc(100vh - 150px)',
            overflowY: 'auto'
          }}>
            <a href="/quienes-somos" className="mobile-item">Quiénes somos</a>
            <a href="/seguros-para-personas" className="mobile-item">Seguros para Personas</a>
            <a href="/seguros-para-empresas" className="mobile-item">Seguros para Empresas</a>
            <a href="/preguntas-frecuentes" className="mobile-item">Preguntas frecuentes</a>
            <a href="/blog" className="mobile-item">Blog</a>
            <a href="/contacto" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              fontSize: '1rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)',
              color: 'white',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              marginTop: '1rem'
            }}>
              Contacto
            </a>
          </div>
        )}
      </nav>

      <style>{`
        .nav-link {
          color: #1F2937;
          text-decoration: none;
          fontWeight: 600;
          fontSize: 0.9375rem;
          padding: 0.75rem 1.25rem;
          borderRadius: 0.5rem;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #0066CC;
          background: rgba(74, 144, 226, 0.1);
        }
        .dropdown-item:hover {
          background: rgba(74, 144, 226, 0.1);
          color: #0066CC;
        }
        .submenu-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #1F2937;
          textDecoration: none;
          borderRadius: 0.5rem;
          fontSize: 0.875rem;
          fontWeight: 500;
          transition: all 0.2s ease;
        }
        .submenu-item:hover {
          background: rgba(74, 144, 226, 0.1);
          color: #0066CC;
          paddingLeft: 1.25rem;
        }
        .mobile-item {
          display: block;
          color: #1F2937;
          textDecoration: none;
          fontWeight: 600;
          fontSize: 1.0625rem;
          padding: 0.875rem 1rem;
          borderRadius: 0.75rem;
          borderBottom: 1px solid rgba(74, 144, 226, 0.1);
        }
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
