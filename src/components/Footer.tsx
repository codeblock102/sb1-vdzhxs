import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  return (
    <footer className={`${isServicesPage ? 'bg-white' : 'bg-[#00274D]'} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <span className={`text-2xl font-bold group-hover:text-[#00A9E0] transition-colors ${isServicesPage ? 'text-[#00274D]' : 'text-white'}`}>BLANQ</span>
            </Link>
            <p className={isServicesPage ? 'text-gray-600' : 'text-gray-300'}>Creating digital experiences that inspire and engage.</p>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isServicesPage ? 'text-[#00274D]' : 'text-white'}`}>Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors`}>Web Design</Link>
              </li>
              <li>
                <Link to="/services" className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors`}>Web Development</Link>
              </li>
              <li>
                <Link to="/services" className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors`}>Website Redesign</Link>
              </li>
              <li>
                <Link to="/services" className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors`}>SEO Optimization</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isServicesPage ? 'text-[#00274D]' : 'text-white'}`}>Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors`}>About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors`}>Our Work</Link>
              </li>
              <li>
                <Link to="/contact" className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors`}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isServicesPage ? 'text-[#00274D]' : 'text-white'}`}>Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Blanqdigital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors transform hover:scale-110`}
              >
                <Facebook size={24} />
              </a>
            
              <a 
                href="https://www.instagram.com/blanqdigital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors transform hover:scale-110`}
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isServicesPage ? 'text-gray-600 hover:text-[#00A9E0]' : 'text-gray-300 hover:text-[#00A9E0]'} transition-colors transform hover:scale-110`}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className={`border-t ${isServicesPage ? 'border-gray-200' : 'border-gray-700'} mt-12 pt-8 text-center`}>
          <p className={isServicesPage ? 'text-gray-600' : 'text-gray-300'}>
            &copy; {new Date().getFullYear()} Blanq Web Agency. All rights reserved.
            <Link to="/privacy" className={`ml-4 ${isServicesPage ? 'text-gray-600' : 'text-gray-300'} hover:text-[#00A9E0] transition-colors`}>Privacy Policy</Link>
            <span className="mx-2">•</span>
            <Link to="/terms" className={`${isServicesPage ? 'text-gray-600' : 'text-gray-300'} hover:text-[#00A9E0] transition-colors`}>Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}