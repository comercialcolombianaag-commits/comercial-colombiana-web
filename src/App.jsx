import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import SegurosPersonas from './pages/SegurosPersonas';
import SegurosEmpresas from './pages/SegurosEmpresas';
import PortafolioSeguros from './pages/PortafolioSeguros';
import AtencionFondos from './pages/AtencionFondos';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/seguros-para-personas" element={<SegurosPersonas />} />
          <Route path="/seguros-para-empresa" element={<SegurosEmpresas />} />
          <Route path="/seguros-para-empresas" element={<SegurosEmpresas />} />
          <Route path="/portafolio-de-seguros" element={<PortafolioSeguros />} />
          <Route path="/atencion-a-fondos-y-educacion" element={<AtencionFondos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
