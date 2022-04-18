import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import { Wrapper, MainContainer, Title } from './styles';
import theme from '../theme';
import GeneralButton from '../components/Buttons/GeneralButton';

const Home: NextPage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainContainer>
          <GeneralButton title='click me.'/> 
        </MainContainer>
      </Wrapper>
    </ThemeProvider>
    </>
  )
}

export default Home
