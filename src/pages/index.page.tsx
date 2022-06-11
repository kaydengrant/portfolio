import type { NextPage } from 'next';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, MainContainer } from './styles';
import { lightTheme, darkTheme } from '../theme';

import AboutSlider from '../components/Sliders/AboutSlider';

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
            <AboutSlider/>
          </MainContainer>
      </>
    </ThemeProvider>
  )
}

export default Home
