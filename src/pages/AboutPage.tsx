import React from 'react';
import { Users, Target, Shield, Award } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We listen, understand, and deliver solutions that meet your unique needs.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We stay ahead of digital trends to provide cutting-edge solutions for your business.'
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'We maintain the highest standards in design, development, and project management.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring outstanding results for our clients.'
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-start fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl font-bold text-[#00274D] mb-4">B.L.A.N.Q</h1>
              <p className="text-xl text-[#00A9E0] mb-6">Boldly Leading a New Quality</p>
              <p className="text-gray-600 mb-6">
                At BLANQ, we're more than just a web agency. We're your digital partners, committed to transforming your online presence and helping your business thrive in the digital world.
              </p>
              <p className="text-gray-600">
                With a team of passionate experts and years of experience, we deliver innovative web solutions that drive results and exceed expectations.
              </p>
            </div>
            <div className="relative fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A9E0]/20 to-transparent rounded-xl" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Our office"
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-[#00274D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses with innovative digital solutions that drive growth, enhance user experience, and create lasting impact in the digital landscape.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading web agency that transforms businesses through creative excellence, technical innovation, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#00274D] text-center mb-16 fade-in-up" style={{ animationDelay: '0.2s' }}>Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-lg fade-in-up" style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
                <value.icon className="w-12 h-12 text-[#00A9E0] mb-4" />
                <h3 className="text-xl font-semibold text-[#00274D] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#00274D] text-center mb-16 fade-in-up" style={{ animationDelay: '0.2s' }}>Why Choose Us</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold text-[#00274D] mb-4">Expertise</h3>
              <p className="text-gray-600">
                Our team brings years of experience and deep expertise in web design, development, and digital strategy.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-semibold text-[#00274D] mb-4">Results-Driven</h3>
              <p className="text-gray-600">
                We focus on delivering measurable results that help your business grow and succeed online.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-semibold text-[#00274D] mb-4">Support</h3>
              <p className="text-gray-600">
                We provide ongoing support and maintenance to ensure your digital presence remains strong.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}