import React from 'react';
import { useInView, animated, useSpring } from '@react-spring/web';

import ShuffleEmoticon from '../ShuffleEmoticon';

const AboutSection: React.FC = () => {
  const [aboutRef, inView] = useInView({
    once: true,
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
      <section
        ref={aboutRef}
        className='flex flex-col-reverse items-center md:flex-row md:justify-around'
      >
        <animated.div
          style={slideLeftAnim}
          className='flex flex-col justify-center max-w-[80%] text-center md:text-left md:max-w-[50%] mt-14 md:mt-0'
        >
          <h2 className='text-gradient mb-5'>About me</h2>
          <p className='font-normal'>
            {`I'm a dedicated Software Engineer who enjoys tackling real-world challenges  
          through developing creative solutions centered around user needs. I value collaborating in diverse teams 
          as I believe they produce the most innovative ideas.`}
          </p>
          <p className='font-normal mt-3'>
            {`In my freetime I'm hanging out with my cat or working on personal projects.`}
          </p>
        </animated.div>
        <animated.div style={slideRightAnim}>
          <ShuffleEmoticon />
        </animated.div>
      </section>
    </>
  );
};

export default AboutSection;
