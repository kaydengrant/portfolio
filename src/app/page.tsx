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

export default function Home() {
  return (
    <>
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
    </>
  );
}
