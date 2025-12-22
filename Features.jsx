import React from 'react';
import { Heart, Users, Trophy, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Asesoría Personalizada',
      description: 'Evaluamos tus riesgos reales y te ofrecemos el seguro que realmente necesitas. Sin letra pequeña, sin rodeos.',
      color: '#06B6D4'
    },
    {
      icon: Users,
      title: 'Atención Humana y Cercana',
      description: 'Nada de bots o respuestas automáticas. Aquí te atiende una persona real que se preocupa por ti.',
      color: '#1E3A8A'
    },
    {
      icon: Trophy,
      title: 'Gestión Proactiva',
      description: 'Te recordamos vencimientos, buscamos mejores tarifas y gestionamos todo antes de que tú lo pidas.',
      color: '#F59E0B'
    },
    {
      icon: Clock,
      title: 'Acompañamiento en Siniestros',
      description: 'Te guiamos paso a paso si tienes un siniestro. Sabemos cómo lograr la mejor indemnización.',
      color: '#10B981'
    }
  ];

  return (
    <section className="section" style={{
      background: 'linear-gradient(to bottom, white, #F9FAFB)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            ¿Por qué elegir Comercial Colombiana?
          </h2>
          <p className="section-subtitle">
            Más que una agencia de seguros, somos tu aliado de confianza en protección patrimonial
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="animate-fadeInUp"
                style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${idx * 0.1}s`,
                  cursor: 'pointer',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                {/* Icono */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)`,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <Icon size={35} style={{ color: feature.color }} />
                </div>

                {/* Título */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F2937',
                  marginBottom: '1rem'
                }}>
                  {feature.title}
                </h3>

                {/* Descripción */}
                <p style={{
                  color: '#6B7280',
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action central */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%)',
          borderRadius: '2rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '1rem'
            }}>
              ¿Listo para proteger lo que más importa?
            </h3>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              opacity: 0.95
            }}>
              Descubre en 3 minutos qué seguros necesitas según tu etapa de vida
            </p>
            <a href="#test" className="btn" style={{
              background: 'white',
              color: '#1E3A8A',
              padding: '1.25rem 2.5rem',
              fontSize: '1.125rem',
              fontWeight: '700',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              Hacer el Test Gratuito →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
