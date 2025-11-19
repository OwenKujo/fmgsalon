import React from "react";
import { Instagram, Facebook, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-beige py-10 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side - Logo */}
          <div className="flex flex-col items-center md:items-start space-y-4 mb-6 md:mb-0">
            <img
              src="/FMG-Logo-PNG-White-long-01_0-1 (1).png"
              alt="FMG Logo"
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-600">
              Copyright © 2005 | All Rights Reserved
            </p>
          </div>

          {/* Center - Navigation */}
          <nav className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              FMG Salon Studio
            </a>
            <a
              href="/wellness"
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Matsenga Wellness
            </a>
            <a
              href="/blog"
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              Blog
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-gray-600 transition-colors font-medium"
            >
              About Us
            </a>
          </nav>

          {/* Right Side - Social Media */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:0864565141"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Call"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-800 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
