'use client';
import React from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className='content-container'>
        <HeroSection />
      </div>
    </>
  );
}
