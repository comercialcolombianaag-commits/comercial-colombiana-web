import React from 'react';
import { Heart, Users, Trophy, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Heart,
      title: 'Asesoría Personalizada',
      description: 'Evaluamos tus riesgos reales y te ofrecemos el seguro que realmente necesitas. Sin letra pequeña, sin rodeos.',
      color: '#0066CC'
    },
    {
      icon: Users,
      title: 'Atención Humana y Cercana',
      description: 'Nada de bots o respuestas automáticas. Aquí te atiende una persona real que se preocupa por ti.',
      color: '#4A90E2'
    },
    {
      icon: Trophy,
      title: 'Gestión Proactiva',
      description: 'Te recordamos vencimientos, buscamos mejores tarifas y gestionamos todo antes de que tú lo pidas.',
      color: '#0066CC'
    },
    {
      icon: Clock,
      title: 'Acompañamiento en Siniestros',
      description: 'Te guiamos paso a paso si tienes un siniestro. Sabemos cómo lograr la mejor indemnización.',
      color: '#4A90E2'
    }
  ];

  return (
    <section className="section" style={{
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            ¿Por qué elegir Comercial Colombiana?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
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
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  animationDelay: `${idx * 0.1}s`,
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.15)';
                  e.currentTarget.style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${feature.color} 0%, transparent 100%)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                />

                <div style={{
                  width: '70px',
                  height: '70px',
                  background: `${feature.color}15`,
                  borderRadius: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  <Icon size={35} style={{ color: feature.color }} />
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1F2937',
                  marginBottom: '1rem'
                }}>
                  {feature.title}
                </h3>

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

        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #003B71 0%, #0066CC 100%)',
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
              Descubre en 2 minutos qué seguros necesitas según tu perfil
            </p>
            <a href="#analisis" style={{
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
              Analizar mi Nivel de Protección →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
