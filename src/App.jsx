import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RiskMatrix from './components/RiskMatrix';
import StatsSection from './components/StatsSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RiskMatrix />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
