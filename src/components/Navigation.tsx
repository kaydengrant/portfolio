import React, { useEffect, useState } from 'react';
import { PiMoonFill, PiSunBold } from 'react-icons/pi';
import { MdClose, MdDehaze } from 'react-icons/md';

import { IconButton } from '.';

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <nav
      className={`fixed w-screen bg-offwhite dark:bg-black z-[100] ${
        isOpen ? 'h-screen' : ''
      }`}
    >
      <div
        className={`relative w-full flex flex-col-reverse md:flex-row items-center py-3 px-6 justify-end md:justify-center`}
      >
        <ul
          className={`${
            isOpen ? 'flex mt-4' : 'hidden md:flex'
          } flex-col md:flex-row w-full max-w-[1000px] md:items-center`}
        >
          <li onClick={() => setOpen(false)}>
            <a href='#About'>About</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href='#Skills'>Skills</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href='#Projects'>Projects</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href='#Contact'>Contact</a>
          </li>
        </ul>
        <div
          className={`bg-gray w-screen h-0.5 my-3 ${
            isOpen ? 'flex' : 'hidden'
          }`}
        />
        <div className='flex flex-row w-full md:w-min justify-end items-center gap-4'>
          <div onClick={() => setDarkMode(!darkMode)}>
            <IconButton
              icon={
                darkMode ? <PiSunBold size={20} /> : <PiMoonFill size={20} />
              }
              bgColor='bg-[#752AB7] dark:bg-[#EFC069]'
              iconColor='text-white dark:text-darkGray'
            />
          </div>
          <div className='md:hidden'>
            <IconButton
              icon={isOpen ? <MdClose size={20} /> : <MdDehaze size={20} />}
              bgColor='bg-black'
              iconColor='text-white'
              onClick={() => setOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      <div className={`bg-gray w-screen h-0.5 ${isOpen ? 'hidden' : 'flex'}`} />
    </nav>
  );
};

export default Navigation;
