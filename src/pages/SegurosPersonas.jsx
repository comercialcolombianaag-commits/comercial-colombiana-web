import React from 'react';
import { Car, Home, Heart, User, CreditCard, PawPrint, GraduationCap, Users as UsersIcon, Plane, FileText, Shield } from 'lucide-react';
import InsurersSlider from '../components/InsurersSlider';
import ContactForm from '../components/ContactForm';

const SegurosPersonas = () => {
  const seguros = [
    { icon: Car, title: 'Seguro de Autos', description: 'Protege tu vehículo contra accidentes, robos y daños a terceros. Incluye: cobertura todo riesgo, responsabilidad civil, asistencia en carretera y más.', subtitle: 'Tranquilidad en cada trayecto', detail: 'Conduce sin preocupaciones. Nosotros te cubrimos en los momentos difíciles.', formLink: 'https://forms.office.com/r/chy8YveJTm', color: '#0066CC' },
    { icon: Home, title: 'Seguro de Hogar', description: 'Cuida tu patrimonio ante incendios, daños, robos o eventos naturales. Incluye: estructura, contenidos, daños a terceros, responsabilidad civil familiar.', subtitle: 'Protege lo que has construido', detail: 'Tu casa y tus recuerdos están seguros con nosotros. Asesoría clara, sin letra pequeña.', formLink: 'https://forms.office.com/r/jLbgMv3D6w', color: '#4A90E2' },
    { icon: User, title: 'Seguro de Vida', description: 'Protege a tu familia y asegura su tranquilidad con un seguro de vida a tu medida, sin letra pequeña y con acompañamiento real.', subtitle: 'Protege a quienes amas', detail: 'Un seguro de vida a tu medida, con respaldo real y orientación clara para decidir bien.', formLink: 'https://forms.office.com/r/iZaR8DV8ps', color: '#0066CC' },
    { icon: CreditCard, title: 'Seguro Vida Deudor', description: 'Evita que una deuda se convierta en una carga para tu familia. Protege tu crédito ante imprevistos y mantén tu estabilidad financiera.', subtitle: 'Tu bienestar es lo primero', detail: 'Salud y protección para ti y los que más amas. Coberturas claras, atención real.', formLink: 'https://forms.office.com/r/MeYYGMBeNj', color: '#4A90E2' },
    { icon: PawPrint, title: 'Seguro para Mascotas', description: 'Protegemos a tus peluditos con coberturas médicas, accidentes y asistencia. Porque ellos también son parte de tu familia.', subtitle: 'Ellos también merecen cuidado', detail: 'Porque son familia. Protege a tu mascota ante imprevistos, accidentes o salud.', formLink: 'https://forms.office.com/r/dv1nXMkNFH', color: '#0066CC' },
    { icon: GraduationCap, title: 'Seguro Educativo', description: 'Asegura la continuidad de la educación de tus hijos ante cualquier eventualidad. Inversión inteligente con respaldo asegurador.', subtitle: 'Invierte en el futuro con respaldo', detail: 'Este seguro garantiza la continuidad de los estudios de tus hijos ante cualquier eventualidad.', whatsapp: 'http://wa.me/573156851089', color: '#4A90E2' },
    { icon: UsersIcon, title: 'Seguro Exequial', description: 'Brinda tranquilidad a tu familia en momentos difíciles. Te acompaña con respaldo económico y logístico ante fallecimientos', subtitle: 'Acompañamos cuando más lo necesitas.', detail: 'Cubrimos gastos funerarios y brindamos apoyo a tus seres queridos en momentos difíciles.', whatsapp: 'http://wa.me/573156851089', color: '#0066CC' },
    { icon: Heart, title: 'Seguro de Salud', description: 'Accede a atención médica con coberturas que se entienden. Te guiamos para elegir la opción ideal según tu necesidad.', subtitle: 'Tu bienestar es primero', detail: 'Salud y protección para ti y los tuyos. Coberturas claras y atención real.', formLink: 'https://forms.office.com/r/TYBxdqRV8e', color: '#4A90E2' },
    { icon: Plane, title: 'Seguro de Viaje', description: 'Viaja tranquilo con respaldo ante emergencias médicas, cancelaciones y pérdida de equipaje. Ideal para turismo o trabajo.', subtitle: 'Viaja sin preocupaciones', detail: 'Respaldo ante emergencias médicas, cancelaciones y equipaje. Ideal para cualquier destino.', formLink: 'https://forms.office.com/r/Wqp1sGQVwH', color: '#0066CC' },
    { icon: FileText, title: 'Otros seguros personales', description: '¿Buscas un seguro diferente? Déjanos tus datos y te orientamos para encontrar la mejor opción para ti.', subtitle: '¿Necesitas otro seguro?', detail: 'Déjanos tus datos y te guiamos para encontrar la mejor opción según tu caso.', whatsapp: 'http://wa.me/573182858846', color: '#4A90E2' }
  ];

  const valores = [
    { title: 'Cercanía que se nota', description: 'No somos una plataforma fría. Aquí te escucha una persona real, te explica y te acompaña.', color: '#0066CC' },
    { title: 'Soluciones que entiendes', description: 'Te ayudamos a elegir lo que realmente necesitas. Sin coberturas ocultas ni tecnicismos.', color: '#4A90E2' },
    { title: 'Confianza que se construye', description: 'Protegemos a miles de familias con ética, compromiso y resultados reales.', color: '#0066CC' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003B71 0%, #0066CC 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>Expertos en proteger tu vida, tu salud y tu hogar</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem', opacity: 0.95, lineHeight: '1.6' }}>Ayudamos a personas a tomar decisiones claras sobre sus seguros, con asesoría real, sin letra pequeña y con respaldo cuando más lo necesitas.</p>
          <a href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.25rem 2.5rem', background: 'white', color: '#003B71', borderRadius: '3rem', textDecoration: 'none', fontSize: '1.125rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'; }}>Solicita tu asesoría</a>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {seguros.map((seguro, idx) => {
              const Icon = seguro.icon;
              return (
                <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', transition: 'all 0.4s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = seguro.color; e.currentTarget.style.boxShadow = `0 20px 60px ${seguro.color}30`; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '1.25rem', background: `${seguro.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}><Icon size={36} color={seguro.color} /></div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1F2937', marginBottom: '1rem' }}>{seguro.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '1.5rem' }}>{seguro.description}</p>
                  <div style={{ padding: '1.5rem', background: `${seguro.color}08`, borderRadius: '1rem', marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: seguro.color, marginBottom: '0.5rem' }}>{seguro.subtitle}</h4>
                    <p style={{ fontSize: '0.9375rem', color: '#4B5563', marginBottom: '0' }}>{seguro.detail}</p>
                  </div>
                  {seguro.formLink && <a href={seguro.formLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2rem', background: `linear-gradient(135deg, ${seguro.color} 0%, ${seguro.color}dd 100%)`, color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', width: '100%', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>📋 Cotiza aquí</a>}
                  {seguro.whatsapp && <a href={seguro.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2rem', background: `linear-gradient(135deg, ${seguro.color} 0%, ${seguro.color}dd 100%)`, color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', width: '100%', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>💬 Solicita tu asesoría</a>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)', padding: '0.5rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(0, 102, 204, 0.2)' }}><Shield size={18} color="#0066CC" /><span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0066CC', letterSpacing: '0.5px' }}>PARA PERSONAS</span></div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Tu aliado de confianza en protección personal</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 3rem' }}>En Comercial Colombiana acompañamos a personas como tú a proteger lo más importante: tu vida, tu salud, tu hogar y tu bienestar. Te asesoramos de forma cercana, sin letra pequeña, para que elijas con tranquilidad el seguro que realmente necesitas.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {valores.map((valor, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid #F3F4F6', textAlign: 'center', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = valor.color; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 15px 40px ${valor.color}20`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: valor.color, marginBottom: '1rem' }}>{valor.title}</h3>
                <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '0' }}>{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsurersSlider />
      <ContactForm />
    </div>
  );
};

export default SegurosPersonas;
