import React from 'react';
import { Target, Shield, FileCheck, Users, Clock, TrendingUp } from 'lucide-react';
import InsurersSlider from '../components/InsurersSlider';
import ContactForm from '../components/ContactForm';

const AsesoriaIntegral = () => {
  const servicios = [
    { icon: Target, title: 'Evaluación de Riesgos y Diseño', subtitle: 'Detectamos lo esencial para ti', description: 'Analizamos tu situación y construimos un plan de seguros ajustado a tus necesidades reales y prioridades de protección.', beneficios: ['Evitas pagar de más', 'Coberturas bien pensadas', 'Plan optimizado a tu medida'], color: '#0066CC' },
    { icon: FileCheck, title: 'Asesoría en Contratación', subtitle: 'Decisiones informadas y claras', description: 'Te orientamos para que tomes decisiones acertadas, entendiendo coberturas, exclusiones y opciones del mercado.', beneficios: ['Explicaciones sencillas y honestas', 'Sabes qué estás contratando', 'Sin letra pequeña'], color: '#4A90E2' },
    { icon: Clock, title: 'Gestión y Administración de Pólizas', subtitle: 'Tu seguro siempre al día', description: 'Nos encargamos de renovaciones, ajustes, reportes y coberturas. Tu seguro siempre al día, sin complicaciones.', beneficios: ['Monitoreo activo de pólizas', 'Renovación a tiempo', 'Ajustes según necesidades'], color: '#0066CC' },
    { icon: Shield, title: 'Acompañamiento en Siniestros', subtitle: 'Respaldo cuando más lo necesitas', description: 'Acompañamos tus reclamaciones, revisamos documentos y gestionamos todo para que recibas una respuesta justa.', beneficios: ['Te apoyamos desde el aviso', 'Sabes cómo reclamar', 'Respuesta justa garantizada'], color: '#4A90E2' },
    { icon: Users, title: 'Punto Único de Contacto', subtitle: 'Centralización total', description: 'Centralizamos la gestión de riesgos, pólizas y trámites. Tú hablas con nosotros y nosotros hacemos el resto.', beneficios: ['Olvídate de múltiples contactos', 'Un solo punto para todo', 'Respuesta integral'], color: '#0066CC' }
  ];

  const valores = [
    { title: 'Asesoría técnica profesional', description: 'Más de 50 años evaluando riesgos y diseñando soluciones de protección para personas, empresas y fondos de empleados en Colombia.', icon: Target },
    { title: 'Gestión proactiva', description: 'No esperamos a que nos contactes. Te recordamos vencimientos, buscamos mejores tarifas y ajustamos coberturas antes de que lo necesites.', icon: TrendingUp },
    { title: 'Sin conflictos de interés', description: 'Trabajamos con todas las aseguradoras del mercado. Nuestra lealtad es contigo, no con ninguna compañía en particular.', icon: Shield }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003B71 0%, #0066CC 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '0.625rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}>
            <Shield size={20} />
            <span style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.5px' }}>ASESORÍA INTEGRAL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>Asesoría Integral en Seguros en Colombia</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '900px', margin: '0 auto 2rem', opacity: 0.95, lineHeight: '1.6' }}>En Comercial Colombiana ofrecemos una asesoría integral que va mucho más allá de vender pólizas. Evaluamos riesgos, administramos tus seguros y te acompañamos de principio a fin.</p>
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.25rem 2.5rem', background: 'white', color: '#003B71', borderRadius: '3rem', textDecoration: 'none', fontSize: '1.125rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'; }}>Solicita tu asesoría</a>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Nuestro Servicio de Asesoría Integral</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>Asesoramos a personas, empresas e instituciones en todo lo relacionado con sus seguros: evaluación de riesgos, administración de pólizas y acompañamiento técnico.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {servicios.map((servicio, idx) => {
              const Icon = servicio.icon;
              return (
                <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', transition: 'all 0.4s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = servicio.color; e.currentTarget.style.boxShadow = `0 20px 60px ${servicio.color}30`; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '1.25rem', background: `${servicio.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}><Icon size={36} color={servicio.color} /></div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.75rem' }}>{servicio.title}</h3>
                  <p style={{ fontSize: '1.125rem', color: servicio.color, fontWeight: '600', marginBottom: '1rem' }}>{servicio.subtitle}</p>
                  <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '1.5rem' }}>{servicio.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {servicio.beneficios.map((beneficio, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: servicio.color, fontSize: '1.125rem', fontWeight: '700', lineHeight: 1 }}>✓</span>
                        <span style={{ fontSize: '0.9375rem', color: '#4B5563', lineHeight: '1.6' }}>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: `linear-gradient(135deg, ${servicio.color} 0%, ${servicio.color}dd 100%)`, color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem', fontWeight: '700', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Solicita tu asesoría →</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)', padding: '0.5rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(0, 102, 204, 0.2)' }}><TrendingUp size={18} color="#0066CC" /><span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0066CC', letterSpacing: '0.5px' }}>NUESTRO COMPROMISO</span></div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Más que una Agencia de Seguros</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto 3rem' }}>Nuestro equipo se encarga de cada detalle para que tú no tengas que preocuparte: desde identificar qué necesitas, hasta apoyarte en un siniestro o renovación.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {valores.map((valor, idx) => {
              const Icon = valor.icon;
              return (
                <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', textAlign: 'center', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0066CC'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 102, 204, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '1rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}><Icon size={28} color="#0066CC" /></div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0066CC', marginBottom: '1rem' }}>{valor.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '0' }}>{valor.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InsurersSlider />
      <ContactForm />
    </div>
  );
};

export default AsesoriaIntegral;
