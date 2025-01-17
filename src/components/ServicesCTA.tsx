import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-[#00274D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-[#00A9E0] mb-8 text-lg">
            Let's discuss how we can help your business grow with our web solutions
          </p>
          <Link
            to="/book"
            className="btn-primary"
          >
            Get Started Today
            <ArrowRight size={24} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}