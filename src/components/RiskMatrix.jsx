import React, { useState } from 'react';
import { Shield, Cpu, DollarSign, FileText, Users, Package } from 'lucide-react';

const RiskMatrix = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const riskCategories = [
    {
      id: 'operacionales',
      icon: Shield,
      title: 'Operacionales',
      description: 'Continuidad del negocio y responsabilidad civil',
      color: '#0066CC',
      examples: [
        'Responsabilidad Civil General',
        'Interrupción de negocios',
        'Daños a instalaciones',
        'Protección de operaciones'
      ]
    },
    {
      id: 'digitales',
      icon: Cpu,
      title: 'Digitales',
      description: 'Ciberseguridad y protección de datos',
      color: '#4A90E2',
      examples: [
        'Ataques cibernéticos',
        'Robo de datos',
        'Interrupción tecnológica',
        'Fraude digital'
      ]
    },
    {
      id: 'financieros',
      icon: DollarSign,
      title: 'Financieros',
      description: 'Protección de recursos y garantías',
      color: '#003B71',
      examples: [
        'Garantías de cumplimiento',
        'Manejo de dinero',
        'Fraude financiero',
        'Responsabilidad contractual'
      ]
    },
    {
      id: 'legal',
      icon: FileText,
      title: 'Cumplimiento / Legal',
      description: 'Contratos, sanciones y obligaciones',
      color: '#0066CC',
      examples: [
        'Cumplimiento contractual',
        'Multas y sanciones',
        'Disputas legales',
        'Responsabilidad jurídica'
      ]
    },
    {
      id: 'talento',
      icon: Users,
      title: 'Talento',
      description: 'Protección de capital humano',
      color: '#4A90E2',
      examples: [
        'Vida Grupo',
        'Personas clave',
        'Accidentes laborales',
        'Salud empresarial'
      ]
    },
    {
      id: 'activos',
      icon: Package,
      title: 'Activos Estratégicos',
      description: 'Equipos, inventarios e instalaciones',
      color: '#003B71',
      examples: [
        'Equipos especializados',
        'Inventario crítico',
        'Infraestructura',
        'Maquinaria'
      ]
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorativo */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 4rem'
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
            <Shield size={20} color="#0066CC" />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: '#0066CC',
              letterSpacing: '0.5px'
            }}>
              PARA EMPRESAS
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            ¿Conoces los riesgos reales de tu empresa?
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            lineHeight: '1.7',
            marginBottom: '0'
          }}>
            Identifica las áreas críticas de tu negocio y descubre qué nivel de protección necesitas en cada una.
          </p>
        </div>

        {/* Grid de categorías 2x3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {riskCategories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;

            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  padding: '2.5rem 2rem',
                  boxShadow: isHovered 
                    ? '0 20px 60px rgba(0, 102, 204, 0.15)' 
                    : '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: isHovered
                    ? `2px solid ${category.color}`
                    : '2px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background gradient on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${category.color} 0%, transparent 100%)`,
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }} />

                {/* Icono */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '1.25rem',
                  background: isHovered
                    ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`
                    : `${category.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  <Icon 
                    size={36} 
                    color={isHovered ? '#FFFFFF' : category.color}
                    style={{ transition: 'color 0.3s ease' }}
                  />
                </div>

                {/* Título */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: isHovered ? category.color : '#1F2937',
                  marginBottom: '0.75rem',
                  transition: 'color 0.3s ease'
                }}>
                  {category.title}
                </h3>

                {/* Descripción */}
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#6B7280',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {category.description}
                </p>

                {/* Lista de ejemplos (visible en hover) */}
                <div style={{
                  maxHeight: isHovered ? '200px' : '0',
                  opacity: isHovered ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s ease'
                }}>
                  <div style={{
                    borderTop: '1px solid #E5E7EB',
                    paddingTop: '1rem'
                  }}>
                    <p style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: category.color,
                      marginBottom: '0.75rem',
                      letterSpacing: '0.5px'
                    }}>
                      COBERTURAS INCLUYEN:
                    </p>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {category.examples.map((example, idx) => (
                        <li key={idx} style={{
                          fontSize: '0.875rem',
                          color: '#6B7280',
                          marginBottom: '0.5rem',
                          paddingLeft: '1.25rem',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            color: category.color,
                            fontWeight: '700'
                          }}>•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA principal */}
        <div style={{
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
            ¿Listo para conocer tu nivel de protección?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Nuestro análisis gratuito identifica tus 3 áreas de mayor exposición en solo 2 minutos.
          </p>
          <a href="#analisis" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1.25rem 3rem',
            fontSize: '1.125rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)',
            color: 'white',
            borderRadius: '3rem',
            textDecoration: 'none',
            boxShadow: '0 10px 30px rgba(0, 102, 204, 0.3)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
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
            <span>Analizar mi Nivel de Protección</span>
            <span style={{ fontSize: '1.5rem' }}>→</span>
          </a>
          <p style={{
            fontSize: '0.875rem',
            color: '#6B7280',
            marginTop: '1rem',
            marginBottom: '0'
          }}>
            ✓ Sin costo ✓ Sin compromiso ✓ Resultados inmediatos
          </p>
        </div>

      </div>
    </section>
  );
};

export default RiskMatrix;
