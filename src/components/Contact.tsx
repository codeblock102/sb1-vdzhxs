import React from 'react';
import { Mail, Phone, Send, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import ContactForm from './contact/ContactForm';

const contactFeatures = [
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "We're here to help anytime you need us"
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get a response within 24 hours"
  },
  {
    icon: Send,
    title: "Direct Communication",
    description: "Speak directly with our team"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00A9E0]/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00274D]/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00A9E0]/10 rounded-full mb-4 text-[#00A9E0]">
            <Send size={16} className="mr-2" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-4xl font-bold text-[#00274D] mb-4">Get in Touch</h2>
          <p className="text-[#00A9E0] text-lg max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with our web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0]/20 to-[#00274D]/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-white/70 backdrop-blur-xl p-8 rounded-xl shadow-lg border border-white/20">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20 flex items-start space-x-4">
                  <div className="bg-[#00A9E0]/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#00A9E0]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00274D] mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@blanqagency.com</p>
                  </div>
                </div>
              </div>

              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20 flex items-start space-x-4">
                  <div className="bg-[#00A9E0]/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#00A9E0]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00274D] mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (438) 867-4912</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {contactFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#00274D]/5 p-2 rounded-lg">
                      <feature.icon className="w-5 h-5 text-[#00A9E0]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#00274D]">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a 
                href="/book" 
                className="group flex items-center justify-center w-full px-6 py-4 bg-[#00274D] text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Free Consultation
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0] to-[#00274D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}