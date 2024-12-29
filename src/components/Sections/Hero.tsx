import React from 'react';
import Link from 'next/link';
import { animated, useInView, useSpring } from '@react-spring/web';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { ProfileBlob } from '..';
import { OutlineButton } from '../Buttons';

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
        <h1 className='text-black dark:text-white leading-[3rem]'>
          Kayden Grant
        </h1>
        <h2 className='text-darkGreen dark:text-green'>Software Engineer</h2>
        <div className='flex flex-row justify-center gap-4'>
          <Link
            href={'https://www.linkedin.com/in/kaydengrant/'}
            target='_blank'
          >
            <OutlineButton
              text='LinkedIn'
              Tag={'p'}
              icon={<FaLinkedinIn size={25} />}
              iconFirst
            />
          </Link>
          <Link href={'https://github.com/kaydengrant'} target='_blank'>
            <OutlineButton
              text='Github'
              Tag={'p'}
              icon={<FaGithub size={25} />}
              iconFirst
            />
          </Link>
        </div>
      </section>
    </animated.div>
  );
};

export default Hero;
