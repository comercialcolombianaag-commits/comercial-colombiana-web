import React from 'react';
import { Shield, Heart, Building2, Users, CreditCard, PawPrint, Car, User, FileText } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cumplimiento',
      description: 'Respalda tus contratos y licitaciones con una póliza clara, bien estructurada y a tiempo. Te guiamos para que cumplas sin enredos.',
      whatsapp: 'http://wa.me/573182858846',
      color: '#0066CC'
    },
    {
      icon: Heart,
      title: 'Salud',
      description: 'Protege tu bienestar y el de tu familia con opciones de salud ajustadas a tu necesidad y presupuesto. Te explicamos todo en lenguaje sencillo.',
      whatsapp: 'http://wa.me/573182858846',
      formLink: 'https://forms.office.com/r/TYBxdqRV8e',
      color: '#4A90E2'
    },
    {
      icon: Building2,
      title: 'Mi empresa',
      description: 'Asegura tu operación, activos y responsabilidades con una estrategia de protección pensada para tu negocio. Te acompañamos de principio a fin.',
      whatsapp: 'http://wa.me/573182858846',
      color: '#0066CC'
    },
    {
      icon: Users,
      title: 'Mis empleados',
      description: 'Cuida a tu equipo con coberturas que fortalecen el bienestar laboral y la continuidad de tu empresa. Te ayudamos a armar el plan ideal.',
      whatsapp: 'http://wa.me/573182858846',
      color: '#4A90E2'
    },
    {
      icon: CreditCard,
      title: 'Proteger créditos',
      description: 'Evita que una incapacidad, desempleo o imprevisto afecte tus pagos. Diseñamos una protección que te da tranquilidad y estabilidad financiera.',
      whatsapp: 'http://wa.me/573182858846',
      formLink: 'https://forms.office.com/r/MeYYGMBeNj',
      color: '#0066CC'
    },
    {
      icon: PawPrint,
      title: 'Mascotas',
      description: 'Tu mascota es familia. Cubre imprevistos veterinarios y protégela con opciones claras, sin letra pequeña, y con acompañamiento real.',
      whatsapp: 'http://wa.me/573182858846',
      formLink: 'https://forms.office.com/r/dv1nXMkNFH',
      color: '#4A90E2'
    },
    {
      icon: Car,
      title: 'Autos',
      description: 'Protege tu vehículo con coberturas claras y asistencia inmediata en carretera 24/7 para ti cuando más la necesitas.',
      whatsapp: 'http://wa.me/573182858846',
      formLink: 'https://forms.office.com/r/chy8YveJTm',
      color: '#0066CC'
    },
    {
      icon: User,
      title: 'Vida',
      description: 'Protege a quienes más amas con un seguro de vida a tu medida. Te ayudamos a elegir coberturas útiles y coherentes con tu realidad.',
      whatsapp: 'http://wa.me/573182858846',
      formLink: 'https://forms.office.com/r/iZaR8DV8ps',
      color: '#4A90E2'
    },
    {
      icon: FileText,
      title: 'Otros seguros personales',
      description: 'Protege lo que más valoras con el seguro ideal para tu necesidad. Déjanos tus datos y te orientamos con una asesoría clara.',
      whatsapp: 'http://wa.me/573182858846',
      color: '#0066CC'
    }
  ];

  return (
    <section style={{ padding: '5rem 0', background: 'white', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)', padding: '0.5rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(0, 102, 204, 0.2)' }}>
            <Shield size={18} color="#0066CC" />
            <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0066CC', letterSpacing: '0.5px' }}>NUESTROS SEGUROS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Soluciones que protegen tu vida, tu familia y tu empresa</h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>Asesoría experta adaptada a tus necesidades reales. Sin letra pequeña, sin sorpresas.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem 2rem', border: '2px solid #F3F4F6', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', cursor: 'pointer', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = service.color; e.currentTarget.style.boxShadow = `0 20px 60px ${service.color}30`; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, ${service.color} 0%, transparent 100%)` }} />
                <div style={{ width: '70px', height: '70px', borderRadius: '1.25rem', background: `${service.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', transition: 'all 0.3s ease' }}><Icon size={36} color={service.color} /></div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '2rem', flex: 1 }}>{service.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href={service.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`, color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: '600', transition: 'all 0.3s ease', boxShadow: `0 4px 15px ${service.color}30` }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 6px 20px ${service.color}40`; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 15px ${service.color}30`; }}>💬 Solicita tu asesoría</a>
                  {service.formLink && <a href={service.formLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 1.5rem', background: 'transparent', color: service.color, border: `2px solid ${service.color}`, borderRadius: '0.75rem', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: '600', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = service.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = service.color; e.currentTarget.style.transform = 'translateY(0)'; }}>📋 Cotiza aquí</a>}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
