import styled, { createGlobalStyle } from 'styled-components';

import { StyledTheme } from '../styled'

export const GlobalStyle = createGlobalStyle<{ theme: StyledTheme }>`
  body {
    margin: 40px 70px;
    padding: 0;
    background: ${({theme}) => theme.bg};
  }
`
  
export const MainContainer = styled.div`
  height: 100vh;
  width: 100wh;
`

export const Title = styled.text`
  ${({theme}) => theme.text.h1};
`
