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
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/comercial-colombiana-agencia-de-seguros' }
              ].map((social, idx) => (
                
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#4A90E2';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(74, 144, 226, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(74, 144, 226, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
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
                { text: 'Seguros para Personas', href: '/seguros-para-personas' },
                { text: 'Seguros para Empresas', href: '/seguros-para-empresas' },
                { text: 'Fondos de Empleados', href: '/atencion-a-fondos-y-educacion' },
                { text: 'Asesoría Integral', href: '/asesoria-integral-en-seguros' },
                { text: 'Acompañamiento en Siniestros', href: '/acompanamiento-en-siniestros' }
              ].map((item, idx) => (
                <li key={idx}>
                  
                    href={item.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#4A90E2';
                      e.target.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {item.text}
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
                { text: 'Quiénes somos', href: '/quienes-somos' },
                { text: 'Nuestro equipo', href: '/quienes-somos#equipo' },
                { text: 'Blog', href: '/blog' },
                { text: 'Contacto', href: '/contacto' },
                { text: 'Preguntas frecuentes', href: '/preguntas-frecuentes' }
              ].map((item, idx) => (
                <li key={idx}>
                  
                    href={item.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.9375rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#4A90E2';
                      e.target.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.target.style.paddingLeft = '0';
                    }}
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
              
                href="tel:+573156851089"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                <Phone size={18} />
                <span>+57 (315) 685-1089</span>
              </a>

              
                href="mailto:andres.arenas@comercialcolombiana.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
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
            
              href="#"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#4A90E2'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Política de privacidad
            </a>
            
              href="#"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#4A90E2'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
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
