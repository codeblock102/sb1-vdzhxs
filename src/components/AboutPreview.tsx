import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/20 to-transparent rounded-xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="stagger-fade-in">
            <h2 className="text-4xl font-bold text-[#00274D] mb-6" style={{ animationDelay: '0.4s' }}>Who We Are</h2>
            <p className="text-gray-600 mb-6" style={{ animationDelay: '0.6s' }}>
              We are a passionate team of web designers and developers dedicated to creating exceptional digital experiences. With years of expertise and a commitment to innovation, we help businesses thrive in the digital world.
            </p>
            <Link to="/about" className="btn-primary" style={{ animationDelay: '0.8s' }}>
              Learn More About Us
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}