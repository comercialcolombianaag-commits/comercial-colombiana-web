import React from 'react';
import { Award, Target, Heart, Shield, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Cercanía',
      description: 'Relaciones a largo plazo basadas en confianza y transparencia'
    },
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Asesoría honesta enfocada en tus necesidades reales'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Más de 50 años de experiencia al servicio de nuestros clientes'
    },
    {
      icon: Users,
      title: 'Compromiso',
      description: 'Acompañamiento en cada etapa de tu protección patrimonial'
    }
  ];

  const milestones = [
    { year: '1970', event: 'Fundación en Bogotá' },
    { year: '1985', event: 'Especialización en fondos de empleados' },
    { year: '2000', event: 'Expansión al sector empresarial' },
    { year: '2010', event: 'Certificación en gestión de calidad' },
    { year: '2020', event: 'Transformación digital' },
    { year: '2025', event: 'Más de 900 clientes activos' }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)',
            padding: '0.5rem 1.5rem',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(0, 102, 204, 0.2)'
          }}>
            <Award size={18} color="#0066CC" />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: '#0066CC',
              letterSpacing: '0.5px'
            }}>
              NUESTRA HISTORIA
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Más de 5 décadas protegiendo lo que más valoras
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Desde 1970, hemos sido el aliado de confianza para familias y empresas en Bogotá. 
            Nuestra pasión es brindarte tranquilidad a través de soluciones de protección personalizadas.
          </p>
        </div>

        {/* Historia + Timeline en 2 columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '5rem'
        }}>
          
          {/* Columna izquierda: Historia */}
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1F2937',
              marginBottom: '1.5rem'
            }}>
              Nuestra trayectoria
            </h3>
            <div style={{
              fontSize: '1rem',
              color: '#4B5563',
              lineHeight: '1.8',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <p>
                <strong style={{ color: '#0066CC' }}>Comercial Colombiana</strong> nació en 1970 como una pequeña 
                agencia familiar en el centro de Bogotá, con la visión de ofrecer un servicio de seguros 
                diferente: cercano, transparente y enfocado en las necesidades reales de cada cliente.
              </p>
              <p>
                Durante más de 50 años, hemos evolucionado junto con nuestros clientes, especializándonos 
                en tres áreas clave: <strong>seguros para personas</strong>, <strong>protección empresarial</strong> y 
                <strong> soluciones para fondos de empleados</strong>.
              </p>
              <p>
                Hoy somos un equipo de expertos que trabaja con las 20 aseguradoras más importantes del país, 
                lo que nos permite comparar opciones y ofrecerte siempre la mejor alternativa para tu perfil.
              </p>
            </div>
          </div>

          {/* Columna derecha: Timeline */}
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1F2937',
              marginBottom: '1.5rem'
            }}>
              Hitos importantes
            </h3>
            <div style={{
              position: 'relative',
              paddingLeft: '2rem'
            }}>
              {/* Línea vertical */}
              <div style={{
                position: 'absolute',
                left: '0.375rem',
                top: '0.5rem',
                bottom: '0.5rem',
                width: '2px',
                background: 'linear-gradient(180deg, #0066CC 0%, #4A90E2 100%)'
              }} />

              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    marginBottom: '2rem',
                    paddingLeft: '1.5rem'
                  }}
                >
                  {/* Punto */}
                  <div style={{
                    position: 'absolute',
                    left: '-0.375rem',
                    top: '0.25rem',
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '50%',
                    background: '#0066CC',
                    border: '3px solid white',
                    boxShadow: '0 0 0 2px #0066CC'
                  }} />

                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    color: '#0066CC',
                    marginBottom: '0.25rem'
                  }}>
                    {milestone.year}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#4B5563',
                    lineHeight: '1.6'
                  }}>
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valores en grid */}
        <div>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#1F2937',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Nuestros valores
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '1.5rem',
                    border: '2px solid #F3F4F6',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#4A90E2';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#F3F4F6';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '1rem',
                    background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon size={30} color="#0066CC" />
                  </div>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#1F2937',
                    marginBottom: '0.75rem'
                  }}>
                    {value.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: '#6B7280',
                    lineHeight: '1.6',
                    marginBottom: '0'
                  }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA final */}
        <div style={{
          marginTop: '5rem',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #003B71 0%, #0066CC 100%)',
          borderRadius: '2rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '1rem'
          }}>
            ¿Quieres ser parte de nuestra historia?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Únete a las familias y empresas que han confiado en nosotros durante más de 50 años.
          </p>
          <a href="/contacto" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'white',
            color: '#003B71',
            padding: '1.25rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: '700',
            borderRadius: '3rem',
            textDecoration: 'none',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
          }}>
            Conoce nuestro equipo →
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
