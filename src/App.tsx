import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import { LanguageProvider } from './i18n/LanguageProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wellness from './app/wellness/wellness'
import BlogList from './app/blog/bloguse';
import AdminBlogManager from './app/blog/admin';
import BlogDetail from './app/blog/BlogDetail';
import About from './app/about/about';

function App() {
  return (
    <MantineProvider>
      <LanguageProvider>
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
            <Route path="/blog" element={<BlogList />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/admin/*" element={<AdminBlogManager />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            {/* Add more pages */}
          </Routes>
          <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </MantineProvider>
  );
}

export default App;
