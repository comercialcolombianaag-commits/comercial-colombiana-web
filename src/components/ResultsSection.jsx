import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ fidelity: 0, renewal: 0, attention: 0 });
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
        fidelity: 98 / steps,
        renewal: 95 / steps,
        attention: 100 / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          fidelity: Math.min(Math.floor(increment.fidelity * currentStep), 98),
          renewal: Math.min(Math.floor(increment.renewal * currentStep), 95),
          attention: Math.min(Math.floor(increment.attention * currentStep), 100)
        });

        if (currentStep >= steps) clearInterval(timer);
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasAnimated]);

  const results = [
    {
      icon: Users,
      number: stats.fidelity,
      suffix: '%',
      label: 'Fidelidad de clientes',
      description: 'Nuestros clientes renuevan año tras año',
      color: '#0066CC'
    },
    {
      icon: TrendingUp,
      number: stats.renewal,
      suffix: '%',
      label: 'Renovación de pólizas',
      description: 'Tasa de renovación de contratos',
      color: '#4A90E2'
    },
    {
      icon: Award,
      number: stats.attention,
      suffix: '%',
      label: 'Nivel de atención personalizada',
      description: 'Compromiso con servicio humano y cercano',
      color: '#0066CC'
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
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.15) 0%, transparent 70%)',
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
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(74, 144, 226, 0.2)',
            padding: '0.5rem 1.5rem',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(74, 144, 226, 0.3)'
          }}>
            <Award size={18} color="#4A90E2" />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: '#4A90E2',
              letterSpacing: '0.5px'
            }}>
              NUESTROS RESULTADOS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Comprometidos con proteger lo que más importa
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Ayudamos a personas, familias y empresas a asegurar su patrimonio con asesoría profesional, transparente y cercana. Nuestro compromiso se refleja en la confianza que nos brindan nuestros clientes.
          </p>
        </div>

        {/* Grid de resultados */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {results.map((result, idx) => {
            const Icon = result.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '1.5rem',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  border: '1px solid rgba(74, 144, 226, 0.2)',
                  transition: 'all 0.4s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${idx * 0.15}s`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = result.color;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${result.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icono */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 2rem',
                  borderRadius: '1.5rem',
                  background: `${result.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${result.color}40`
                }}>
                  <Icon size={40} color={result.color} />
                </div>

                {/* Número */}
                <div style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  fontWeight: '900',
                  color: result.color,
                  lineHeight: '1',
                  marginBottom: '1rem',
                  fontVariantNumeric: 'tabular-nums',
                  textShadow: `0 0 40px ${result.color}60`
                }}>
                  {result.number}{result.suffix}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.5px'
                }}>
                  {result.label}
                </div>

                {/* Descripción */}
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  {result.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;
