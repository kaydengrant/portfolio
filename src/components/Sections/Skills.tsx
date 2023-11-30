import React from 'react';
import { useInView, useSpring, animated } from '@react-spring/web';

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
    },
  });

  return (
    <>
      <span id='Skills' className='invisible' />
      <animated.section
        ref={skillsRef}
        style={showSectionAnim}
        className='flex flex-col items-center text-center gap-8'
      >
        <SectionHeader title='Skills' />
        <ul className='flex flex-wrap justify-center gap-3'>
          {skillsData.map((skill, index) => (
            <li key={index}>
              <OutlineButton
                text={skill.title}
                icon={skill.icon}
                Tag={'p'}
                iconFirst={true}
                onClick={openInNewTab(skill.link)}
              />
            </li>
          ))}
        </ul>
      </animated.section>
    </>
  );
};

export default Skills;
