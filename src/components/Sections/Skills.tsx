import React from 'react';
import { useInView, useSpring, useTrail, animated } from '@react-spring/web';

import { SectionHeader } from '..';
import { openInNewTab } from '@/utils';
import { skillsData } from '@/data';
import OutlineButton from '../Buttons/OutlineButton';

const Skills: React.FC = () => {
  const [skillsRef, inView] = useInView({
    once: true,
  });

  const showSectionAnim = useSpring({
    opacity: inView ? 1 : 0,
    config: {
      mass: 20,
      friction: 100,
    }
  });

  const trail = useTrail(skillsData.length, {
    opacity: inView ? 1 : 0,
    config: {
      mass: 2,
      friction: 30,
    }
  })

  return (
    <>
      <span id='Skills' className='invisible' />
      <animated.div style={showSectionAnim}>
        <section
          ref={skillsRef}
          className='flex flex-col items-center text-center gap-8'
        >
          <SectionHeader title='Skills' />
          <ul className='flex flex-wrap justify-center gap-3'>
            {trail.map(({...style}, index) => (
              <animated.li key={index} style={style}>
                <OutlineButton
                  text={skillsData[index].title}
                  icon={skillsData[index].icon}
                  Tag={'p'}
                  iconFirst={true}
                  onClick={openInNewTab(skillsData[index].link)}
                />
              </animated.li>
            ))}
          </ul>
        </section>
      </animated.div>
    </>
  );
};

export default Skills;
