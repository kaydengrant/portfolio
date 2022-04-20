import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import { MainContainer, Title } from './styles';
import theme from '../theme';

const Home: NextPage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <MainContainer>
          <Title>coming soon.</Title>
        </MainContainer>
    </ThemeProvider>
    </>
  )
}

export default Home
