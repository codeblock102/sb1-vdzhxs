import React from 'react';
import Services from '../components/Services';
import ServicesCTA from '../components/ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <ServicesCTA />
    </div>
  );
}