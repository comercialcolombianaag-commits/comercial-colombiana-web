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
          {/* Columna 1: Sobre nosotros */}
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
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '1.5rem'
            }}>
              Agencia de seguros en Bogotá con más de 50 años de experiencia protegiendo lo más valioso de nuestros clientes.
            </p>

            {/* Redes sociales */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(74, 144, 226, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(74, 144, 226, 0.3)'
                }}
              >
                <Facebook size={18} />
              </a>
              
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(74, 144, 226, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(74, 144, 226, 0.3)'
                }}
              >
                <Instagram size={18} />
              </a>
              
                href="https://www.linkedin.com/company/comercial-colombiana-agencia-de-seguros"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(74, 144, 226, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(74, 144, 226, 0.3)'
                }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Servicios
            </h3>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li>
                <a href="/seguros-para-personas" className="footer-link">Seguros para Personas</a>
              </li>
              <li>
                <a href="/seguros-para-empresas" className="footer-link">Seguros para Empresas</a>
              </li>
              <li>
                <a href="/atencion-a-fondos-y-educacion" className="footer-link">Fondos de Empleados</a>
              </li>
              <li>
                <a href="/asesoria-integral-en-seguros" className="footer-link">Asesoría Integral</a>
              </li>
              <li>
                <a href="/acompanamiento-en-siniestros" className="footer-link">Acompañamiento en Siniestros</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: La empresa */}
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              La empresa
            </h3>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li>
                <a href="/quienes-somos" className="footer-link">Quiénes somos</a>
              </li>
              <li>
                <a href="/quienes-somos#equipo" className="footer-link">Nuestro equipo</a>
              </li>
              <li>
                <a href="/blog" className="footer-link">Blog</a>
              </li>
              <li>
                <a href="/contacto" className="footer-link">Contacto</a>
              </li>
              <li>
                <a href="/preguntas-frecuentes" className="footer-link">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Contacto
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              
                href="tel:+573156851089"
                className="contact-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  transition: 'color 0.3s ease'
                }}
              >
                <Phone size={18} />
                <span>+57 (315) 685-1089</span>
              </a>

              
                href="mailto:andres.arenas@comercialcolombiana.com"
                className="contact-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  transition: 'color 0.3s ease'
                }}
              >
                <Mail size={18} />
                <span>andres.arenas@comercialcolombiana.com</span>
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9375rem'
              }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Calle 57 #13-27 Piso 4<br />Bogotá, Colombia</span>
              </div>

              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '0.5rem'
              }}>
                <strong style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Horario:</strong><br />
                Lunes a viernes<br />
                8:00 a.m. a 5:00 p.m.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(74, 144, 226, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <div>
            © {currentYear} Comercial Colombiana Ltda. Todos los derechos reservados.
          </div>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <a href="#" className="legal-link">Política de privacidad</a>
            <a href="#" className="legal-link">Términos y condiciones</a>
          </div>
        </div>
      </div>

      <style>{`
        .social-link:hover {
          background: #4A90E2 !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(74, 144, 226, 0.3);
        }
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          fontSize: 0.9375rem;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #4A90E2;
          padding-left: 0.5rem;
        }
        .contact-link:hover {
          color: #4A90E2 !important;
        }
        .legal-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .legal-link:hover {
          color: #4A90E2;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
