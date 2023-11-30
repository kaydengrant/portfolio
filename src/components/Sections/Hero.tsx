import React from 'react';
import { animated, useInView, useSpring } from '@react-spring/web';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { ProfileBlob } from '..';
import { openInNewTab } from '@/utils';

const Hero: React.FC = () => {
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
    <animated.div style={showSectionAnim}>
      <section
        ref={heroRef}
        className='flex flex-col items-center text-center gap-6'
      >
        <div className='min-w-[350px]'>
          <ProfileBlob />
        </div>
        <h1 className='text-black dark:text-white'>Kayden Grant</h1>
        <h3 className='text-darkGreen dark:text-green'>
          Software Engineer based in Seattle
        </h3>
        <div className='flex flex-row justify-center gap-6'>
          <span
            className='clickable'
            onClick={openInNewTab('https://www.linkedin.com/in/kaydengrant/')}
          >
            <FaLinkedin size={40} />
          </span>
          <span
            className='clickable'
            onClick={openInNewTab('https://github.com/kaydengrant')}
          >
            <FaGithub size={40} />
          </span>
          <span
            className='clickable'
            onClick={openInNewTab('https://twitter.com/kaydengr')}
          >
            <FaTwitter size={40} />
          </span>
        </div>
      </section>
    </animated.div>
  );
};

export default Hero;
