import React from 'react';
import { GraduationCap, Shield, Heart, Users, FileCheck, Building2 } from 'lucide-react';
import InsurersSlider from '../components/InsurersSlider';
import ContactForm from '../components/ContactForm';

const AtencionFondos = () => {
  const servicios = [
    { icon: Shield, title: 'Responsabilidad Civil Institucional', subtitle: 'Te respaldamos desde el primer reclamo', description: 'Protege a tu fondo de empleados o entidad educativa ante reclamos por daños causados a terceros durante su operación o actividades.', color: '#0066CC' },
    { icon: Heart, title: 'Accidentes Escolares y Personales', subtitle: 'Nos ocupamos de los momentos difíciles', description: 'Cubre a estudiantes, docentes o afiliados del fondo de empleados en caso de accidentes dentro o fuera de las instalaciones.', color: '#4A90E2' },
    { icon: Users, title: 'Vida Grupo para Fondos de Empleados', subtitle: 'Te acompañamos en casos delicados', description: 'Seguro de vida grupo diseñado específicamente para fondos de empleados. Cubre fallecimiento o imprevistos de afiliados y respalda créditos o fondos sociales.', color: '#0066CC' },
    { icon: Building2, title: 'Protección para Mascotas de Afiliados', subtitle: 'También estamos para cuidar a los peludos', description: 'Cobertura especial para mascotas de hogares afiliados a fondos de empleados. Protege ante accidentes, salud y daños causados a terceros.', color: '#4A90E2' },
    { icon: FileCheck, title: 'Cumplimiento en Convenios Institucionales', subtitle: 'Defendemos tus compromisos asegurados', description: 'Garantiza anticipos, contratos y responsabilidades legales en convenios, becas o programas de fondos de empleados e instituciones educativas.', color: '#0066CC' }
  ];

  const valores = [
    { title: 'Entendemos los fondos de empleados', description: 'Más de 50 años asesorando fondos de empleados, cooperativas e instituciones educativas. Conocemos sus necesidades específicas.', color: '#0066CC' },
    { title: 'Coberturas para fondos y cooperativas', description: 'Diseñamos seguros específicos para fondos de empleados: vida grupo, accidentes, responsabilidad civil y más.', color: '#4A90E2' },
    { title: 'Experiencia comprobada desde 1970', description: 'Trabajamos con los principales fondos de empleados de Colombia. Relaciones de más de 20 años con nuestros clientes institucionales.', color: '#0066CC' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003B71 0%, #0066CC 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '0.625rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}>
            <GraduationCap size={20} />
            <span style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.5px' }}>FONDOS DE EMPLEADOS Y EDUCACIÓN</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>Seguros para Fondos de Empleados e Instituciones Educativas</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '900px', margin: '0 auto 2rem', opacity: 0.95', lineHeight: '1.6' }}>Desde 1970 acompañamos a fondos de empleados, cooperativas e instituciones educativas en Colombia. Protección integral con asesoría especializada.</p>
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.25rem 2.5rem', background: 'white', color: '#003B71', borderRadius: '3rem', textDecoration: 'none', fontSize: '1.125rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'; }}>Asesoría para tu fondo de empleados</a>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Seguros Especializados para Fondos de Empleados</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>Coberturas diseñadas específicamente para las necesidades de fondos de empleados, cooperativas e instituciones educativas en Colombia.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {servicios.map((servicio, idx) => {
              const Icon = servicio.icon;
              return (
                <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', transition: 'all 0.4s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = servicio.color; e.currentTarget.style.boxShadow = `0 20px 60px ${servicio.color}30`; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '1.25rem', background: `${servicio.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}><Icon size={36} color={servicio.color} /></div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.75rem' }}>{servicio.title}</h3>
                  <p style={{ fontSize: '1.125rem', color: servicio.color, fontWeight: '600', marginBottom: '1rem' }}>{servicio.subtitle}</p>
                  <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '2rem' }}>{servicio.description}</p>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)', padding: '0.5rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(0, 102, 204, 0.2)' }}><Shield size={18} color="#0066CC" /><span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0066CC', letterSpacing: '0.5px' }}>EXPERIENCIA COMPROBADA</span></div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Especialistas en Fondos de Empleados desde 1970</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto 3rem' }}>Más de 50 años acompañando a fondos de empleados, cooperativas e instituciones educativas en toda Colombia. Tu tranquilidad es nuestra prioridad.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {valores.map((valor, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', textAlign: 'center', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = valor.color; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 15px 40px ${valor.color}20`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: valor.color, marginBottom: '1rem' }}>{valor.title}</h3>
                <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '0' }}>{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsurersSlider />
      <ContactForm />
    </div>
  );
};

export default AtencionFondos;
