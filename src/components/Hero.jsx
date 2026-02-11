import React, { useEffect, useState } from 'react';
import { Shield, ArrowRight, Users, Award, ChevronDown, Car, Heart, Home, Building2, Briefcase, Target } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hexagons, setHexagons] = useState([]);
  const [stats, setStats] = useState({ years: 0, policies: 0, clients: 0, insurers: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const newHexagons = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 40 + 30,
      opacity: Math.random() * 0.3 + 0.2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setHexagons(newHexagons);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 12 - 6,
        y: (e.clientY / window.innerHeight) * 12 - 6
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    if (!hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const steps = 60;
      const increment = {
        years: 50 / steps,
        policies: 1400 / steps,
        clients: 100 / steps,
        insurers: 22 / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          years: Math.min(Math.floor(increment.years * currentStep), 50),
          policies: Math.min(Math.floor(increment.policies * currentStep), 1400),
          clients: Math.min(Math.floor(increment.clients * currentStep), 100),
          insurers: Math.min(Math.floor(increment.insurers * currentStep), 22)
        });

        if (currentStep >= steps) clearInterval(timer);
      }, duration / steps);

      return () => {
        clearInterval(timer);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasAnimated]);

  const ServiceCard = ({ icon: Icon, title, description, link, badge, isHero, index }) => (
    
      href={link}
      className={'service-card' + (isHero ? ' hero-card' : '')}
      style={{
        animationDelay: (index * 0.1) + 's'
      }}
    >
      {badge && (
        <div className={'card-badge' + (isHero ? ' hero-badge' : '')}>
          {badge}
        </div>
      )}
      <div className={'icon-container' + (isHero ? ' hero-icon' : '')}>
        <Icon size={isHero ? 48 : 40} color="#FFB81C" />
      </div>
      <h3 className={'card-title' + (isHero ? ' hero-title' : '')}>
        {title}
      </h3>
      <p className="card-description">
        {description}
      </p>
      <div className={'card-cta' + (isHero ? ' hero-cta' : '')}>
        {isHero ? 'Iniciar Análisis Gratuito' : 'Ver opciones'} →
      </div>
    </a>
  );

  return (
    <section id="inicio" className="hero-section">
      <div className="grid-bg" />

      <svg className="hexagons-svg">
        {hexagons.map((hex, i) => 
          hexagons.slice(i + 1).map((otherHex, j) => {
            const distance = Math.sqrt(Math.pow(hex.x - otherHex.x, 2) + Math.pow(hex.y - otherHex.y, 2));
            if (distance < 35) {
              return (
                <line
                  key={'line-' + i + '-' + j}
                  x1={hex.x + '%'}
                  y1={hex.y + '%'}
                  x2={otherHex.x + '%'}
                  y2={otherHex.y + '%'}
                  stroke="rgba(255, 184, 28, 0.15)"
                  strokeWidth="1"
                  style={{ animation: 'fadeInOut 3s ease-in-out infinite', animationDelay: (i * 0.3) + 's' }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {hexagons.map(hex => (
        <div key={hex.id} className="hexagon" style={{
          left: hex.x + '%',
          top: hex.y + '%',
          width: hex.size + 'px',
          height: hex.size + 'px',
          opacity: hex.opacity,
          animation: 'floatHex ' + hex.duration + 's ease-in-out infinite',
          animationDelay: hex.delay + 's'
        }}>
          <svg viewBox="0 0 100 100">
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="rgba(255, 184, 28, 0.3)" strokeWidth="1.5" />
          </svg>
        </div>
      ))}

      <div className="mouse-light" style={{
        background: 'radial-gradient(500px circle at ' + (50 + mousePosition.x) + '% ' + (50 + mousePosition.y) + '%, rgba(255, 184, 28, 0.06), transparent 50%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          
          <div className="animate-fadeInUp hero-header">
            <h1 className="hero-title">
              ¿Qué necesitas proteger hoy?
            </h1>
            <p className="hero-subtitle">
              Encuentra la protección perfecta para ti, tu familia o tu empresa. Más de 50 años cuidando lo que más valoras en Bogotá.
            </p>
          </div>

          <div className="services-grid">
            <ServiceCard icon={Car} title="Auto" description="SOAT, Todo Riesgo, RC para vehículos particulares y flotillas" link="#auto" index={0} />
            <ServiceCard icon={Target} title="Análisis de Riesgos" description="¿No sabes por dónde empezar? Descubre tus riesgos en 2 minutos" link="#analisis" badge="⭐ RECOMENDADO" isHero={true} index={1} />
            <ServiceCard icon={Heart} title="Salud" description="EPS, Medicina Prepagada, Pólizas Complementarias" link="#salud" index={2} />
            <ServiceCard icon={Building2} title="Mi Empresa" description="Soluciones integrales para PyMEs y empresas medianas" link="#empresa" badge="EMPRESAS" index={3} />
            <ServiceCard icon={Briefcase} title="Mis Empleados" description="Vida Grupo, Salud Empresarial, ARL, Accidentes" link="#empleados" badge="EMPRESAS" index={4} />
            <ServiceCard icon={Home} title="Hogar" description="Todo Riesgo, Incendio, RC. Protege tu patrimonio" link="#hogar" index={5} />
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number">{stats.years}+</div>
              <div className="stat-label">Años de experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.policies}+</div>
              <div className="stat-label">Pólizas emitidas al año</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.clients}+</div>
              <div className="stat-label">Empresas que confían</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.insurers}</div>
              <div className="stat-label">Aseguradoras aliadas</div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>Descubre más sobre nuestros servicios</span>
            <ChevronDown size={24} style={{ color: '#FFB81C' }} />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #001F3F 0%, #003B71 50%, #001F3F 100%);
          overflow: hidden;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 184, 28, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 184, 28, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(800px) rotateX(60deg);
          transform-origin: center top;
          opacity: 0.4;
          animation: gridMove 20s linear infinite;
        }

        .hexagons-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .hexagon {
          position: absolute;
          transform: translate(-50%, -50%);
        }

        .hexagon svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 8px rgba(255, 184, 28, 0.2));
        }

        .mouse-light {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.3s ease;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-header {
          color: white;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #003B71 0%, #FFB81C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          animation: fadeIn 1s ease-out 0.3s backwards;
        }

        .service-card {
          position: relative;
          background: rgba(0, 59, 113, 0.15);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(0, 59, 113, 0.4);
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          text-align: center;
          text-decoration: none;
          color: white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          overflow: hidden;
          display: block;
          animation: fadeInUp 0.8s ease backwards;
        }

        .service-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: #FFB81C;
          box-shadow: 0 20px 60px rgba(255, 184, 28, 0.3);
        }

        .service-card.hero-card {
          background: linear-gradient(135deg, rgba(255, 184, 28, 0.25) 0%, rgba(0, 59, 113, 0.25) 100%);
          border: 3px solid #FFB81C;
          box-shadow: 0 0 0 0 rgba(255, 184, 28, 0.7);
          animation: fadeInUp 0.8s ease 0.2s backwards, hero-pulse 3s ease-in-out 1s infinite;
        }

        .card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 59, 113, 0.9);
          color: #fff;
          padding: 0.375rem 1.25rem;
          border-radius: 1.25rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .card-badge.hero-badge {
          top: -12px;
          left: 50%;
          right: auto;
          transform: translateX(-50%);
          background: #FFB81C;
        }

        .icon-container {
          width: 64px;
          height: 64px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 5px 15px rgba(255, 184, 28, 0.3));
        }

        .icon-container.hero-icon {
          width: 80px;
          height: 80px;
          animation: bounce 2s ease-in-out infinite;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #FFB81C;
        }

        .card-title.hero-title {
          font-size: 1.75rem;
        }

        .card-description {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #003B71 0%, #002A54 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 3rem;
          font-size: 0.875rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .service-card:hover .card-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .card-cta.hero-cta {
          background: linear-gradient(135deg, #FFB81C 0%, #E5A519 100%);
          opacity: 1;
          transform: translateY(0);
          box-shadow: 0 0 20px rgba(255, 184, 28, 0.5);
          animation: cta-glow 2s ease-in-out infinite;
        }

        .stats-bar {
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
          padding: 2.5rem 2rem;
          background: rgba(0, 59, 113, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 184, 28, 0.3);
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          min-width: 150px;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          color: #FFB81C;
          line-height: 1;
          margin-bottom: 0.5rem;
          font-variant-numeric: tabular-nums;
        }

        .stat-label {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          animation: bounce 2s ease-in-out infinite;
          margin-top: 2rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          font-weight: 500;
        }

        @keyframes floatHex {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-15px) rotate(10deg); }
        }

        @keyframes gridMove {
          0% { transform: perspective(800px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(800px) rotateX(60deg) translateY(60px); }
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 184, 28, 0.5); }
          50% { box-shadow: 0 0 30px rgba(255, 184, 28, 0.8); }
        }

        @keyframes hero-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 184, 28, 0.7); }
          50% { box-shadow: 0 0 0 15px rgba(255, 184, 28, 0); }
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-title {
            font-size: 2rem !important;
          }

          .stats-bar {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
