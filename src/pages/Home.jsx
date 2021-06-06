import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
    </div>
  );
}
