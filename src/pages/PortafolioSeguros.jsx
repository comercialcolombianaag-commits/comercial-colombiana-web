import React, { useState, useEffect } from 'react';
import { Car, Home, Heart, Shield, User, Bike, PiggyBank, Plane, GraduationCap, Users as UsersIcon, PawPrint, ChevronUp, Search } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const PortafolioSeguros = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 500);

      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const segurosPersonas = [
    { id: 'segurocarros', icon: Car, title: 'Seguro de Auto y Moto', subtitle: 'Movilidad protegida con asesoría real', bullets: ['Cotizamos y comparamos por ti', 'Cobertura ajustada a tu realidad', 'Acompañamiento si algo pasa'], color: '#0066CC' },
    { id: 'SEGURO-DE-HOGAR', icon: Home, title: 'Seguro de Hogar', subtitle: 'Protege lo que más valoras', bullets: ['Aseguramos más que ladrillos', 'Te explicamos cada cobertura', 'Estamos cuando más lo necesitas'], color: '#4A90E2' },
    { id: 'SEGURO-DE-VIDA-Y-SALUD', icon: Heart, title: 'Seguro de Salud', subtitle: 'Cuida tu bienestar y el de tu familia', bullets: ['Clínicas de calidad', 'Cobertura médica real', 'Atención sin demoras'], color: '#0066CC' },
    { id: 'SEGURO-DE-VIDA', icon: Shield, title: 'Seguro de Vida', subtitle: 'Protege el futuro de tu familia', bullets: ['Protección familiar', 'Coberturas claras y sin tecnicismos', 'Tranquilidad futura'], color: '#4A90E2' },
    { id: 'SEGURO-DE-BICICLETAS', icon: Bike, title: 'Bicicletas y Patinetas', subtitle: 'Protege tu movilidad alternativa', bullets: ['Protección ante robos', 'Cobertura por daños accidentales', 'Asesoría clara'], color: '#0066CC' },
    { id: 'SEGURO-DE-AHORRO', icon: PiggyBank, title: 'Seguro de Ahorro', subtitle: 'Ahorra con respaldo y propósito', bullets: ['Ahorro con propósito', 'Proyección a mediano y largo plazo', 'Asesoría personalizada'], color: '#4A90E2' },
    { id: 'SEGURO-DE-VIAJE', icon: Plane, title: 'Seguro de Viajes', subtitle: 'Viaja con tranquilidad', bullets: ['Atención médica internacional', 'Pérdida de equipaje y vuelos', 'Asistencia 24/7'], color: '#0066CC' },
    { id: 'SEGURO-EDUCATIVO', icon: GraduationCap, title: 'Seguro Educativo', subtitle: 'Asegura la educación de tus hijos', bullets: ['Educación garantizada', 'Protección ante imprevistos', 'Asesoría cercana'], color: '#4A90E2' },
    { id: 'SEGURO-EXEQUIAL', icon: UsersIcon, title: 'Seguro Exequial', subtitle: 'Tranquilidad familiar en momentos difíciles', bullets: ['Tranquilidad familiar', 'Acompañamiento humano', 'Gestión sin complicaciones'], color: '#0066CC' },
    { id: 'SEGURO-PARA-MASCOTAS', icon: PawPrint, title: 'Seguro para Mascotas', subtitle: 'Protección para tu mejor amigo', bullets: ['Cobertura médica para emergencias', 'Ajustado a su raza', 'También cubre daños a terceros'], color: '#4A90E2' }
  ];

  const segurosEmpresas = [
    { id: 'SEGURO-DE-CUMPLIMIENTO', icon: Shield, title: 'Seguro de Cumplimiento', subtitle: 'Ejecuta tus contratos con respaldo', bullets: ['Garantiza tus contratos sin estrés', 'Analizamos cada contrato contigo', 'Asesoría durante todo el proceso'], color: '#0066CC' },
    { id: 'ACCIDENTES-LABORALES', icon: Heart, title: 'Riesgos Laborales', subtitle: 'Cuida a quienes hacen posible tu empresa', bullets: ['Protección para tus empleados', 'Cobertura adaptada al tipo de trabajo', 'Acompañamiento en siniestros'], color: '#4A90E2' },
    { id: 'SEGURO-DE-RESPONSABILIDAD-CIVIL-EMPRESARIAL', icon: Shield, title: 'Responsabilidad Civil Empresarial', subtitle: 'Protege ante perjuicios a terceros', bullets: ['Cubre daños a terceros', 'Diseñado según tu empresa', 'Respaldo ante reclamos'], color: '#0066CC' },
    { id: 'VIDA-GRUPO-EMPRESARIAL', icon: UsersIcon, title: 'Vida Grupo Empresarial', subtitle: 'Protección colectiva para tu equipo', bullets: ['Cobertura para todo tu equipo', 'Beneficios flexibles', 'Apoyo en todo el proceso'], color: '#4A90E2' },
    { id: 'INFRAESTRUCTURA-Y-EQUIPOS', icon: Home, title: 'Infraestructura y Equipos', subtitle: 'Protege tus activos físicos', bullets: ['Cobertura para edificios y contenido', 'Análisis de riesgo personalizado', 'Apoyo en siniestros'], color: '#0066CC' },
    { id: 'CUMPLIMIENTO-EN-CONTRATOS-Y-PROYECTOS', icon: Shield, title: 'Cumplimiento en Contratos', subtitle: 'Garantiza obligaciones legales', bullets: ['Cobertura de cumplimiento total', 'Póliza según contrato', 'Asesoría completa'], color: '#4A90E2' },
    { id: 'SEGURO-DE-PLAN-DE-BENEFICIOS-PARA-EMPRESA', icon: Heart, title: 'Plan de Beneficios', subtitle: 'Impulsa el bienestar empresarial', bullets: ['Deducción tributaria', 'Apoyo para tu equipo', 'Cobertura ante imprevistos'], color: '#0066CC' },
    { id: 'SEGURO-DE-DIRECTORES-Y-ADMINISTRADORES', icon: User, title: 'Directores y Administradores', subtitle: 'Protege a quienes toman decisiones', bullets: ['Protección legal personal', 'Respaldo ante demandas', 'Tranquilidad en la gestión'], color: '#4A90E2' },
    { id: 'SEGURO-DE-INFIDELIDAD-Y-RIESGOS-FINANCIEROS', icon: Shield, title: 'Infidelidad y Riesgos Financieros', subtitle: 'Protección ante actos deshonestos', bullets: ['Cubre pérdidas por robo interno', 'Aplica a cargos sensibles', 'Control y prevención'], color: '#0066CC' },
    { id: 'SEGURO-DE-RIESGOS-CIBERNETICOS', icon: Shield, title: 'Riesgos Cibernéticos', subtitle: 'Protección digital empresarial', bullets: ['Protección ante ciberataques', 'Cobertura por pérdida de datos', 'Asistencia técnica y legal'], color: '#4A90E2' },
    { id: 'OTROS-SEGUROS-EMPRESARIALES', icon: Shield, title: 'Otros Seguros Empresariales', subtitle: 'Soluciones a la medida', bullets: ['Seguros a la medida', 'Opciones por sector', 'Acompañamiento experto'], color: '#0066CC' }
  ];

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: '#E5E7EB', zIndex: 9999 }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg, #0066CC 0%, #4A90E2 100%)', width: `${scrollProgress}%`, transition: 'width 0.1s ease' }} />
      </div>

      <div style={{ paddingTop: '80px' }}>
        <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003B71 0%, #0066CC 100%)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>Portafolio Completo de Seguros</h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem', opacity: 0.95 }}>Encuentra el seguro perfecto para ti, tu familia o tu empresa. Más de 20 opciones con asesoría experta.</p>
          </div>
        </section>

        <div style={{ display: 'flex', gap: '2rem', maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem', position: 'relative' }}>
          
          <aside style={{ position: 'sticky', top: '120px', width: '280px', height: 'fit-content', flexShrink: 0, background: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB', display: 'none' }} className="desktop-sidebar">
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1F2937', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #0066CC' }}>Navegación Rápida</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0066CC', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Para Personas</div>
              {segurosPersonas.map((seguro, idx) => (
                <button key={idx} onClick={() => scrollToSection(seguro.id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.625rem 0.75rem', fontSize: '0.875rem', color: activeSection === seguro.id ? '#0066CC' : '#6B7280', background: activeSection === seguro.id ? 'rgba(0, 102, 204, 0.1)' : 'transparent', border: 'none', borderLeft: activeSection === seguro.id ? '3px solid #0066CC' : '3px solid transparent', cursor: 'pointer', transition: 'all 0.2s ease', fontWeight: activeSection === seguro.id ? '600' : '400' }} onMouseEnter={(e) => { if (activeSection !== seguro.id) { e.currentTarget.style.background = 'rgba(0, 102, 204, 0.05)'; e.currentTarget.style.paddingLeft = '1rem'; }}} onMouseLeave={(e) => { if (activeSection !== seguro.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '0.75rem'; }}}>{seguro.title}</button>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#4A90E2', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Para Empresas</div>
              {segurosEmpresas.map((seguro, idx) => (
                <button key={idx} onClick={() => scrollToSection(seguro.id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.625rem 0.75rem', fontSize: '0.875rem', color: activeSection === seguro.id ? '#4A90E2' : '#6B7280', background: activeSection === seguro.id ? 'rgba(74, 144, 226, 0.1)' : 'transparent', border: 'none', borderLeft: activeSection === seguro.id ? '3px solid #4A90E2' : '3px solid transparent', cursor: 'pointer', transition: 'all 0.2s ease', fontWeight: activeSection === seguro.id ? '600' : '400' }} onMouseEnter={(e) => { if (activeSection !== seguro.id) { e.currentTarget.style.background = 'rgba(74, 144, 226, 0.05)'; e.currentTarget.style.paddingLeft = '1rem'; }}} onMouseLeave={(e) => { if (activeSection !== seguro.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '0.75rem'; }}}>{seguro.title}</button>
              ))}
            </div>
          </aside>

          <main style={{ flex: 1, minWidth: 0 }}>
            
            <section style={{ marginBottom: '5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '3px solid #0066CC' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: 'linear-gradient(135deg, #0066CC 0%, #4A90E2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={24} color="white" /></div>
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1F2937', margin: 0, lineHeight: 1.2 }}>Seguros para Personas</h2>
                  <p style={{ fontSize: '1rem', color: '#6B7280', margin: 0 }}>Protege tu vida, salud y patrimonio personal</p>
                </div>
              </div>

              {segurosPersonas.map((seguro, idx) => {
                const Icon = seguro.icon;
                return (
                  <div key={idx} id={seguro.id} data-section={seguro.id} style={{ marginBottom: '3rem', background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = seguro.color; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${seguro.color}20`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: '70px', height: '70px', borderRadius: '1rem', background: `${seguro.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={32} color={seguro.color} /></div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.5rem' }}>{seguro.title}</h3>
                        <p style={{ fontSize: '1.125rem', color: seguro.color, fontWeight: '600', marginBottom: '0' }}>{seguro.subtitle}</p>
                      </div>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'grid', gap: '0.75rem' }}>
                      {seguro.bullets.map((bullet, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <span style={{ color: seguro.color, fontSize: '1.25rem', fontWeight: '700', lineHeight: 1 }}>✓</span>
                          <span style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6' }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: `linear-gradient(135deg, ${seguro.color} 0%, ${seguro.color}dd 100%)`, color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Solicita tu asesoría →</a>
                  </div>
                );
              })}
            </section>

            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '3px solid #4A90E2' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: 'linear-gradient(135deg, #4A90E2 0%, #0066CC 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Shield size={24} color="white" /></div>
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1F2937', margin: 0, lineHeight: 1.2 }}>Seguros para Empresas</h2>
                  <p style={{ fontSize: '1rem', color: '#6B7280', margin: 0 }}>Asegura tu operación, equipo y activos empresariales</p>
                </div>
              </div>

              {segurosEmpresas.map((seguro, idx) => {
                const Icon = seguro.icon;
                return (
                  <div key={idx} id={seguro.id} data-section={seguro.id} style={{ marginBottom: '3rem', background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = seguro.color; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${seguro.color}20`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: '70px', height: '70px', borderRadius: '1rem', background: `${seguro.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={32} color={seguro.color} /></div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.5rem' }}>{seguro.title}</h3>
                        <p style={{ fontSize: '1.125rem', color: seguro.color, fontWeight: '600', marginBottom: '0' }}>{seguro.subtitle}</p>
                      </div>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'grid', gap: '0.75rem' }}>
                      {seguro.bullets.map((bullet, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <span style={{ color: seguro.color, fontSize: '1.25rem', fontWeight: '700', lineHeight: 1 }}>✓</span>
                          <span style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6' }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: `linear-gradient(135deg, ${seguro.color} 0%, ${seguro.color}dd 100%)`, color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Solicita tu asesoría →</a>
                  </div>
                );
              })}
            </section>
          </main>
        </div>

        <ContactForm />

        {showBackToTop && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)', color: 'white', border: 'none', boxShadow: '0 8px 25px rgba(0, 102, 204, 0.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 1000 }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 102, 204, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 102, 204, 0.4)'; }}>
            <ChevronUp size={28} />
          </button>
        )}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-sidebar { display: block !important; }
        }
        * { scroll-margin-top: 120px; }
      `}</style>
    </>
  );
};

export default PortafolioSeguros;
