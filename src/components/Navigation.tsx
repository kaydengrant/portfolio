import React from 'react';

import OutlineButton from './Buttons/OutlineButton';

const Navigation = () => {
  return (
    <nav>
      <div className='flex flex-row justify-between w-[40%]'>
        <a href=''>
          <p>Home</p>
        </a>
        <a href=''>
          <p>Projects</p>
        </a>
        <a href=''>
          <p>Tools</p>
        </a>
        <a href=''>
          <p>{`What's Next`}</p>
        </a>
      </div>
      <a href=''>
        <OutlineButton text='Get in Touch' Tag={'h3'} />
      </a>
    </nav>
  );
};

export default Navigation;
