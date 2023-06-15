'use client';
import React from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import SkillsSection from '@/components/Sections/SkillsSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import ContactSection from '@/components/Sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <title>Kayden Grant | Software Engineer</title>
      <Navigation />
      <div className='content-container'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
