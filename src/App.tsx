import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-primary-beige">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
