import React from 'react';
import { Shield, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%)',
      overflow: 'hidden'
    }}>
      {/* Fondo con pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Contenido izquierdo */}
          <div className="animate-fadeInUp" style={{ color: 'white' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(245, 158, 11, 0.2)',
              color: '#F59E0B',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              ✨ Más de 50 años protegiendo Colombia
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              textShadow: '0 2px 20px rgba(0,0,0,0.2)'
            }}>
              Protegemos lo más
              <span style={{
                display: 'block',
                background: 'linear-gradient(to right, #F59E0B, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                valioso de tu vida
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2.5rem',
              opacity: 0.95,
              lineHeight: '1.8'
            }}>
              Asesoría experta en seguros para personas y empresas en Bogotá.
              Sin letra pequeña, sin rodeos. Solo protección real.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <a href="#test" className="btn btn-primary" style={{
                background: 'white',
                color: '#1E3A8A',
                boxShadow: '0 10px 30px rgba(255,255,255,0.3)',
                fontSize: '1.125rem',
                padding: '1.25rem 2.5rem'
              }}>
                <Shield size={20} />
                Descubre tu Nivel de Protección
                <ArrowRight size={20} />
              </a>

              <a href="#contacto" className="btn btn-secondary" style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
                fontSize: '1.125rem',
                padding: '1.25rem 2.5rem'
              }}>
                Hablar con Experto
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              padding: '2rem 0',
              borderTop: '1px solid rgba(255,255,255,0.2)'
            }}>
              {[
                { number: '50+', label: 'Años de experiencia' },
                { number: '150+', label: 'Clientes activos' },
                { number: '22', label: 'Aseguradoras aliadas' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: '#F59E0B'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    opacity: 0.9
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual derecho - Escudo animado */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              animation: 'float 6s ease-in-out infinite'
            }}>
              {/* Círculo de fondo */}
              <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(30,58,138,0.1) 100%)',
                filter: 'blur(40px)',
                animation: 'pulse 3s ease-in-out infinite'
              }} />

              {/* Escudo principal */}
              <div style={{
                position: 'relative',
                width: '300px',
                height: '300px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid rgba(255,255,255,0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
              }}>
                <Shield size={150} strokeWidth={1.5} style={{ color: 'white' }} />

                {/* Iconos flotantes */}
                {[
                  { Icon: CheckCircle, top: '10%', left: '-10%', delay: '0s' },
                  { Icon: TrendingUp, top: '70%', right: '-10%', delay: '1s' },
                  { Icon: Shield, top: '40%', right: '-15%', delay: '2s' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: item.top,
                      left: item.left,
                      right: item.right,
                      width: '60px',
                      height: '60px',
                      background: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      animation: `float 4s ease-in-out infinite`,
                      animationDelay: item.delay
                    }}
                  >
                    <item.Icon size={30} style={{ color: '#06B6D4' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa inferior */}
      <div style={{
        position: 'absolute',
        bottom: -1,
        left: 0,
        right: 0,
        height: '100px',
        background: 'white'
      }}>
        <svg
          viewBox="0 0 1440 100"
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <path
            fill="#1E3A8A"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,56C1248,59,1344,53,1392,50.7L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .hero-visual {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
