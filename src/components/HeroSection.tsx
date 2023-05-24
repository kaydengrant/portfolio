import React from 'react';
import { LinkedinIcon, GithubIcon } from './Icons';

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
        <span
          className='clickable'
          onClick={openInNewTab('https://github.com/kaydengrant')}
        >
          <GithubIcon />
        </span>
        <span
          className='clickable'
          onClick={openInNewTab('https://www.linkedin.com/in/kaydengrant/')}
        >
          <LinkedinIcon />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
