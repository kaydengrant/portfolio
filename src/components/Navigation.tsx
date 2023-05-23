import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Twirl as Hamburger } from 'hamburger-react';

import OutlineButton from './Buttons/OutlineButton';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const hamburgerNavAnim = useSpring({
    to: { top: isOpen ? '72px' : '-200px' },
  });

  return (
    <nav className='w-full bg-darkGray flex items-center py-3 px-5 justify-end md:justify-center'>
      <animated.ul
        className='absolute z-[-1] left-0 bg-darkGray border-t-4 border-white flex flex-col w-full max-w-[1000px] md:z-[0] md:border-0 md:static md:flex-row justify-between md:items-center'
        style={hamburgerNavAnim}
      >
        <ul className='flex flex-col md:flex-row'>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Skills</a>
          </li>
          <li>
            <a href=''>Projects</a>
          </li>
        </ul>
        <li>
          <a href=''>
            <OutlineButton text='Get in Touch' Tag={'h3'} />
          </a>
        </li>
      </animated.ul>
      <div className='md:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} size={40} rounded />
      </div>
    </nav>
  );
};

export default Navigation;
