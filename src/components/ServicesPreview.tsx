import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Paintbrush, ArrowRight } from 'lucide-react';

const previewServices = [
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Beautiful, modern websites that capture your brand\'s essence.'
  },
  {
    icon: Paintbrush,
    title: 'Website Redesign',
    description: 'Transform your existing website into a modern digital experience.'
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00274D] mb-4">Our Services</h2>
          <p className="text-gray-600">Transforming ideas into digital reality</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {previewServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg rounded-xl" />
              <div className="relative p-8 bg-white/10 rounded-xl border border-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
                <service.icon className="w-12 h-12 text-[#00A9E0] mb-4" />
                <h3 className="text-xl font-semibold text-[#00274D] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}