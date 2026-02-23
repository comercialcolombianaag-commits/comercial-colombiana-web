import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const WhyUs = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Confianza que se construye',
      description: 'Asesoramos con ética, experiencia y resultados que generan relaciones duraderas.',
      color: '#0066CC'
    },
    {
      icon: Users,
      title: 'Atención real y cercana',
      description: 'No usamos bots. Un asesor humano te escucha, entiende tu caso y te acompaña siempre.',
      color: '#4A90E2'
    },
    {
      icon: Target,
      title: 'Análisis técnico, sin complicaciones',
      description: 'Evaluamos tus riesgos, explicamos tus coberturas con claridad y sugerimos solo lo que necesitas realmente.',
      color: '#0066CC'
    },
    {
      icon: Zap,
      title: 'Proactividad asegurada',
      description: 'Te recordamos vencimientos, buscamos mejores tarifas y gestionamos todo antes de que tú lo pidas.',
      color: '#4A90E2'
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
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
              ¿POR QUÉ ELEGIRNOS?
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Confianza construida con experiencia real
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            En Comercial Colombiana no solo vendemos seguros. Acompañamos, explicamos, prevenimos y protegemos a nuestros clientes como si fueran parte de nuestra familia. Nuestra experiencia, ética y cercanía nos diferencian.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  padding: '2.5rem 2rem',
                  border: '2px solid #F3F4F6',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.borderColor = benefit.color;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${benefit.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = '#F3F4F6';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Gradient top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${benefit.color} 0%, transparent 100%)`
                }} />

                {/* Icono */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '1.25rem',
                  background: `${benefit.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: `2px solid ${benefit.color}30`
                }}>
                  <Icon size={40} color={benefit.color} />
                </div>

                {/* Título */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F2937',
                  marginBottom: '1rem'
                }}>
                  {benefit.title}
                </h3>

                {/* Descripción */}
                <p style={{
                  fontSize: '1rem',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  marginBottom: '0'
                }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%)',
          borderRadius: '2rem',
          border: '2px solid rgba(0, 102, 204, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#1F2937',
            marginBottom: '1rem'
          }}>
            ¿Listo para trabajar con expertos que te entienden?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Descubre cómo podemos ayudarte a proteger lo que más valoras con asesoría clara y personalizada.
          </p>
          <a href="/contacto" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1.25rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)',
            color: 'white',
            borderRadius: '3rem',
            textDecoration: 'none',
            boxShadow: '0 10px 30px rgba(0, 102, 204, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 102, 204, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.3)';
          }}>
            Solicita tu asesoría →
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
