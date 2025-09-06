import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wellness from './app/wellness/wellness'
import Blog from './app/blog/ิิblog';
import About from './app/about/about';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-primary-beige">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Products />
              <Pricing />
              <Contact />
            </>
          } />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          {/* Add more pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
