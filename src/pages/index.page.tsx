import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, MainContainer } from './styles';
import theme from '../theme';
import GeneralButton from '../components/Buttons/GeneralButton';

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <>
        <MainContainer>
          <GeneralButton title='click me.'/>
        </MainContainer>
      </>
    </ThemeProvider>
  )
}

export default Home
