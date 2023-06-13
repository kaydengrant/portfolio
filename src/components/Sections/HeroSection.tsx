import React from 'react';
import { Icon } from '../Icon';

import ProfileBlob from '../ProfileBlob';
import { openInNewTab } from '@/utils';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center text-center mt-16'>
      <div className='min-w-[350px]'>
        <ProfileBlob />
      </div>
      <h1 className='mt-10'>{'Kayden Grant'}</h1>
      <h3 className='text-gradient my-5'>Software Engineer based in Seattle</h3>
      <div className='flex flex-row justify-center gap-8'>
        <span
          className='clickable'
          onClick={openInNewTab('https://github.com/kaydengrant')}
        >
          <Icon.Github />
        </span>
        <span
          className='clickable'
          onClick={openInNewTab('https://www.linkedin.com/in/kaydengrant/')}
        >
          <Icon.Linkedin />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
