import React, { useEffect, useState } from 'react';
import { Shield, ArrowRight, Users, Award, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hexagons, setHexagons] = useState([]);
  const [stats, setStats] = useState({ years: 0, insurers: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Generar hexágonos con posiciones
    const newHexagons = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 40 + 30,
      opacity: Math.random() * 0.3 + 0.2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setHexagons(newHexagons);

    // Seguir el mouse suavemente
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 12 - 6,
        y: (e.clientY / window.innerHeight) * 12 - 6
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animar números (count-up)
    if (!hasAnimated) {
      setHasAnimated(true);
      const duration = 2000; // 2 segundos
      const steps = 60;
      const increment = {
        years: 50 / steps,
        insurers: 22 / steps,
        clients: 150 / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          years: Math.min(Math.floor(increment.years * currentStep), 50),
          insurers: Math.min(Math.floor(increment.insurers * currentStep), 22),
          clients: Math.min(Math.floor(increment.clients * currentStep), 150)
        });

        if (currentStep >= steps) clearInterval(timer);
      }, duration / steps);

      return () => {
        clearInterval(timer);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasAnimated]);

  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1E3A8A 0%, #0f1b47 50%, #000000 100%)',
      overflow: 'hidden'
    }}>
      {/* Grid animado sutil */}
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

      {/* Hexágonos flotantes conectados */}
      <svg style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}>
        {/* Líneas de conexión entre hexágonos */}
        {hexagons.map((hex, i) => 
          hexagons.slice(i + 1).map((otherHex, j) => {
            const distance = Math.sqrt(
              Math.pow(hex.x - otherHex.x, 2) + Math.pow(hex.y - otherHex.y, 2)
            );
            if (distance < 35) {
              return (
                <line
                  key={`line-${i}-${j}`}
                  x1={`${hex.x}%`}
                  y1={`${hex.y}%`}
                  x2={`${otherHex.x}%`}
                  y2={`${otherHex.y}%`}
                  stroke="rgba(6, 182, 212, 0.2)"
                  strokeWidth="1"
                  style={{
                    animation: 'fadeInOut 3s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Hexágonos */}
      {hexagons.map(hex => (
        <div
          key={hex.id}
          style={{
            position: 'absolute',
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            width: `${hex.size}px`,
            height: `${hex.size}px`,
            opacity: hex.opacity,
            animation: `floatHex ${hex.duration}s ease-in-out infinite`,
            animationDelay: `${hex.delay}s`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="none"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="1.5"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
              }}
            />
          </svg>
        </div>
      ))}

      {/* Círculos concéntricos animados */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        pointerEvents: 'none'
      }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(6, 182, 212, 0.1)',
              animation: `ripple ${4 + i}s ease-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Líneas de datos cruzando */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '-100%',
              top: `${20 * i}%`,
              width: '100%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)',
              animation: `dataLine ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>

      {/* Luz suave siguiendo el mouse */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(500px circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(6, 182, 212, 0.08), transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 0.3s ease'
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
            
            {/* Badge con pulso */}
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
              <div style={{
                width: '8px',
                height: '8px',
                background: '#10B981',
                borderRadius: '50%',
                boxShadow: '0 0 10px #10B981',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              <span style={{ color: '#E0F2FE' }}>Más de 50 años protegiendo a Colombia</span>
            </div>

            {/* Título principal */}
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
                backgroundClip: 'text',
                position: 'relative'
              }}>
                de tu tranquilidad
              </span>
            </h1>

            {/* Subtítulo */}
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

            {/* CTAs con efecto scanner holográfico */}
            <div style={{
              display: 'flex',
              gap: '1.25rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              {/* CTA Principal - Efecto holográfico */}
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
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(6, 182, 212, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(6, 182, 212, 0.35)';
              }}>
                {/* Efecto scanner animado */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'scanner 3s ease-in-out infinite'
                }} />
                
                <Shield size={22} style={{ position: 'relative', zIndex: 1 }} />
                <span style={{ position: 'relative', zIndex: 1 }}>Analizar mi Nivel de Protección</span>
                <ArrowRight size={22} style={{ position: 'relative', zIndex: 1 }} />
              </a>

              {/* CTA Secundario */}
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
                Contactar Asesor
              </a>
            </div>

            {/* Indicador de scroll */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '3rem',
              animation: 'bounce 2s ease-in-out infinite'
            }}>
              <span style={{
                fontSize: '0.875rem',
                color: '#94A3B8',
                fontWeight: '500'
              }}>
                Conoce más sobre nuestros servicios
              </span>
              <ChevronDown size={24} style={{ color: '#06B6D4' }} />
            </div>

            {/* Stats con count-up */}
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
                  number: stats.years,
                  suffix: '+',
                  label: 'Años de experiencia',
                  color: '#F59E0B'
                },
                { 
                  icon: Shield, 
                  number: stats.insurers,
                  suffix: '',
                  label: 'Aseguradoras aliadas',
                  color: '#06B6D4'
                },
                { 
                  icon: Users, 
                  number: stats.clients,
                  suffix: '+',
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
                      textShadow: `0 0 20px ${stat.color}40`,
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      {stat.number}{stat.suffix}
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

      {/* Onda decorativa inferior */}
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
        @keyframes floatHex {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-15px) rotate(10deg); }
        }

        @keyframes gridMove {
          0% { transform: perspective(800px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(800px) rotateX(60deg) translateY(60px); }
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }

        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes dataLine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes scanner {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
