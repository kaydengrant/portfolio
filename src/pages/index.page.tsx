import type { NextPage } from 'next';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, MainContainer } from './styles';
import { lightTheme, darkTheme } from '../theme';

import GeneralButton from '../components/Buttons/GeneralButton';
import IconButton from '../components/Buttons/IconButton';
import moon from '../../public/moonset.svg';
import sun from '../../public/sun.svg';



const Home: NextPage = () => {

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle/>
          <MainContainer>
            <IconButton image={theme === 'light' ? sun : moon} onClick={() => themeToggler()}/>
          </MainContainer>
      </>
    </ThemeProvider>
  )
}

export default Home
