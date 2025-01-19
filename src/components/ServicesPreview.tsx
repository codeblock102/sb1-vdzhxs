import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code, Rocket, ArrowRight, Search, Shield, Zap, Trophy } from 'lucide-react';

const previewServices = [
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Beautiful, modern websites that capture your brand\'s essence.',
    features: ['Responsive Design', 'UI/UX Excellence', 'Brand Integration'],
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Robust, scalable solutions built with cutting-edge technology.',
    features: ['Clean Code', 'Modern Stack', 'Performance Optimized'],
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Boost your visibility and reach your target audience effectively.',
    features: ['Keyword Research', 'Technical SEO', 'Content Strategy'],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Shield,
    title: 'Website Security',
    description: 'Protect your digital assets with enterprise-grade security.',
    features: ['SSL Certificates', 'Regular Backups', 'Security Monitoring'],
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

export default function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="relative w-full overflow-x-hidden bg-gradient-to-b from-[#F5F5F5] to-white py-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F5F5F5] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00A9E0]/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00274D]/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00A9E0]/10 rounded-full mb-4 text-[#00A9E0]">
            <Zap size={16} className="mr-2" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00274D] mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-[#00A9E0] max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge solutions
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {previewServices.map((service, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-6 sm:p-8 rounded-xl border border-gray-100 hover:border-[#00A9E0] transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
                  <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-[#00A9E0] transform transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-110 rotate-6' : ''
                  }`} />
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#00274D] mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-500 group/item">
                        <Trophy className={`w-4 h-4 mr-2 text-[#00A9E0] transition-all duration-300 ${
                          hoveredIndex === index ? 'scale-110' : ''
                        }`} />
                        <span className="group-hover/item:text-[#00274D] transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00274D] text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View All Services
              <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A9E0] to-[#00274D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}