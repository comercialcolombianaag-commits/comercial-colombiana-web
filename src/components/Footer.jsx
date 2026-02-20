import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #001F3F 0%, #003B71 100%)',
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #4A90E2 0%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Comercial Colombiana
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: '#4A90E2',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Servicio Seguro desde 1970
            </div>
            <p style={{
              fontSize: '0.9375rem',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '1.5rem'
            }}>
              Agencia de seguros en Bogotá con más de 50 años de experiencia protegiendo lo más valioso de nuestros clientes.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(74,144,226,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', border: '1px solid rgba(74,144,226,0.3)' }} onMouseEnter={e => { e.currentTarget.style.background = '#4A90E2'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(74,144,226,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Facebook size={18} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(74,144,226,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', border: '1px solid rgba(74,144,226,0.3)' }} onMouseEnter={e => { e.currentTarget.style.background = '#4A90E2'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(74,144,226,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/comercial-colombiana-agencia-de-seguros" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(74,144,226,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', border: '1px solid rgba(74,144,226,0.3)' }} onMouseEnter={e => { e.currentTarget.style.background = '#4A90E2'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(74,144,226,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Servicios</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="/seguros-para-personas" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Seguros para Personas</a></li>
              <li><a href="/seguros-para-empresas" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Seguros para Empresas</a></li>
              <li><a href="/atencion-a-fondos-y-educacion" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Fondos de Empleados</a></li>
              <li><a href="/asesoria-integral-en-seguros" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Asesoría Integral</a></li>
              <li><a href="/acompanamiento-en-siniestros" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Acompañamiento en Siniestros</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>La empresa</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="/quienes-somos" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Quiénes somos</a></li>
              <li><a href="/quienes-somos#equipo" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Nuestro equipo</a></li>
              <li><a href="/blog" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Blog</a></li>
              <li><a href="/contacto" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Contacto</a></li>
              <li><a href="/preguntas-frecuentes" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Contacto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="tel:+573156851089" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#4A90E2'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}><Phone size={18} /><span>+57 (315) 685-1089</span></a>
              <a href="mailto:andres.arenas@comercialcolombiana.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#4A90E2'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}><Mail size={18} /><span>andres.arenas@comercialcolombiana.com</span></a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9375rem' }}><MapPin size={18} style={{ flexShrink: 0, marginTop: '0.2rem' }} /><span>Calle 57 #13-27 Piso 4<br />Bogotá, Colombia</span></div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}><strong>Horario:</strong><br />Lunes a viernes<br />8:00 a.m. a 5:00 p.m.</div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(74,144,226,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
          <div>© {currentYear} Comercial Colombiana Ltda. Todos los derechos reservados.</div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>Política de privacidad</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={e => e.target.style.color = '#4A90E2'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
