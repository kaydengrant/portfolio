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
  height: 2050px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.text`
  ${({theme}) => theme.text.h1};
`
