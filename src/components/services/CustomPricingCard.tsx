import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomPricingCard() {
  return (
    <div className="card p-6 h-full flex flex-col justify-between">
      <div>
        <Mail className="w-12 h-12 text-[#00A9E0] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-3">Custom Solution</h3>
        <p className="text-gray-300 mb-8">
          Don't see what you're looking for? Let's create a tailored solution for your specific needs.
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10">
        <Link to="/contact" className="btn-primary w-full">
          Contact Us
        </Link>
      </div>
    </div>
  );
}