import React, { useState } from 'react';
import { Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  return (
    <header className="bg-accent-beige shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/FMG_NEW-LOGO.png" 
              alt="FMG Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
              {t('nav.home')}
            </a>
            <a href="/wellness" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
              {t('nav.wellness')}
            </a>
            <a href="/blog" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
              {t('nav.blog')}
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
              {t('nav.about')}
            </a>
          </nav>

          {/* Social Media, Contact & Language */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0864565141" className="text-gray-800 hover:text-gray-600 transition-colors" aria-label="Call">
              <Phone size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-800 hover:text-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" className="text-gray-800 hover:text-blue-600 transition-colors">
              <Facebook size={20} />
            </a>

            {/* Language toggle buttons */}
            <div className="flex items-center space-x-1 border rounded-md overflow-hidden">
              <button
                onClick={() => setLang('th')}
                className={`px-3 py-1 text-sm ${lang === 'th' ? 'bg-amber-900 text-white' : 'text-gray-800 bg-white'}`}
                aria-pressed={lang === 'th'}
              >
                TH
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-sm ${lang === 'en' ? 'bg-amber-900 text-white' : 'text-gray-800 bg-white'}`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            <a href="tel:0864565141" className="bg-primary-beige text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium inline-block">
              {t('header.call')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-beige rounded-md mt-2">
              <a href="/" className="block px-3 py-2 text-gray-800 hover:text-gray-600 transition-colors font-medium">
                {t('nav.home')}
              </a>
              <a href="/wellness" className="block px-3 py-2 text-gray-800 hover:text-gray-600 transition-colors font-medium">
                {t('nav.wellness')}
              </a>
              <a href="/blog" className="block px-3 py-2 text-gray-800 hover:text-gray-600 transition-colors font-medium">
                {t('nav.blog')}
              </a>
              <a href="/about" className="block px-3 py-2 text-gray-800 hover:text-gray-600 transition-colors font-medium">
                {t('nav.about')}
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="tel:0864565141" className="text-gray-800 hover:text-gray-600 transition-colors">
                  <Phone size={20} />
                </a>
                <a href="https://instagram.com" className="text-gray-800 hover:text-pink-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" className="text-gray-800 hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
                {/* Mobile language selector */}
                <div className="ml-2 flex items-center space-x-1">
                  <button onClick={() => setLang('th')} className={`px-2 py-1 text-sm ${lang === 'th' ? 'bg-amber-900 text-white' : 'text-gray-800 bg-white'} rounded-sm`}>TH</button>
                  <button onClick={() => setLang('en')} className={`px-2 py-1 text-sm ${lang === 'en' ? 'bg-amber-900 text-white' : 'text-gray-800 bg-white'} rounded-sm`}>EN</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
