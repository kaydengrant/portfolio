import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Profile from '../components/Profile';
import { openInNewTab } from '@/utils/utils';

const HeroSection = () => {
  return (
    <section className='flex flex-col-reverse items-center justify-between md:flex-row md:justify-between md:items-center'>
      <div className='flex flex-col items-center max-w-min justify-between'>
        <div className='flex flex-col items-end'>
          <h1>{'<Kayden'}</h1>
          <h1>{'Grant/>'}</h1>
        </div>
        <h2 className='text-opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-green to-lightGreen my-5'>
          Software Engineer
        </h2>
        <p>
          {`Hey, my name is Kayden Grant, welcome to my portfolio! I'm a highly motivated and detail-oriented Software Engineer based in Seattle.`}
        </p>
      </div>
      <div>
        <Profile />
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
      </div>
    </section>
  );
};

export default HeroSection;
