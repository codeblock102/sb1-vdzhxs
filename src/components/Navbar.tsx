import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavLinkColor } from '../hooks/useNavLinkColor';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { textColor, hoverColor, logoTextColor, menuIconColor, mobileMenuBg } = useNavLinkColor();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={handleLinkClick}>
              <div className="flex items-center gap-2">
               <img src="/assets/images/logo.png" alt="" width={40} height={40} />
                <span className={`text-2xl font-bold ml-3 ${logoTextColor}`}>BLANQ</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className={`${textColor} ${hoverColor} transition-colors`}>Home</Link>
              <Link to="/about" className={`${textColor} ${hoverColor} transition-colors`}>About</Link>
              <Link to="/services" className={`${textColor} ${hoverColor} transition-colors`}>Services</Link>
              <Link to="/portfolio" className={`${textColor} ${hoverColor} transition-colors`}>Portfolio</Link>
              <Link to="/contact" className={`${textColor} ${hoverColor} transition-colors`}>Contact</Link>
              <Link 
                to="/book" 
                className="book-call-btn py-2 text-white rounded-lg shadow-lg md:px-1 lg:px-4"
              >
                Book a Call
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={menuIconColor}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden ${mobileMenuBg} backdrop-blur-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={handleLinkClick} className={`block px-3 py-2 ${textColor} ${hoverColor}`}>Home</Link>
            <Link to="/about" onClick={handleLinkClick} className={`block px-3 py-2 ${textColor} ${hoverColor}`}>About</Link>
            <Link to="/services" onClick={handleLinkClick} className={`block px-3 py-2 ${textColor} ${hoverColor}`}>Services</Link>
            <Link to="/portfolio" onClick={handleLinkClick} className={`block px-3 py-2 ${textColor} ${hoverColor}`}>Portfolio</Link>
            <Link to="/contact" onClick={handleLinkClick} className={`block px-3 py-2 ${textColor} ${hoverColor}`}>Contact</Link>
            <Link 
              to="/book" 
              onClick={handleLinkClick} 
              className="book-call-btn block px-3 py-2 mx-2 text-white rounded-lg text-center md:px-2 ">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}