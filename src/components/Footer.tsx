import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-beige py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Logo and Social Media */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <img 
                src="/FMG-Logo-PNG-White-long-01_0-1 (1).png" 
                alt="FMG Logo" 
                className="h-10 w-auto"
              />
            </div>
            
                         <div className="flex space-x-4">
               <a 
                 href="https://instagram.com" 
                 className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                 aria-label="Instagram"
               >
                 <Instagram size={20} className="text-gray-800" />
               </a>
               <a 
                 href="https://facebook.com" 
                 className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                 aria-label="Facebook"
               >
                 <Facebook size={20} className="text-gray-800" />
               </a>
               <a 
                 href="https://youtube.com" 
                 className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                 aria-label="YouTube"
               >
                 <Youtube size={20} className="text-gray-800" />
               </a>
             </div>
          </div>

          {/* Right Side - Navigation and Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <nav className="flex space-x-6">
              <a href="#home" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                Home
              </a>
              <a href="#naughty-nails" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                Naughty Nails
              </a>
              <a href="#blog" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                Blog
              </a>
              <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                About Us
              </a>
            </nav>
            
            <p className="text-sm text-gray-600">
              Copyright 2005 | All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
