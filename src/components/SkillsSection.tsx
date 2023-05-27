import React from 'react';

import { Icon } from './Icon';
import { openInNewTab } from '@/utils/utils';
import ScrollingBar from './ScrollingBar';

const SkillsSection = () => {
  return (
    <section className='flex flex-col items-center text-center'>
      <div>
        <h2 className='text-gradient mb-5'>Tech Stack</h2>
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
      <div className='mt-20'>
        <ScrollingBar data={[1, 2, 3]} direction='left' />
      </div>
    </section>
  );
};

export default SkillsSection;
