import React from 'react';

import MarqueeBar from './MarqueeBar';
import { Icon } from './Icon';
import { openInNewTab } from '@/utils';
import { techSkillsData, softSkillsData } from '@/data/marqueeData';

const SkillsSection = () => {
  return (
    <section className='flex flex-col items-center'>
      <div>
        <h2 className='text-gradient mb-5 text-center'>Tech Stack</h2>
        <div className='flex flex-row justify-center items-center'>
          <span
            className='clickable mx-2 md:mx-4'
            onClick={openInNewTab(
              'https://developer.mozilla.org/en-US/docs/Web/HTML'
            )}
          >
            <Icon.HTML5 />
          </span>
          <span
            className='clickable mx-2 md:mx-4'
            onClick={openInNewTab(
              'https://developer.mozilla.org/en-US/docs/Web/CSS'
            )}
          >
            <Icon.CSS3 />
          </span>
          <span
            className='clickable mx-2 md:mx-4'
            onClick={openInNewTab('https://nodejs.org/en')}
          >
            <Icon.NodeJS />
          </span>
          <span
            className='clickable mx-2 md:mx-4'
            onClick={openInNewTab('https://www.typescriptlang.org/')}
          >
            <Icon.TypeScript />
          </span>
          <span
            className='clickable mx-2 md:mx-4'
            onClick={openInNewTab('https://react.dev/')}
          >
            <Icon.ReactJS />
          </span>
          <span
            className='clickable mx-2 md:mx-4'
            onClick={openInNewTab('https://tailwindcss.com/')}
          >
            <Icon.TailwindCSS />
          </span>
          <span
            className='clickable mx-2 md:mx-4'
            onClick={openInNewTab('https://jestjs.io/')}
          >
            <Icon.Jest />
          </span>
        </div>
      </div>
      <div className='flex flex-col mt-20 w-full'>
        <h3 className='flex flex-row justify-start'>
          Some other skills include
        </h3>
        <MarqueeBar data={techSkillsData} direction='left' logoBar={true} />
        <MarqueeBar data={softSkillsData} direction='right' logoBar={false} />
      </div>
    </section>
  );
};

export default SkillsSection;
