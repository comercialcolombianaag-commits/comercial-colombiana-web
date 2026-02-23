import React from 'react';
import { Award, Target, Heart, Shield, Users, Eye } from 'lucide-react';

const AboutUs = () => {
  const pillars = [
    {
      icon: Eye,
      title: 'Nuestra Visión',
      description: 'Ser líderes en tecnología, servicio y profesionalismo a nivel nacional, brindando soluciones de protección verdaderamente integrales para cada cliente.'
    },
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Acompañamos a personas y empresas en la identificación y transferencia de riesgos, con asesoría técnica, servicio cercano y respaldo real cuando más lo necesitan.'
    },
    {
      icon: Heart,
      title: 'Nuestro Sello',
      description: 'El trato humano, nuestra mayor fortaleza. La ética, la transparencia y el servicio real siguen siendo nuestro mayor diferencial. Aquí, lo humano siempre va primero.'
    },
    {
      icon: Shield,
      title: 'Nuestra Promesa',
      description: 'Estamos presentes en los momentos que más importan, desde una simple duda hasta un siniestro. Somos una agencia que acompaña, explica y actúa con responsabilidad.'
    }
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
              QUIÉNES SOMOS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Tu aliado de confianza en protección patrimonial
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            En Comercial Colombiana brindamos asesoría cercana, humana y experta para proteger lo más valioso de nuestros clientes: su vida, su familia, su empresa y su tranquilidad. A lo largo del tiempo, hemos construido relaciones duraderas basadas en ética, claridad y servicio.
          </p>
        </div>

        {/* Lema destacado */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%)',
          borderRadius: '2rem',
          border: '2px solid rgba(0, 102, 204, 0.1)',
          marginBottom: '5rem'
        }}>
          <div style={{
            fontSize: '0.875rem',
            fontWeight: '700',
            color: '#0066CC',
            letterSpacing: '1px',
            marginBottom: '1rem'
          }}>
            NUESTRO LEMA
          </div>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '0'
          }}>
            "Servicio Seguro desde 1970"
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginTop: '1rem',
            marginBottom: '0'
          }}>
            Más que seguros, brindamos confianza y tranquilidad a lo largo de generaciones.
          </p>
        </div>

        {/* Historia en 2 columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '5rem'
        }}>
          
          {/* Columna 1: Nuestra Historia */}
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1F2937',
              marginBottom: '1.5rem'
            }}>
              Nuestra Historia
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
                <strong style={{ color: '#0066CC' }}>Comercial Colombiana</strong> nació en 1970 con una misión clara: 
                acompañar a las personas, familias y empresas en la protección de lo que más valoran. Desde sus inicios, 
                nos propusimos marcar la diferencia a través de una asesoría técnica, clara y sin letra pequeña, en un 
                momento en que hablar de seguros todavía generaba desconfianza.
              </p>
              <p>
                Lo que comenzó como una pequeña agencia, fue creciendo gracias a un valor que nunca hemos perdido: 
                <strong> la cercanía con nuestros clientes</strong>. Entender sus necesidades, escuchar sus historias y 
                ser parte activa de su tranquilidad, nos convirtió en aliados de largo plazo.
              </p>
            </div>
          </div>

          {/* Columna 2: Nuestro Origen */}
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1F2937',
              marginBottom: '1.5rem'
            }}>
              Nuestro Origen
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
                Lo que hoy es Comercial Colombiana comenzó en 1970 con la visión de <strong style={{ color: '#0066CC' }}>Justino Restrepo</strong>, 
                un joven asesor decidido a ofrecer algo diferente: asesoría honesta, técnica y cercana. Con una máquina de 
                escribir, una calculadora y una profunda vocación de servicio, construyó una agencia pensada para durar y servir.
              </p>
              <p>
                Su apuesta siempre fue clara: estar al lado del cliente en los momentos más importantes y difíciles. 
                Ese espíritu, que aún guía a nuestro equipo, es lo que nos ha convertido en <strong>referentes en el 
                sector asegurador colombiano</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Visión, Misión, Sello, Promesa en grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'white',
                  padding: '2.5rem 2rem',
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
                  marginBottom: '1rem'
                }}>
                  {pillar.title}
                </h4>
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  marginBottom: '0'
                }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div style={{
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
            Asegura tu tranquilidad con expertos que te entienden
          </h3>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Te explicamos lo que cubre tu seguro, lo que no, y lo que realmente necesitas. Sin letra pequeña, sin sorpresas.
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
            Solicita tu asesoría personalizada →
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
