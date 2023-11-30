import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { IconButton } from '..';
import { PiMoonFill, PiSunBold } from 'react-icons/pi';

const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <>
      {mounted && (
        <IconButton
          icon={
            theme === 'dark' ? (
              <PiSunBold size={20} />
            ) : (
              <PiMoonFill size={20} />
            )
          }
          bgColor='bg-[#752AB7] dark:bg-[#EFC069]'
          iconColor='text-white dark:text-darkGray'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      )}
    </>
  );
};

export default ThemeButton;
