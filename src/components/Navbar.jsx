import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, User, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSegurosDropdown, setShowSegurosDropdown] = useState(false);
  
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setShowSegurosDropdown(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowSegurosDropdown(false);
    }, 150);
  };

  return (
    <React.Fragment>
      <div className="top-bar" style={{ background: isScrolled ? 'rgba(0, 59, 113, 0.95)' : 'linear-gradient(135deg, rgba(0, 59, 113, 0.98) 0%, rgba(0, 31, 63, 0.95) 100%)', backdropFilter: 'blur(10px)', color: 'white', padding: '0.625rem 0', fontSize: '0.875rem', borderBottom: '1px solid rgba(74, 144, 226, 0.2)', transition: 'all 0.3s ease' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="tel:+573156851089" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /><span>+57 (315) 685-1089</span></a>
            <a href="mailto:andres.arenas@comercialcolombiana.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /><span>andres.arenas@comercialcolombiana.com</span></a>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/company/comercial-colombiana-agencia-de-seguros" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>🔗 LinkedIn</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.875rem' }}>📷 Instagram</a>
          </div>
        </div>
      </div>

      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)', backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)', boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', padding: isScrolled ? '0.75rem 0' : '1rem 0', borderBottom: '1px solid rgba(74, 144, 226, 0.15)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <a href="/inicio" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/Logo-CCL.png" alt="Comercial Colombiana" style={{ height: isScrolled ? '50px' : '60px', width: 'auto', transition: 'all 0.3s ease', filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))' }} />
          </a>

          <div className="desktop-menu" style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }}>
            
            <a href="/quienes-somos" className="nav-link">Quiénes somos</a>

            <div className="mega-menu-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
              <button className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', color: showSegurosDropdown ? '#0066CC' : '#1F2937', fontWeight: '600', fontSize: '0.9375rem', padding: '0.75rem 1.25rem', transition: 'all 0.3s ease' }}>Nuestros seguros<ChevronDown size={16} style={{ transform: showSegurosDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} /></button>

              {showSegurosDropdown && (
                <div className="mega-menu" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '1rem', background: 'white', borderRadius: '1rem', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)', padding: '2rem', minWidth: '700px', border: '1px solid rgba(74, 144, 226, 0.2)', zIndex: 1001 }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #0066CC' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #0066CC 0%, #4A90E2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={20} color="white" /></div>
                        <div>
                          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', margin: 0, lineHeight: 1.2 }}>Para Personas</h3>
                          <p style={{ fontSize: '0.8125rem', color: '#6B7280', margin: 0 }}>Protege tu vida y patrimonio</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <a href="/seguros-para-personas" className="mega-menu-link" style={{ padding: '0.875rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(90deg, rgba(0, 102, 204, 0.1) 0%, transparent 100%)', borderLeft: '3px solid #0066CC' }}>📋 Ver todos los seguros personales</a>
                        <a href="/portafolio-de-seguros#segurocarros" className="mega-menu-item">🚗 Seguro de Autos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-HOGAR" className="mega-menu-item">🏠 Seguro de Hogar</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-VIDA-Y-SALUD" className="mega-menu-item">❤️ Seguro de Salud</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-VIDA" className="mega-menu-item">🛡️ Seguro de Vida</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-BICICLETAS" className="mega-menu-item">🚴 Bicicletas y Patinetas</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-AHORRO" className="mega-menu-item">💰 Ahorro y Futuro</a>
                        <a href="/portafolio-de-seguros#SEGURO-EDUCATIVO" className="mega-menu-item">🎓 Educación</a>
                        <a href="/portafolio-de-seguros#SEGURO-PARA-MASCOTAS" className="mega-menu-item">🐾 Mascotas</a>
                        <a href="/portafolio-de-seguros#SEGURO-EXEQUIAL" className="mega-menu-item">🕊️ Exequiales</a>
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #4A90E2' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #4A90E2 0%, #0066CC 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Building2 size={20} color="white" /></div>
                        <div>
                          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', margin: 0, lineHeight: 1.2 }}>Para Empresas</h3>
                          <p style={{ fontSize: '0.8125rem', color: '#6B7280', margin: 0 }}>Asegura tu negocio y equipo</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <a href="/seguros-para-empresas" className="mega-menu-link" style={{ padding: '0.875rem 1rem', color: '#1F2937', textDecoration: 'none', borderRadius: '0.5rem', fontSize: '0.9375rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(90deg, rgba(74, 144, 226, 0.1) 0%, transparent 100%)', borderLeft: '3px solid #4A90E2' }}>🏢 Ver todos los seguros empresariales</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-CUMPLIMIENTO" className="mega-menu-item">✅ Cumplimiento Individual</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-RESPONSABILIDAD-CIVIL-EMPRESARIAL" className="mega-menu-item">⚖️ Responsabilidad Civil</a>
                        <a href="/portafolio-de-seguros#ACCIDENTES-LABORALES" className="mega-menu-item">🏥 Accidentes Laborales</a>
                        <a href="/portafolio-de-seguros#VIDA-GRUPO-EMPRESARIAL" className="mega-menu-item">👥 Vida Grupo</a>
                        <a href="/portafolio-de-seguros#INFRAESTRUCTURA-Y-EQUIPOS" className="mega-menu-item">🏗️ Infraestructura</a>
                        <a href="/portafolio-de-seguros#CUMPLIMIENTO-EN-CONTRATOS-Y-PROYECTOS" className="mega-menu-item">📝 Contratos y Proyectos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-PLAN-DE-BENEFICIOS-PARA-EMPRESA" className="mega-menu-item">🎁 Beneficios</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-DIRECTORES-Y-ADMINISTRADORES" className="mega-menu-item">👔 Directivos</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-INFIDELIDAD-Y-RIESGOS-FINANCIEROS" className="mega-menu-item">🔒 Infidelidad</a>
                        <a href="/portafolio-de-seguros#SEGURO-DE-RIESGOS-CIBERNETICOS" className="mega-menu-item">💻 Cibernéticos</a>
                      </div>
                    </div>

                  </div>

                  <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    <a href="/acompanamiento-en-siniestros" className="mega-menu-footer-item">🆘 Acompañamiento en Siniestros</a>
                    <a href="/asesoria-integral-en-seguros" className="mega-menu-footer-item">💼 Asesoría Integral</a>
                    <a href="/atencion-a-fondos-y-educacion" className="mega-menu-footer-item">🏫 Fondos y Educación</a>
                  </div>
                </div>
              )}
            </div>

            <a href="/preguntas-frecuentes" className="nav-link">Preguntas frecuentes</a>
            <a href="/blog" className="nav-link">Blog</a>
            <a href="/contacto" className="btn-contacto" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 1.75rem', fontSize: '0.9375rem', fontWeight: '700', background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)', color: 'white', borderRadius: '0.75rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(0, 102, 204, 0.3)', marginLeft: '0.5rem' }}>Contacto</a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-btn" style={{ display: 'block', background: 'rgba(74, 144, 226, 0.1)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '0.5rem', cursor: 'pointer', padding: '0.625rem' }}>
            {isMobileMenuOpen ? <X size={24} color="#0066CC" /> : <Menu size={24} color="#0066CC" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', padding: '1.5rem', borderTop: '1px solid rgba(74, 144, 226, 0.2)', maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
            <a href="/quienes-somos" className="mobile-item">Quiénes somos</a>
            <a href="/seguros-para-personas" className="mobile-item">Seguros para Personas</a>
            <a href="/seguros-para-empresas" className="mobile-item">Seguros para Empresas</a>
            <a href="/preguntas-frecuentes" className="mobile-item">Preguntas frecuentes</a>
            <a href="/blog" className="mobile-item">Blog</a>
            <a href="/contacto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', fontSize: '1rem', fontWeight: '700', background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)', color: 'white', borderRadius: '0.75rem', textDecoration: 'none', marginTop: '1rem' }}>Contacto</a>
          </div>
        )}
      </nav>

      <style>{`
        .nav-link { color: #1F2937; text-decoration: none; font-weight: 600; font-size: 0.9375rem; padding: 0.75rem 1.25rem; border-radius: 0.5rem; transition: all 0.3s ease; }
        .nav-link:hover { color: #0066CC; background: rgba(74, 144, 226, 0.1); }
        .mega-menu-item { display: block; padding: 0.625rem 1rem; color: #4B5563; text-decoration: none; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; transition: all 0.2s ease; }
        .mega-menu-item:hover { background: rgba(74, 144, 226, 0.08); color: #0066CC; padding-left: 1.25rem; }
        .mega-menu-footer-item { display: block; padding: 0.75rem 1rem; color: #4B5563; text-decoration: none; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; text-align: center; background: rgba(74, 144, 226, 0.05); transition: all 0.2s ease; }
        .mega-menu-footer-item:hover { background: rgba(74, 144, 226, 0.15); color: #0066CC; transform: translateY(-2px); }
        .mobile-item { display: block; color: #1F2937; text-decoration: none; font-weight: 600; font-size: 1.0625rem; padding: 0.875rem 1rem; border-radius: 0.75rem; border-bottom: 1px solid rgba(74, 144, 226, 0.1); }
        @media (min-width: 769px) { .desktop-menu { display: flex !important; } .mobile-menu-btn { display: none !important; } }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
