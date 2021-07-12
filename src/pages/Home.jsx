import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestmonialSection';
import ContactBanner from '../components/ContactBanner';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactBanner />
      <ContactSection />
      <Map />
    </div>
  );
}
