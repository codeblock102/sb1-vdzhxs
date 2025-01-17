import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl" />
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group" onClick={handleLinkClick}>
              <div className="flex items-center gap-2">
                
                <img src="/assets/images/logo.png" alt="" width={40} height={40} />
                <span className="text-2xl font-bold text-[#00274D] ml-3">BLANQ</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-[#00274D] hover:text-[#00A9E0] transition-all duration-300 hover:scale-105">Home</Link>
              <Link to="/about" className="text-[#00274D] hover:text-[#00A9E0] transition-all duration-300 hover:scale-105">About</Link>
              <Link to="/services" className="text-[#00274D] hover:text-[#00A9E0] transition-all duration-300 hover:scale-105">Services</Link>
              <Link to="/portfolio" className="text-[#00274D] hover:text-[#00A9E0] transition-all duration-300 hover:scale-105">Portfolio</Link>
              <Link to="/contact" className="text-[#00274D] hover:text-[#00A9E0] transition-all duration-300 hover:scale-105">Contact</Link>
              <Link 
                to="/book" 
                className="px-4 py-2 bg-[#00A9E0] text-white rounded-lg hover:bg-[#0088B3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#00274D] hover:text-[#00A9E0] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="relative md:hidden">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />
          <div className="relative px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={handleLinkClick} className="block px-3 py-2 text-[#00274D] hover:text-[#00A9E0] hover:bg-white/50 rounded-lg transition-all duration-300">Home</Link>
            <Link to="/about" onClick={handleLinkClick} className="block px-3 py-2 text-[#00274D] hover:text-[#00A9E0] hover:bg-white/50 rounded-lg transition-all duration-300">About</Link>
            <Link to="/services" onClick={handleLinkClick} className="block px-3 py-2 text-[#00274D] hover:text-[#00A9E0] hover:bg-white/50 rounded-lg transition-all duration-300">Services</Link>
            <Link to="/portfolio" onClick={handleLinkClick} className="block px-3 py-2 text-[#00274D] hover:text-[#00A9E0] hover:bg-white/50 rounded-lg transition-all duration-300">Portfolio</Link>
            <Link to="/contact" onClick={handleLinkClick} className="block px-3 py-2 text-[#00274D] hover:text-[#00A9E0] hover:bg-white/50 rounded-lg transition-all duration-300">Contact</Link>
            <Link 
              to="/book" 
              onClick={handleLinkClick} 
              className="block mx-2 px-3 py-2 bg-[#00A9E0] text-white rounded-lg text-center hover:bg-[#0088B3] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}