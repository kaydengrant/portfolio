import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Twirl as Hamburger } from 'hamburger-react';

import OutlineButton from './Buttons/OutlineButton';

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const hamburgerNavAnim = useSpring({
    top: isOpen ? '72px' : '-200px',
  });

  return (
    <nav className='relative w-full bg-darkGray flex items-center py-3 px-5 justify-end md:justify-center'>
      <animated.ul
        style={hamburgerNavAnim}
        className={`absolute ${
          isOpen ? 'z-0' : 'z-[-1]'
        } left-0 bg-darkGray border-t-4 border-white flex flex-col w-full max-w-[1000px] md:z-0 md:border-0 md:static md:flex-row justify-between md:items-center`}
      >
        <ul className='flex flex-col md:flex-row'>
          <li onClick={() => setOpen(false)}>
            <a href='#About'>About</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href='#Skills'>Skills</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href='#Projects'>Projects</a>
          </li>
        </ul>
        <li onClick={() => setOpen(false)}>
          <a href='#Contact' className='hover:no-underline'>
            <OutlineButton text='Get in Touch' Tag={'h4'} />
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
