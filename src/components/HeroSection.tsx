import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import ProfileBlob from './ProfileBlob';
import { openInNewTab } from '@/utils/utils';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center text-center'>
      <ProfileBlob />
      <h1 className='mt-10'>{'<Kayden Grant/>'}</h1>
      <h2 className='text-opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-green to-lightGreen my-5'>
        Software Engineer based in Seattle
      </h2>
      <div className='flex flex-row justify-center'>
        <FaGithub
          className='react-icons'
          onClick={openInNewTab('https://github.com/kaydengrant')}
        />
        <FaLinkedin
          className='react-icons'
          onClick={openInNewTab('https://www.linkedin.com/in/kaydengrant/')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
