import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import { Wrapper, MainContainer, Title } from './styles';
import theme from '../theme';
import TextButton from '../components/Buttons';

const Home: NextPage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainContainer>
          <Title>coming soon.</Title>
          <TextButton title='Hello'/> 
        </MainContainer>
      </Wrapper>
    </ThemeProvider>
    </>
  )
}

export default Home
