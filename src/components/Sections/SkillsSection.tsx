import React, { ReactNode } from 'react';
import { useInView, useSpring, animated } from '@react-spring/web';

import MarqueeBar from '../MarqueeBar';
import { Icon } from '../Icon';
import { openInNewTab } from '@/utils';
import { techSkillsData, softSkillsData } from '@/data/marqueeData';

type WrapperProps = {
  children: ReactNode;
  link: string;
};

const StackWrapper: React.FC<WrapperProps> = ({ children, link }) => {
  return (
    <span className='clickable mx-2 md:mx-4' onClick={openInNewTab(link)}>
      {children}
    </span>
  );
};

const SkillsSection: React.FC = () => {
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
        className='flex flex-col items-center'
      >
        <div>
          <h2 className='text-gradient mb-5 text-center'>Tech Stack</h2>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='grid grid-cols-3 gap-4'>
              <StackWrapper link='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                <Icon.HTML5 />
              </StackWrapper>
              <StackWrapper link='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                <Icon.CSS3 />
              </StackWrapper>
              <StackWrapper link='https://nodejs.org/en'>
                <Icon.NodeJS />
              </StackWrapper>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-8 md:mt-0'>
              <StackWrapper link='https://www.typescriptlang.org/'>
                <Icon.TypeScript />
              </StackWrapper>
              <StackWrapper link='https://react.dev/'>
                <Icon.ReactJS />
              </StackWrapper>
              <StackWrapper link='https://tailwindcss.com/'>
                <Icon.TailwindCSS />
              </StackWrapper>
              <StackWrapper link='https://jestjs.io/'>
                <Icon.Jest />
              </StackWrapper>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-28 w-full '>
          <h3 className='flex flex-row justify-center'>Other Skills Include</h3>
          <div className='absolute w-full left-0'>
            <div className='flex relative'>
              <span className='mt-[2.5rem]'>
                <MarqueeBar
                  data={techSkillsData}
                  direction='right'
                  logoBar={true}
                />
              </span>
              <span className='mt-[10rem]'>
                <MarqueeBar
                  data={softSkillsData}
                  direction='left'
                  logoBar={false}
                />
              </span>
            </div>
          </div>
        </div>
      </animated.section>
    </>
  );
};

export default SkillsSection;
