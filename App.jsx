import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
