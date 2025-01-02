import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00274D] mb-4 fade-in-up" style={{ animationDelay: '0.2s' }}>Get in Touch</h2>
          <p className="text-[#00A9E0] mb-8 text-lg fade-in-up" style={{ animationDelay: '0.3s' }}>
            Let's discuss how we can help your business grow with our web solutions
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-lg fade-in-up" style={{ animationDelay: '0.4s' }}>
            <ContactForm />
          </div>
          <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#00A9E0]" />
              <div>
                <h3 className="text-lg font-semibold text-[#00274D]">Email Us</h3>
                <p className="text-gray-600">admin@blanqdigital.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#00A9E0]" />
              <div>
                <h3 className="text-lg font-semibold text-[#00274D]">Call Us</h3>
                <p className="text-gray-600">+1 (438) 867-4812
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#00A9E0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}