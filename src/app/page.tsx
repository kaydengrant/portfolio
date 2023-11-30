'use client';
import React from 'react';

import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
  Navigation,
  Footer,
} from '../components';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <title>Kayden Grant | Software Engineer</title>
      <Navigation />
      <div className='content-container'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
