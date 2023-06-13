'use client';
import React from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import SkillsSection from '@/components/Sections/SkillsSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import ContactSection from '@/components/Sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className='content-container'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <footer className='flex flex-col text-gray'>
          <div className='w-full h-0.5 bg-gray my-2' />
          <p className='flex justify-end'>
            © 2023 Kayden Grant. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
