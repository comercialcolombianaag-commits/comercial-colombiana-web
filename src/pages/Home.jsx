import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import RiskMatrix from '../components/RiskMatrix';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ResultsSection from '../components/ResultsSection';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import WhyUs from '../components/WhyUs';
import InsurersSlider from '../components/InsurersSlider';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <RiskMatrix />
      <StatsSection />
      <WhyChooseUs />
      <ResultsSection />
      <Testimonials />
      <AboutUs />
      <WhyUs />
      <InsurersSlider />
      <ContactForm />
    </>
  );
};

export default Home;
