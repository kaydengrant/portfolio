import styled, { createGlobalStyle } from 'styled-components';

import { StyledTheme } from '../styled'

export const GlobalStyle = createGlobalStyle<{ theme: StyledTheme }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({theme}) => theme.bg};
  }
`
  
export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100wh;
  align-items: center;
  justify-content: center;

`

export const Title = styled.text`
  ${({theme}) => theme.text.h1};
`
