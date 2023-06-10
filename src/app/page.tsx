'use client';
import React from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className='content-container'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </>
  );
}
