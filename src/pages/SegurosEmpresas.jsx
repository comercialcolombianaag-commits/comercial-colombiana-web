import React from 'react';
import { Shield, AlertTriangle, Users, Building2, FileCheck, Award, UserCheck, DollarSign, Wifi, FileText } from 'lucide-react';
import InsurersSlider from '../components/InsurersSlider';
import ContactForm from '../components/ContactForm';

const SegurosEmpresas = () => {
  const seguros = [
    { icon: Shield, title: 'Responsabilidad Civil Empresarial', description: 'Protege a tu empresa frente a reclamaciones por daños a terceros durante la operación, servicios o instalaciones.', subtitle: '¿Y si tu empresa enfrenta una demanda?', detail: 'Con este seguro, estás cubierto frente a daños causados a terceros en tus instalaciones o por tus servicios.', whatsapp: 'http://wa.me/573156851089', color: '#0066CC' },
    { icon: AlertTriangle, title: 'Riesgos Laborales', description: 'Cumple con la obligación legal de proteger a tus empleados ante accidentes y enfermedades laborales. Cobertura respaldada por ARL.', subtitle: 'Protege a tu equipo, protege tu operación', detail: 'Garantiza respaldo ante accidentes laborales. Tranquilidad para tus empleados y continuidad para tu empresa.', whatsapp: 'http://wa.me/573156851089', color: '#4A90E2' },
    { icon: Users, title: 'Vida Grupo Empresarial', description: 'Salario emocional que sí vale la pena. Beneficios reales para tus colaboradores, pensados para cuidarlos y retener talento.', subtitle: 'Beneficios reales para tus colaboradores', detail: 'Un seguro que respalda a tu equipo ante fallecimientos, imprevistos, incapacidades y más. Tranquilidad para ellos, estabilidad para tu empresa.', whatsapp: 'http://wa.me/573156851089', color: '#0066CC' },
    { icon: Building2, title: 'Infraestructura y Equipos', description: 'Cobertura ante daños, robos o eventos naturales. Protege oficinas, maquinaria, inventarios y tecnología.', subtitle: '¿Y si hoy perdieras tus activos?', detail: 'Protección contra lo inesperado. Cubre tu inversión en oficinas, maquinaria, tecnología y otros activos clave ante daños o pérdidas.', whatsapp: 'http://wa.me/573156851089', color: '#4A90E2' },
    { icon: FileCheck, title: 'Cumplimiento en Contratos y Proyectos', description: 'Garantiza el cumplimiento legal y financiero en tus contratos comerciales, licitaciones o alianzas estratégicas.', subtitle: 'Seguridad jurídica para tus contratos', detail: 'La aseguradora te respalda como contratista. Garantiza a la entidad contratante que el proyecto se ejecutará según lo pactado, incluso si surgen imprevistos.', whatsapp: 'http://wa.me/573156851089', color: '#0066CC' },
    { icon: Award, title: 'Plan de Beneficios Empresariales', description: 'Mejora el bienestar laboral con un plan integral de seguros y beneficios, deducible de impuestos.', subtitle: 'Un paquete a la medida de tu equipo', detail: 'Integra seguros de vida, salud o accidentes en un plan deducible que mejora tu clima laboral.', whatsapp: 'http://wa.me/573156851089', color: '#4A90E2' },
    { icon: UserCheck, title: 'Directores y Administradores', description: 'Protege a tus directivos ante demandas por decisiones tomadas en el ejercicio de sus funciones.', subtitle: 'Protección para quienes toman decisiones', detail: 'Cubre errores de gestión, conflictos o reclamaciones derivadas de su rol administrativo.', whatsapp: 'http://wa.me/573156851089', color: '#0066CC' },
    { icon: DollarSign, title: 'Infidelidad y Manejo', description: 'Protege tus finanzas ante robos o fraudes cometidos por empleados con manejo de recursos.', subtitle: 'Seguridad ante riesgos internos', detail: 'Cubre pérdidas por actos deshonestos cometidos por personal con acceso a bienes o fondos de tu empresa.', whatsapp: 'http://wa.me/573156851089', color: '#4A90E2' },
    { icon: Wifi, title: 'Riesgos Cibernéticos', description: 'Asegura tu empresa frente a ataques digitales, filtración de datos o secuestro de información.', subtitle: 'Ciberprotección para tu operación', detail: 'Cubre pérdidas financieras, legales o de reputación causadas por ciberataques o errores en la gestión digital.', whatsapp: 'http://wa.me/573156851089', color: '#0066CC' },
    { icon: FileText, title: 'Otros Seguros', description: '¿Buscas algo más específico? Tenemos opciones adaptadas a tu operación.', subtitle: 'Coberturas a la medida', detail: 'Desde seguros agrícolas hasta pólizas gremiales o especializadas. Creamos soluciones ajustadas a tus riesgos reales.', whatsapp: 'http://wa.me/573156851089', color: '#4A90E2' }
  ];

  const valores = [
    { title: 'Entendemos tu operación', description: 'Conocemos los riesgos empresariales. Diseñamos soluciones según tu industria, tamaño y tipo de actividad.', color: '#0066CC' },
    { title: 'Coberturas claras y efectivas', description: 'Nada de condiciones genéricas. Recibes propuestas adaptadas a tus activos, procesos y responsabilidades legales.', color: '#4A90E2' },
    { title: 'Confianza que impulsa tu negocio', description: 'Más que seguros, brindamos acompañamiento estratégico para que operes con tranquilidad, respaldo y visión a largo plazo.', color: '#0066CC' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #003B71 0%, #0066CC 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1' }}>Expertos en proteger tu empresa con soluciones estratégicas</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem', opacity: 0.95, lineHeight: '1.6' }}>Diseñamos coberturas empresariales que se adaptan a tu operación, tu equipo y tus activos. Sin letra pequeña, con asesoría real y soporte cuando más lo necesitas.</p>
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
                  <a href={seguro.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 2rem', background: `linear-gradient(135deg, ${seguro.color} 0%, ${seguro.color}dd 100%)`, color: 'white', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', width: '100%', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>💬 Cotiza aquí</a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)', padding: '0.5rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(0, 102, 204, 0.2)' }}><Shield size={18} color="#0066CC" /><span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0066CC', letterSpacing: '0.5px' }}>PARA EMPRESAS</span></div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Proteger lo más valioso: sus operaciones, su equipo humano y su infraestructura</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto 3rem' }}>En Comercial Colombiana acompañamos a empresas colombianas a proteger lo más valioso: sus operaciones, su equipo humano y su infraestructura. Ofrecemos asesoría cercana y soluciones específicas para que tomes decisiones informadas sobre tus seguros, sin letra pequeña ni trámites innecesarios.</p>
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

export default SegurosEmpresas;
