import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative top-20 overflow-hidden bg-[#F5F5F5]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00A9E0]/20 rounded-full filter blur-3xl fade-in" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00274D]/20 rounded-full filter blur-3xl fade-in" style={{ animationDelay: '0.6s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-[#00274D] mb-6" style={{ animationDelay: '0.3s' }}>
              Where ideas go from BLANQ to brilliance.
            </h1>
            <p className="text-xl text-gray-600 mb-8" style={{ animationDelay: '0.5s' }}>
              Transform your online presence with our expert web design and development services. We build beautiful, functional websites that drive results.
            </p>
            <div style={{ animationDelay: '0.7s' }}>
              <a href="#contact" className="btn-primary">
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="relative">
              <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Web Development"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}