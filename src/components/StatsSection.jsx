import React, { useState, useEffect, useRef } from 'react';
import { Award, TrendingUp, Users, Shield } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ years: 0, policies: 0, clients: 0, insurers: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const duration = 2000;
      const steps = 60;
      const increment = {
        years: 50 / steps,
        policies: 1400 / steps,
        clients: 150 / steps,
        insurers: 22 / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          years: Math.min(Math.floor(increment.years * currentStep), 50),
          policies: Math.min(Math.floor(increment.policies * currentStep), 1400),
          clients: Math.min(Math.floor(increment.clients * currentStep), 150),
          insurers: Math.min(Math.floor(increment.insurers * currentStep), 22)
        });

        if (currentStep >= steps) clearInterval(timer);
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasAnimated]);

  const statsData = [
    {
      icon: Award,
      number: stats.years,
      suffix: '+',
      label: 'Años de experiencia',
      color: '#0066CC',
      description: 'Protegiendo a familias y empresas en Bogotá'
    },
    {
      icon: TrendingUp,
      number: stats.policies,
      suffix: '+',
      label: 'Pólizas emitidas al año',
      color: '#4A90E2',
      description: 'Soluciones personalizadas para cada necesidad'
    },
    {
      icon: Users,
      number: stats.clients,
      suffix: '+',
      label: 'Clientes activos',
      color: '#0066CC',
      description: 'Empresas y familias que confían en nosotros'
    },
    {
      icon: Shield,
      number: stats.insurers,
      suffix: '',
      label: 'Aseguradoras aliadas',
      color: '#4A90E2',
      description: 'Las mejores opciones del mercado'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #001F3F 0%, #003B71 50%, #001F3F 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Efectos de fondo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(74, 144, 226, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(74, 144, 226, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.3
      }} />

      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Más de 5 décadas construyendo confianza
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Nuestra experiencia y compromiso nos posicionan como líderes en asesoría de seguros en Colombia
          </p>
        </div>

        {/* Grid de stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '1.5rem',
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  border: '1px solid rgba(74, 144, 226, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${index * 0.1}s`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = stat.color;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${stat.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icono */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  margin: '0 auto 1.5rem',
                  borderRadius: '1.25rem',
                  background: `${stat.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${stat.color}40`
                }}>
                  <Icon size={36} color={stat.color} />
                </div>

                {/* Número */}
                <div style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: '900',
                  color: stat.color,
                  lineHeight: '1',
                  marginBottom: '0.75rem',
                  fontVariantNumeric: 'tabular-nums',
                  textShadow: `0 0 30px ${stat.color}60`
                }}>
                  {stat.number}{stat.suffix}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.5px'
                }}>
                  {stat.label}
                </div>

                {/* Descripción */}
                <p style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.5',
                  marginBottom: '0'
                }}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Badge de confianza */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease 0.6s'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            padding: '1.5rem 3rem',
            borderRadius: '3rem',
            border: '1px solid rgba(74, 144, 226, 0.3)'
          }}>
            <Shield size={28} color="#4A90E2" />
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '0.25rem'
              }}>
                Respaldados por
              </div>
              <div style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: 'white'
              }}>
                Las principales aseguradoras de Colombia
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
