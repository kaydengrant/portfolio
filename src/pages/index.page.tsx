import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import { Wrapper, MainContainer, Title } from './styles';
import theme from '../theme';

const Home: NextPage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainContainer>
          <Title>
            coming soon.
          </Title>
        </MainContainer>
      </Wrapper>
    </ThemeProvider>
    </>
  )
}

export default Home
