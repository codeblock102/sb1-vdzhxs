import React from 'react';
import PricingCard from './services/PricingCard';
import AddOnCard from './services/AddOnCard';
import CustomPricingCard from './services/CustomPricingCard';
import { services, addOns } from './services/pricingData';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#00274D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-[#00A9E0]">Comprehensive web solutions for your digital success</p>
        </div>
        
        {/* Main Service Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PricingCard {...service} />
            </div>
          ))}
          <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
            <CustomPricingCard />
          </div>
        </div>

        {/* Add-Ons Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center fade-in-up">Optional Add-Ons</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <AddOnCard {...addon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}