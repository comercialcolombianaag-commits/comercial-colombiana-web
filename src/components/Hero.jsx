import React, { useEffect, useState } from 'react';
import { Shield, ArrowRight, CheckCircle, Users, Award } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generar partículas sutiles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    // Seguir el mouse suavemente
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15 - 7.5,
        y: (e.clientY / window.innerHeight) * 15 - 7.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '95vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1E3A8A 0%, #0f1b47 50%, #000000 100%)',
      overflow: 'hidden'
    }}>
      {/* Grid sutil animado */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: 'perspective(800px) rotateX(60deg)',
        transformOrigin: 'center top',
        opacity: 0.4,
        animation: 'gridMove 20s linear infinite'
      }} />

      {/* Partículas flotantes sutiles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'rgba(6, 182, 212, 0.4)',
            borderRadius: '50%',
            animation: `floatSmooth ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)',
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Luz suave siguiendo el mouse */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(500px circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(6, 182, 212, 0.08), transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 0.3s ease'
      }} />

      {/* Formas geométricas decorativas */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'floatSmooth 15s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(30, 58, 138, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        animation: 'floatSmooth 18s ease-in-out infinite reverse'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Contenido principal */}
          <div className="animate-fadeInUp" style={{ color: 'white' }}>
            
            {/* Badge elegante */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(6, 182, 212, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              padding: '0.75rem 1.75rem',
              borderRadius: '3rem',
              fontSize: '0.9375rem',
              fontWeight: '600',
              marginBottom: '2.5rem',
              boxShadow: '0 4px 20px rgba(6, 182, 212, 0.1)'
            }}>
              <CheckCircle size={18} style={{ color: '#06B6D4' }} />
              <span style={{ color: '#E0F2FE' }}>Más de 50 años protegiendo a Colombia</span>
            </div>

            {/* Título principal elegante */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              <span style={{
                display: 'block',
                color: 'white',
                marginBottom: '0.75rem'
              }}>
                Tecnología al servicio
              </span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                de tu tranquilidad
              </span>
            </h1>

            {/* Subtítulo profesional */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              marginBottom: '3rem',
              color: '#CBD5E1',
              lineHeight: '1.7',
              maxWidth: '750px',
              margin: '0 auto 3rem',
              fontWeight: '400'
            }}>
              Protegemos tu patrimonio, familia y empresa con asesoría experta 
              y las mejores soluciones del mercado. Sin letra pequeña, sin sorpresas.
            </p>

            {/* CTAs elegantes */}
            <div style={{
              display: 'flex',
              gap: '1.25rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '4rem'
            }}>
              {/* CTA Principal - Elegante */}
              <a href="#test" style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                color: 'white',
                borderRadius: '0.875rem',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(6, 182, 212, 0.35)',
                transition: 'all 0.3s ease',
                border: 'none',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(6, 182, 212, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(6, 182, 212, 0.35)';
              }}>
                <Shield size={22} />
                <span>Evalúa tu Protección</span>
                <ArrowRight size={22} />
              </a>

              {/* CTA Secundario - Glassmorphism sutil */}
              <a href="#contacto" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                borderRadius: '0.875rem',
                textDecoration: 'none',
                border: '1.5px solid rgba(6, 182, 212, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)';
                e.currentTarget.style.borderColor = '#06B6D4';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Agenda Asesoría
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Stats elegantes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2.5rem',
              maxWidth: '900px',
              margin: '0 auto',
              padding: '3rem 2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              {[
                { 
                  icon: Award, 
                  number: '50+', 
                  label: 'Años de experiencia',
                  color: '#F59E0B'
                },
                { 
                  icon: Shield, 
                  number: '22', 
                  label: 'Aseguradoras aliadas',
                  color: '#06B6D4'
                },
                { 
                  icon: Users, 
                  number: '150+', 
                  label: 'Clientes activos',
                  color: '#10B981'
                }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: `${stat.color}15`,
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${stat.color}40`,
                      marginBottom: '0.5rem'
                    }}>
                      <Icon size={24} style={{ color: stat.color }} />
                    </div>
                    <div style={{
                      fontSize: '2.25rem',
                      fontWeight: '800',
                      color: stat.color,
                      lineHeight: '1',
                      textShadow: `0 0 20px ${stat.color}40`
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: '0.9375rem',
                      color: '#94A3B8',
                      textAlign: 'center',
                      lineHeight: '1.4'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa inferior elegante */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100px'
      }}>
        <svg
          viewBox="0 0 1440 100"
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%'
          }}
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,50L48,45C96,40,192,30,288,35C384,40,480,60,576,65C672,70,768,60,864,55C960,50,1056,50,1152,55C1248,60,1344,70,1392,75L1440,80L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes floatSmooth {
          0%, 100% { 
            transform: translate(0, 0); 
            opacity: 0.6;
          }
          50% { 
            transform: translate(10px, -20px); 
            opacity: 1;
          }
        }

        @keyframes gridMove {
          0% { transform: perspective(800px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(800px) rotateX(60deg) translateY(60px); }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
