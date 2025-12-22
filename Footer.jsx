import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
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
              background: 'linear-gradient(135deg, #06B6D4 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Comercial Colombiana
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: '#F59E0B',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Servicio Seguro desde 1970
            </div>
            <p style={{
              fontSize: '0.9375rem',
              lineHeight: '1.7',
              color: '#D1D5DB',
              marginBottom: '1.5rem'
            }}>
              Agencia de seguros en Bogotá con más de 50 años de experiencia protegiendo lo más valioso de nuestros clientes.
            </p>

            {/* Redes sociales */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/comercial-colombiana-agencia-de-seguros' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#06B6D4';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <social.Icon size={18} />
                </a>
              ))}
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
              {[
                'Seguros para Personas',
                'Seguros para Empresas',
                'Fondos de Empleados',
                'Asesoría Integral',
                'Acompañamiento en Siniestros'
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#seguros"
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#06B6D4'}
                    onMouseLeave={(e) => e.target.style.color = '#D1D5DB'}
                  >
                    {item}
                  </a>
                </li>
              ))}
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
              {[
                { text: 'Quiénes somos', href: '#nosotros' },
                { text: 'Nuestro equipo', href: '#nosotros' },
                { text: 'Blog', href: '#blog' },
                { text: 'Contacto', href: '#contacto' },
                { text: 'Preguntas frecuentes', href: '#' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#06B6D4'}
                    onMouseLeave={(e) => e.target.style.color = '#D1D5DB'}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
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
              <a
                href="tel:+573156851089"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#06B6D4'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
              >
                <Phone size={18} />
                <span>+57 (315) 685-1089</span>
              </a>

              <a
                href="mailto:andres.arenas@comercialcolombiana.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#06B6D4'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
              >
                <Mail size={18} />
                <span>andres.arenas@comercialcolombiana.com</span>
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: '#D1D5DB',
                fontSize: '0.9375rem'
              }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Calle 57 #13-27 Piso 4<br />Bogotá, Colombia</span>
              </div>

              <div style={{
                fontSize: '0.875rem',
                color: '#9CA3AF',
                marginTop: '0.5rem'
              }}>
                <strong>Horario:</strong><br />
                Lunes a viernes<br />
                8:00 a.m. a 5:00 p.m.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem',
          color: '#9CA3AF'
        }}>
          <div>
            © {currentYear} Comercial Colombiana Ltda. Todos los derechos reservados.
          </div>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="#"
              style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#06B6D4'}
              onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
            >
              Política de privacidad
            </a>
            <a
              href="#"
              style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#06B6D4'}
              onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
            >
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
