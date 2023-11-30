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
                {`Hello! I'm currently a Computer Science & Software Engineering student at the University of Washington. I enjoy tackling real-world challenges 
            by developing creative solutions centered around user needs. I'm a passionate developer who likes to work all over the stack and I value collaboration 
            in diverse teams. When I'm offline, I love to spend time playing the guitar.`}
              </p>
              <ul>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2002</p>
                  <p>Born in Seattle, Washington</p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2013</p>
                  <p>Programed first &quot;Hello World!&quot; in Java</p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2020</p>
                  <p>Achieved Eagle Scout rank advancement</p>
                </li>
                <li className='flex flex-row gap-4'>
                  <p className='font-semibold w-10'>2024</p>
                  <p>
                    Expecting to graduate from the University of Washington with
                    a Bachelors of Science in Computer Science & Software
                    Engineering
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
