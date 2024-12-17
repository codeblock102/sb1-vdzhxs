import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import AboutPreview from '../components/AboutPreview';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Contact />
    </>
  );
}