import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: '',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
    if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El celular es requerido';
    if (!formData.type) newErrors.type = 'Selecciona una opción';
    if (!formData.message.trim()) newErrors.message = 'Cuéntanos qué necesitas';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Debes aceptar los términos';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    console.log('Form data:', formData);
    
    setTimeout(() => {
      alert('¡Mensaje enviado! Te contactaremos pronto.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: '',
        message: '',
        acceptTerms: false
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: Phone, title: 'Línea de atención personalizada', value: '(+57) 315 685-1089', link: 'tel:+573156851089', color: '#0066CC' },
    { icon: Mail, title: 'Correo electrónico', value: 'andres.arenas@comercialcolombiana.com', link: 'mailto:andres.arenas@comercialcolombiana.com', color: '#4A90E2' },
    { icon: MapPin, title: 'Dirección', value: 'Calle 57 #13-27 Piso 4 – Bogotá, Colombia', color: '#0066CC' },
    { icon: Clock, title: 'Horario de atención', value: 'Lunes a viernes de 8:00 a.m. a 5:00 p.m.', color: '#4A90E2' }
  ];

  return (
    <section id="contacto" style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)', padding: '0.5rem 1.5rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(0, 102, 204, 0.2)' }}>
            <Send size={18} color="#0066CC" />
            <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0066CC', letterSpacing: '0.5px' }}>CONTÁCTANOS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: '#1F2937', marginBottom: '1.5rem', lineHeight: '1.2' }}>Hablemos. Estamos listos para ayudarte</h2>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>¿Tienes dudas o necesitas tomar una buena decisión sobre tu seguro? Te ofrecemos acompañamiento humano, sin letra pequeña y con total claridad.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937', marginBottom: '2rem' }}>Información de contacto</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '0.75rem', background: `${info.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={24} color={info.color} /></div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6B7280', marginBottom: '0.25rem' }}>{info.title}</div>
                      {info.link ? <a href={info.link} style={{ fontSize: '1rem', fontWeight: '600', color: info.color, textDecoration: 'none', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>{info.value}</a> : <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1F2937' }}>{info.value}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '2px solid rgba(0, 102, 204, 0.1)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937', marginBottom: '1.5rem' }}>¿Necesitas ayuda? Conversemos con una persona real.</h3>
            <p style={{ fontSize: '0.9375rem', color: '#6B7280', marginBottom: '2rem' }}>Déjanos tus datos y un asesor experto –no un bot– te contactará con una solución clara y personalizada.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#4B5563', marginBottom: '0.5rem' }}>Nombre *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ width: '100%', padding: '0.875rem', border: errors.firstName ? '2px solid #EF4444' : '2px solid #E5E7EB', borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#0066CC'} onBlur={(e) => !errors.firstName && (e.target.style.borderColor = '#E5E7EB')} />
                  {errors.firstName && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.firstName}</span>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#4B5563', marginBottom: '0.5rem' }}>Apellidos *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ width: '100%', padding: '0.875rem', border: errors.lastName ? '2px solid #EF4444' : '2px solid #E5E7EB', borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#0066CC'} onBlur={(e) => !errors.lastName && (e.target.style.borderColor = '#E5E7EB')} />
                  {errors.lastName && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.lastName}</span>}
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#4B5563', marginBottom: '0.5rem' }}>Correo electrónico *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.875rem', border: errors.email ? '2px solid #EF4444' : '2px solid #E5E7EB', borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#0066CC'} onBlur={(e) => !errors.email && (e.target.style.borderColor = '#E5E7EB')} />
                {errors.email && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#4B5563', marginBottom: '0.5rem' }}>Celular *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '0.875rem', border: errors.phone ? '2px solid #EF4444' : '2px solid #E5E7EB', borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#0066CC'} onBlur={(e) => !errors.phone && (e.target.style.borderColor = '#E5E7EB')} />
                {errors.phone && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#4B5563', marginBottom: '0.5rem' }}>¿Qué buscas? *</label>
                <select name="type" value={formData.type} onChange={handleChange} style={{ width: '100%', padding: '0.875rem', border: errors.type ? '2px solid #EF4444' : '2px solid #E5E7EB', borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none', backgroundColor: 'white' }} onFocus={(e) => e.target.style.borderColor = '#0066CC'} onBlur={(e) => !errors.type && (e.target.style.borderColor = '#E5E7EB')}>
                  <option value="">Selecciona una opción</option>
                  <option value="personas">Seguros para mí</option>
                  <option value="empresa">Seguros para mi empresa</option>
                </select>
                {errors.type && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.type}</span>}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#4B5563', marginBottom: '0.5rem' }}>Cuéntanos más *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Cuéntanos más de lo que estás buscando" style={{ width: '100%', padding: '0.875rem', border: errors.message ? '2px solid #EF4444' : '2px solid #E5E7EB', borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} onFocus={(e) => e.target.style.borderColor = '#0066CC'} onBlur={(e) => !errors.message && (e.target.style.borderColor = '#E5E7EB')} />
                {errors.message && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} style={{ marginTop: '0.25rem', cursor: 'pointer' }} />
                  <span style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.5' }}>He leído y acepto los Términos y Condiciones y la Política de Tratamiento de Datos.</span>
                </label>
                {errors.acceptTerms && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.25rem', display: 'block' }}>{errors.acceptTerms}</span>}
              </div>
              <button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '1.125rem', background: isSubmitting ? '#9CA3AF' : 'linear-gradient(135deg, #0066CC 0%, #003B71 100%)', color: 'white', border: 'none', borderRadius: '0.75rem', fontSize: '1.125rem', fontWeight: '700', cursor: isSubmitting ? 'not-allowed' : 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(-2px)')} onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(0)')}>
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E5E7EB', textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1rem' }}>¿Prefieres elegir el día y la hora? También puedes agendar tu cita directamente con un asesor por videollamada</p>
              <a href="https://outlook.office.com/bookwithme/user/80e5ce5edeaa452fa7dc47702b37d375@comercialcolombiana.com?anonymous&ismsaljsauthenabled" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: 'transparent', color: '#0066CC', border: '2px solid #0066CC', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: '600', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#0066CC'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0066CC'; }}>📅 Agenda una cita</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
