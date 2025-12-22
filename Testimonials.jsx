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
      background: 'linear-gradient(to bottom, #F9FAFB, white)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Lo que nuestros clientes dicen de nosotros
          </h2>
          <p className="section-subtitle">
            Más de 50 años construyendo relaciones de confianza
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
                border: '1px solid transparent',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = '#06B6D4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {/* Icono de comillas */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                opacity: 0.1
              }}>
                <Quote size={60} style={{ color: '#06B6D4' }} />
              </div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#F59E0B"
                    style={{ color: '#F59E0B' }}
                  />
                ))}
              </div>

              {/* Texto del testimonio */}
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

              {/* Información del autor */}
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
                  background: 'linear-gradient(135deg, #06B6D4 0%, #1E3A8A 100%)',
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
                    color: '#06B6D4',
                    fontWeight: '600'
                  }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats de confianza */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'white',
          borderRadius: '1.5rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          border: '1px solid #E5E7EB'
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
                background: 'linear-gradient(135deg, #06B6D4 0%, #1E3A8A 100%)',
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
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
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
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
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
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
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
