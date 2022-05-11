import type { NextPage } from 'next';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import { GlobalStyle, MainContainer } from './styles';
import { lightTheme, darkTheme } from '../theme';
import NavBar from '../components/Buttons/NavBar';

const Home: NextPage = () => {

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins&display=swap" rel="stylesheet"/>
        </Helmet>
        <GlobalStyle/>
          <MainContainer>
            <NavBar theme={theme} themeToggler={themeToggler}/>
          </MainContainer>
      </>
    </ThemeProvider>
  )
}

export default Home
