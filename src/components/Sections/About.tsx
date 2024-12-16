import React from 'react';
import { useInView, animated, useSpring } from '@react-spring/web';

import { SectionHeader, ShuffleEmoticon } from '..';

const About: React.FC = () => {
  const [aboutRef, inView] = useInView({
    once: true,
  });

  const showSectionAnim = useSpring({
    opacity: inView ? 1 : 0,
    config: {
      mass: 20,
      friction: 100,
    },
  });

  const slideLeftAnim = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? '0px' : '-100vw',
    config: {
      friction: 50,
    },
  });

  const slideRightAnim = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? '0px' : '100vw',
    config: {
      friction: 50,
    },
  });

  return (
    <>
      <span id='About' className='invisible' />
      <animated.div style={showSectionAnim}>
        <section ref={aboutRef} className='flex flex-col items-center gap-8'>
          <SectionHeader title='Bio' />
          <div className='flex flex-col items-center md:flex-row justify-around gap-8'>
            <div className='flex flex-col justify-center md:max-w-[60%] text-left md:mt-0 gap-4'>
              <p>
                Hello! As a focused software engineer, I am committed to
                developing scalable, reliable, and accessible applications. I
                prioritize collaboration within diverse teams and address
                real-world challenges by engineering user-centered solutions.
              </p>
              <ul>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2002</p>
                  <p>Born in Seattle, Washington</p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2020</p>
                  <p>Achieved Eagle Scout rank advancement</p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2024</p>
                  <p>
                    Graduated from the University of Washington with a Bachelors
                    of Science in Computer Science & Software Engineering
                  </p>
                </li>
              </ul>
            </div>
            <div className='hidden md:flex'>
              <ShuffleEmoticon />
            </div>
          </div>
        </section>
      </animated.div>
    </>
  );
};

export default About;
