import React from 'react';
import { Icon } from './Icon';

import ProfileBlob from './ProfileBlob';
import { openInNewTab } from '@/utils/utils';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center text-center'>
      <ProfileBlob />
      <h1 className='mt-10'>{'<Kayden Grant/>'}</h1>
      <h2 className='text-gradient my-5'>Software Engineer based in Seattle</h2>
      <div className='flex flex-row justify-center'>
        <span
          className='clickable mx-4'
          onClick={openInNewTab('https://github.com/kaydengrant')}
        >
          <Icon.Github />
        </span>
        <span
          className='clickable mx-4'
          onClick={openInNewTab('https://www.linkedin.com/in/kaydengrant/')}
        >
          <Icon.Linkedin />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
