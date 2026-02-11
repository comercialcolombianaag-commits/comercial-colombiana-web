import React, { useEffect, useState } from 'react';
import { Shield, ArrowRight, Users, Award, ChevronDown, Car, Heart, Home, Building2, Briefcase, Target } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hexagons, setHexagons] = useState([]);
  const [stats, setStats] = useState({ years: 0, policies: 0, clients: 0, insurers: 0 });
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
      const duration = 2000;
      const steps = 60;
      const increment = {
        years: 50 / steps,
        policies: 1400 / steps,
        clients: 100 / steps,
        insurers: 22 / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          years: Math.min(Math.floor(increment.years * currentStep), 50),
          policies: Math.min(Math.floor(increment.policies * currentStep), 1400),
          clients: Math.min(Math.floor(increment.clients * currentStep), 100),
          insurers: Math.min(Math.floor(increment.insurers * currentStep), 22)
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

  // 6 Cards de servicios
  const serviceCards = [
    {
      icon: Car,
      title: 'Auto',
      description: 'SOAT, Todo Riesgo, RC para vehículos particulares y flotillas',
      link: '#auto',
      badge: null
    },
    {
      icon: Target,
      title: 'Análisis de Riesgos',
      description: '¿No sabes por dónde empezar? Descubre tus riesgos en 2 minutos',
      link: '#analisis',
      badge: '⭐ RECOMENDADO',
      isHero: true
    },
    {
      icon: Heart,
      title: 'Salud',
      description: 'EPS, Medicina Prepagada, Pólizas Complementarias',
      link: '#salud',
      badge: null
    },
    {
      icon: Building2,
      title: 'Mi Empresa',
      description: 'Soluciones integrales para PyMEs y empresas medianas',
      link: '#empresa',
      badge: 'EMPRESAS'
    },
    {
      icon: Briefcase,
      title: 'Mis Empleados',
      description: 'Vida Grupo, Salud Empresarial, ARL, Accidentes',
      link: '#empleados',
      badge: 'EMPRESAS'
    },
    {
      icon: Home,
      title: 'Hogar',
      description: 'Todo Riesgo, Incendio, RC. Protege tu patrimonio',
      link: '#hogar',
      badge: null
    }
  ];

  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #001F3F 0%, #003B71 50%, #001F3F 100%)',
      overflow: 'hidden',
      paddingTop: '80px',
      paddingBottom: '80px'
    }}>
      {/* Grid animado sutil */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 184, 28, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 184, 28, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: 'perspective(800px) rotateX(60deg)',
        transformOrigin: 'center top',
        opacity: 0.4,
        animation: 'gridMove 20s linear infinite'
      }} />

      {/* Hexágonos flotantes */}
      <svg style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}>
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
                  stroke="rgba(255, 184, 28, 0.15)"
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
              stroke="rgba(255, 184, 28, 0.3)"
              strokeWidth="1.5"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 184, 28, 0.2))'
              }}
            />
          </svg>
        </div>
      ))}

      {/* Luz siguiendo el mouse */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(500px circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(255, 184, 28, 0.06), transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 0.3s ease'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Título y subtítulo */}
          <div className="animate-fadeInUp" style={{ 
            color: 'white',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #003B71 0%, #FFB81C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ¿Qué necesitas proteger hoy?
            </h1>

            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              marginBottom: '0'
            }}>
              Encuentra la protección perfecta para ti, tu familia o tu empresa. 
              Más de 50 años cuidando lo que más valoras en Bogotá.
            </p>
          </div>

          {/* Grid de 6 Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            animation: 'fadeIn 1s ease-out 0.3s backwards'
          }}>
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              const isHeroCard = card.isHero;
              
              return (
                
                  key={index}
                  href={card.link}
                  style={{
                    position: 'relative',
                    background: isHeroCard 
                      ? 'linear-gradient(135deg, rgba(255, 184, 28, 0.25) 0%, rgba(0, 59, 113, 0.25) 100%)'
                      : 'rgba(0, 59, 113, 0.15)',
                    backdropFilter: 'blur(20px)',
                    border: isHeroCard 
                      ? '3px solid #FFB81C' 
                      : '2px solid rgba(0, 59, 113, 0.4)',
                    borderRadius: '1.5rem',
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    animation: `fadeInUp 0.8s ease ${index * 0.1}s backwards`,
                    boxShadow: isHeroCard 
                      ? '0 0 0 0 rgba(255, 184, 28, 0.7)'
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                    e.currentTarget.style.borderColor = '#FFB81C';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 184, 28, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = isHeroCard ? '#FFB81C' : 'rgba(0, 59, 113, 0.4)';
                    e.currentTarget.style.boxShadow = isHeroCard ? '0 0 0 0 rgba(255, 184, 28, 0.7)' : 'none';
                  }}
                >
                  {card.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: isHeroCard ? '#FFB81C' : 'rgba(0, 59, 113, 0.9)',
                      color: '#fff',
                      padding: '0.375rem 1.25rem',
                      borderRadius: '1.25rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      whiteSpace: 'nowrap'
                    }}>
                      {card.badge}
                    </div>
                  )}

                  <div style={{
                    width: isHeroCard ? '80px' : '64px',
                    height: isHeroCard ? '80px' : '64px',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: 'drop-shadow(0 5px 15px rgba(255, 184, 28, 0.3))',
                    animation: isHeroCard ? 'bounce 2s ease-in-out infinite' : 'none'
                  }}>
                    <Icon size={isHeroCard ? 48 : 40} color="#FFB81C" />
                  </div>

                  <h3 style={{
                    fontSize: isHeroCard ? '1.75rem' : '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: '#FFB81C'
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.6',
                    marginBottom: '1.25rem'
                  }}>
                    {card.description}
                  </p>

                  <div 
                    className="card-cta"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: isHeroCard 
                        ? 'linear-gradient(135deg, #FFB81C 0%, #E5A519 100%)'
                        : 'linear-gradient(135deg, #003B71 0%, #002A54 100%)',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '3rem',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      opacity: isHeroCard ? 1 : 0,
                      transform: isHeroCard ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'all 0.3s ease',
                      boxShadow: isHeroCard ? '0 0 20px rgba(255, 184, 28, 0.5)' : 'none',
                      animation: isHeroCard ? 'cta-glow 2s ease-in-out infinite' : 'none'
                    }}
                  >
                    {isHeroCard ? 'Iniciar Análisis Gratuito' : 'Ver opciones'} →
                  </div>
                </a>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
            padding: '2.5rem 2rem',
            background: 'rgba(0, 59, 113, 0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(255, 184, 28, 0.3)',
            marginTop: '2rem'
          }}>
            {[
              { number: stats.years, suffix: '+', label: 'Años de experiencia' },
              { number: stats.policies, suffix: '+', label: 'Pólizas emitidas al año' },
              { number: stats.clients, suffix: '+', label: 'Empresas que confían' },
              { number: stats.insurers, suffix: '', label: 'Aseguradoras aliadas' }
            ].map((stat, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                minWidth: '150px'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '900',
                  color: '#FFB81C',
                  lineHeight: '1',
                  marginBottom: '0.5rem',
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {stat.number}{stat.suffix}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Indicador de scroll */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            animation: 'bounce 2s ease-in-out infinite',
            marginTop: '2rem'
          }}>
            <span style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '500'
            }}>
              Descubre más sobre nuestros servicios
            </span>
            <ChevronDown size={24} style={{ color: '#FFB81C' }} />
          </div>
        </div>
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 184, 28, 0.5); }
          50% { box-shadow: 0 0 30px rgba(255, 184, 28, 0.8); }
        }

        a:hover .card-cta {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
