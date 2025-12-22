import React from 'react';
import { Car, Home, Heart, Building2, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      category: 'Seguros para Personas',
      title: 'Protege tu vida y patrimonio',
      items: ['Autos y Motos', 'Hogar', 'Salud y Vida', 'Mascotas', 'Bicicletas'],
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)'
    },
    {
      icon: Building2,
      category: 'Seguros para Empresas',
      title: 'Asegura tu negocio y equipo',
      items: ['Responsabilidad Civil', 'Cumplimiento', 'Flota Vehicular', 'Riesgos Cibernéticos', 'Todo Riesgo'],
      color: '#1E3A8A',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)'
    },
    {
      icon: Users,
      category: 'Fondos y Educación',
      title: 'Soluciones especializadas',
      items: ['Fondos de Empleados', 'Cooperativas', 'Instituciones Educativas', 'Planes Colectivos'],
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    }
  ];

  return (
    <section id="seguros" className="section" style={{
      background: 'white'
    }}>
      <div className="container">
        <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Soluciones que protegen tu vida, familia y empresa
          </h2>
          <p className="section-subtitle">
            Cobertura integral con las mejores aseguradoras de Colombia
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="animate-fadeInUp"
                style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  animationDelay: `${idx * 0.15}s`,
                  cursor: 'pointer',
                  border: '1px solid #F3F4F6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                }}
              >
                {/* Header con gradiente */}
                <div style={{
                  background: service.gradient,
                  padding: '2.5rem 2rem',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Pattern de fondo */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                  }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}>
                      <Icon size={30} />
                    </div>

                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem',
                      opacity: 0.9
                    }}>
                      {service.category}
                    </div>

                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      lineHeight: '1.3'
                    }}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Lista de items */}
                <div style={{ padding: '2rem' }}>
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          fontSize: '1rem',
                          color: '#4B5563'
                        }}
                      >
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: service.color,
                          flexShrink: 0
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '1.5rem',
                      color: service.color,
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'gap 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
                    onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                  >
                    Ver todos los seguros
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de asesoría */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '3rem',
          background: '#F9FAFB',
          borderRadius: '1.5rem',
          border: '2px solid #E5E7EB'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #06B6D4 0%, #1E3A8A 100%)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Shield size={30} style={{ color: 'white' }} />
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#1E3A8A'
              }}>
                22+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6B7280'
              }}>
                Aseguradoras aliadas
              </div>
            </div>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#1F2937',
              marginBottom: '0.5rem'
            }}>
              ¿No sabes qué seguro necesitas?
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: '#6B7280',
              marginBottom: '1rem'
            }}>
              Nuestros expertos te asesoran sin compromiso
            </p>
            <a href="#contacto" className="btn btn-primary" style={{
              padding: '0.875rem 1.75rem',
              fontSize: '0.9375rem'
            }}>
              Solicitar Asesoría Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
