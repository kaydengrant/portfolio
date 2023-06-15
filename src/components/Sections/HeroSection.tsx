import React from 'react';
import { animated, useInView, useSpring } from '@react-spring/web';

import ProfileBlob from '../ProfileBlob';
import { Icon } from '../Icon';
import { openInNewTab } from '@/utils';

const HeroSection: React.FC = () => {
  const [heroRef, inView] = useInView({
    once: true,
  });

  const showSectionAnim = useSpring({
    opacity: inView ? 1 : 0,
    config: {
      mass: 20,
      friction: 100,
    },
  });

  return (
    <animated.section
      ref={heroRef}
      style={showSectionAnim}
      className='flex flex-col items-center text-center mt-16'
    >
      <div className='min-w-[350px]'>
        <ProfileBlob />
      </div>
      <h1 className='mt-10'>{'Kayden Grant'}</h1>
      <h3 className='text-gradient my-5'>Software Engineer based in Seattle</h3>
      <div className='flex flex-row justify-center gap-6'>
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
    </animated.section>
  );
};

export default HeroSection;
