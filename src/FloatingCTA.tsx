import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const location = useLocation();
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  // Hide CTA on booking page
  if (location.pathname === '/book') {
    return null;
  }


  return (
    <Link
      to="/book"
      className={`fixed bottom-6 right-6 bg-[#00A9E0] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center space-x-2 z-[9999] ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      <Calendar className="w-5 h-5" />
      <span className="font-medium whitespace-nowrap">Book a Call</span>
    </Link>
  );
}