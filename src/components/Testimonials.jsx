import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Juan Fernando Quintero',
      position: 'Gerente General',
      company: 'Brot',
      rating: 5,
      text: 'En Brot, hemos contado con Comercial Colombiana por más de 25 años. Han demostrado ser excelentes asesores, acompañándonos en todas las decisiones. Su servicio ha sido impecable.',
      avatar: '👨‍💼'
    },
    {
      name: 'Francesco Pileggi',
      position: 'Gerente General',
      company: 'Budget Rent a Car Colombia',
      rating: 5,
      text: 'Lo que más valoro es la cercanía y transparencia con la que trabajan. Siempre están buscando las mejores opciones para nosotros. Es una tranquilidad saber que tenemos a su equipo respaldándonos.',
      avatar: '👔'
    },
    {
      name: 'Jorge Jaramillo',
      position: 'Gerente General',
      company: 'Hotel Arte',
      rating: 5,
      text: 'Su enfoque personalizado y atención a nuestras necesidades han sido fundamentales. Cuando se ha requerido su apoyo, han estado allí, brindando soluciones efectivas y asesoramiento experto.',
      avatar: '🏨'
    },
    {
      name: 'Juan Pablo Marín',
      position: 'Gerente',
      company: 'FEBAY - Fondo de Empleados de Bayer',
      rating: 5,
      text: 'Encontramos un aliado que entiende de verdad lo que necesita un fondo de empleados. Llevamos más de 20 años trabajando juntos y siempre han sido cercanos, ágiles y muy profesionales.',
      avatar: '💼'
    },
    {
      name: 'Sandra Cuenca',
      position: 'Gerente',
      company: 'Pfeviva - Fondo de empleados Pfizer',
      rating: 5,
      text: 'Nos han dado su asesoría con claridad en los momentos clave. Gracias a su gestión, nuestros asociados cuentan con coberturas adecuadas y con un canal de atención cercano y eficiente.',
      avatar: '💊'
    },
    {
      name: 'Carolina Moncada',
      position: 'Gerente',
      company: 'FE3MCOL - Fondo de empleados 3M',
      rating: 5,
      text: 'Han demostrado un conocimiento profundo en la gestión de fondos de empleados. Durante nuestra vinculación, hemos contado con su apoyo técnico y estratégico.',
      avatar: '🏭'
    }
  ];

  return (
    <section className="section" style={{
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            <Quote size={18} color="#0066CC" />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: '#0066CC',
              letterSpacing: '0.5px'
            }}>
              TESTIMONIOS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Lo que nuestros clientes dicen de nosotros
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Más de 50 años construyendo relaciones de confianza con empresas líderes
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="animate-fadeInUp"
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                animationDelay: `${idx * 0.1}s`,
                cursor: 'pointer',
                border: '2px solid transparent',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.15)';
                e.currentTarget.style.borderColor = '#4A90E2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
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
                background: 'linear-gradient(90deg, #0066CC 0%, #4A90E2 100%)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />

              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                opacity: 0.08
              }}>
                <Quote size={60} style={{ color: '#0066CC' }} />
              </div>

              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#4A90E2"
                    style={{ color: '#4A90E2' }}
                  />
                ))}
              </div>

              <p style={{
                fontSize: '0.9375rem',
                lineHeight: '1.7',
                color: '#4B5563',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                "{testimonial.text}"
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #E5E7EB'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0066CC 0%, #4A90E2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  {testimonial.avatar}
                </div>

                <div>
                  <div style={{
                    fontWeight: '700',
                    color: '#1F2937',
                    fontSize: '0.9375rem'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#6B7280'
                  }}>
                    {testimonial.position}
                  </div>
                  <div style={{
                    fontSize: '0.8125rem',
                    color: '#0066CC',
                    fontWeight: '600'
                  }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'white',
          borderRadius: '1.5rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          border: '2px solid rgba(0, 102, 204, 0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #0066CC 0%, #4A90E2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                98%
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '500'
              }}>
                Fidelidad de clientes
              </div>
            </div>

            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #4A90E2 0%, #0066CC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                95%
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '500'
              }}>
                Renovación de pólizas
              </div>
            </div>

            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                100%
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '500'
              }}>
                Atención personalizada
              </div>
            </div>

            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #4A90E2 0%, #003B71 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                50+
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '500'
              }}>
                Años de experiencia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
