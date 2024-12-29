import React from 'react';
import Link from 'next/link';
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
          <SectionHeader title='About Me' />
          <div className='flex flex-col items-center md:flex-row justify-around gap-8'>
            <div className='flex flex-col justify-center md:max-w-[60%] text-left md:mt-0 gap-4'>
              <p>
                Greetings! I'm Kayden, a passionate software engineer based in
                Seattle Washington. I'm committed to developing scalable,
                reliable, and accessible applications that help solve everyday
                challenges.
              </p>
              <ul>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2002</p>
                  <p>Born in Seattle, Washington</p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2020</p>
                  <p>
                    Achieved{' '}
                    <Link
                      href={
                        'https://www.cccbsa.org/2023/02/13/what-it-means-to-be-an-eagle-scout/'
                      }
                      target='_blank'
                      className='underline'
                    >
                      Eagle Scout
                    </Link>{' '}
                    rank advancement
                  </p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2024</p>
                  <p>
                    Graduated from the{' '}
                    <Link
                      href={'https://www.washington.edu/'}
                      target='_blank'
                      className='underline'
                    >
                      University of Washington
                    </Link>{' '}
                    with a Bachelors of Science in Computer Science & Software
                    Engineering
                  </p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2024</p>
                  <p>
                    Started teaching as a Programming Instructor @{' '}
                    <Link
                      href={'https://www.codingwithkids.com/'}
                      target='_blank'
                      className='underline'
                    >
                      Coding with Kids
                    </Link>
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
