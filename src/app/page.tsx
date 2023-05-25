'use client';
import React from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className='content-container'>
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
}
