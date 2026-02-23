import React from 'react';
import { Shield } from 'lucide-react';

const InsurersSlider = () => {
  const insurers = [
    'Seguros Bolívar',
    'Sura',
    'Allianz',
    'Mapfre',
    'AXA Colpatria',
    'HDI Seguros',
    'Equidad Seguros',
    'Solidaria',
    'Seguros del Estado',
    'Previsora',
    'Mundial de Seguros',
    'SBS Seguros',
    'Zurich',
    'Chubb',
    'Berkley',
    'Aseguradora Solidaria',
    'Quálitas',
    'Colmena Seguros',
    'Seguros Aurora',
    'Colsanitas Seguros',
    'Cesce',
    'Assist Card'
  ];

  return (
    <section style={{
      padding: '5rem 0',
      background: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
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
            <Shield size={18} color="#0066CC" />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: '#0066CC',
              letterSpacing: '0.5px'
            }}>
              ALIANZAS ESTRATÉGICAS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Trabajamos con las mejores aseguradoras
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Accede a las opciones más competitivas del mercado colombiano. Comparamos y te ofrecemos la mejor solución.
          </p>
        </div>

        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '2rem 0'
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '150px',
            background: 'linear-gradient(90deg, white 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '150px',
            background: 'linear-gradient(90deg, transparent 0%, white 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'flex',
            gap: '3rem',
            animation: 'scroll 40s linear infinite',
            width: 'max-content'
          }}>
            {insurers.map((insurer, idx) => (
              <div
                key={`first-${idx}`}
                style={{
                  minWidth: '200px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'white',
                  borderRadius: '1rem',
                  border: '2px solid #F3F4F6',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4A90E2';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F3F4F6';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#1F2937',
                  textAlign: 'center'
                }}>
                  {insurer}
                </span>
              </div>
            ))}

            {insurers.map((insurer, idx) => (
              <div
                key={`second-${idx}`}
                style={{
                  minWidth: '200px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'white',
                  borderRadius: '1rem',
                  border: '2px solid #F3F4F6',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4A90E2';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F3F4F6';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#1F2937',
                  textAlign: 'center'
                }}>
                  {insurer}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '4rem',
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
            ¿Necesitas ayuda para elegir?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Nuestros asesores comparan opciones entre todas las aseguradoras y te presentan la mejor alternativa para tu perfil.
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
            <Shield size={24} />
            <span>Solicitar Asesoría Gratuita</span>
          </a>
        </div>

      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default InsurersSlider;
