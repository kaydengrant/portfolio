'use client';
import React from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className='content-container'>
      <Navigation />
      {/** hero section */}
      <HeroSection />
      {/** showbox section */}

      {/** contact section */}
    </div>
  );
}
